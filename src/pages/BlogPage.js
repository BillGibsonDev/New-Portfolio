import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components'

// images
import Background from "../images/blogBackground.jpg";

// components
import Post from '../components/Post.js';
import Filter from '../components/Filter';

export default function BlogPage() {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    function handlePosts(){
      axios.get(`${process.env.REACT_APP_GET_POSTS_URL}`)
      .then((response => {
        setPosts(response.data)
        console.log(response.data)
      }))
    }
    handlePosts();
  }, [])
  
  // since the filters send you to a new page, this is to add the active class 
  // to "all" onload to prevent mixups
  useEffect(() => {
    function handleActive(){
      let activeTag = document.getElementById('all')
      activeTag.className += " active";
    }
    handleActive();
  }, [])

  return (
    <StyledBlog>
      <div className="background"><img src={Background} alt="" /></div>
      <Filter />
      {
        posts.length === 0 ? (
          <h1>Posts Coming Soon!</h1>
        ): (
          <>
            {
              posts.map((post, key) =>{
                return(
                  <div className="posts-wrapper">
                    <Post
                      title={post.title}
                      date={post.date}
                      intro={post.intro}
                      tag={post.tag}
                      thumbnail={post.thumbnail}
                      id={post.id}
                      key={key}
                    />
                  </div>
                )
              })
            }
          </>
        )
      }
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  .background {
    opacity: .1;
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
  }
  h1 {
    color: white;
    font-size: 36px;
    margin-top: 80px;
    text-align: center;
  }
`;