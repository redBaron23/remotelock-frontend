import React from "react";
import Guest from "../model/Guest";
import User from "../model/User";
import DateUtils from "../utils/DateUtils";
import Card from "./common/Card";
import styled from "styled-components/native";
import Colors from "../styles/Colors";
import { CardContainer } from "../styles/common/Card";

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

interface Props {
  item: User & Guest;
}

function UserCard(props: Props) {
  const { item } = props;

  const attributes = item.attributes;
  return (
    <CardContainer>
      <Card
        title={attributes.name}
        subTitle={attributes.email}
        description={DateUtils.userStartEndTime(
          attributes.startsAt,
          attributes.endsAt,
          attributes.deviceTimeZone
        )}
        rightAction={
          <TextStatus backgroundColor={statusColors[attributes.status]}>
            {attributes.status}
          </TextStatus>
        }
      />
    </CardContainer>
  );
}

const TextStatus = styled.Text`
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 900;
  color: ${Colors.textOpacity};
`;

export default UserCard;
