# GitHub Workflow

이 문서는 일정관리 웹 프로젝트의 GitHub 협업 규칙을 정리합니다.

## 기본 원칙

- 기능 하나당 Issue 하나를 생성합니다.
- Issue 하나당 브랜치 하나를 생성합니다.
- 브랜치 하나당 Pull Request 하나를 생성합니다.
- `main` 브랜치는 최종 안정 버전으로 유지합니다.
- `develop` 브랜치는 개발 통합 브랜치로 사용합니다.
- 기능 브랜치는 `develop`에서 생성하고, 작업 완료 후 `develop`으로 Pull Request를 보냅니다.
- 배포 가능한 최종 버전은 `develop`에서 `main`으로 Pull Request를 보냅니다.

## 브랜치 전략

```text
main
  최종 배포 및 안정 버전 브랜치

develop
  기능 개발 결과를 모으는 개발 통합 브랜치

feat/*
  기능 구현 브랜치

init/*
  프로젝트 초기 설정 브랜치

fix/*
  버그 수정 브랜치

test/*
  테스트 작성 및 수정 브랜치
```

## 브랜치 이름 규칙

브랜치 이름에는 작업종류, 작업내용, 이슈번호를 함께 적습니다.

```text
작업종류/작업내용-이슈번호
```

예시:

```text
init/project-setup-1
feat/todo-model-2
feat/todo-list-3
feat/create-todo-4
feat/edit-todo-5
feat/delete-todo-6
feat/toggle-complete-7
feat/category-management-8
feat/filters-sorting-9
feat/local-storage-10
fix/todo-status-bug-11
test/todo-flows-12
```

브랜치 이름 마지막 번호는 GitHub Issue 번호와 맞춥니다.

예시:

```text
Issue #2: feat: 할 일 추가 기능 구현
Branch: feat/create-todo-2
```

## Issue 작성 규칙

Issue 제목은 작업 종류와 내용을 간단하게 작성합니다.

예시:

```text
feat: 할 일 추가 기능 구현
fix: 완료 상태 변경 오류 수정
init: 프로젝트 초기 설정
```

Issue 본문 예시:

```md
## 작업 목적
할 일을 새로 등록할 수 있는 기능을 구현한다.

## 작업 내용
- 할 일 입력 폼 생성
- 제목, 마감일, 중요도, 카테고리 입력 처리
- 등록된 할 일을 목록에 추가
```

## Commit 메시지 규칙

커밋 메시지는 한글로 작성합니다.

형식:

```text
작업 종류: 작업 내용
```

예시:

```text
초기 설정: 일정관리 프론트엔드 기본 구조 생성
기능 추가: 할 일 입력 폼 생성
기능 추가: 할 일 목록 표시
수정: 완료 상태 변경 오류 해결
문서 수정: GitHub 작업 규칙 정리
```

## Pull Request 작성 규칙

PR 제목은 Issue 제목과 비슷하게 작성합니다.

예시:

```text
feat: 할 일 추가 기능 구현
```

PR 본문 예시:

```md
## 작업 내용
- 할 일 입력 폼을 생성했습니다.
- 제목, 마감일, 중요도, 카테고리 입력 구조를 추가했습니다.
- 등록된 할 일을 목록에 추가할 수 있도록 기본 구조를 구현했습니다.

## 확인 방법
- 할 일 입력 폼이 화면에 표시되는지 확인
- 입력한 할 일이 목록에 추가되는지 확인

## 관련 이슈
Closes #2
```

`Closes #이슈번호`를 작성하면 PR이 merge될 때 해당 Issue가 자동으로 닫힙니다.

## 작업 흐름

```bash
git switch develop
git pull origin develop
git switch -c feat/create-todo-2
```

작업 후:

```bash
git add .
git commit -m "기능 추가: 할 일 입력 폼 생성"
git push -u origin feat/create-todo-2
```

그 다음 GitHub에서 Pull Request를 생성합니다.

```text
base: develop
compare: feat/create-todo-2
```
