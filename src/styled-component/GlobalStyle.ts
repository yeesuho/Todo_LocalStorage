import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Boldonse&family=Gugi&family=Nanum+Myeongjo&family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif+Hentaigana:wght@200..900&display=swap');

  * {
    font-family: "Black Han Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }


  body {
    background: linear-gradient(180deg, #a6aeff, #8b96ff);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
  }

  .App>div {
  margin: 0 auto;
  text-align: center;
}

ul {
  text-decoration: none;
  list-style: none;
  text-align: center;
}
ul span {
  padding: 10px;
  
  
  color: black;
  
}
ul div {
  background-color: #f7f7ff;
  display: inline-block;
  
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 1px 5px #a2a2a2
}

button{
  transition: 0.5s;
  margin-left: 5px;
  position: relative;
  top: 4px;
  margin-bottom: 5px;
  box-shadow: 0px 5px 15px #bdbdbd;
  background-color: rgb(255, 255, 255);
  color: #333;
}

button:focus {
    outline: none;
}


button:hover {
  background-color: #5d5d5d;
  color: #fff;
  border: 1px solid #33333300;
}

.input_box,
.add_btn,
.complete_box,
.ToggleBtn,
.todo_box,
.arraybuttons.active {
  transition: all 0.3s ease;
}

.App.dark .input_box,
.App.dark .add_btn,
.App.dark .complete_box,
.App.dark .todo_box,
.App.dark .arraybuttons.active {
  background-color: #333;
  color: #fff;
  
  box-shadow: 5px 5px 20px #a9a9a9;
}

.App.dark h1 {
  color: #333;
}

.App.dark h1:hover {
  color: #6f79ff;
  cursor: default;
}

.App.dark body {
  background-color: #555;
}

.App.dark .ToggleBtn:hover,
.App.dark .add_btn:hover {
  background-color: rgb(255, 255, 255);
  color: #333;
  border: 1px solid #33333300;
}

.App.dark .ToggleBtn {
  background-color: #444;
  color: white;
}

.arraybuttons.active {
  background-color: #a6aeff;
  color: white;
  font-weight: bold;
}

.priority_button_right {
  margin-right: 10px;
}
`;

