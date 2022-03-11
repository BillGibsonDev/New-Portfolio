import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components';
import { StyledBlog } from '../styled/StyledBlog';

// components
import Post from '../components/Post.js';
import Filter from '../components/Filter';
import BackgroundImage from '../components/BlogBackgroundImage.js';

export default function BlogPage() {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    function handlePosts(){
      axios.get(`${process.env.REACT_APP_GET_POSTS_URL}`)
      .then((response => {
        setPosts(response.data)
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
    <StyledBlogPage>
      <StyledBlog>
        <BackgroundImage />
        <Filter />
        { 
          posts.length === [] ? (
            <h1>Posts Coming Soon!</h1>
          ): (
            <>
              {
                posts.map((post, key) =>{
                  return(
                    <div className="posts-wrapper" key={key}>
                      <Post
                        title={post.title}
                        date={post.date}
                        intro={post.intro}
                        tag={post.tag}
                        thumbnail={post.thumbnail}
                        id={post._id}
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
    </StyledBlogPage>
  )
}

const StyledBlogPage = styled.div`
  h1 {
    color: white;
    font-size: 36px;
    margin-top: 80px;
    text-align: center;
  }
`;