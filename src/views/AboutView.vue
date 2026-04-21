<script setup>
const highlights = [
  {
    title: '對象',
    icon: 'fa-solid fa-user-tie',
    content: '想導入 AI 提升營運效率之新北市企業或工廠',
  },
  {
    title: '補助金額',
    icon: 'fa-solid fa-dollar-sign',
    content: '最高 4 萬元（需自籌 50%）',
  },
  {
    title: '申請方式',
    icon: 'fa-solid fa-envelope',
    content: 'email 送件申請',
  },
  {
    title: '申請時間',
    icon: 'fa-solid fa-clock',
    content: '即日起至115年5月15日止',
  },
]
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <div class="content-panel">
        <header class="title-row">
          <div class="about-title-wrap">
            <span class="title-line"></span>
            <h1>關於計畫</h1>
            <span class="title-line"></span>
          </div>
          <a
            class="about-apply-link"
            href="https://drive.google.com/drive/folders/1789FI1WmaAaVV_w6f5kl1i1-whT4AN_X"
            target="_blank"
            rel="noopener noreferrer"
          >
            申請須知與申請表
          </a>
        </header>

        <article class="about-copy">
          <p>
            為協助新北市企業加速導入人工智慧技術，提升營運效率與競爭力，新北市政府經濟發展局（下稱主辦單位）委託台灣智慧雲端服務股份有限公司（下稱執行單位）辦理「新北產業AI化輔導計畫」（下稱本計畫）。本計畫旨在回應產業升級與數位轉型需求，透過遴選AI服務供應廠商、輔導媒合本市企業實際導入AI應用方案，提升本市企業的數位競爭力，促進本市產業邁向智慧化與高值化發展。
          </p>
          <p>
            本計畫已公開徵選專業AI服務供應廠商，此次遴選具AI導入需求之新北企業進行輔導，並將透過「新北企業與AI應用方案供應商媒合平臺」及實體媒合會，協助本市具轉型需求之企業與AI服務供應廠商精準對接。
          </p>
          <p>
            另為降低企業導入AI之初期成本，主辦單位提供AI應用服務導入補助，受輔導之新北企業完成導入並提交相關憑證後，可依規定申請補助款。本計畫透過技術服務供應、輔導媒合機制與補助方案之三合一推動架構，盼加速推動新北企業導入AI應用服務，打造示範案例，為新北產業創造AI化的新價值。
          </p>
        </article>

        <section class="about-highlights" aria-label="計畫重點資訊">
          <article v-for="item in highlights" :key="item.title" class="about-highlight-card">
            <header class="about-highlight-head">
              <span>{{ item.title }}</span>
              <i :class="item.icon" aria-hidden="true"></i>
            </header>
            <div class="about-highlight-body">{{ item.content }}</div>
          </article>
        </section>

        <p class="about-note">*詳細申請資格、補助計算與審查方式，請參閱申請須知</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
}

.about-title-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.about-title-wrap h1 {
  margin: 0;
  white-space: nowrap;
}

.about-apply-link {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #2b49c3 0%, #1e2f8f 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 14px 28px rgba(36, 56, 168, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-apply-link:hover {
  transform: translateY(calc(-50% - 1px));
  box-shadow: 0 18px 32px rgba(36, 56, 168, 0.24);
}

.about-copy {
  display: grid;
  gap: 12px;
}

.about-copy p {
  margin: 0;
  color: #1a1c2e;
  font-size: clamp(1.05rem, 0.98rem + 0.38vw, 1.28rem);
  line-height: 1.78;
  font-weight: 600;
}

.about-highlights {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.about-highlight-card {
  border: 3px solid #2438a8;
  border-radius: 22px;
  background: #ffffff;
  overflow: hidden;
}

.about-highlight-head {
  min-height: 76px;
  background: #2438a8;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 12px;
  font-size: clamp(1.3rem, 1.15rem + 0.52vw, 1.9rem);
  font-weight: 800;
  line-height: 1.2;
}

.about-highlight-body {
  min-height: 136px;
  color: #2438a8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(1.02rem, 0.96rem + 0.34vw, 1.22rem);
  font-weight: 800;
  line-height: 1.45;
  padding: 16px 14px;
}

.about-note {
  margin: 22px 0 0;
  text-align: center;
  color: #d5291d;
  font-size: clamp(1.2rem, 1rem + 0.84vw, 2rem);
  font-weight: 800;
  line-height: 1.3;
}

@media (max-width: 1100px) {
  .about-highlights {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .title-row {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    min-height: unset;
  }

  .about-title-wrap {
    width: 100%;
  }

  .about-apply-link {
    position: static;
    transform: none;
    width: 100%;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .about-highlight-head {
    min-height: 68px;
  }

  .about-highlight-body {
    min-height: 112px;
    padding: 14px 12px;
  }
}
</style>
