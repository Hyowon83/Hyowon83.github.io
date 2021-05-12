#### 20210512(수) 작업내역
- git clone 으로 프로젝트를 가져온 경우 아래 내용을 추가해야 함.
- git config --list 확인해서 user.name, user.email 없으면 아래 추가.
- 터미널에서 아래 실행.
- git config --local user.name 영문이름
- git config --local user.email 영문이메일
<<<<<<< HEAD
- 프로젝트를 한 명이 제작하는 경우가 없기 때문에 여러명일 때 소스를 수정한 사람 확인용 정보입니다.
=======
- 프로젝트를 한 명이 제작하는 경우가 없기 때문에 여러명일 때 소스를 수정한 사람 확인용
>>>>>>> db72dd39647bd36442d91c13fc7ce4c47fe0b8bf

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
