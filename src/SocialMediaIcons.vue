<template>
  <div class="social-media-icons">
    <font-awesome-icon :icon="['fab', 'facebook']" />
    <font-awesome-icon :icon="['fab', 'twitter']" />
    <font-awesome-icon :icon="['fab', 'youtube']" />
    <font-awesome-icon :icon="['fab', 'instagram']" />
    <font-awesome-icon :icon="['fab', 'linkedin']" />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.social-media-icons {
  display: flex;
  gap: 14px;
}
</style>
