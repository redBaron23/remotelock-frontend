import React from "react";
import styled from "styled-components/native";
import Colors from "../../styles/Colors";
import Dimensions from "../../utils/Dimensions";

interface Props {
  title: string;
  subTitle: string;
  description?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

const Card = (props: Props) => {
  const { title, subTitle, description, leftAction, rightAction } = props;
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: "" }} />
      </ImageContainer>
      <Content>
        <Header>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Description>{description}</Description>
        </Header>
        <Actions>
          <Action>{leftAction}</Action>
          <Action>{rightAction}</Action>
        </Actions>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: ${Dimensions.CONTENT_WIDTH}px;
  height: 135px;
  align-items: center;
  padding: 1em;
  border-radius: 2px;
`;

const ImageContainer = styled.View`
  display: flex;
`;

const Image = styled.Image`
  background-color: ${Colors.placeholder};
  width: 6em;
  height: 6em;
  border-radius: 5em;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0.5em 0 0 1em;
  height: 100%;
`;

const Header = styled.View``;

const Title = styled.Text`
  font-size: 1.25em;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: ${Colors.textSecondary};
  font-size: 0.85em;
`;

const Description = styled.Text`
  font-size: 0.9em;
  font-weight: 700;
  color: ${Colors.textTertiary};
`;

const Actions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Action = styled.View``;

export default Card;
