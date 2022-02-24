export function fetchUsers() {
  return fetch("http://localhost:4000/api/users").then((res) => res.json());
}
