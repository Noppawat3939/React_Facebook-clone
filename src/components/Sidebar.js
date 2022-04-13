import React from 'react';
import { SidebarContainer, SidebarOverflow } from './styled/Sidebar.styled';
import { Img } from './Img';
import { FlextStyled } from './styled/Flex.styled';
import { SidebarData } from '../data';

function Sidebar() {
  return (
    <SidebarContainer>
        <SidebarOverflow>
          {SidebarData.map((item) => {
            const {image, title , amount} = item;
            return (
              <FlextStyled key={title.length}>
                <Img src={image} alt={title} wid='30px' hei='30px' rad='0' />
                <span>
                  <h4>{title}</h4>
                  <h6>{amount}</h6>
                </span>
              </FlextStyled>
            )
          })}
        </SidebarOverflow>
    </SidebarContainer>
  )
}

export default Sidebar