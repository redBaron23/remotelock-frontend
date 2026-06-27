import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Colors from "../../styles/Colors";
import styled from "styled-components/native";
import Dimensions from "../../utils/Dimensions";

type Option = {
  label: string;
  value: string;
  testID: string;
  accessibilityLabel: string;
};

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  initialPosition?: number;
}

const Selector = (props: Props) => {
  const { options, onChange, initialPosition = 0 } = props;

  return (
    <Container>
      <SwitchSelector
        hasPadding
        options={options}
        initial={initialPosition}
        onPress={onChange}
        height={25}
        backgroundColor={Colors.bgTertiary}
        selectedTextStyle={styles.selectedTextStyle}
        textStyle={styles.textStyle}
        buttonColor={Colors.white0}
        borderRadius={5}
      />
    </Container>
  );
};

export default Selector;

const Container = styled.View`
  width: ${Dimensions.CONTENT_WIDTH - 10}px;
  padding: 1em 0em;
`;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  selectedTextStyle: {
    fontWeight: "600",
    color: Colors.textPrimary,
  },
});
