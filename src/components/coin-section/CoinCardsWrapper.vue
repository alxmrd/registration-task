<template>
  <div>
    <CoinCard
      v-for="(coin, index) in filteredCoins"
      :key="index"
      :coinName="coin.name"
      :coinText="coin.text"
      :coinBadge="coin.badge"
      :coinValue="coin.value"
      :coinPercent="coin.percent"
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
            ['ETC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)
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
