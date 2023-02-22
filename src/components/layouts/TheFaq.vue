<template>
  <section class="faq">
    <v-container>
      <v-row>
        <v-col>
          <div>
            <div class="faq__heading-section">
              <div class="subtitle-chip">FAQ</div>
              <h2 class="section-title">{{ title }}</h2>
            </div>

            <div class="faq__grid grid-layout">
              <div
                v-for="(item, index) in faq"
                :key="index"
                class="faq__card"
                @click="isActiveCard(item)"
              >
                <div class="faq__card-title">
                  <div class="d-flex align-center justify-start">
                    <div class="faq__number mr-5">{{ index + 1 }}.</div>
                    <h3 class="faq__card-heading heading-xsmall">{{ item.heading }}</h3>
                  </div>

                  <div
                    :class="item.isOpen ? 'faq__plus-wrapper--active' : ''"
                    class="faq__plus-wrapper"
                  >
                    <div class="faq__icon faq__icon--1"/>
                    <div class="faq__icon faq__icon--2"/>
                  </div>
                </div>

                <div
                  class="faq__answer"
                  :class="item.isOpen ? 'faq__answer--active' : ''"
                >
                  <div class="faq__space" />
                  <p class="text-small">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockFaq',
  props: {
    title: {
      type: String,
      default: 'Frequently asked question'
    },
    faq: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    isActiveCard (item) {
      item.isOpen = !item.isOpen
    }
  }
}
</script>