import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --shape: #FFFFFF;

        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-widht: 1080px){
            font-size: 93.75%; // 16 x 0.93.75
        }

        @media(max-widht: 720px){
            font-size: 87.5%; // 16 x 0.87.5
        }

        button{
            cursor: pointer;
        }

        [disabled]{
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poopins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }


`;