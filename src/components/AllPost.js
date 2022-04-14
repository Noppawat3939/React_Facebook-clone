import React from 'react';
import { useGlobalContext } from '../context';
import {AiOutlineLike, AiFillCaretDown} from 'react-icons/ai';
import {BiComment} from 'react-icons/bi';
import {FaUserFriends} from 'react-icons/fa';
import {MdOutlineMoreHoriz} from 'react-icons/md';
import {IoArrowRedoOutline} from 'react-icons/io5';
import { Img } from './Img';
import { FeedBox } from './styled/FeedBox.styled';
import { Button } from './Button';
import { FlextStyled } from './styled/Flex.styled';
import { FeedBoxBody, FeedBoxContainer, FeedBoxHeader, FeedBoxHeaderTitle } from './styled/FeedBoxHeader.styled';


function AllPost() {
    const {people, profileURL} = useGlobalContext();
   
  return (
      <>
        {people.map((person) => {
        const {login , avatar_url , node_id, id} = person;
        const amountPost = {
            likeIcon: Math.floor(Math.random() * people.length)+1 ,
            commentIcon: Math.floor(Math.random() * 24)+2,
            hours: Math.floor(Math.random() * 20)+1
        };
            return(
            <FeedBox key={node_id+id+login}>
                <FeedBoxHeader>
                    <FeedBoxContainer>
                        <Img src={avatar_url} />
                        <FeedBoxHeaderTitle>
                            <h4>{login}</h4>
                            <FlextStyled>
                                <h5>{amountPost.hours} hours</h5>
                                <FaUserFriends />
                            </FlextStyled>
                        </FeedBoxHeaderTitle>
                    </FeedBoxContainer>
                    <Button rad='50%' bg='transparent' hov='#dadde1' color='#65676B'>
                      <MdOutlineMoreHoriz />
                    </Button>
                </FeedBoxHeader>
                <FeedBoxBody>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis!
                    </p>
                    <FlextStyled jusc='space-between'>
                        <span>
                            <Img src='https://static.cdnlogo.com/logos/f/95/facebook-like.svg' wid='16px' hei='16px' />
                            <p>{amountPost.likeIcon}</p>
                        </span>
                        <span>
                            <p>{amountPost.commentIcon} comments</p>
                        </span>
                    </FlextStyled>
                    <div className='buttons'>
                        <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                            <AiOutlineLike />
                            <h4 style={{fontSize: '13px'}}>like</h4>
                        </Button>
                        <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                            <BiComment />
                            <h4 style={{fontSize: '13px'}}>comment</h4>
                        </Button>
                        <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                            <IoArrowRedoOutline />
                            <h4 style={{fontSize: '13px'}}>share</h4>
                        </Button>
                        <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                            <Img wid='25px' hei='25px' src={profileURL} />
                            <AiFillCaretDown style={{fontSize: '13px'}} />
                        </Button>
                    </div>
                </FeedBoxBody>
            </FeedBox>
            )
        })}
      </>
  )
}

export default AllPost