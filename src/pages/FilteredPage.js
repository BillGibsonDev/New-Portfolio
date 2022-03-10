import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components'

// images
import Background from "../images/blogBackground.jpg";

// components
import Post from '../components/Post.js';

// router
import { Link, useParams } from 'react-router-dom';

export default function BlogPage() {

  const { tag } = useParams();

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

  return (
    <StyledBlog>
      <div className="background"><img src={Background} alt="" /></div>
      <div className="filter-container">
        <Link to="/blog">All</Link>
        <Link to="/blog/html">HTML</Link>
        <Link to="/blog/css">CSS</Link>
        <Link to="/blog/javascript">JavaScript</Link>
        <Link to="/blog/react">React</Link>
        <Link to="/blog/apis">APIs</Link>
      </div>
      {
        posts.filter(post => post.tag === `${tag}`).length === 0 ? (
            <div className="placeholder">
                <h2>Sorry No Articles found for this topic</h2>    
            </div>
        ): (
            <>
                {
                    posts.filter(post => post.tag === `${tag}`).map((post, key) =>{
                        return (
                            <div className="posts-wrapper">
                                <Post
                                    title={post.title}
                                    date={post.date}
                                    intro={post.intro}
                                    tag={post.tag}
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
  .filter-container {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    a {
      color: #bbbbbb;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
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
      }
  }
`;