#### 작업예정
- 한달간은 주로 UI 계속진행(VS Code개발환경) : 프론트엔드
- 피곤할때 자바 | 스프링(이클립스-egov전자정부 프레임워크개발환경) 실습진행
- 피곤할때 오라클DB(SQL디벨로퍼개발환경) Ansi-SQL(표준SQL) 기본언어실습진행 : CRUD
- 두달째부터는 주로 스프링 실습 진행(납품용-이력서, 포트폴리오 등)

#### 20210520(목) 작업내역
- 메인페이지에서 시간이 걸리는 부분(프론트엔드) : 메뉴처리, 슬라이드 처리 OK
- 모바일 게시판페이지(CRUD) CSS 스타일처리
- 카멜표기법(낙타등표기법 예, .bbsListTbl), _표기법(예, .bbs_title)
- href헤르프: hypertext referance (하이퍼(웹)문서 참조)
- 정적(static)컨텐츠: html, css, javascript
- 동적(dynamic)컨텐츠: jsp(java스프링), py(python장고), PHP, C#(닷넷), Nodejs(익스프레스)
- 데이터(변수) 바인딩: 동적인 데이터를 정적인 컨텐츠에 넣어줌.(묶어주는 역할)
- 오후에 자바(스프링) 개발환경 설치예정. (이클립스:전자정부표준프레임워크의 개발환경을 설치)
- eGovframe을 제작한 업체 : 삼성SDS, SK C&C, LG CNS 3사가 협업으로 제작
- 게시물 타이틀 넘치는 부분 CSS처림 함. 스프링에서는 jsp에서 프로그램으로 처리 할 예정.
- 모바일 서브페이지 CSS 스타일 처리 -> 태블릿,PC용
- 모바일+태블릿+PC 댓글 시스템 CSS+제이쿼리+부트스트랩 처리
- udminLTE(부트스트랩기반템플릿)를 사용해서 
- UI디자인 끝  --------------------------------------------------------
- UI구현 시작  -----------------스프링프로젝트 시작(이클립스+자바+오라클+스프링)
- UI구현  -------위에서 제작한 UI디자인을 이용해서 프로그램을 입히게 된다.

#### 20210518(화) 작업내역
- 태블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일 처리(반응형으로 제작)
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로크기를 % 로 지정 (px고정크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법.)
- 미디어(PC화면, 스마트폰화면, 프린터, 태블릿화면) + 쿼리(질의어-질문)
- @media 미디어타입(screen, paint 등등 =all) and (min-width: 801px) {스타일 구현내용}
- 태블릿은 마우스 오버 기능을 넣을 필요가 없음.(손가락으로 선택하기 때문)
- 배치1 : jQuery코어 임포트 이후에 사용자가 지정한 js를 배치.
- 배치2 : reset.css, mobile.css 임포트 이후에 사용자가 지정한 tablet.css, pc.css를 배치.

#### 20210517(월) 작업내역
- 외부 data.js 파일에서 json 데이터를 저장한 후 html에서 불러와서 파싱.
- 외부사이트에서 제공하는(Rest API서버) json데이터를 html에서 불러와 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에 파싱(데이터를 분해해서 화면에 뿌려주는 작업.)
- RestAPI서버주소(빅데이터) : https://coroname.me/getdata
- 수업시작전, jsonData 파싱부분에서 append 사용에 2번 반복되는 부분 확인OK.
- 메인페이지에 자바스크립트(jQuery) 적용.(VS code+HTML+CSS+jQuerty)
- 제이쿼리적용부분 : 메뉴OK, 슬라이드이미지3개 처리OK, 모바일 메인페이지만 마무리OK
- 보통 이미지 슬라이드 처리는 외부 라이브러리(Lib)를 많이 사용(니보슬라이드, 캐로셀슬라이드)
- 외부Lib를 사용하지 않고 우리가 직접 만들어보는걸로.

#### 20210514(금) 작업내역
- 구문오류: syntex 신택스(사인택스) 오류(문법오류)
- CSS3, HTML5 : 검사기준입니다.
- 사용자단 모바일 메인페이지 footer영역 CSS입히기.
- 과제물 제출 준비
- jQuery Json 데이터 파싱 전송
- 8교시에 과제물 다음카페에 제출
- 메인페이지에 자바스크립트(jQuery) 적용 : 메뉴, 슬라이드이미지처리, top상단이동

#### 20210513(목) 작업내역
- 픽사베이에서 받은 이미지 3개 : 로고1, 슬라이드 이미지3, No Image1 받고, 경로 적어놓기.
- 로고 : https://pixabay.com/ko/photos/%EA%B0%9C%EC%9A%94-%EC%95%84%ED%8A%B8-%EC%98%88%EC%88%A0-%EC%98%88%EC%88%A0-%EC%9E%91%ED%92%88-2675672/
- 슬라이드 이미지1 : https://pixabay.com/ko/photos/%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%84%A0%EC%9B%90-%EB%B0%94%EB%8B%A4-%EC%95%A0%EC%99%84-%EB%8F%99%EB%AC%BC-3479183/
- 슬라이드 이미지2 : https://pixabay.com/ko/photos/%EA%B3%A0%EC%96%91%EC%9D%B4-%EA%B0%80%EC%9D%84-%EB%82%98%EB%AD%87%EC%9E%8E-1033716/
- 슬라이드 이미지3 : https://pixabay.com/ko/photos/%EA%B3%A0%EC%96%91%EC%9D%B4-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%83%88%EB%81%BC-%EB%88%88-%EA%B2%A8%EC%9A%B8-5905769/
- No Image : https://pixabay.com/ko/vectors/%EB%B9%BC%EA%B8%B0-%EC%A0%9C%EA%B1%B0-%EC%82%AD%EC%A0%9C-%EC%B7%A8%EC%86%8C-38749/
- 작업폴더를 나누는 이유 : 시청(관공서), 대학, 기업의 웹프로그램(사이트) 제작 할 때 1년간 무상 유지보수 이후 2천, 리뉴얼 4천 비용이 책정.
- home폴더 기존작업을, 리뉴얼 home에 덮어쓰는 방식이 아니고, 리뉴얼 할 때 home2022라는 폴더에 작업을 하게 된다.
- jQuery 코어 다운받기 : min버전(압축-속도UP), 일반버전(개발-속도nomal) =우리나라에선 별반 차이 없음.
- jQuery 미처리 작업은 다음주에.
- 오늘은 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 스프링에서 프로그램 입히는 소스로 사용하게 된다.
- 애니데스크(독일산) : 팀뷰어(독일산) 사용하는 대신에 애니데스크를 사용.
- html5.html, css.html, js.html 여기까지

#### 20210512(수) 작업내역
- git clone 으로 프로젝트를 가져온 경우 아래 내용을 추가해야 함.
- git config --list 확인해서 user.name, user.email 없으면 아래 추가.
- 터미널에서 아래 실행.
- git config --local user.name 영문이름
- git config --local user.email 영문이메일
- 프로젝트를 한 명이 제작하는 경우가 없기 때문에 여러명일 때 소스를 수정한 사람 확인용 정보입니다.
- jQuery 기본구조만 실습했습니다.

#### 20210511(화) 작업내역
- 로렘 입숨 한글 : http://guny.kr/stuff/klorem/
- 로렘 입숨 영어 : https://loremipsum.io/
- URL경로(path) : /루트, /test/html5.html
- HTML5에 레이아웃 구조 제작.
- 서버(응답하는 프로그램=response) = 아파치서버, 톰캣서버
- 클라이언트(요청하는 프로그램=request) = 웹브라우저
- HTML은 마크업이 태그로 구성. <의미있는문자>...</의미있는문자>
- http://127.0.0.1:80[8080|9000|5500|6500]
    - PC의 네트워크 내부주소(공통): 127.0.0.1 == localhost
    - 고유주소 : yahoo.com == 74.6.143.25(IP주소) == 주민번호
    - IP주소 버전 : IPv4, IPv6
    - HTML 버전 : HTML5, HTML4.01(old)

#### 20210510(월) 작업내역
- Git에서 'user.name' 및 'user.email' 설정오류 안내
    - git config --local user.name 이름
    - git config --local user.email 이메일
- 업로드절차 : 1. 커밋(commit) 2. 푸시(push)
- 다운로드절차 : 1. 풀(pull) (상황: 교실에서 작업한 결과를 집에서 이어서 작업 할 때)
- 레포지토리(저장소) 초기화 : git init
- 개발PC(html) 와 git 저장소를 연결 시키기.
- 포트(port) : 포트번호로 서비스를 만드는 것이 요즘 트렌드
    - 이전에는 80포트에 모든 서비스를 묶어놓음.
    - 모든 서비스를 개별로 분리하는 트렌드가 있음 = 마이크로서비스 == RestAPI로 구현 가능.
- html : Hyter Text MarkUp Language 태그를 사용하는 언어
- md :  MarkDown Language 태그를 사용하지 않는 언어
