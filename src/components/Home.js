import styled from "styled-components";
import Header from "./Header";
import Typical from "react-typical";
import bg1 from "../images/bg1.jpg";


function Home() {
    return(
        <Container>
            <Header />
            <Section>
                <h1>Hi, I'm Benjamin Fernandez</h1>
                <p>

                <Typical
                steps={[
                    "Aspiring Developer 💻", 
                    1000, 
                    "Goal-Oriented 🤑", 
                    1000, 
                    "Risk Taker 🎢", 
                    1000, 
                    "Gamer 🎮", 
                    1000
                ]}
                loop={Infinity}
                />
                </p>
            </Section>
        </Container>
    );
}

export default Home

const Container = styled.div`
    height: 100vh;
    background: url(${bg1});
    background-size: cover;
    
`

const Section = styled.div`
    color: black;

    margin-top: 20rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

    p {
        font-size: 2rem;
        margin: 0;
    }

   # h1 {

        color: white;
        font-family: 'Cabin Sketch', cursive;
    
        overflow: hidden;
        border-right: 3px solid white;
        white-space: nowrap;
        width: 0;
        animation: 
            typing 2s steps(26, end) forwards,
            blink .8s infinite;

        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
            }
        
        @keyframes blink {
            from {border-color: transparent }
            to {border-color: white }
            }
        }
`
