import styled from "styled-components";

export const StyleFilmes= styled.div`
margin-top: 20px;
.initBox{
    width: auto;
    display: flex;
    flex-direction: column;    
    margin-left: 180px;
    gap:25px;
}


.posterBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}


h1{
color:white;
font-family: 'Work Sans', sans-serif;
display:flex;
margin-top: 2%;
}

.Botaoingresso{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}

.Botaoingresso button{
    margin-bottom: 3%;
    background-color:#e9daf0;

}

.posterBox img:hover{    
    transition: .3s;
    transform: scale(1.05) translateY(-20px);  
    
}

.Botaoingresso button:hover{
    background-color: #d266ff;
        transition: 0.3s;
        transform: scale(1.02);

}


`