import styled from "styled-components";

export const StyleIngresso = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;

    .posterBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .bloco-ingresso p{
        color: #e9daf0;
        font-size: 1.5rem;
        

    }

    .bloco-ingresso h2{
        color:#d266ff;
        font-family: "Montserrat", sans-serif;
        font-size: 2rem;
    }

    h1{
        color: #e9daf0;
        font-family: "Montserrat", sans-serif;
        font-size: 2rem;

    }

    .emailDestaque{
        margin-top: 50px;
        background-color:#d266ff;
        font-size: 2rem;
        width: 75%;
        height: 50px;
        text-align: center;
        display: flex;        
        align-items: center;
        justify-content: center;
        border: 1px solid #e9daf0;
        border-radius: 6px;
    }

    .poltronasDestaque{
        font-size: 2.5rem;
        width: 80%;
        color:#e9daf0;
        height: 50px;
        text-align: center;
        display: flex;        
        align-items: center;
        justify-content: center;

    }

    

    .bloco-ingresso{
        width: 70%;
        margin: 8%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:15px;
    }


    img{
        
        width: 100%;
    }
`;