// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';


export default function Project({
    id, 
    title, 
    thumbnail, 
    projectTitle,
}) {

    return (
        <StyledProject id={id}>
            <h4>{title}</h4>
            <Link to={`/project/${projectTitle}/${id}`}>
                <img src={thumbnail} alt={thumbnail} />
            </Link>
        </StyledProject>
    )
}

const StyledProject = styled.div`
height: 40vh;
margin-bottom: 5em;
width: 100%;
border-radius: 14px;
position: relative;
    &:hover{
        transform: scale(1.02);
        transition: 0.3s;
    }
    h4 {
        font-size: 1.5em;
        margin: 6px 0;
        color: white;
        @media (max-width: 500px){
            font-size: 1.5em;
        }
    }
    a {
        display: flex;
        width: 100%;
        height: 100%;
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
