<template>
  <div class="container">
    <h1 class="header">- Register Here -</h1>
    <p class="description">Join us to celebrate our biggest night of the year.</p>
    <div class="blocks">
      <div class="block first">
        <font-awesome-icon icon="calendar-check" size="2x" />
        <div class="text">12 NOVEMBER 2022</div>
      </div>
      <div class="block second">
        <font-awesome-icon icon="clock" size="2x" />
        <div class="text">16:00 – 23:00</div>
      </div>
      <div class="block third">
        <font-awesome-icon icon="map-marker-alt" size="2x" />
        <div class="text">
          Centara Grand & Bangkok <br />
          Convention Centre, Bangkok
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarCheck, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCalendarCheck, faClock, faMapMarkerAlt)

export default {
  name: 'RegistrationNotice',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
  margin-top: 70px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.header {
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 111.9%;
}

.description {
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
}

.blocks {
  display: flex;
  flex-direction: column;
}

.block {
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;

  flex: 1 0 auto;
  background-color: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 23px;
  padding-bottom: 23px;
}

.text {
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
}

.block.first {
  border-top: none;
}

.block.third {
  border-bottom: none;
}

@media (min-width: 768px) {
  .container {
    margin-bottom: 80px;
    gap: 40px;
  }

  .block {
    height: 150px;
    width: 50px;
  }

  .blocks {
    flex-direction: row;
  }

  .header {
    font-size: 34px;
  }

  .block.first {
    border-top: 1px solid #ffffff;
  }

  .block.third {
    border-bottom: 1px solid #ffffff;
  }

  .block.second {
    width: 20px;
    border: 1px solid #ffffff;
  }
}

@media (min-width: 1200px) {
  .container {
    margin-top: 80px;
    margin-bottom: 90px;
    gap: 45px;
  }

  .description {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }
}
</style>
