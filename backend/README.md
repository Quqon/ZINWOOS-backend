# <1차 프로젝트> - 2조 ZINWOOS(Backend)

## 프로젝트 개요

- 사이트 소개

  - 매트리스 판매 사이트 'ZINUS'를 참고하여, 팀원 '최진우'에 관련된 다양한 상품을 판매하는 사이트를 기획/제작
  - 메인 페이지(이미지, 신상품 노출), 회원가입/로그인, 상품리스트 및 상품 세부정보, 좋아요, 장바구니 및 주문 기능 구현

- 팀 구성
  - Frontend: 이가을, 안나라, 조재현, 강진수
  - Backend: 김성식, 정인호, 최진우
- 기타
  - 개발 기간: 2022.09.19 ~ 2022.09.30
  - 기술 스택: JavaScript, Node.JS, Express, Mysql, AWS
  - 협업 툴: Github, Trello, Slack, POSTMAN, dbdiagram.io

---

## 팀원별 역할(Backend)

### 김성식

- Bcrypt 암호화와 JsonWebToken 인증을 적용한 회원가입, 로그인 기능 API 구현
- 장바구니 CRUD 기능 API 구현
- 트랜잭션을 적용한 상품 주문하기 기능 API 구현

### 정인호

- 상품별로 필터, 페이지네이션을 적용하여 리스트 불러오는 api구현, 그에 따른 query문 작성

### 최진우

- 상품 상세 페이지 API 구현
- 좋아요 API 구현(생성, 조회, 삭제)

---

## 모델링

  <img width="680" alt="스크린샷 2022-09-29 오후 9 00 58 (1)" src="https://user-images.githubusercontent.com/99233475/193212490-6cbb06f0-3d30-4be2-8bda-e97d13e24a87.png">
  
  ***
## 시연 영상
  용량 이슈로 인해 준비 중입니다.
  
  ***
## API 명세서
  https://documenter.getpostman.com/view/23364549/2s83YSK7Rp
  
  ***
## 참고
- 이 프로젝트는 'ZINUS' 사이트를 참고하여 학습 목적으로 제작되었습니다.
- 이 프로젝트는 학습용으로 제작되었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에 사용된 사진을 무단으로 배포, 사용할 경우 법적으로 문제될 수 있습니다.