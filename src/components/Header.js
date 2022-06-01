import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const mySkills = () => {
        navigate('/Skills')
    }
    const myHome = () => {
        navigate('/')
    }
    const myPrograms = () => {
        navigate('/Programs')
    }
    

return (
        <div>
        <Container>
            <Menu>
                <button onClick={(myHome)}>Home</button>
                <button onClick={(mySkills)}>Skills</button>
                <button onClick={(myPrograms)}>Programs</button>  
            </Menu>
        </Container>
        </div>
    );

}

export default Header

const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex: 1;
    padding: 10px;
    color: #0078a1;
    font-size: 1.2rem;
    background-color: #75d1f0;

    

    button {
        all: unset;
        cursor: pointer;
        padding: 0 30px;
        flex-wrap: none;
    }

    button:hover {
        transform: scale(1.02);
    }
      
    button:active {
        transform: scale(0.97);
        transition-duration: 0.05s;
        fontWeight: bold;
    }
   
`

const Menu = styled.div``