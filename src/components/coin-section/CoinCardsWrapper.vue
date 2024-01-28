<template>
  <div class="coin-cards-wrapper">
    <CoinCard
      v-for="(coin, index) in filteredCoins"
      :key="index"
      :coinName="coin.name"
      :coinSymbol="coin.symbol"
      :coinPrice="coin.price_usd"
      :coinPercent="coin.percent_change_24h"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CoinCard from './CoinCard.vue'

export default {
  components: {
    CoinCard
  },
  setup() {
    const coins = ref([])
    const filteredCoins = ref([])

    onMounted(() => {
      axios
        .get('https://api.coinlore.net/api/tickers/')
        .then((response) => {
          coins.value = response.data.data
          filteredCoins.value = coins.value.filter((coin) =>
            ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)
          )
        })
        .catch((error) => {
          console.error('An error occurred while fetching the coins:', error)
        })
    })

    return {
      coins,
      filteredCoins
    }
  }
}
</script>
<style scoped>
.coin-cards-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-bottom: 70px;
}

@media (min-width: 600px) {
  .coin-cards-wrapper {
    margin-bottom: 90px;
  }
}
</style>
