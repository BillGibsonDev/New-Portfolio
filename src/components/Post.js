// styled
import styled from 'styled-components';
import * as palette from '../styled/ThemeVariables.js';

// router
import { Link } from 'react-router-dom';

export default function Post({title, date, id, intro, tag, thumbnail}) {
  return (
    <StyledPost>
        <Link id="image-link" to={`/blog/post/${id}`}><img src={thumbnail} alt="" /></Link>
        <div className="text-container">
            <Link to={`/blog/post/${id}`}>{title}</Link>
            <h4>{date}</h4>
            <Link to={`/blog/${tag}`}>{tag}</Link>
            <p>{intro}</p>
        </div>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 20vh;
  height: 300px;
  display: flex;
  margin: auto;
  margin-top: 30px;
  background: #4e4b4b;
  @media(max-width: 870px){
    flex-direction: column;
  }
  #image-link {
    width: 50%;
    height: 100%;
    @media(max-width: 1070px){
      width: 60%;
    }
    @media(max-width: 920px){
      width: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    background: #4e4b4b;
    margin-left: 10px;
    justify-content: center;
    width: 50%;
    @media(max-width: 920px){
      background: #4e4b4b;
      width: 100%;
    }
    @media(max-width: 920px){
      margin: auto;
    }
    a {
      font-size: 30px;
      color: white;
      margin-bottom: 6px;
      @media(max-width: 920px){
        margin-left: 10px;
      }
      &:hover {
        text-decoration: underline;
        cursor: pointer;
        text-underline-position: under;
      }
    }
    h4 {
      font-size: 16px;
      font-weight: 400;
      color: ${palette.helperGrey};
      @media(max-width: 920px){
        margin-left: 10px;
      }
    }
  }
`;
