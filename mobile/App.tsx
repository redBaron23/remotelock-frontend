import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserList from "./pages/UserList";
import Selector from "./components/devices/Selector";
import SwitchOption from "./types/SwitchOption";
import DeviceList from "./pages/DeviceList";
import Colors from "./styles/Colors";
import Dimensions from "./utils/Dimensions";
import { Provider } from "react-redux";
import store from "./redux/store";

const OPTIONS = [
  {
    label: SwitchOption.DEVICES,
    value: SwitchOption.DEVICES,
    testID: SwitchOption.DEVICES,
    accessibilityLabel: SwitchOption.DEVICES,
  },
  {
    label: SwitchOption.USERS,
    value: SwitchOption.USERS,
    testID: SwitchOption.USERS,
    accessibilityLabel: SwitchOption.USERS,
  },
];

export default function App() {
  const [currentOption, setCurrentOption] = useState(OPTIONS[0].value);

  const handleChangeSelection = (value: SwitchOption) =>
    setCurrentOption(value);

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Selector onChange={handleChangeSelection} options={OPTIONS} />
      {currentOption == SwitchOption.USERS && <UserList />}
      {currentOption == SwitchOption.DEVICES && <DeviceList />}
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: Dimensions.WINDOW_HEIGHT,
    width: Dimensions.WINDOW_WIDTH,
    padding: "1em",
  },
});
