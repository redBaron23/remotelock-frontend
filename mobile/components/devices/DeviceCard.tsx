import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { connect, MapDispatchToProps, useDispatch } from "react-redux";
import Lock from "../../model/Lock";
import ClientActions from "../../redux/client/client.actions";
import { useAppDispatch } from "../../redux/store";
import { CardContainer } from "../../styles/common/Card";
import { LockState } from "../../types/LockAttributes";
import Card from "../common/Card";
import CustomSwitch from "../common/CustomSwitch";
import LockStatus from "./LockStatus";

interface OwnProps {
  item: Lock;
}

interface ConnectedProps {}

interface DispatchProps {
  updateDevice: (lock: Lock) => any;
}

type Props = OwnProps & ConnectedProps & DispatchProps;

function DeviceCard(props: Props) {
  const { item, updateDevice } = props;

  const attributes = item.attributes;
  const isLocked = item.attributes.state === LockState.LOCKED

  const onToggleLock = () => {
    const lock = {
      ...item,
      attributes: {
        ...attributes,
        state: isLocked ? LockState.UNLOCKED : LockState.LOCKED,
      },
    };

    updateDevice(lock);
  };

  return (
    <CardContainer>
      <Card
        title={attributes.name}
        subTitle={attributes.modelNumber}
        leftAction={
          <CustomSwitch isEnabled={!isLocked} onChange={onToggleLock} />
        }
        rightAction={<LockStatus isLocked={isLocked} />}
      />
    </CardContainer>
  );
}

// const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
//   dispatch: any,
//   props: OwnProps
// ) => {
//   return {
//     updateDevice: (lock: Lock) => dispatch(ClienetActions.updateDevice(lock)),
//   };
// };

// export default connect(null,null)(DeviceCard);

export default DeviceCard;
