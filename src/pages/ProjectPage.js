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


export default function ProjectPage() {

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
                            <div className="overlay-wrapper">
                                <h4>{project.title}</h4>
                                <div className="top-container">
                                    <img id="thumbnail" src={project.thumbnail} alt="" />
                                    <div className="top-wrapper">
                                        <h5><span>Languages:</span>{project.build}</h5>
                                        <h5><span>NPM Packages:</span>{project.npm}</h5>
                                        <div className="link-wrapper">
                                            <a href={project.websiteLink} target="_blank" rel="noreferrer">Demo</a>
                                            <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
                                        </div>
                                        <p><span>Description: </span>{project.paragraph}</p>
                                    </div>
                                </div>
                                <div className="slider-container">
                                    <SimpleSlider
                                        images={project.images}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </StyledProject>
    )
}

const StyledProject = styled.div`
    min-height: 80vh;
    margin: auto;
    width: 100%;
    .overlay-content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em auto;
        border-radius: 20px;
        .overlay-wrapper {
            width: 90%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            h4 {
                font-size: 36px;
                color: ${palette.accentColor};
                margin-bottom: 1em;
                border-bottom: 2px solid ${palette.accentColor};
                @media (max-width: 750px){
                    font-size: 24px;
                    margin-bottom: 2em;
                }
            }
            .top-container {
                display: flex;
                justify-content: space-between;
                margin-bottom: 100px;
                @media (max-width: 750px){
                    flex-direction: column;
                    justify-content: flex-start;
                }
                #thumbnail {
                    width: 45%;
                    border-radius: 8px;
                    max-height: 400px;
                    object-fit: cover;
                    @media (max-width: 750px){
                        width: 100%;
                    }
                }
                .top-wrapper {
                    width: 50%;
                    @media (max-width: 750px){
                        width: 100%;
                    }
                    h5 {
                        font-size: 16px;
                        font-weight: 400;
                        color: #ffffff;
                        margin: 16px 0;
                        display: flex;
                        flex-direction: column;
                        span {
                            color: ${palette.helperGrey};
                        }
                    }
                    .link-wrapper {
                        display: flex;
                        margin: 12px 0;
                        a {
                            font-size: 16px;
                            font-weight: 700;
                            margin-right: 2em;
                            color: ${palette.accentColor};
                            transition: 0.2s;
                            &:hover{
                                color: #ffffff;
                            }
                        }
                    }
                    p {
                        color: #ffffff;
                        font-size: 14px;
                        letter-spacing: 0.5px;
                        line-height: 1.7;
                        display: flex;
                        flex-direction: column;
                        span {
                            font-weight: 400;
                            color: ${palette.helperGrey};
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
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
`;