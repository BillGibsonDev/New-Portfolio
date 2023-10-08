import { useState, useEffect } from 'react';

// projects
import { ProjectList } from '../ProjectList';

// components
import SimpleSlider from '../components/SimpleSlider.js';

// styled
import styled from 'styled-components';
import * as palette from '../styled/ThemeVariables.js';

//router
import { useParams } from 'react-router';

// icons
import Github from '../images/icons/github1774dd.png';
import Link from '../images/icons/link1774dd.png';

export const ProjectPage = () => {

    const { id } = useParams();

    const [ projects , setProjects ] = useState([]);

    useEffect(() => {
        setProjects(ProjectList);
        window.scrollTo(0, 0);
    }, [id])

    return (
        <StyledProject>
           { 
                projects.filter(projects => projects.id === `${id}`).map((project, key) => {
                    return (
                        <div className="overlay-content" key={key}>
                            <div className="title-container">
                                <h4>{project.title}</h4>
                                <div className="link-wrapper">
                                    <a href={project.websiteLink} target="_blank" rel="noreferrer">
                                        <img src={Link} alt="" />Demo
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <img src={Github} alt="" />Github
                                    </a>
                                </div>
                            </div>
                            <div className="slider-container">
                                <SimpleSlider images={project.images} />
                            </div>
                            <h5><span>Languages</span>{project.build}</h5>
                            <h5><span>NPM Packages</span>{project.npm}</h5>
                            <p><span>Description </span>{project.paragraph}</p>
                        </div>
                    )
                })
            }
        </StyledProject>
    )
}

const StyledProject = styled.section`
    min-height: 80vh;
    margin: 40px auto 0 auto;
    width: 100%;
    .overlay-content {
        width: 100%;
        margin: 10px auto;
        .title-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            border-bottom: 2px solid ${palette.accentColor};
            @media (max-width: 510px){
                justify-content: center;
                flex-direction: column;
            }
            h4 {
                font-size: 1.5em;
                color: ${palette.accentColor};
            }
            .link-wrapper {
                display: flex;
                justify-content: space-around;
                width: auto;
                @media (max-width: 510px){
                   margin: 8px 0;
                }
                a {
                    font-size: 1em;
                    font-weight: 700;
                    color: white;
                    transition: 0.2s;
                    display: flex;
                    align-items: center;
                    padding: 4px 8px;
                    border-radius: 4px;
                    &:hover{
                        color: black;
                        background: #ffffff;
                    }
                    img {
                        width: 24px;
                        height: 24px;
                        margin-right: 6px;
                    }
                }
            }
        }
        .slider-container {
            margin: auto;
            width: 70%;
            height: 50%;
            img {
                height: 100%;
                width: 100%;
                border-radius: 8px;
            }
            @media (max-width: 750px){
                width: 90%;
                height: 100%;
            }
        }
        h5 {
            font-size: 1em;
            font-weight: 400;
            color: ${palette.helperGrey};;
            margin: 16px 0;
            display: flex;
            flex-direction: column;
            span {
                color: white;
            }
        }
        p {
            color: ${palette.helperGrey};
            font-size: 1em;
            letter-spacing: 0.5px;
            line-height: 1.7;
            display: flex;
            flex-direction: column;
            span {
                color: white;
            }
        }
    }
        
`;