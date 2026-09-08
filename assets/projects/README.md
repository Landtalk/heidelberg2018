# Project screenshots

현재 V2 사이트는 확인되지 않은 서비스 화면을 만들지 않고 중립적인 이미지 예약 영역을 사용합니다.

실제 스크린샷이 준비되면 이 폴더에 아래 이름으로 저장하는 방식을 권장합니다.

- `bosangradar.webp`
- `hanokradar.webp`
- `iceinsoo.webp`

위 경로의 이미지는 HTML의 표준 `<img>` 요소에서 직접 불러옵니다. 이미지 로딩에 실패할 때만 `IMAGE RESERVED` fallback이 표시됩니다.

각 프로젝트 영역은 실제 이미지의 원본 비율을 사용하고 `object-fit: contain`으로 전체 화면을 표시하므로 크롭이 발생하지 않습니다.
