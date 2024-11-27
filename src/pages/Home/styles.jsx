import styled from 'styled-components'


export const Container = styled.div `
    background: #2f2138;
    padding: 20px;
    border-radius: 10px;

    h1 {
        font-family: 'Merriweather', serif;
        color: #e29b6b;
        text-align: center;
    }

    input {
        background: #9a9aa1;   
        font-size: 1em;  
        font-weight: bold;   
        height: 40px;
        width: 300px;
        border-radius: 8px;
        border: 2px outset #a56ac7;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }

    input::placeholder {
        color: #000000;
        font-weight: bold;
        transition: color 0.3s ease;
    }

    input:focus::placeholder {
        color: transparent;
    }
    
`

export const AddButton = styled.button `
    background: #c47bb1;
    color: #000;
    font-weight: bold; 
    height: 40px;
    border-radius: 8px;
    border: 2px solid #7e2a2a;
    padding: 10px;
    cursor: pointer;
    margin-left: 12px;

    &:hover {
        opacity: 0.7;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #b97fc5;
    border-radius: 8px;
    margin: 10px 0;
    padding: 0 12px;

    p {
        font-family: 'Poppins', serif;
        color: #181616;
        font-size: 1.2em;
        font-weight: bold; 
        text-transform: capitalize;
        padding: 12px 0;
    }

    button {
        background: #8e6897;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        font-size: 28px;

        &:hover {
            opacity: 0.6;
        }
    }
`