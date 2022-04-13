import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Chat from './Chat';
import { BodyContainer } from './styled/Body.styled';

function Body() {
  return (
    <BodyContainer>
        <Sidebar />
        <Feed />
        <Chat />
    </BodyContainer>
  )
}

export default Body;