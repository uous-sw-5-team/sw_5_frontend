import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9f6f0', // 1. 시안 특유의 따뜻하고 밝은 미색 배경
      // 패턴 느낌을 내고 싶다면 아래 주석을 해제하세요 (가벼운 도트 배경 효과)
      // backgroundImage: 'radial-gradient(#e5dec9 1px, transparent 1px)',
      // backgroundSize: '24px 24px',
      padding: '40px 60px',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* [HEADER] 상단 네비게이션 바 */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto 40px auto'
      }}>
        {/* 로고 영역 (추후 컴포넌트 분리) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#a78bfa', borderRadius: '8px' }}></div> {/* 임시 로고 아이콘 */}
          <span style={{ fontSize: '28px', fontWeight: '800', color: '#030712', letterSpacing: '-0.5px' }}>Study Planner</span>
        </div>
        {/* 버튼 영역 */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', backgroundColor: '#e2e8f0', color: '#1e293b', fontWeight: '600', cursor: 'pointer' }}>로그인</button>
          <button style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', backgroundColor: '#030712', color: 'white', fontWeight: '600', cursor: 'pointer' }}>회원가입</button>
        </div>
      </header>

      {/* [MAIN LAYOUT] 2분할 그리드 */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr', // 시안의 좌우 황금 비율 반영 (약 64% : 36%)
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'start'
      }}>
        
        {/* ----------------- 좌측 영역: 달력 판넬 ----------------- */}
        <section style={{
          backgroundColor: 'white',
          borderRadius: '24px', // 시안의 부드럽고 둥근 모서리 반영
          padding: '40px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.02)', // 아주 은은한 그림자
          border: '1px solid rgba(0, 0, 0, 0.03)',
          minHeight: '750px'
        }}>
          {/* 달력 헤더 예시 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>2024년 6월</h2>
            <span style={{ fontSize: '16px', cursor: 'pointer' }}>▼</span>
          </div>
          
          <div style={{ color: '#94a3b8', textAlign: 'center', marginTop: '100px' }}>
            [이 영역에 들어갈 Calendar 컴포넌트 스타일은 components에서 완성할 예정입니다]
          </div>
        </section>


        {/* ----------------- 우측 영역: 일정 및 집중도 ----------------- */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          
          {/* 우상단: 일정 리스트 판넬 */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(0, 0, 0, 0.03)',
            minHeight: '480px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>6월 15일 할 일</h3>
              <button style={{ backgroundColor: '#030712', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>+ 새 일정</button>
            </div>
            
            <div style={{ color: '#94a3b8', textAlign: 'center', marginTop: '50px' }}>
              [이 영역에 들어갈 TodoList 카드들은 components에서 구현하여 조립합니다]
            </div>
          </div>

          {/* 우하단: 오늘의 집중도 판넬 */}
          <div style={{
            backgroundColor: '#07132b', // 시안의 딥한 네이비/다크블루 색상 반영
            color: 'white',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 10px 25px -5px rgba(7, 19, 43, 0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#fbbf24' }}>⚡</span>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#f1f5f9' }}>오늘의 집중도</span>
              </div>
              <span style={{ fontSize: '28px', fontWeight: '800', color: '#38bdf8' }}>0%</span>
            </div>
            
            {/* 게이지 바 배경 */}
            <div style={{ width: '100%', height: '12px', backgroundColor: '#1e293b', borderRadius: '999px', marginBottom: '20px' }}>
              {/* 실제 채워지는 바 (현재 0%) */}
              <div style={{ width: '0%', height: '100%', backgroundColor: '#38bdf8', borderRadius: '999px' }}></div>
            </div>
            
            <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0 }}>목표를 향해 달려볼까요?</p>
          </div>

        </section>

      </main>
    </div>
  );
};

export default MainPage;    