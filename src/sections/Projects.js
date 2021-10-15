import { useState, useEffect } from 'react';

// projects
import { ProjectList } from '../ProjectList';

// components
import Project from '../components/Project';

// styled
import styled from "styled-components"

export default function Projects() {

    const [ projects , setProjects ] = useState([]);

    useEffect(() => {
        setProjects(ProjectList);
    }, [])

    return (
        <StyledProject id="projects">
            <h2>Projects</h2>
            <div className="project-container">
                {
                    projects.slice().reverse().map((project, key) =>{
                        return(
                            <Project
                                id={project.id}
                                title={project.title}
                                linkTitle={project.linkTitle}
                                thumbnail={project.thumbnail}
                                paragraph={project.paragraph}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        </StyledProject>
    )
}

const StyledProject = styled.div`
height: 100%;
margin-bottom: 10%;
    h2 {
        font-size: 3em;
        color: #0f4d92;
        width: 50%;
        border-bottom: 2px solid #0f4d92;
    }
    .project-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
            @media (max-width: 750px){
                grid-template-columns: 1fr;
            }
        }
`;
