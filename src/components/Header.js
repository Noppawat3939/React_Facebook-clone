import React from 'react';
import { HeaderContainer, HeaderLeft, HeaderInput, HeaderMiddle, HeaderRight } from './styled/Header.styled';
import {BiStoreAlt} from 'react-icons/bi'
import {BsPlayBtn, BsBoxSeam, BsFillGrid3X3GapFill, BsMessenger, BsBellFill, BsFillCaretDownFill} from 'react-icons/bs'
import {GoSearch} from 'react-icons/go';
import {IoPeopleCircleOutline} from 'react-icons/io5';
import {MdHome} from 'react-icons/md';
import { Img } from './Img';
import { Button } from './Button';

function Header() {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <Img src='https://blogs.icrc.org/th/wp-content/uploads/sites/104/2022/02/facebook-icon.png' />
            <HeaderInput>
                <GoSearch />
                <input type="text" placeholder='Search on Facebook:'/>
            </HeaderInput>
        </HeaderLeft>

        <HeaderMiddle>
            <Button wid='100%' hei='100%' bg='#fff'>
                <MdHome />
            </Button>
            <Button wid='100%' hei='auto' bg='#fff' >
                <BsPlayBtn />
            </Button>
            <Button wid='100%' hei='auto' bg='#fff' >
                <BiStoreAlt />
            </Button>
            <Button wid='100%' hei='auto' bg='#fff' >
                <IoPeopleCircleOutline />
            </Button>
            <Button wid='100%' hei='auto' bg='#fff' >
                <BsBoxSeam />
            </Button>
        </HeaderMiddle>

        <HeaderRight>
            <Button wid='max-content' hei='max-content' bg='#fff' rad='50px' >
                <Img wid='30px' hei='30px' src='https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=TJ5Mf1UBYHMAX_mleo-&_nc_ht=scontent.fbkk13-1.fna&oh=00_AT-cRfv0Ssu1maIFvtrH050-YVDMjoxS5qABHoIvzfEUJg&oe=6276F231' />
                <p>Gopgap</p>
            </Button>
            <Button bg='#f0f2f5' rad='50%'>
                <BsFillGrid3X3GapFill/>
            </Button>
            <Button bg='#f0f2f5' rad='50%'>
                <BsMessenger/>
            </Button>
            <Button bg='#f0f2f5' rad='50%'>
                <BsBellFill/>
            </Button>
            <Button bg='#f0f2f5' rad='50%'>
                <BsFillCaretDownFill/>
            </Button>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;