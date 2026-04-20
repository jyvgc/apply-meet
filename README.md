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
2. **프로젝트 추가** → 이름 입력 → 생성
3. **빌드 > Realtime Database** → 데이터베이스 만들기 → **테스트 모드** → 완료
4. **프로젝트 설정(⚙️)** → 내 앱 → 웹 앱 추가(`</>`) → 등록
5. 표시된 `firebaseConfig` 코드 복사

---

## 2단계 - firebase-config.js 수정

```javascript
const firebaseConfig = {
  apiKey: "여기에 붙여넣기",
  ...
};
const ADMIN_PASSWORD = "원하는비밀번호";
```

---

## 3단계 - Firebase 보안 규칙 설정

Realtime Database > **규칙** 탭에서 아래로 교체 후 게시:

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

## 4단계 - GitHub Pages 배포 (무료)

1. GitHub 새 저장소 생성 (Public)
2. 3개 파일 업로드 (index.html, admin.html, firebase-config.js)
3. Settings > Pages > Branch: main > Save
4. `https://계정명.github.io/저장소명` 으로 접속

---

## 사용 방법

### 관리자 (admin.html)
1. 비밀번호 로그인
2. **회차 만들기** → 제목/설명/날짜/시간 설정 → 생성
3. **회차 관리** → 활성화 / ✏️ 수정 / 🔗 신청 페이지 바로가기
4. **신청 현황** → 회차 클릭 시 즉시 현황 표시 + CSV 내보내기

### 신청자 (index.html)
1. 날짜 선택 → 시간 슬롯 클릭 (초록: 가능 / 주황: 내 신청 / 회색: 마감)
2. 이름 등 입력 후 신청 완료
3. **시간 변경**: 다른 슬롯 클릭 → 변경 완료
4. **신청 취소**: 상단 주황 바의 취소 버튼

---

## 주요 변경 이력 (v2)
- 회차 제목/설명/슬롯 수정 기능 추가
- 활성 회차 신청 페이지 바로가기 버튼 추가
- 신청자 시간 변경 기능 추가 (기존 슬롯 자동 해제)
- 신청 현황 탭에서 회차 클릭 즉시 현황 표시
