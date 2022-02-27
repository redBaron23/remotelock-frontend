import React, { useState } from "react";
import { Switch } from "react-native";

interface Props {
  onChange: (value: boolean) => void;
  isEnabled: boolean;
}

function CustomSwitch(props: Props) {
  const { onChange, isEnabled } = props;
  return (
      <Switch
        trackColor={{ false: "#D2584F", true: "#4FD262" }}
        thumbColor={"#FFFF"}
        ios_backgroundColor="#FFFF"
        onValueChange={onChange}
        value={isEnabled}
      />
  );
}

export default CustomSwitch;
