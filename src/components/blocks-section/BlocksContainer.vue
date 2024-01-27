<template>
  <div class="container">
    <div class="one-card-container"><div class="card">Card 1</div></div>
    <div class="three-card-container">
      <div class="card competitive-card">Card 2</div>
      <div class="adv-tech-start-card">
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>
<style scoped>
.card {
  padding: 1rem;
  box-sizing: border-box;
  width: 280px;
  height: 235px;
  border-radius: 10px;
  background: #0b0819;
  backdrop-filter: blur(45px);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.adv-tech-start-card,
.one-card-container,
.three-card-container {
  width: 100%; /* Full width on mobile */
  gap: 25px;
  display: flex;
  flex-direction: column;
}

/* On tablet */
@media (min-width: 768px) and (max-width: 1199px) {
  .card {
    width: 530px;
    height: 230px;
  }
}

/* On desktop */
@media (min-width: 1024px) {
  .card {
    width: inherit;
  }

  .one-card-container .card {
    height: inherit;
  }

  .three-card-container > .card {
    height: inherit;
  }

  .container {
    width: 1016px;
    flex-direction: row;
    gap: 20px;
  }

  .adv-tech-start-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  .one-card-container {
    width: 320px;
    height: 570px;
  }

  .three-card-container {
    height: 570px;
    flex: 1 0 66%; /* Two thirds width on desktop */
  }
}
</style>
