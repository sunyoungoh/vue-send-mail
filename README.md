# vue-send-mail

스마트 스토어 주문 관리를 위해 만들었습니다. 네이버 커머스 API를 활용해 서버에 인증된 계정의 신규 주문 정보를 볼 수 있고, 주문 정보에 따른 메일 발송이 가능합니다.
주문서 이외에 별도로 파일 리스트를 선택하여 메일 발송도 할 수 있습니다.

- 커머스 API 인증(OAuth 2.0)은 서버에서 이루어집니다.
- 신규 주문 정보는 서버로 요청하여 받아옵니다.
- 메일 발송은 서버단에서 이루어집니다. (Node.js - nodemailer)

## 주요 기술

####  Front End

- Vue2
- Vuex
- Vuetify

####  Back End  -  [GitHub](https://github.com/sunyoungoh/send-mail-server)

- Node.js
- express
- nodemailer

<br>

## Open API

- [네이버 커머스 API 센터](https://apicenter.commerce.naver.com/ko/basic/commerce-api)

<br>

## 기능

- 신규 주문 메일 전송 (주문 메모에 이메일이 있으면 추출)
  
![IMB_kEkMus](https://github.com/sunyoungoh/vue-send-mail/assets/52486921/f49a554e-372a-4238-939b-9cab1008bbc0)

- 주문 번호로 주문서 조회
  - 주문 아이템 칩을 누르면 주문서 페이지로 이동 (네이버 api가 보안 상 구매자ID를 제공하지 않기 때문에 네이버 아이디를 확인하기 위함)
  - 아이디만 입력 시 @naver.com 주소가 자동 추가
 
| 주문 메모에 이메일이 없는 경우 |  있는 경우 | 
| --- | --- |
| <img src="https://github.com/sunyoungoh/vue-send-mail/assets/52486921/642046c9-22ec-4cc7-befe-b6fd306d5ca2" width="200px"/> |  <img src="https://github.com/sunyoungoh/vue-send-mail/assets/52486921/d0ac3847-7f81-468f-bbbc-1cbba236c08e" width="200px"/>| 


- 셀렉트 박스에서 상품 추가 후 전송

| 상품 추가 | 상품 삭제 | 메일 발송 |
| --- | --- | --- |
| <img src="https://github.com/sunyoungoh/vue-send-mail/assets/52486921/e577eac2-3447-49e7-a5c0-492081d2ffbb" width="200px"/> |  <img src="https://github.com/sunyoungoh/vue-send-mail/assets/52486921/2425b4ab-b214-491d-ba5c-d51934d28355" width="200px"/>| <img src="https://github.com/sunyoungoh/vue-send-mail/assets/52486921/1b754cd0-27ab-42fe-aa66-843ba9c7063f" width="200px"/> |

