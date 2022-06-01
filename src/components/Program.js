import styled from "styled-components";
import Header from "./Header";
import proj1 from "../images/proj1.JPG";
import proj2 from "../images/proj2.JPG";
import proj3 from "../images/proj3.JPG";
import bg1 from "../images/bg1.jpg";


function Program() {
    return(
        <Container>
            <Header />
            <Section>
                <div id="box">
                    <div id="box1">
                        <div>
                            <a href="https://bnjiie.github.io/fcb-portfolio-fernandez/">
                            <img src={proj1} />
                            </a>   
                            <p>A portfolio made during the free coding bootcamp using HTML, CSS, and Bootsrap.</p>
                        </div>
                        <div>
                            <a href="https://fcb-react-aws.netlify.app">
                            <img src={proj2} />
                            </a> 
                            <p>A project made with React and deployed in AWS.</p>
                        </div>
                        <div>
                            <a href="https://js-crash-course.netlify.app">
                            <img src={proj3} />
                            </a> 
                            <p>Online tutorial challenges using CSS, HTML and Javascript</p>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}

export default Program

const Container = styled.div`
    height: 100vh;
    background: url(${bg1});
    background-size: cover;
`

const Section = styled.div`
    color: #032f3d;

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin-top: 9rem;

    img {
        height: 40vh;
        width: 25vw;;
        border: 3px solid #0d7ba1;
    }

    #box {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    #box1 {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        
        div {
            height: 50vh;
            width: 25vw;
            margin: 1.5rem;
            padding: 1rem;

            background: rgba(255, 255, 255, 0.13);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.6px);
            -webkit-backdrop-filter: blur(5.6px);
            border: 1px solid rgba(255, 255, 255, 0.22);
        }
    }

`