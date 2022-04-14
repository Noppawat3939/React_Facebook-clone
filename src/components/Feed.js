import React,{useState} from 'react';
import { FeedContainer, FeedInput } from './styled/Feed.styled';
import PostForm from './PostForm';
import { Img } from './Img';
import { Button } from './Button';
import Post from './Post';
import FeedStory from './FeedStory';
import FeedSlider from './FeedSlider';
import { useGlobalContext } from '../context';
import {FaVideo} from 'react-icons/fa';
import {IoMdHappy, IoMdImages} from 'react-icons/io';
import AllPost from './AllPost';

function Feed() {
  const {postList, OpenPostForm, postclick ,EditPost} = useGlobalContext();

  return (
    <FeedContainer>
        <FeedStory />
        <FeedInput>
          <div className='feed_top'>
            <Img src='https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=TJ5Mf1UBYHMAX_CElXI&_nc_ht=scontent.fphs4-1.fna&oh=00_AT8gLkXZMojkuH64H7TN9tDo7EDbPMGMP3Bjt16qKu_Aig&oe=6276F231' />
            <Button
              onClick={OpenPostForm}
              wid='100%'
              rad='30px'
              bg='#f0f2f5'
              color='#606770'
              hov='#dadde1'
            >
              What are you thinking?
            </Button>
          </div>
          <div className="buttons">
            <Button bg='transparent' hov='#dadde1' color='#F3425F' wid='100%'>
                <FaVideo />
                <h4>live video</h4>
            </Button>
            <Button bg='transparent' hov='#dadde1' color='#45BD62' wid='100%'>
                <IoMdImages />
                <h4>photo-video</h4>  
            </Button>
            <Button bg='transparent' hov='#dadde1' color='#F7B928' wid='100%'>
                <IoMdHappy />
                <h4>feelings/activities</h4>    
            </Button>
          </div>
        </FeedInput>
        <FeedSlider />
          {postclick &&  <PostForm />}
        <Post postList={postList} EditPost={EditPost} />
        <AllPost />
    </FeedContainer>
  )
}

export default Feed