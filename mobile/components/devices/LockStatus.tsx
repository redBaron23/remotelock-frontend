import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../styles/Colors";

const isLockedColors = { true: Colors.darkRed, false: Colors.darkGreen };

interface Props {
  isLocked: boolean;
}

function LockStatus(props: Props) {
  const { isLocked } = props;

  const currentColor = isLockedColors[isLocked.toString()];

  return (
    <Container>
      <EvilIcons
        name={isLocked ? "lock" : "unlock"}
        size={24}
        color={currentColor}
      />
      <Text color={currentColor}>
        {isLocked ? "Locked" : "Unlocked"}
      </Text>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  color: ${(props) => props.color};
`;

export default LockStatus;
