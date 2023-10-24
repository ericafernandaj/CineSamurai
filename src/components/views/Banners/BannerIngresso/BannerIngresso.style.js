import styled from "styled-components";

export const StyleIngresso = styled.div`
.titulo{
margin: 20px;
}
.caixaMaior{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
margin: auto;
background: rgb(247, 247, 247);
height: 600px;
border-radius: 10px;
border: 2px groove #333;
}
.cinemaTitulo {
  font-size: 25px;
  color: rgb(247, 247, 247);
  text-align: center;
  margin: 20px 0;
  border-radius: 10px;;
}
.cinemaTitulo2{
  font-size: 25px;
  color: rgb(27, 27, 27);
  text-align: center; 
}
.bloco1 {
  display: flex;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  width: 80%;
  text-align: center;
  background-color: #dcb2ed; 
  border-radius: 10px;
  margin: auto;
  border: 2px groove #333;
}

.bloco2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 500px;
  width:500px;
  padding: 10px;
  background-color: #dcb2ed;
  border-radius: 10px;
  border: 2px groove #333;
}

.selectLabel {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color:rgb(27, 27, 27,);
  margin-bottom: 10px;
  padding: 5px;
}

.select {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:rgb(247, 247, 247);
  color:rgb(27, 27, 27,);
  font-size: 16px;
  padding: 5px;
 
}

.bloco3{
  margin: 20px;
  gap:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  font-weight: bold;
  font-size:20px;
}

button:hover{
    background-color: #d266ff;
        transition: 0.3s;
        transform: scale(1.02);

}

`