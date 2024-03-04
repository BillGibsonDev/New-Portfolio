// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Project({
    id, 
    title, 
    thumbnail, 
    linkTitle,
}) {

    return (
        <StyledProject id={id}>
            <h4>{title}</h4>
            <Link to={`/project/${linkTitle}/${id}`}>
                <img src={thumbnail} alt={thumbnail} />
            </Link>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    height: 400px;
    max-height: 400px;
    width: 50%;
    border-radius: 14px;
    position: relative;
    transition: 0.2s;
    margin-bottom: 10px;
    @media (max-width: 750px){
        width: 100%;
    }
    &:hover{
        transform: scale(1.02);
    }
    h4 {
        font-size: 1.5em;
        margin: 6px 0;
        color: white;
        font-weight: 400;
    }
    a {
        display: flex;
        width: 100%;
        height: 90%;
        border-radius: 14px;
        box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.219);
        img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`;
