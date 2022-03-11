// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Post({title, date, id, intro, tag, thumbnail}) {
  return (
    <StyledPost>
        <Link to={`/blog/${id}`}><img src={thumbnail} alt="" /></Link>
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

`;
