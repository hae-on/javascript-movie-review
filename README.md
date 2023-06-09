<h1 align="middle">🎬 영화관 미션 🎬</h1>
<p align="middle">우아한테크코스 레벨1 영화관 미션</p>

<br>

<p align="middle">
<img width="1414" alt="스크린샷 2023-06-09 오전 11 12 23" src="https://github.com/hae-on/woowacourse/assets/80464961/1721f72e-e138-45c9-9e02-47c283b977de">
<img width="1432" alt="스크린샷 2023-06-09 오전 11 12 37" src="https://github.com/hae-on/woowacourse/assets/80464961/0cabb44d-3b19-40df-8381-6abf9e20d539">
<img width="1435" alt="스크린샷 2023-06-09 오전 11 12 51" src="https://github.com/hae-on/woowacourse/assets/80464961/2fe184dd-2228-46d6-a625-89b0e569c3df">
</p>

<br>

### 🧑‍🤝‍🧑 페어 (페어 프로그래밍으로 개발)

<table>
  <tr>
    <td align="center" width="120px">
      <a href="https://github.com/nangkyeonglim" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/57815133?v=4" alt="파인(임낭경) 프로필" />
      </a>
    </td>
    <td align="center" width="120px">
      <a href="https://github.com/hae-on" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/80464961?v=4" alt="해온(백솔비) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/feb-dain" target="_blank">
        파인(임낭경)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hae-on" target="_blank">
        해온(백솔비) 
      </a>
    </td>
  </tr>
</table>

<br>

### 📍 학습 목표

- API 연동을 위한 테스트 환경 경험
- 실제 동작하는 API를 통한 비동기 통신
- UX 경험 개선을 위한 더 보기(페이징) 구현
- 역할과 책임에 따라 관심사를 분리할 수 있는 마지막 기회

<br>

### 📝 실행 방법

- <a href="https://hae-on.github.io/javascript-movie-review/dist/">앱 바로 실행하기</a>

<br>

### 🎯 기능 목록

**step1**

1. 🎬 영화 목록 조회 (인기순)

- 영화 목록의 1페이지를 불러오며 더보기 버튼을 누르면 그 다음의 영화 목록을 불러 올 수 있다.
- 단, 페이지 끝에 도달한 경우에는 더보기 버튼을 화면에 출력하지 않는다.
- 인기순은 TMDB에서 제공하는 API의 속성 이름을 나타내는 것이므로 별도로 받은 데이터를 정렬하지 않습니다.
- figma 시안과는 달리 20개씩 영화 목록을 보여주면 됩니다.
- 영화 목록 아이템에 대한 Skeleton UI를 구현한다.
- Skeleton UI는 템플릿으로 제공되는 파일 이외로 자유롭게 구현할 수 있다.

2. 🔎 검색

- 영화 검색 API를 이용하여 내가 보고 싶은 영화를 검색할 수 있다.
- 엔터키를 눌러 검색할 수 있다
- 검색 버튼을 클릭하여 검색할 수 있다
- 영화 목록 조회와 같이 검색한 결과에 한해 정보를 보여주는 화면의 요구사항은 동일하다

3. ⚠️ 오류

- 오류가 발생하는 경우에는 사용자를 위한 오류 메시지를 띄워 준다.
- 어떤 오류를 대응해야 하고, 어떤 UI로 보여줄 것인지는 자율적으로 결정한다.

**step2**

1. 📺 영화 상세 정보 조회

- API에서 제공하는 항목을 활용하여 상세 정보를 보여주는 모달 창을 구현한다.
- 키보드의 ESC 키를 누르면 모달 창을 닫을 수 있는 등 사용성을 고려한다.

2. ⭐️ 별점 매기기

- 사용자는 영화에 대해 별점을 줄 수 있으며 새로고침하더라도 사용자가 남긴 별점은 유지되어야 한다.
- 별점은 5개로 구성되어 있으며 한 개당 2점이며 1점 단위는 고려하지 않는다.
  - 2점: 최악이예요
  - 4점: 별로예요
  - 6점: 보통이에요
  - 8점: 재미있어요
  - 10점: 명작이에요

<br>

### ✅ 프로그래밍 요구 사항

- API key를 공개된 저장소에 포함하지 않는다.
- 비동기 통신에서 실패할 경우를 대비한다.
- 비동기 통신에서 일어날 수 있는 다양한 상황을 고려해 본다.
- 비동기 호출을 포함한 사용자 기능 플로우를 선정하고 기능을 포함하여 E2E 테스트를 작성한다.
- 특정한 패턴에 사고를 끼워 맞추지 않고 단지 역할과 책임에 따라 관심사를 분리한다.
- 어떠한 관점에서 역할과 책임에 따라 관심사를 분리하였는지 리뷰어에게 설명할 수 있어야 한다.
- 도메인 영역을 TypeScript를 사용해 구현한다. (UI 영역은 선택)
- any를 사용하지 않는다.
- API에서 응답한 데이터의 규격을 문자열 그대로 활용하지 않고 도메인 객체를 만들어 활용한다.

<br>

---

<a href="https://github.com/woowacourse">@woowacourse</a>
