
# Todo_LocalStorage


### 컴포넌트 분리
[components](./src/components/)파일에 컴포넌트들을 분리해두었습니다

[GlobalStyle.ts](./src/components/GlobalStyle.ts)<br>
: styled-components를 사용해서 전역으로 폰트 스타일 적용

[TodoInput.tsx](./src/components/TodoInput.tsx)<br>
: Input박스와 추가 버튼이 있는 컴포넌트<br>
사용자가 새로운 할 일을 입력하면 newTodo 상태에 입력값이 저장되고 엔터키를 누르거나 ``추가`` 버튼을 누르면 새로운 Todo 객체가 생성되어 setTodos를 통해 리스트에 추가됩니다<br>
근데 한글 내용을 입력하고 엔터를 눌렀을 때 값이 두 번 추가 되길래 onKeyDown을 onKeyUp으로 바꿨더니 해결되었습니다<br>
그리고 내용을 추가한 후에 input으로 자동 포커스 됩니다

[TodoList.tsx](./src/components/TodoList.tsx)<br>
: Todo 목록을 보여주는 컴포넌트<br>
filter와 sortOrder 상태를 기반으로 할 일들을 필터링 및 정렬하여 보여주고 각 Todo는 TodoItem 컴포넌트로 분리되어 렌더링되어서 정렬 순서를 바꾸는 버튼과 필터 버튼이 포함되어 있습니다<br>
editingId를 이용하여 수정 중인 Todo 항목을 관리하고 editingText를 통해 수정 내용도 다룰 수 있습니다

[TodoItem.tsx](./src/components/TodoItem.tsx)<br>
: 하나의 Todo 항목 컴포넌트<br>
완료 상태를 표시하고 토글할 수 있고 더블 클릭으로 내용수정, 삭제 버튼 클릭시 삭제, 우선순위 설정 기능도 제공합니다<br>
수정 버튼을 누르면 해당 Todo가 수정 모드로 변경되고 텍스트 입력이 가능해지고 수정 완료 시 editingText를 사용하여 제목이 변경되고 setTodos를 통해 반영됩니다

[ToggleButton.tsx](./src/components/ToggleButton.tsx)<br>
: 라이트, 다크 테마 토글 버튼<br>
기본값이 라이트 테마이고 버튼을 눌렀을 때 toggleTheme 함수가 실행되고 not 연산자와 삼항연산자를 사용해서 값이 바뀌도록 합니다 localstorage에 따로 상태를 저장하진 않아서 새로고침을 하면 기본값인 라이트 테마로 돌아갑니다

컴포넌트를 분리하면 가독성이 좋아지고 재사용할 수 있다는 장점이 있습니다 하지만 단점으로는 파일의 갯수가 많아지고 props 전달이 복잡해졌다고 느꼈습니다


### 커스텀 훅
공통된 로직을 하나의 함수로 빼서 재사용 가능하게 만든 것 입니다

그래서 원래 App.tsx에서 setIsDarkMode로 직접 테마 상태를 관리하고 있었는데 useTheme 커스텀 훅으로 코드를 빼서 코드를 좀 더 깔끔해지게 했습니다