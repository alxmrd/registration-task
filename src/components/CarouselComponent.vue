<template>
  <div class="carousel-container">
    <div class="carousel-header">Event Gallery</div>
    <div class="carousel">
      <button @click="scrollLeft" class="arrow"><FontAwesomeIcon icon="angle-left" /></button>
      <div class="blocks-container" ref="blocksContainer">
        <div class="carousel-block" v-for="i in visibleBlocks" :key="i">
          {{ i }}
        </div>
      </div>
      <button @click="scrollRight" class="arrow"><FontAwesomeIcon icon="angle-right" /></button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft, faAngleRight)

export default {
  name: 'CarouselComponent',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const totalBlocks = Array.from({ length: 10 }, (_, i) => i + 1) // array of 10 blocks
    const scrollPosition = ref(0) // current scroll position
    const blocksContainer = ref(null) // reference to the blocks container element
    const visibleBlocksCount = ref(5) // number of visible blocks

    // update the number of visible blocks based on the viewport width
    const updateVisibleBlocksCount = () => {
      if (window.innerWidth <= 600) {
        visibleBlocksCount.value = 2 // mobile
      } else if (window.innerWidth <= 900) {
        visibleBlocksCount.value = 4 // tablet
      } else {
        visibleBlocksCount.value = 5 // desktop
      }
    }

    // update the number of visible blocks when the window is resized
    window.addEventListener('resize', updateVisibleBlocksCount)

    // update the number of visible blocks on component mount
    onMounted(updateVisibleBlocksCount)

    const visibleBlocks = computed(() => {
      let start = scrollPosition.value
      let end = start + visibleBlocksCount.value
      if (end > totalBlocks.length) {
        return totalBlocks.slice(start).concat(totalBlocks.slice(0, end - totalBlocks.length))
      } else {
        return totalBlocks.slice(start, end)
      }
    })

    const scrollLeft = () => {
      if (scrollPosition.value === 0) {
        scrollPosition.value = totalBlocks.length - visibleBlocksCount.value
      } else {
        scrollPosition.value--
      }
    }

    const scrollRight = () => {
      if (scrollPosition.value === totalBlocks.length - visibleBlocksCount.value) {
        scrollPosition.value = 0
      } else {
        scrollPosition.value++
      }
    }

    return { visibleBlocks, scrollLeft, scrollRight, blocksContainer }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: row;
}
.carousel-container {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  background: #f4f4f4;
  height: 275px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.blocks-container {
  display: flex;
  width: calc(164px * 2);
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
}

.carousel-block {
  width: 164px;
  height: 164px;
  line-height: 164px;
  text-align: center;
  background-color: #dadada;
  border: 2px solid #fff;
}

.carousel-block:not(:last-child) {
  margin-right: 10px;
}

.carousel-header {
  color: #252525;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 39px;
  margin-bottom: 40px;
}

.arrow {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #959595;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  line-height: 39px;
}

@media (min-width: 600px) {
  .blocks-container {
    width: calc(164px * 4);
    margin-left: 32px;
    margin-right: 32px;
  }

  .carousel-container {
    height: 344px;
  }

  .carousel-header {
    font-size: 30px;
    margin-bottom: 40px;
  }
  .arrow {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: #959595;
    text-align: center;
    font-size: 45px;
    font-weight: 400;
    line-height: 39px;
  }
}

@media (min-width: 900px) {
  .blocks-container {
    width: calc(164px * 5);
    margin-left: 70px;
    margin-right: 70px;
  }

  .carousel-container {
    height: 390px;
  }

  .carousel-header {
    font-size: 30px;
    margin-bottom: 50px;
  }

  .arrow {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: #959595;
    text-align: center;
    font-size: 45px;
    font-weight: 400;
    line-height: 39px;
  }
}
</style>
