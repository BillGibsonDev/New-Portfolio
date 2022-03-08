import styled from 'styled-components'

export default function BlogPage() {
  return (
    <StyledBlog>
      <h1>I am the blog page :)</h1>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  h1 {
    color: white;
  }
`;