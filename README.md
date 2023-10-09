# 쇼핑몰 상품 목록 및 페이지네이션 구현

## 🙂 시작 가이드

* 프로젝트 실행 방법
  ```
   $ npm install
   $ npm start
  ```

## 🎥 화면 구성

|   화면 구성     |   
| :-------------------------: | 
| ![shop](https://github.com/TaekJinJang/shop-assignment/assets/93184838/767942a9-4146-4032-b9e3-d8e607c93b3e) |



## 📁 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂Skeleton
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📂types
 ```
## 🚩 코드 컨벤션
<details>
    <summary><b>👈 컨벤션 보기 </b></summary>
 
| 커밋 유형 | 의미 |
| --- | --- |
| init | 프로젝트 시작 |
| feat | 기능 추가 |
| style | 코드 포맷팅 |
| refactor | 코드 리팩토링 |
| chore | 패키지 매니저 및 그 외 기타 수정 ex) .gitignore |
| rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| remove | 파일을 삭제하는 작업만 수행한 경우 |
| setting | 기본 세팅 변경의 경우 |
| docs | README.md 수정 등 |
| design | UI 디자인 |
| fix | 오타 및 오류로 인한 버그 수정 |
| merge | 머지, 충돌해결 등  |

</details>
<br/>

## ✔️ 주요 기능

### `API 호출 시 데이터 최소화`
- 상품 데이터를 불러올 때 모든 데이터를 불러오는 게 아닌 페이지에 필요한 데이터만 가져와 서버의 부담을 줄였습니다.

### `검색 조건 유지`
- 페이지 새로 고침 시에도 직전 **검색 조건이 유지**됩니다.
- 사용자의 검색 조건을 쿼리스트링에 추가하여 문제를 해결하였습니다.
  - **ex)** `http://localhost:3000/?page=3&perPage=50`

### `스켈레톤 UI`
- 데이터 로딩 시 빈 화면이 아닌 **스켈레톤 UI**를 보여줌으로서 **UX**를 향상시켰습니다.

 |데이터 로딩 시|데이터 로딩 후|
 |:---:|:---:|
 |![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/a1675857-a042-43a8-89ca-678a0cac8ce9)|![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/d4a4c1a4-7b5b-4e74-9b05-87fbbb8e5b1a)

### `에러 페이지`
- `NotFound` 컴포넌트를 재사용하며 **errorStatus**상태를 활용하여 `NotFound` 컴포넌트에서는 Props로 전달받은 상태에 따라 에러 정보가 노출됩니다.
  
 |Error(ErrorStatus에 따라 에러 코드 변경)|Error(데이터 패칭 실패)|
 |:---:|:---:|
 |![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/d91506e6-c3ef-4a7b-a1eb-d270c4644e7b)|![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/3b2fc324-4d40-4e22-ab60-0621b9b4674a)


## 🔫 트러블 슈팅
### API 중복 호출
- **문제**
  - 사용자가 5페이지를 보고 있을 때 웹 페이지를 새로 고침하면, 우선 1페이지가 로드되고 이어서 5페이지가 로드되는 현상이 발생하였습니다. 즉, **API 호출이 중복**으로 일어나는 문제가 있었습니다.
  - `useEffect`의 의존성 배열에 `page`와 `perPage`를 포함시켜 두었기 때문에, 이 값들이 변경될 때마다 `useEffect` 내부의 코드가 실행되었습니다. 따라서 초기 렌더링 시점에서는 기본 설정된 페이지(1페이지) 정보로 **API 호출**이 일어나고, 이어서 URL 쿼리 매개변수에서 가져온 페이지 번호(5페이지)로 인해 추가적인 **API 호출**이 발생하였습니다.
- **해결방안**
  - 수정 전 코드
    ``` js
    useEffect(() => { 
    const pageParam = getQuery('page');
    const perPageParam = getQuery('perPage');
    if (pageParam && Number(pageParam) !== page) setPage(() => Number(pageParam));
    if (perPageParam && Number(perPageParam) !== perPage) setPerPage(() => Number(perPageParam));
    }, [ page, perPage]);
    ```
  - 수정 후 코드
    ``` js
    const pageParam = getQuery('page');
    const perPageParam = getQuery('perPage');
    if (pageParam && Number(pageParam) !== page) setPage(() => Number(pageParam));
    if (perPageParam && Number(perPageParam) !== perPage) setPerPage(() => Number(perPageParam));
    ```
  - **리액트 라이프사이클**을 고려하여, 초기 렌더링 시 한번만 실행되도록 로직을 `useEffect` 밖으로 빼내어 구현하였습니다.


## 💡 기술스택 

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white">  <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/Json%20server-F7DF1E?style=for-the-badge">

### Convention

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Environment

<img src="https://img.shields.io/badge/visual Studio code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

 
