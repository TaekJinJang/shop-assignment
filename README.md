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
- 페이지 새로 고침 시에도 직전 검색 조건이 유지됩니다.
- 사용자의 검색 조건을 쿼리스트링에 추가하여 문제를 해결하였습니다.
  - **ex)** `http://localhost:3000/?page=3&perPage=50`

### `스켈레톤 UI`
- 데이터 로딩 시 빈 화면이 아닌 스켈레톤 UI를 보여줌으로서 UX를 향상시켰습니다.

 |데이터 로딩 시|데이터 로딩 후|
 |:---:|:---:|
 |![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/a1675857-a042-43a8-89ca-678a0cac8ce9)|![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/d4a4c1a4-7b5b-4e74-9b05-87fbbb8e5b1a)

### `에러 페이지`
- `NotFound` 컴포넌트를 재사용하며 errorStatus상태를 활용하여 NotFound 페이지에서는 Props로 전달받은 상태에 따라 에러 정보가 노출됩니다.
  
 |Error(ErrorStatus에 따라 에러 코드 변경)|Error(데이터 패칭 실패)|
 |:---:|:---:|
 |![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/d91506e6-c3ef-4a7b-a1eb-d270c4644e7b)|![image](https://github.com/TaekJinJang/shop-assignment/assets/93184838/3b2fc324-4d40-4e22-ab60-0621b9b4674a)


## 🔫 트러블 슈팅
### ApexCharts 차트 우선순위 이슈
- **문제**
  - ApexCharts에서는 차트의 우선 순위가 **area**보다 **bar**가 높게 설정되어 있어, 이를 직접 변경할 수 없었습니다.
    
- **해결방안**
  - 과제 기간이 짧아 라이브러리를 변경하기에는 무리가 있다고 판단하였습니다.
  - 따라서, chartOptions 중 fill의 **opacity(투명도)** 와 **stroke(선 굵기)** 를 조정하여 사용자가 차트의 데이터를 쉽게 인식할 수 있도록 **UI** 를 개선하였습니다.
  
### 커스텀 툴팁 renderToString 사용으로 인한 스타일 적용 이슈
- **문제**
  - 커스텀 툴팁은 HTML 문자열을 받아 처리하는데, JSX를 사용하려면 **renderToString** 을 통해 **변환** 해야 했습니다.
  - 하지만 renderToString으로 변환된 문자열은 실제 **DOM** 요소와 연결되지 않아 스타일 적용이 제대로 되지 않았습니다.
   
- **해결방안**
  - `styled-components` 모듈에서 제공하는 `ServerStyleSheet`을 활용해 보았으나, 문제 해결에 실패하였습니다.
  - 특정 조건 하에서 간혈적으로 발생하는 버그였으나 현재는 정상 작동 중입니다.
  - 해당 문제의 원인과 해결 방법을 파악하기 위해 **ApexCharts**에 **issue**를 등록하여 지속적인 모니터링 및 수정을 위한 대응을 하고 있습니다.

## 💡 기술스택 

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white">  <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white">

### Convention

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Environment

<img src="https://img.shields.io/badge/visual Studio code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

 
