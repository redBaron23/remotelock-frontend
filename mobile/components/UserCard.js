import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "5px",
    flexDirection: "row"
  }
});

function UserStartEndTime({ starts_at, ends_at, device_time_zone }) {
  return (
    <Text>
      {starts_at} - {ends_at}
    </Text>
  );
}

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = { backgroundColor: statusColors[status] };
  return <Text style={styles}>{status}</Text>;
}

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone
}) {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>{name}</Text>
      <Text style={{ color: "#EFEFEF" }}>{email}</Text>
      <UserStartEndTime
        starts_at={starts_at}
        ends_at={ends_at}
        device_time_zone={device_time_zone}
      />
      <UserStatus status={status} />
    </View>
  );
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
          height: "30px",
          width: "30px"
        }}
      />
      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
