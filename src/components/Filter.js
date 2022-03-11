
// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Filter() {


  let buttons = document.getElementsByClassName("filter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
  }

  return (
    <StyledFilter>
        <Link className="filter" id="all" to="/blog">All</Link>
        <Link className="filter" id="css" to="/blog/css">CSS</Link>
        <Link className="filter" id="javascript" to="/blog/javascript">JavaScript</Link>
        <Link className="filter" id="react" to="/blog/react">React</Link>
        <Link className="filter" id="apis" to="/blog/apis">APIs</Link>
    </StyledFilter>
  )
}

const StyledFilter = styled.div`
display: flex;
width: 60%;
align-items: center;
justify-content: space-between;
margin-top: 20px;
    @media(max-width: 1250px){
      width: 90%;
    }
    @media(max-width: 700px){
      width: 95%;
      flex-wrap: wrap;
      justify-content: center;
    }
    a {
      color: #bbbbbb;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
      @media(max-width: 700px){
        margin: 0 10px;
      }
    }
    .active {
      font-weight: 700;
      color: white;
      text-decoration: underline;
      text-underline-position: under;
    }
`;