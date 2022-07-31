import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components';
import { StyledBlog } from '../styled/StyledBlog';

// components
import Post from '../components/Post.js';
import Filter from '../components/Filter.js';
import BackgroundImage from '../components/BlogBackgroundImage.js';

// router
import { useParams } from 'react-router-dom';

export default function FilteredPage() {

  const { tag } = useParams();

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const handlePosts = () => {
      axios.get(`${process.env.REACT_APP_GET_POSTS_URL}`)
      .then((response => {
        setPosts(response.data)
      }))
    }
    handlePosts();
  }, [])

  let buttons = document.getElementsByClassName("filter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
  }

  // because the filter links send you to a new page this snippet uses the params of tag
  // to select and add the active class
  useEffect(() => {
    const handleActive = () => {
      let activeTag = document.getElementById(`${tag}`)
      activeTag.className += " active";
    }
    handleActive();
  }, [tag])

  return (
    <StyledBlogPage>
      <StyledBlog>
        <BackgroundImage />
        <Filter tag={tag} />
        { 
          posts.filter(post => post.tag === `${tag}`).length === 0 
          ? 
            <div className="placeholder">
                <h2>Sorry, No articles found for {tag}</h2>    
            </div>
          : 
            <>
              {
                posts.filter(post => post.tag === `${tag}`).map((post, key) =>{
                  return (
                    <div className="posts-wrapper" key={key}>
                      <Post
                        title={post.title}
                        date={post.date}
                        intro={post.intro}
                        tag={post.tag}
                        id={post.id}
                      />
                    </div>
                  )
                })
              }
            </>
        }
      </StyledBlog>
    </StyledBlogPage>
  )
}

const StyledBlogPage = styled.div`
  h1 {
    color: white;
  }
  .placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    h2 {
      color: white;
      text-align: center;
    }
  }
`;