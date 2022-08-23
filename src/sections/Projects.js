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
        font-size: ${pallette.sectionTitleSize};
        color: ${pallette.accentColor};
        width: 60%;
        border-bottom: 2px solid ${pallette.accentColor};
        margin-bottom: 20px;
    }
    .project-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        @media(max-width: 700px){
            grid-template-columns: 1fr;
            grid-row-gap: 1em;
        }
    }
`;
