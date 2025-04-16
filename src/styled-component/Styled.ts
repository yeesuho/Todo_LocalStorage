import styled from "styled-components";

export const H = styled.h1`
margin: 20px auto;
color: aliceblue;
text-align: center;
transition: 0.3s;

&:hover {
  color: #6f79ff;
  cursor: grab;
  cursor: default;
}
`;

export const InputBox= styled.input`
  background-color: #fff;
  padding: 16px;
  width: 500px;
  border-radius: 15px;
  border: #5d5d5d;
  font-size: 16px;
  color: black;
  box-shadow: 5px 5px 20px #f7f7ff;
`;




export const ToggleBtn = styled.button`

  position: absolute;
  top: 5%;
  right: 7%;
  width: 100px;

`;

export const TodoBox = styled.div`

  width: 600px;
  height: 70vh;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 20px;
  overflow: scroll;
  position: relative;
  top: 30px;
  box-shadow: 5px 5px 20px #f7f7ff;


ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  
}
`;

export const CompleteBox = styled.input`
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: relative;
  top: 7px;
  
`

export const TextBox = styled.div`

  width: 100%;
  text-align-last: left;
  overflow: scroll;

span{
  font-size: 24px;
  display: inline-block;
  transition: 0.3s;
}

&>button, &>input {
  float: right;
  
}
`;

export const AddBtn =  styled.button`
  position: relative;
  top: -0.5px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid #33333300;
`;

export const PriorityDisplay = styled.span`
float: right;
`;


export const PriorityButton= styled.button`
float: right;
`;
