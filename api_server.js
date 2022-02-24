const http = require("http");
const url = require("url");
const users = require("./api/users");
const devices = require("./api/devices");

function filterBy(collection, attr, value) {
  if (!value) return collection;
  const ret = {};
  ret["data"] = collection["data"].filter((item) =>
    new RegExp(value, "i").test(item.attributes[attr])
  );
  return ret;
}

const endpoints = {
  "/api/users": { data: users, filter: "status" },
  "/api/devices": { data: devices, filter: "name" },
};

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const reqURL = url.parse(req.url, true);

    const endpoint = endpoints[reqURL.pathname];
    if (endpoint) {
      res.writeHead(200, { "Content-Type": "applicaton/json" });
      res.end(
        JSON.stringify(
          filterBy(
            endpoint.data,
            endpoint.filter,
            reqURL.query[endpoint.filter]
          )
        )
      );
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(4000);
