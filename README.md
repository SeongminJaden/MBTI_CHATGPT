# MBTI 기반 자기소개서 생성기

이 프로젝트는 사용자의 MBTI 유형을 기반으로 맞춤형 자기소개서를 생성하는 웹 애플리케이션입니다. 사용자가 입력한 정보를 OpenAI GPT API를 활용하여 자기소개서로 변환합니다.

## 🚀 기능
- 사용자의 MBTI, 이름, 나이, 성별, 전공, 희망 회사 입력
- 입력된 데이터를 바탕으로 GPT API를 활용한 자기소개서 생성
- 결과를 웹 페이지에서 확인 가능

## 📌 기술 스택
- HTML, CSS, JavaScript
- Axios (API 요청)
- OpenAI GPT API

## 🛠 설치 및 실행 방법

### 1. 프로젝트 클론
```bash
git clone https://github.com/SeongminJaden/MBTI_CHATGPT.git
cd MBTI_CHATGPT
```

### 2. 필요 패키지 설치 (선택 사항)
이 프로젝트는 기본적으로 로컬 HTML 파일에서 실행되므로 추가적인 패키지 설치는 필요하지 않습니다.

### 3. 실행 방법
웹 브라우저에서 `index.html`을 직접 실행하면 됩니다.

## 📡 OpenAI API 설정
이 프로젝트는 OpenAI GPT API를 사용합니다. API 키를 `.env` 파일 또는 `main.js` 내부에 설정해야 합니다.
```javascript
const api_key = 'YOUR_OPENAI_API_KEY';
```

## 🖥 사용 방법
1. `index.html`을 브라우저에서 실행합니다.
2. MBTI, 이름, 나이, 성별, 전공, 희망 회사를 입력합니다.
3. `입력` 버튼을 클릭하면 자기소개서가 자동 생성됩니다.
4. 결과가 웹 페이지에 표시됩니다.

## 📌 주요 파일 설명
- `index.html` : 메인 웹 페이지
- `index.css` : 스타일 시트
- `main.js` : API 호출 및 로직 처리

## 📜 라이선스
MIT License
