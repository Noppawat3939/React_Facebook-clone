import React, {useEffect, useState} from 'react';
import { ChatContainer, ChatTitle, ChatHeader, ChatOverflow } from './styled/Chat.styled';
import Contact from './Contact';
import { Button } from './Button';
import { FlextStyled } from './styled/Flex.styled';
import {BsMegaphone} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import {HiOutlineBell} from 'react-icons/hi';
import {RiVideoAddFill, RiMoreFill} from 'react-icons/ri';
import { useGlobalContext } from '../context';

function Chat() {
  const {people} = useGlobalContext()

  return (
      <ChatContainer>
        <ChatOverflow>
        <ChatHeader>
          <FlextStyled jusc='space-between'>
            <h3>your page</h3>
            <Button wid='30px' hei='30px' rad='50%' color='#606770' bg='transparent' >
              <RiMoreFill />
            </Button>
          </FlextStyled>
            <FlextStyled>
              <HiOutlineBell />
              <h4>20+ notifications</h4>
            </FlextStyled>
            <FlextStyled>
              <BsMegaphone />
              <h4>Create a promotion</h4>
            </FlextStyled>
        </ChatHeader>
        <ChatTitle>
          <h3>contact person</h3>
          <FlextStyled>
            <Button wid='30px' hei='30px' rad='50%' color='#606770' bg='transparent' >
              <RiVideoAddFill/>
            </Button>
            <Button wid='30px' hei='30px' rad='50%' color='#606770' bg='transparent' >
              <GoSearch />
            </Button>
            <Button wid='30px' hei='30px' rad='50%' color='#606770' bg='transparent' >
              <RiMoreFill />
            </Button>
          </FlextStyled>
        </ChatTitle>
          {people.map((person, index) => {
            return <Contact key={index*1.05} person={person} />
          })}
        </ChatOverflow>
      </ChatContainer>
  )
}

export default Chat