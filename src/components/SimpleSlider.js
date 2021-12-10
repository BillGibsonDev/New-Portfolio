import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

export default function SimpleSlider({images}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {
          images.map((image, key) =>{
              return(
                <StyledWrapper key={key}>
                  <img key={key} src={image} alt="" />
                </StyledWrapper>
              )
          })
      }
    </Slider>
  );
}

const StyledWrapper = styled.div`
height: 50vh;
  @media (max-width: 950px){
    height: 30vh;
  }
  @media (max-width: 550px){
    height: 20vh;
  }
`;
