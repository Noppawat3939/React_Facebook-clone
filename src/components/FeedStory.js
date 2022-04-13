import React from 'react';
import { FeedStoryContainer } from './styled/Feed.styled';
import { Img } from './Img';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useGlobalContext } from '../context';

function FeedStory() {
  const {people} = useGlobalContext();

  let settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear"
};

  return (
    <FeedStoryContainer>
      <Slider {...settings}>
        {people.map((item,index) => {
          const {login, node_id, avatar_url} = item;
          return(
            <div className="card" key={`${node_id}${login}index`}>
              <Img src={avatar_url} />
              <h4>{login}</h4>
            </div>
          )
        })}
      </Slider>
    </FeedStoryContainer>
  )
}

export default FeedStory