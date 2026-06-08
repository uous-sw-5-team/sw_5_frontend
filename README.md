# Todo Scheduler Web

일정과 할 일을 관리하는 웹 애플리케이션입니다.

현재 단계는 GitHub 초기 업로드를 위한 기본 디렉토리 구조만 포함합니다.

## 필수 기능 범위

- 할 일 추가
- 할 일 수정
- 할 일 삭제
- 완료 체크 및 상태 변경
- 전체 할 일 목록 표시
- 마감일 설정
- 중요도 설정
- 카테고리 관리
- 작업 상태 관리
- 데이터 저장 및 불러오기

## 개발 단위 제안

1. 프로젝트 초기 세팅
   - React/Vite, 라우팅, 스타일 시스템, 기본 레이아웃 세팅

2. 할 일 도메인 모델 설계
   - todo 타입, 상태, 중요도, 카테고리, 마감일 데이터 구조 정의

3. 할 일 목록 화면
   - 전체 할 일 목록 표시, 빈 상태, 기본 카드/리스트 UI

4. 할 일 추가 기능
   - 제목, 마감일, 중요도, 카테고리, 상태 입력 폼

5. 할 일 수정 기능
   - 기존 할 일 정보 편집

6. 할 일 삭제 기능
   - 삭제 버튼, 삭제 확인 UX

7. 완료 체크 및 상태 관리
   - 완료 체크, 진행 상태 변경, 상태별 표시

8. 필터와 정렬
   - 카테고리, 중요도, 완료 여부, 마감일 기준 필터/정렬

9. 데이터 저장 및 불러오기
   - 초기에는 localStorage, 이후 필요하면 백엔드/API로 확장

10. 테스트 및 품질 관리
    - 단위 테스트, UI 테스트, 접근성 점검, 배포 전 검증

## 추천 GitHub 브랜치/이슈 단위

- `init/project-setup`
- `feature/todo-model`
- `feature/todo-list`
- `feature/create-todo`
- `feature/edit-todo`
- `feature/delete-todo`
- `feature/toggle-complete`
- `feature/category-management`
- `feature/filters-sorting`
- `feature/local-storage`
- `test/core-flows`

각 기능은 GitHub Issue 1개, Pull Request 1개로 나누는 것을 추천합니다.
