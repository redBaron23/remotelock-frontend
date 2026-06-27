import React, { useState } from "react";
import { Switch } from "react-native";
import Colors from "../../styles/Colors";

interface Props {
  onChange: (value: boolean) => void;
  isEnabled: boolean;
}

function CustomSwitch(props: Props) {
  const { onChange, isEnabled } = props;
  return (
      <Switch
        trackColor={{ false: Colors.lightRed, true: Colors.lightGreen }}
        thumbColor={Colors.white0}
        ios_backgroundColor={Colors.white0}
        onValueChange={onChange}
        value={isEnabled}
      />
  );
}

export default CustomSwitch;
