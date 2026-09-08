# HEIDELBERG 2018 기업 홈페이지

프레임워크, 빌드 도구, 서버 없이 동작하는 정적 원페이지 사이트입니다.

## 파일 구성

- `index.html`: 본문, SEO 메타데이터, Organization 구조화 데이터
- `styles.css`: 디자인 및 반응형 스타일
- `script.js`: 모바일 메뉴와 헤더 스크롤 상태
- `favicon.svg`: 기본 파비콘
- `robots.txt`: 검색엔진 크롤링 규칙
- `sitemap.xml`: 공식 도메인 사이트맵
- `CNAME`: GitHub Pages 커스텀 도메인
- `naver24a67976eae26a9f588fa79f9734656e.html`: 네이버 사이트 소유확인 파일
- `assets/projects/`: 프로젝트 스크린샷 교체 위치와 규칙

## 서비스 및 문의 정보

- 한옥레이다: `https://hanokradar.kr`
- 공식 문의 이메일: `contact@heidelberg2018.kr`

검색엔진 소유권 확인은 `<head>` 안의 안내 주석 위치에 메타태그를 추가하거나, 발급받은 HTML 확인 파일을 이 폴더 최상단에 넣으면 됩니다.

## GitHub Pages 배포

1. 이 폴더의 파일을 저장소 루트에 올립니다.
2. GitHub 저장소의 **Settings → Pages**로 이동합니다.
3. **Deploy from a branch**를 선택합니다.
4. 배포 브랜치(보통 `main`)와 `/ (root)`를 선택해 저장합니다.

프로젝트 경로에서도 동작하도록 CSS, JavaScript, 파비콘은 상대 경로를 사용했습니다.

## 커스텀 도메인 연결

1. 도메인 DNS에 GitHub Pages가 안내하는 레코드를 설정합니다.
2. GitHub Pages 설정의 Custom domain에 `heidelberg2018.kr`를 입력합니다.
3. DNS 적용 후 **Enforce HTTPS**를 켭니다.
4. `www` 주소도 사용할 경우 `www` CNAME을 GitHub 사용자 도메인으로 연결하고, 주 도메인 정책을 정합니다.

배포 후 `https://heidelberg2018.kr/robots.txt`와 `https://heidelberg2018.kr/sitemap.xml`이 열리는지 확인하세요.
