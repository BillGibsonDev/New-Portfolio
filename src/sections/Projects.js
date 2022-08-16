import { useState, useEffect } from 'react';

// projects
import { ProjectList } from '../ProjectList';

// components
import Project from '../components/Project';

// styled
import styled from "styled-components"
import * as pallette from '../styled/ThemeVariables.js';

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
                    projects.map((project, key) =>{
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

const StyledProject = styled.section`
height: 100%;
margin-bottom: 10%;
    h2 {
        font-size: 2.2em;
        color: ${pallette.accentColor};
        width: 50%;
        border-bottom: 2px solid ${pallette.accentColor};
    }
    .project-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2em;
        grid-row-gap: 2em;
        @media(max-width: 700px){
            grid-template-columns: 1fr;
            grid-row-gap: 1em;
        }
    }
`;
