import React from 'react';
import { useGlobalContext } from '../context';
import { Img } from './Img';
import { Button } from './Button';
import { FeedBox } from './styled/FeedBox.styled';
import { FeedBoxHeader, FeedBoxContainer, FeedBoxHeaderTitle, FeedBoxBody, PostOptions, FeedBoxFooter } from './styled/FeedBoxHeader.styled';
import {AiOutlineLike, AiOutlineGif} from 'react-icons/ai';
import {BiComment, BiPencil, BiHappyAlt} from 'react-icons/bi';
import {BsSticky} from 'react-icons/bs';
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import {IoLockClosed, IoTrashOutline} from 'react-icons/io5';
import {MdOutlineMoreHoriz} from 'react-icons/md';
import {TiCameraOutline} from 'react-icons/ti';

function Post({postList}) {
  const {DeletePost, EditPost, setShowMore, showMore } = useGlobalContext();

  return (
    <div>
        {postList.map((item) => {
          const {id, post, time} = item;
          return(
              <FeedBox key={id}>
                <FeedBoxHeader>
                  <FeedBoxContainer>
                    <Img src='https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=TJ5Mf1UBYHMAX9LskYO&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT8LVx0sLsWJmK1haxzUQDBmZLT035p6TUrTtudin9HTag&oe=6276F231' />
                    <FeedBoxHeaderTitle>
                      <h4>gopgap noppawat</h4>
                      <h5>{time} <IoLockClosed/> </h5>
                    </FeedBoxHeaderTitle>
                  </FeedBoxContainer>
                    <Button rad='50%' bg='transparent' hov='#dadde1' color='#65676B' onClick={() => setShowMore(!showMore)}>
                      <MdOutlineMoreHoriz />
                    </Button>
                    {showMore && (
                      <PostOptions>
                        <button onClick={() => EditPost(id)}>
                          <BiPencil />
                          edit post
                        </button>
                        <button onClick={() => DeletePost(id)}>
                          <IoTrashOutline />
                          more to trash
                        </button>
                      </PostOptions>
                    )}
                </FeedBoxHeader>
                <FeedBoxBody>
                  <p>{post}</p>
                  <div>
                    <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                      <AiOutlineLike />
                      <h4>like</h4>
                    </Button>
                    <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' wid='100%'>
                      <BiComment />
                      <h4>comment</h4>
                    </Button>
                  </div>
                </FeedBoxBody>
                <FeedBoxFooter>
                  <Img wid='30px' hei='30px' src='https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=TJ5Mf1UBYHMAX9LskYO&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT8LVx0sLsWJmK1haxzUQDBmZLT035p6TUrTtudin9HTag&oe=6276F231' />
                  <div className='container'>
                    <input type="text" placeholder='Write a comment...'/>
                    <div className="buttons">
                      <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' rad='50%' wid='30px' hei='30px' >
                        <BiHappyAlt />
                      </Button>
                      <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' rad='50%' wid='30px' hei='30px' >
                        <HiOutlineEmojiHappy />
                      </Button>
                      <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' rad='50%' wid='30px' hei='30px' >
                        <TiCameraOutline />
                      </Button>
                      <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' rad='50%' wid='30px' hei='30px' >
                        <AiOutlineGif />
                      </Button>
                      <Button bg='transparent' hov='rgba(0,0,0,.05)' color='#606770' rad='50%' wid='30px' hei='30px' >
                        <BsSticky />
                      </Button>
                    </div>
                  </div>
                </FeedBoxFooter>
              </FeedBox>
            )
          })}
    </div>
  )
}

export default Post