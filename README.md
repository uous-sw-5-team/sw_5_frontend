# Todo Scheduler Web

일정과 할 일을 관리하는 프론트엔드 웹 프로젝트입니다.

현재 단계에서는 완성된 기능 구현이 아니라, GitHub 초기 업로드와 협업을 위한 기본 디렉터리 구조를 구성합니다.

## 필수 기능

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

## 디렉터리 구조

```text
src/
  app/          # 앱 전체 설정, 라우터, Provider
  pages/        # 페이지 단위 화면
  widgets/      # 페이지 안에서 쓰는 큰 UI 블록
  features/     # 사용자 행동 단위 기능
  entities/     # Todo, Category 같은 핵심 데이터 모델
  shared/       # 공통 UI, 유틸, storage
  styles/       # 전역 스타일
  main.tsx      # 앱 진입점
```

## 디렉터리 역할

- `app`: 앱 전체 설정, 라우터, 전역 Provider를 관리합니다.
- `pages`: 실제 페이지 화면을 관리합니다.
- `widgets`: 페이지 안에서 여러 기능을 조합한 UI 블록을 관리합니다.
- `features`: 할 일 추가, 수정, 삭제처럼 사용자 행동 단위 기능을 관리합니다.
- `entities`: Todo, Category처럼 핵심 데이터 모델을 관리합니다.
- `shared`: 공통 UI, 유틸 함수, 저장소 로직처럼 여러 곳에서 재사용하는 코드를 관리합니다.
- `styles`: 전역 스타일을 관리합니다.

## 개발 단위

기능은 GitHub Issue 단위로 나누고, 각 Issue마다 브랜치와 Pull Request를 생성합니다.

예시:

- `#1` 기본 디렉터리 구조 생성
- `#2` 할 일 추가 기능 구현
- `#3` 할 일 수정 기능 구현
- `#4` 할 일 삭제 기능 구현
- `#5` 완료 체크 기능 구현
- `#6` 카테고리 관리 기능 구현
- `#7` 데이터 저장 및 불러오기 구현

## 추천 GitHub 브랜치/이슈 단위

- `feat/project-setup-1`
- `feat/todo-model-2`
- `feat/todo-list-3`
- `feat/create-todo-4`
- `feat/edit-todo-5`
- `feat/delete-todo-6`
- `feat/toggle-complete-7`
- `feat/category-management-8`
- `feat/filters-sorting-9`
- `feat/local-storage-10`
- `feat/core-flows-11`

## 실행 명령어

```bash
npm install
npm run dev
```
