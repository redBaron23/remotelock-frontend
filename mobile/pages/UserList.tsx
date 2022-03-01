import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import UserCard from "../components/UserCard";
import { fetchUsers } from "../lib/api";
import ObjectUtils from "../utils/ObjectUtils";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => ObjectUtils.toCamelCase(res.data))
      .then(setUsers);
  }, []);

  return (
    <FlatList data={users} renderItem={UserCard} keyExtractor={(x) => x.id} />
  );
}

export default UserList;
