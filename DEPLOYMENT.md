# GitHub Actions 배포 가이드

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

## 초기 설정

### 1. GitHub Repository 설정

1. GitHub에서 해당 repository로 이동합니다.
2. **Settings** > **Pages**로 이동합니다.
3. **Source**를 **GitHub Actions**로 선택합니다.

### 2. Base Path 설정 (필요한 경우)

`vite.config.ts` 파일의 `base` 설정을 확인하세요:

- **사용자 GitHub Pages** (`username.github.io`): `base: '/'`
- **프로젝트 GitHub Pages** (`username.github.io/repo-name`): `base: '/repo-name/'`

현재 설정:
```typescript
base: process.env.GITHUB_ACTIONS ? '/' : '/',
```

프로젝트 페이지인 경우 다음과 같이 수정:
```typescript
base: process.env.GITHUB_ACTIONS ? '/your-repo-name/' : '/',
```

## 배포 방법

### 자동 배포
`main` 브랜치에 push하면 자동으로 배포가 실행됩니다:

```bash
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main
```

### 수동 배포
GitHub Repository의 **Actions** 탭에서:
1. **Deploy to GitHub Pages** 워크플로우 선택
2. **Run workflow** 버튼 클릭
3. 브랜치 선택 후 실행

## 배포 확인

1. GitHub Repository의 **Actions** 탭에서 워크플로우 실행 상태 확인
2. 배포 완료 후 `https://username.github.io/` 또는 `https://username.github.io/repo-name/`에서 확인

## 로컬 빌드 테스트

배포 전 로컬에서 빌드를 테스트할 수 있습니다:

```bash
# 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 트러블슈팅

### 페이지가 로드되지 않거나 리소스를 찾을 수 없는 경우
- `vite.config.ts`의 `base` 경로가 올바른지 확인하세요.
- GitHub Pages 설정에서 Source가 "GitHub Actions"로 되어있는지 확인하세요.

### 워크플로우가 실행되지 않는 경우
- `.github/workflows/deploy.yml` 파일이 올바른 위치에 있는지 확인하세요.
- Repository의 Actions가 활성화되어 있는지 확인하세요.
- main 브랜치에 push했는지 확인하세요.

### 권한 오류가 발생하는 경우
- Repository **Settings** > **Actions** > **General**로 이동
- **Workflow permissions**를 "Read and write permissions"로 설정

