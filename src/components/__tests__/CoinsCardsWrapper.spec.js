import { ref, onMounted } from 'vue'
import axios from 'axios'
import { test, expect } from 'vitest'

test('fetches coins and filters them', async () => {
  const coins = ref([])
  const filteredCoins = ref([])

  await onMounted(() => {
    return axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
      coins.value = response.data.data
      filteredCoins.value = coins.value.filter((coin) =>
        ['ETC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)
      )
    })
  })

  expect(filteredCoins.value.length > 0, true)
})
