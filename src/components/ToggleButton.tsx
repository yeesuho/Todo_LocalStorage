
// 테마 토글 버튼 컴포넌트
export default function ToggleButton({ toggleTheme }: { toggleTheme: () => void }) {
    return (
      <button className='ToggleBtn' onClick={toggleTheme}>
        테마 전환
      </button>
    );
  }
