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
            <Link to={`/project/${projectTitle}/${id}`}>
                <img src={thumbnail} alt={thumbnail} />
                <h4>{title}</h4>
            </Link>
        </StyledProject>
    )
}

const StyledProject = styled.div`
min-height: 40vh;
margin: 1em 0;
width: 100%;
border-radius: 14px;
box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.219);
position: relative;
    &:hover{
        transform: scale(1.02);
        transition: 0.3s;
    }
    a {
        display: flex;
        width: 100%;
        height: 100%;
            h4 {
                font-size: 2em;
                margin: 6px 0;
                color: black;
                    @media (max-width: 500px){
                        font-size: 1.5em;
                    }
                }
                img{
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }
        }
`;
