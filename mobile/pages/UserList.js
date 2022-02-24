import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import UserCard from "components/UserCard";
import { fetchUsers } from "lib/api";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);
  return (
    <FlatList
      style={{
        backgroundColor: "#EEEEEE",
        padding: "3px",
      }}
      data={users}
      renderItem={UserCard}
      keyExtractor={(x) => x.id}
    />
  );
}

export default UserList;
