import { useState, useEffect } from 'react';

// projects
import { ProjectList } from '../ProjectList';

// components
import Project from '../components/Project';

// styled
import styled from "styled-components"
import * as palette from '../styled/ThemeVariables.js';

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
        font-size: ${palette.sectionTitleSize};
        color: ${palette.accentColor};
        width: 60%;
        border-bottom: 2px solid ${palette.accentColor};
        margin-bottom: 20px;
    }
    .project-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-grow: 1;
        @media (max-width: 750px){
            flex-direction: column;
        }
    }
`;
