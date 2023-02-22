<template>
  <section class="services services--page">
    <v-container>
      <v-row>
        <v-col>
          <div class="services__container services__container--page grid-layout">
            <div class="services__content-grid">
              <div class="subtitle-chip">Services</div>
              <h2 class="section-title">{{ title }}</h2>
              <p class="section-text mt-4">{{ description }}</p>
            </div>
            <div class="services__content-grid services__content-grid--btn">
              <router-link :to="{ name: 'contact' }" class="btn btn--blue mt-5">Contact Us</router-link>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="grid-layout services__cards-wrapper services__cards-wrapper--page">
            <div
              v-for="(item, index) in cards"
              :key="index"
              class="services__card"
            >
              <router-link :to="{ name: item.routName }">
                <div class="services__icon-wrapper">
                  <v-img :src="item.icon" width="60" height="60"/>
                </div>

                <div class="services__card-content">
                  <h3 class="services__card-title">{{ item.title }}</h3>
                  <p class="services__card-text">{{ item.description }}</p>
                </div>

                <v-img src="~@/assets/icons/chevron-right.svg" width="32" height="32" class="services__card-arrow" />
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockServices',
  props: {
    title: {
      type: String,
      default: 'Our Services'
    },
    description: {
      type: String
    },
    btnLink: {
      type: String
    },
    cards: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>