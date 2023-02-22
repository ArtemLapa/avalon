<template>
  <v-container>
    <nav class="navigation">
      <div class="d-flex align-center justify-space-between py-6">
        <a href="/" class="navigation__logo-link">
          <v-img src="~@/assets/logo.svg" height="43" max-width="150" :transition="false" />
        </a>

        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="/" class="navigation__link">Home</a>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'services' }">Services</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="navigation__item">
            <router-link class="btn btn--blue" :to="{ name: 'contact' }">Get started</router-link>
          </li>
        </ul>

        <button
          class="navigation__toggle-btn"
          @click="isActive"
          :class="isActiveMenu ? 'navigation__toggle-btn--active' : ''"
        >
          <span class="navigation__line" />
          <span class="navigation__line" />
        </button>
      </div>

      <div
        class="navigation__menu"
        :style="isActiveMenu ? 'display: block' : 'display: none'"
      >
        <div
          class="navigation__list-wrapper"
          :class="isActiveMenu && 'navigation__list-wrapper--active'"
        >
          <ul class="navigation__list navigation__list--mobile">
            <li class="navigation__item">
              <a href="/" class="navigation__link">Home</a>
            </li>
            <li class="navigation__item">
              <router-link class="navigation__link" :to="{ name: 'services' }">Services</router-link>
            </li>
            <li class="navigation__item">
              <router-link class="navigation__link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li class="navigation__item">
              <router-link class="btn btn--blue" :to="{ name: 'contact' }">Get started</router-link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  </v-container>
</template>

<script>
export default {
  name: 'TheNavigation',
  data: () => ({
    isActiveMenu: false
  }),
  watch: {
    $route () {
      if (this.isActiveMenu) {
        this.isActiveMenu = false
      }
    }
  },
  methods: {
    isActive () {
      this.isActiveMenu = !this.isActiveMenu
    }
  }
}
</script>