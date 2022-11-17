import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components';
import * as palette from '../styled/ThemeVariables.js';

// router
import { useParams } from 'react-router-dom';

export default function PostPage() {

  const { postId } = useParams();

  const [ post, setPost ] = useState([]);

  useEffect(() => {
    const handlePost = () => {
      axios.get(`${process.env.REACT_APP_GET_POST_URL}/${postId}`)
      .then((response => {
        setPost(response.data)
      }))
    }
    handlePost();
  }, [postId])
  
  return (
    <StyledPost>
      {
        post.length === 0 
        ? <div className="placeholder"></div>
        : 
          <div className="post-wrapper">
            <h1>{post.title}</h1>
            <h2>{post.date}</h2>
            <img src={post.thumbnail} alt="" />
            {
              post.sections.map((section, key) =>{
                return(
                  <div className="section-container" key={key}>
                    {
                      section.title === ""
                      ? <></>
                      : <h4>{section.title}</h4>
                    }
                    {
                      section.image === ""
                      ? <></>
                      : <img src={section.image} alt="" />
                    }
                    {
                      section.paragraph === ""
                      ? <></>
                      : <p>{section.paragraph}</p>
                    }
                    {
                      section.link === ""
                      ? <></>
                      : <a href={section.link}>{section.link}</a> 
                    } 
                  </div>
                )
              })
            }  
          </div>
      }
    </StyledPost>
  )
}

const StyledPost = styled.div`
  min-height: 70vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  .post-wrapper {
    margin: 20px auto 50px auto;
    h1 {
      color: white;
    }
    h2 {
      color: #bbbbbb;
      font-size: 16px;
      font-weight: 400;
    }
    img {
      max-width: 800px;
      width: 70%;
    }
    .section-container {
      margin: 20px 0;
      h4 {
        color: ${palette.accentColor};
        font-size: 20px;
        margin-top: 60px;
      }
      p {
        font-size: 16px;
        color: white;
      }
    }
  }
`;
