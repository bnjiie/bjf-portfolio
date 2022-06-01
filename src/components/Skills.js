import styled from "styled-components";
import Header from "./Header";
import bg1 from "../images/bg1.jpg";

function Skills() {
    return(
        <Container>
            <Header />
            <Section>
                <div>
                    <h2>Languages</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJs</li>
                    </ul>
                </div>
                <div>
                    <h2>Dev Tools</h2>
                    <ul>
                        <li>Terminal/ Git Bash</li>
                        <li>VS Code/ Sublime Text</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div>
                    <h2>Others</h2>
                    <ul>
                        <li>PC Troubleshooting</li>
                        <li>Photoshop</li>
                        <li>Sony Vegas</li>
                    </ul>
                </div>
            </Section>
        </Container>
    );
}

export default Skills

const Container = styled.div`
    height: 100vh;
    background: url(${bg1});
    background-size: cover;
`

const Section = styled.div`
    color: #032f3d;
    
    margin-top: 12rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;

    font-size: 2rem;

    div {
        border: .3rem solid #0d7ba1;
        border-radius: .5rem;
        margin: 1rem;
        padding: 1rem;

        height: 50vh;

    }

    ul {
        list-style: none; 
        padding: 0; 
    }

     
`