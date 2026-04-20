# 📋 신청 시스템 - 설치 및 사용 가이드

## 파일 구성
| 파일 | 설명 |
|---|---|
| `index.html` | 신청자용 페이지 |
| `admin.html` | 관리자 페이지 |
| `firebase-config.js` | Firebase 연결 설정 (★ 필수 수정) |

---

## 1단계 - Firebase 프로젝트 만들기

1. [Firebase 콘솔](https://console.firebase.google.com) 접속
2. **프로젝트 추가** 클릭 → 이름 입력 → 생성
3. 왼쪽 메뉴 **빌드 > Realtime Database** 클릭
4. **데이터베이스 만들기** → **테스트 모드** 선택 → 완료
5. 왼쪽 메뉴 **프로젝트 설정 (⚙️)** → **내 앱** → 웹 앱 추가 (`</>`)
6. 앱 닉네임 입력 후 **앱 등록**
7. 표시된 `firebaseConfig` 코드를 복사

---

## 2단계 - firebase-config.js 수정

```javascript
const firebaseConfig = {
  apiKey: "여기에 붙여넣기",
  authDomain: "여기에 붙여넣기",
  databaseURL: "여기에 붙여넣기",
  ...
};
const ADMIN_PASSWORD = "원하는비밀번호";
```

---

## 3단계 - Firebase 보안 규칙 설정

Firebase 콘솔 > Realtime Database > **규칙** 탭에서 아래로 교체:

```json
{
  "rules": {
    "rounds": {
      ".read": true,
      ".write": true
    }
  }
}
```

---

## 4단계 - 배포 (GitHub Pages - 무료)

1. [GitHub](https://github.com) 새 저장소 생성 (Public)
2. 파일 3개 업로드 (index.html, admin.html, firebase-config.js)
3. **Settings > Pages > Branch: main** 선택 후 Save
4. 약 1분 후 `https://계정명.github.io/저장소명` 으로 접속 가능

---

## 5단계 - 사용 방법

### 관리자 (admin.html)
1. 비밀번호 로그인
2. **회차 만들기** 탭 → 제목, 설명, 날짜/시간 설정 → 생성
3. **회차 관리** 탭 → 생성된 회차 **활성화** 클릭
4. **신청 현황** 탭 → 실시간 신청 현황 확인 + CSV 내보내기

### 신청자 (index.html)
1. 날짜 선택
2. 원하는 시간 슬롯 클릭 (초록색 = 가능, 회색 = 마감)
3. 이름 등 정보 입력 후 신청 완료

---

## 주의사항
- 동시 접속 100명까지 Firebase 무료 플랜으로 운영 가능
- 신청자가 많을 경우 URL을 시간대별로 안내하여 분산 접속 권장
- 보안이 중요한 경우 Firebase Authentication 추가 적용 가능
