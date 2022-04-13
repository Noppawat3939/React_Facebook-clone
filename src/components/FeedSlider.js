import { useGlobalContext } from '../context';
import { Img } from './Img';
import { Button } from './Button';
import { FeedBox } from './styled/FeedBox.styled';
import { FeedSliderContainer } from './styled/Feed.styled';
import {BsFillRecordFill} from 'react-icons/bs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function FeedSlider() {
    const {people} = useGlobalContext();

    let setting = {
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 2,
    };

  return (
    <FeedBox>
        <FeedSliderContainer>
            <Slider {...setting}>
                {people.map((person) => {
                    const {node_id, avatar_url} = person;
                    return (
                        <div key={node_id}>
                            <Img src={avatar_url} />
                            <div className="icon">
                                <BsFillRecordFill/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </FeedSliderContainer>
    </FeedBox>
  )
}

export default FeedSlider;