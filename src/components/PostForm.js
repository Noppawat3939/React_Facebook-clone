import React from 'react';
import { useGlobalContext } from '../context';
import Post from './Post';
import { PostFormContainer, FormHeader, FormBody, FormBody_Top, FormBody_Mid } from './styled/PostForm.styled';
import { Button } from './Button';
import { Img } from './Img';
import {BsLockFill, BsCaretDownFill} from 'react-icons/bs';
import {GiMicrophone} from 'react-icons/gi';
import {FaUserTag} from 'react-icons/fa';
import {IoMdImages, IoMdHappy} from 'react-icons/io';
import {MdOutlineClose, MdOutlineMoreHoriz, MdLocationOn} from 'react-icons/md';

function PostForm() {
    const {
        postInput,
        setPostInput,
        postList,
        submit,
        handleKeyup,
        handleSubmit,
        ClosePostForm,
        postclick,
    } = useGlobalContext();

  return (
    <PostFormContainer>
        <form onSubmit={handleSubmit}>
            <FormHeader>
                <h3>create post</h3>
                <Button
                    onClick={ClosePostForm}
                    bg='#f0f2f5'
                    rad='50%'
                    color='#606770'
                    hov='#dadde1'
                >
                    <MdOutlineClose />
                </Button>
            </FormHeader>
            <FormBody>
                <FormBody_Top>
                    <Img src='https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=TJ5Mf1UBYHMAX_CElXI&_nc_ht=scontent.fphs4-1.fna&oh=00_AT8gLkXZMojkuH64H7TN9tDo7EDbPMGMP3Bjt16qKu_Aig&oe=6276F231' />
                    <div>
                        <h3>Gopgap Noppawat</h3>
                        <Button wid='max-content' hei='max-content' bg='#dadde1' hov='#dadde1'>
                            <BsLockFill />
                            only me
                            <BsCaretDownFill />
                        </Button>
                    </div>
                </FormBody_Top>
                <FormBody_Mid>
                    <textarea
                        type="text"
                        placeholder='What are you thinking?'
                        onChange={(e) => setPostInput(e.target.value)}
                        onKeyUp={handleKeyup}
                        value={postInput}
                    />
                    <div>
                        <h3>add to your post</h3>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#45BD62'>
                            <IoMdImages />
                        </Button>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#1877F2'>
                            <FaUserTag />
                        </Button>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#F7B928'>
                            <IoMdHappy />
                        </Button>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#FA383E'>
                            <MdLocationOn />
                        </Button>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#F3425F'>
                            <GiMicrophone />
                        </Button>
                        <Button rad='50%' bg='transparent' hov='#dadde1' color='#65676B'>
                            <MdOutlineMoreHoriz />
                        </Button>
                    </div>
                </FormBody_Mid>
                <Button
                    type='submit'
                    className={`${submit ? 'post' : 'none'}`}
                    hov='#1877F2'
                    color='#fff'
                    bg='#0165E1'
                >
                    Post
                </Button>
            </FormBody>
        </form>
    </PostFormContainer>
  )
}

export default PostForm;