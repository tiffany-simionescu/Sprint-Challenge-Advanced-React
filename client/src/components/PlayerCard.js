import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgb(102, 108, 119);
  padding: 10px;
  margin: 20px auto;
  width: 250px;
  border-radius: 10px;
`;

const Name = styled.h2`
  margin-bottom: 5px;
`;

const OtherText = styled.h3`
  margin-bottom: 5px;
`;

function PlayerCard(props) {
  return (
      <Card>
        <div key={props.id}>
          <Name>Name: {props.name}</Name>
          <OtherText>Country: {props.country}</OtherText>
          <OtherText>Searches: {props.searches}</OtherText>
        </div>
      </Card>
  ) 
}

export default PlayerCard;
