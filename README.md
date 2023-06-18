# reservation

# 🖥️ Desktop 데모 영상

![화면_기록_2023-06-19_오전_1_14_26_AdobeExpress](https://github.com/VictoryJu/reservation/assets/68391427/5907f521-0384-44de-9559-0f6deaed07c9)

# 📱 Mobile 데모 영상
![화면_기록_2023-06-19_오전_1_23_27_AdobeExpress](https://github.com/VictoryJu/reservation/assets/68391427/81230dec-05ce-4616-88e3-c0c0bdb5ef88)


## 폴더구조
```
📦css
 ┣ 📜mixin.css
 ┣ 📜mixin.css.map
 ┣ 📜mixin.scss
 ┣ 📜styles.css
 ┣ 📜styles.css.map
 ┗ 📜styles.scss

📦src
 ┣ 📂component
 ┃ ┣ 📜ReserveDetailComponent.js
 ┃ ┗ 📜ReserveListComponent.js
 ┣ 📂data
 ┃ ┗ 📜statusType.js
 ┣ 📂services
 ┃ ┗ 📜api.js
 ┣ 📂utils
 ┃ ┗ 📜timeFormat.js
 ┣ 📜App.js
 ┣ 📜index.html
 ┗ 📜index.js
```

# 📜 기능 구현

## 📑 예약 목록 리스트 기능구현

- status가 done일 경우 미표출

### 좌측 데이터 
- 예약상태가 reserved일 경우 예약, 색상은 #3BB94C
- 예약상태가 seated일 경우 착성 중, 색상은 #162149
 
### 중앙 데이터
- 예약자명, 방문자수, 메뉴를 각 형식에 맞춰 한줄로 표출

### 우측 데이터
- 착석, 퇴석 각각의 상태에 맞춰 기능 구현

## 🔎 예약 상세 기능구현
- 예약 리스트 클릭시 상세 관련 데이터 표출

### 🖥️ Desktop
- 첫번째 예약 아이템으로 초기 예약 데이터 표출
### 📱 Mobile
- 팝업 형식의 예약 데이터 표출
- dim 영역 클릭시 팝업 닫기 기능 구현

## 👀 ETC
- 고객 메모, 요청 사항은 3줄 말줄임 표시 그외 는 1줄 말줄임 표시 구현

# ❗️ 실행 방법
1. git clone
2. npm install
3. npm run start
