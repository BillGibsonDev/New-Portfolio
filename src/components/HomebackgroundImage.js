// styled
import styled from 'styled-components'

// images
import Background from "../images/background.jpg";

export default function HomeBackgroundImage() {

  return (
    <StyledImage>
      <img src={Background} alt="" />
    </StyledImage>
  )
}

const StyledImage = styled.div`
  opacity: .2;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;