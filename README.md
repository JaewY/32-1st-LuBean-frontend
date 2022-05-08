# 32기 1차 프로젝트

## 팀명 : LuBean

- LUSH 코리아 사이트 클론 프로젝트
- 2주라는 짧은 기간안에 개발을 해야하기에 전체적인 UI적 틀과 기획부분만 클론하였습니다.

## 팀원 및 프로젝트 기간

- 백엔드 : 윤진섭, 임수연
- 프론트 : 김귀아, 양재원, 이현정, 최승이
- 프로젝트 기간 : 2022.04.25 (월) ~ 2022.05.06 (금) (2주)

## 기술 스택

- Back-End : Python, Django
- Front-End : React, sass

## 구현기능(내가 구현한 부분인 Main, Footer는 ✨로 표기)

### ✨ Main
#### 1. 배너 캐러셀
**기능 1** - 버튼 클릭 시 해당 이미지로 변경
<br>
:  버튼마다 id를 부여하여 target된 버튼의 id를 가져와 구현하였습니다.
<br>
<br>
**기능 2** - 이미지 변경 시 fadeIn-Out 애니메이션
<br>
: 클릭 이벤트를 통해 동적으로 className을 부여함으로써 구현하였습니다. 
<br>
<br>
**기능 3** - 4초마다 이미지 자동 변경
<br>
: setInterval 함수 사용 후 cleartInterval 함수를 콜백으로 return하여 구현하였습니다.
<br>
#### 2. 상품 캐러셀 
**기능 1** - 버튼 클릭 시 상품 4개씩 좌우로 이동

### ✨ Footer
**기능 1** - 구독하기 버튼 클릭 시 조건에 따라 다른 메세지 alert창 팝업
<br>
**기능 2** - 아이콘 클릭 시 개인별 깃헙 링크로 연결

<hr> 

### List

- nav메뉴 클릭시 해당 리스트 데이터 불러옴
- 싱글 오리진만 fiter>country 버튼 생성
- 제품 클릭 시 디테일에 :id 전달
- 이미지 상수데이터 활용하여 제품별 &&

### Detail

- LIST 페이지에 Params :id 사용
- 데이터에 없는 부분은 목데이터를 사용
- 캐러셀
- 리뷰작성/삭제기능
- 메뉴 탭 클릭시 스크롤 이동
- 수량 증가시 가격변경
- 장바구니 > 계속쇼핑하기 > 리스트 페이지 이동

### Nav

- 원두/상품만 드롭다운 메뉴 생성
- 카테고리 마다 삼각형 생성 / 드롭메뉴 내용 변경
- 리스트 페이지 이동

### Login / Join

- Login / Join_intro / Join / Join_done 페이지 분할 생성
- 유효성 검사를 적용하여 input 에 입력 이벤트가 발생할때마다 pass여부를 알림
- fetch로 back과 서버 통신 완료

## 상세 화면

### ✨ Main & Footer
![](https://user-images.githubusercontent.com/89966610/167298207-79686690-20ab-4016-9038-5caf896513ae.png)

<hr>

### Login

![](https://velog.velcdn.com/images/hnmpot/post/271680a9-7509-464b-a8db-692c8617cec5/image.png)

### Join

![](https://velog.velcdn.com/images/hnmpot/post/796a41d0-681f-4260-8686-342c6e076de5/image.png)
![](https://velog.velcdn.com/images/hnmpot/post/44dc21a1-00d7-419a-b1b8-6da4cb7b7a0f/image.png)
![](https://velog.velcdn.com/images/hnmpot/post/
4d65406e-4a99-4e71-a773-abdd710e9824/image.png)


### List

![](https://velog.velcdn.com/images/hnmpot/post/71c0632d-c915-4dc0-a22c-6ebd433d2443/image.png)

![](https://velog.velcdn.com/images/hnmpot/post/542fa3c5-e6a4-4548-877a-b183a5d73317/image.png)

![](https://velog.velcdn.com/images/hnmpot/post/29b051b8-58d5-4bd5-ba53-68346413e40a/image.png)

### Detail

![](https://velog.velcdn.com/images/hnmpot/post/4c8b2c23-27fd-4b2c-abb5-96b7308543b5/image.png)

### Nav

![](https://velog.velcdn.com/images/hnmpot/post/8074225d-4791-4cf4-9e52-40be738c44df/image.png)
