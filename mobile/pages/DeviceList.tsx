import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import DeviceCard from "../components/devices/DeviceCard";
import { fetchDevices } from "../lib/api";
import Device from "../model/Device";
import Lock from "../model/Lock";
import ClientActions from "../redux/client/client.actions";
import RootState from "../redux/types/RootState";
import ObjectUtils from "../utils/ObjectUtils";
import styled from "styled-components/native";
import Colors from "../styles/Colors";
import Dimensions from "../utils/Dimensions";
import { AntDesign } from "@expo/vector-icons";

interface OwnProps {}

interface ConnectedProps {
  devices: Lock[];
}

interface DispatchProps {
  getDevices: () => any;
  updateDevice: (device: Device) => any;
  filterDeviceByName: (name: string) => any;
}

type Props = OwnProps & ConnectedProps & DispatchProps;

function DeviceList(props: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

  useEffect(() => {
    if (props.devices.length === 0) {
      props.getDevices();
    }

    return() => {
      props.filterDeviceByName("");
    };
  }, []);

  const handleOnSearch = (value: any) => {
    setSearchValue(value);
    props.filterDeviceByName(value);
  }

  return (
    <>
      <SearchContainer>
        <AntDesign name="search1" size={12} color="black"/>
        <SearchBar placeholder="Search by name" value={searchValue} onChangeText={handleOnSearch}/>
      </SearchContainer>
      <SpaceBar />
      <FlatList
        data={props.devices}
        renderItem={({ item }) => (
          <DeviceCard item={item} updateDevice={props.updateDevice} />
        )}
        keyExtractor={(x) => x.id}
      />
    </>
  );
}

const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps> = (
  state: RootState,
  props: OwnProps
) => {
  return {
    devices: state.client.devices,
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: any,
  props: OwnProps
) => {
  return {
    getDevices: () => dispatch(ClientActions.getDevices()),
    updateDevice: (lock: Device) => dispatch(ClientActions.updateDevice(lock)),
    filterDeviceByName: (deviceName: string) => dispatch(ClientActions.filterDeviceByName(deviceName)),
  };
};

const SpaceBar = styled.View`
  padding: 0.5em;
`;

const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.bgSecondary};
  width: ${Dimensions.CONTENT_WIDTH};
  padding: 0.2em 0.5em;
  border-radius: 15px;
  border-width: 1;
`;

const SearchBar = styled.TextInput`
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 0.7em;
`;

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
