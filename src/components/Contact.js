import React from 'react';
import { Img } from './Img';
import { FeedBox } from './styled/FeedBox.styled';
import { ContactContainer, ContactInfo } from './styled/Chat.styled';
import {BsRecordFill} from 'react-icons/bs';
import {FaUserFriends} from 'react-icons/fa';
import {MdBusinessCenter} from 'react-icons/md';
import { FlextStyled } from './styled/Flex.styled';

function Contact({person}) {
  return (
    <ContactContainer>
        <div>
            <Img src={person.avatar_url} wid='30px' hei='30px' />
            <div className='icon'>
                <BsRecordFill />
            </div>
        </div>
        <h4>{person.login}</h4>
        <ContactInfo className='hover'>
            <FeedBox>
                <FlextStyled jusc='space-between'>
                    <Img src={person.avatar_url} wid='100px' hei='100px' />
                    <div className='icon'>
                        <BsRecordFill />
                    </div>
                    <div className="info">
                        <h4>{person.login}</h4>
                        <FlextStyled jusc='space-between'>
                            <FaUserFriends />
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </FlextStyled>
                        <FlextStyled jusc='space-between' >
                            <MdBusinessCenter />
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </FlextStyled>
                    </div>   
                </FlextStyled>
            </FeedBox>
        </ContactInfo>
    </ContactContainer>
  )
}

export default Contact