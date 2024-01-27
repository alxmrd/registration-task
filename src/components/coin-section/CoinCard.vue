<template>
  <div class="coin-card">
    <div class="coin-card-header">
      <div class="coin-card-header-icon"><img :src="coinIcon" alt="Icon" /></div>
      <div class="coin-card-header-text">{{ coinSymbol }}</div>
      <div class="coin-card-header-badge">
        <div class="coin-card-header-badge-text">{{ coinName }}</div>
      </div>
    </div>
    <div class="inner-block"></div>
    <div class="coin-card-footer">
      <div class="coin-card-footer-text">{{ coinPrice }}</div>
      <div :class="coinPercent >= 0 ? 'positive-percentage-text' : 'negative-percentage-text'">
        <font-awesome-icon :icon="faArrowUp" v-if="coinPercent >= 0" />
        <font-awesome-icon :icon="faDownArrow" v-else />
        {{ coinPercent }}%
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleChevronUp as upArrow } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronDown as downArrow } from '@fortawesome/free-solid-svg-icons'
import bitcoinIcon from '@/assets/bitcoin-icon.svg'
import bitcoinCashIcon from '@/assets/bitcoin-cash-icon.svg'
import litecoinIcon from '@/assets/litecoin-icon.svg'
import ethereumIcon from '@/assets/ethereum-icon.svg'
import xrpIcon from '@/assets/xrp-icon.svg'

export default {
  name: 'CoinCard',
  components: {
    FontAwesomeIcon
  },
  props: {
    coinName: String,
    coinSymbol: String,
    coinPrice: String,
    coinPercent: String
  },
  setup(props) {
    const faArrowUp = ref(upArrow)
    const faDownArrow = ref(downArrow)
    const icons = {
      bitcoin: bitcoinIcon,
      'bitcoin cash': bitcoinCashIcon,
      litecoin: litecoinIcon,
      ethereum: ethereumIcon,
      xrp: xrpIcon
    }
    const coinIcon = computed(() => icons[props.coinName.toLowerCase()] || bitcoinIcon)

    return {
      faArrowUp,
      faDownArrow,
      coinIcon
    }
  }
}
</script>

<style scoped>
.coin-card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  align-self: flex-start;
  padding-left: 16px;
  color: #fff;
}
.coin-card-header-icon {
  justify-content: center;
  display: flex;
}

.coin-card-header-badge {
  border-radius: 3.816px;
  background: #fff8d6;
  height: 15px;
}

.coin-card-header-badge-text {
  color: #000;
  text-shadow: 0px 0px 65.82px #ffc255;
  font-family: 'Roboto', sans-serif;
  font-size: 8.585px;
  font-weight: 500;
  line-height: 120%;
  padding: 2px 6px 4px 6px;
}

.coin-card-header-text {
  text-shadow: 0px 0px 65.82px #ffc255;
  font-family: 'Roboto', sans-serif;
  font-size: 13.355px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.026px */
}

.coin-card {
  width: 204px;
  height: 150px;
  border-radius: 14.309px;
  border: 0.954px solid rgba(167, 167, 167, 0.2);
  background: rgba(140, 140, 140, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.coin-card-footer-text {
  margin-bottom: 8px;
  color: #fff;
  text-shadow: 0px 0px 65.82px #ffc255;
  font-family: Roboto;
  font-size: 19.078px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 22.894px */
}

.coin-card-footer {
  align-self: flex-start;
  padding-left: 16px;
}

.negative-percentage-text {
  color: #ffa3a6;
  text-shadow: 0px 0px 65.82px #ffc255;
  font-family: 'Roboto', sans-serif;
  font-size: 13.355px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.026px */
}

.positive-percentage-text {
  color: #b1ffc2;
  text-shadow: 0px 0px 65.82px #ffc255;
  font-family: 'Roboto', sans-serif;
  font-size: 13.355px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.026px */
}

.inner-block {
  margin-bottom: 14px;
  width: 177px;
  height: 2px;
  opacity: 0.15;
  background: #fff;
}
</style>
