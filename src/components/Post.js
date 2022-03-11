// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Post({title, date, id, intro, tag, thumbnail}) {
  return (
    <StyledPost>
        <Link id="image-link" to={`/blog/${id}`}><img src={thumbnail} alt="" /></Link>
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
max-width: 800px;
width: 90%;
height: 25vh;
display: flex;
margin-top: 30px;
@media(max-width: 700px){
  flex-direction: column;
}
  #image-link {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: center;
    @media(max-width: 700px){
      margin-left: 0;
    }
    a {
      font-size: 30px;
      color: white;
      margin-bottom: 6px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
        text-underline-position: under;
      }
    }
    h4 {
      font-size: 20px;
      color: #bbbbbb;
    }
  }
`;
