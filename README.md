# 가까이 (yuju)

주변 쓰레기통 위치를 알려주는 지도 웹앱입니다. HTML, CSS, JavaScript와 Leaflet 1.9.4로 구성되어 있으며 별도의 빌드나 패키지 설치가 필요하지 않습니다.

## 로컬 실행

Node.js가 설치된 상태에서 저장소 폴더의 `start-local.cmd`를 실행하세요. 또는 다음 명령을 사용하세요.

```sh
node preview.mjs
```

브라우저에서 http://127.0.0.1:4173 에 접속하세요. 서버를 실행한 터미널은 열어 두세요. HTML 파일을 직접 열면 지도 기능을 사용할 수 없습니다.

## 파일 구조

```text
dist/
  index.html
  app.js
  style.css
  vendor/
    leaflet.js
    leaflet.css
preview.mjs
start-local.cmd
hosting.json
vercel.json
```

웹 파일은 `dist` 안에서 수정하세요. 로컬 서버와 `hosting.json`은 `dist`를 제공하며, Vercel도 `vercel.json`의 `outputDirectory`에 따라 같은 폴더를 배포합니다. 빌드 명령은 필요하지 않습니다.

## 데이터 안내

- 홍대 주변 쓰레기통 5개는 실제 설치 정보가 아닌 예시입니다.
- GPS는 기준 위치와 거리순 정렬을 변경하며, 실제 주변 쓰레기통 데이터를 조회하지는 않습니다.
- 제보는 현재 브라우저의 로컬 저장소에만 저장됩니다. 다른 사용자나 기기와 공유되지 않습니다.
- 지도 타일, 웹 폰트, 카카오맵 길 안내에는 인터넷 연결이 필요합니다.
