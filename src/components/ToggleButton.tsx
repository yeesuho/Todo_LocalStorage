import { ToggleBtn } from "../styled-component/Styled";

// 테마 토글 버튼 컴포넌트
export default function ToggleButton({ toggleTheme }: { toggleTheme: () => void }) {
    return (
      <ToggleBtn className='ToggleBtn' onClick={toggleTheme}>
        테마 전환
      </ToggleBtn>
    );
  }
