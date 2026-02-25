<template>
  <section class="page-hero">
    <div class="container">
      <div class="not-found-card">
        <p class="not-found-code">404</p>
        <h1>找不到此頁面</h1>
        <p class="not-found-text">頁面不存在或發生錯誤，請返回首頁繼續瀏覽。</p>
        <RouterLink to="/" class="btn primary">回到首頁</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-card {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 28px;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  background: #ffffff;
  box-shadow: var(--shadow);
  text-align: center;
}

.not-found-code {
  margin: 0;
  font-size: clamp(3.2rem, 10vw, 5.6rem);
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.not-found-card h1 {
  margin: 8px 0 10px;
  color: var(--primary-dark);
}

.not-found-text {
  margin: 0 0 22px;
  color: var(--muted);
}

@media (max-width: 720px) {
  .not-found-card {
    padding: 32px 20px;
  }
}
</style>
