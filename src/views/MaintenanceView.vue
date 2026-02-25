<template>
  <section class="page-hero">
    <div class="container">
      <div class="maintenance-card">
        <p class="maintenance-badge">SYSTEM STATUS</p>
        <h1>系統維護中</h1>
        <p class="maintenance-text">目前服務暫時不可用，我們正在處理中，請稍後再試。</p>
        <p class="maintenance-tip">若問題持續發生，請聯繫系統管理員。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.maintenance-card {
  max-width: 760px;
  margin: 0 auto;
  padding: 42px 28px;
  border-radius: 20px;
  border: 1px solid rgba(28, 30, 127, 0.1);
  background: #ffffff;
  box-shadow: var(--shadow);
  text-align: center;
}

.maintenance-badge {
  display: inline-block;
  margin: 0 0 10px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--soft);
  color: var(--primary);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.maintenance-card h1 {
  margin: 0 0 10px;
  color: var(--primary-dark);
}

.maintenance-text {
  margin: 0;
  color: var(--muted);
}

.maintenance-tip {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .maintenance-card {
    padding: 32px 20px;
  }
}
</style>
