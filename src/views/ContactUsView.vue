<script setup>
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.png'
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <span class="title-line"></span>
          <h1>聯絡我們</h1>
          <span class="title-line"></span>
        </header>

        <div class="contact-layout">
          <article class="contact-info">
            <h2>聯絡資訊</h2>
            <dl class="contact-list">
              <div class="contact-row">
                <dt>諮詢電話</dt>
                <dd>(02) 2898-7447 分機 86542</dd>
              </div>
              <div class="contact-row">
                <dt>Email</dt>
                <dd>ntpcai@twcloud.ai</dd>
              </div>
            </dl>
          </article>

          <section class="contact-logos" aria-label="Logo 預留區塊">
            <div class="logo-row">
              <div class="logo-slot logo-slot--gov">
                <img :src="logo1" alt="Logo 1" />
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">主辦單位</span>
                <div class="logo-slot logo-slot--host">
                  <img :src="logo2" alt="Logo 2" />
                </div>
              </div>
              <span class="logo-divider" aria-hidden="true">|</span>
              <div class="logo-unit">
                <span class="logo-label">執行單位</span>
                <div class="logo-slot logo-slot--executor">
                  <img :src="logo3" alt="Logo 3" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(22px, 2.4vw, 34px);
  align-items: start;
  justify-items: start;
}

.contact-info,
.contact-logos {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
}

.contact-info h2,
.contact-logos h2 {
  margin: 0 0 10px;
  color: #24379f;
  font-size: clamp(1.22rem, 1.08rem + 0.35vw, 1.52rem);
}

.contact-list {
  margin: 0;
  display: grid;
  gap: 10px;
}

.contact-row {
  display: grid;
  gap: 2px;
}

.contact-row dt {
  color: #2d4db8;
  font-weight: 700;
}

.contact-row dd {
  margin: 0;
  color: #161a2f;
  font-weight: 500;
  line-height: 1.7;
}

.logo-row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  overflow-x: auto;
  width: 100%;
}

.logo-unit {
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  white-space: nowrap;
}

.logo-label {
  color: #1f2b84;
  font-weight: 700;
  font-size: clamp(1rem, 0.9rem + 0.35vw, 1.25rem);
  white-space: nowrap;
}

.logo-divider {
  color: #25328e;
  font-weight: 700;
  font-size: clamp(1.6rem, 1.2rem + 0.8vw, 2.2rem);
  line-height: 1;
  user-select: none;
}

.logo-slot {
  min-height: 72px;
  min-width: clamp(150px, 18vw, 260px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}

.logo-slot--executor {
  min-width: clamp(130px, 15vw, 220px);
}

.logo-slot img {
  width: 100%;
  max-width: 260px;
  max-height: 78px;
  height: auto;
  object-fit: contain;
  display: block;
}

@media (max-width: 720px) {
  .logo-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    overflow-x: visible;
  }

  .logo-divider {
    display: none;
  }

  .logo-unit {
    display: grid;
    gap: 6px;
    white-space: normal;
  }

  .logo-slot {
    min-width: 0;
  }
}
</style>
