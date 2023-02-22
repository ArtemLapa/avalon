<template>
  <section class="service-inner">
    <v-container>
      <v-row>
        <v-col>
          <div class="service-inner__heading-wrapper grid-layout">
            <div class="service-inner__photos-wrapper grid-layout">
              <div class="service-inner__image-wrapper">
                <div
                  class="service-inner__heading-image service-inner__heading-image--1"
                  :style="{backgroundImage: `url(${headingImage1})`}"
                />
                <div class="grid-layout dots-wrapper service-inner__dots">
                  <div v-for="index in 64" :key="index" class="dot" />
                </div>
              </div>
              <div
                class="service-inner__heading-image service-inner__heading-image--3"
                :style="{backgroundImage: `url(${headingImage3})`}"
              />
              <div
                class="service-inner__heading-image service-inner__heading-image--2"
                :style="{backgroundImage: `url(${headingImage2})`}"
              />
            </div>

            <div class="service-inner__heading-text">
              <div class="service-inner__text-wrapper">
                <div class="subtitle-chip">Service</div>

                <div class="max-width-content max-width-content--large">
                  <h1 class="service-inner__title section-title">{{ title }}</h1>
                  <p class="section-text mt-4">{{ description }}</p>
                </div>

                <router-link :to="{ name: 'contact' }" class="btn btn--blue mt-5">Get in touch</router-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="service-inner__content-wrapper grid-layout mt-block">
            <div class="service-inner__text-content">
              <h3 class="h3 mb-4">{{ firstSection.title }}</h3>
              <p v-if="firstSection.description.length > 0" v-html="firstSection.description"/>
              <ol
                v-if="firstSection.list.length > 0"
                class="service-inner__list"
              >
                <li v-for="(item, index) in firstSection.list" :key="index" class="section-text" v-html="item">
                  {{ item }}
                </li>
              </ol>
            </div>

            <div
              class="service-inner__block-image"
              :style="{backgroundImage: `url(${firstSection.image})`}"
            >
              <div class="grid-layout dots-wrapper service-inner__dots--block-right">
                <div v-for="index in 64" :key="index" class="dot" />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="service-inner__content-wrapper service-inner__content-wrapper--not-revert grid-layout mt-block">
            <div
              class="service-inner__block-image service-inner__block-image--left-borders"
              :style="{backgroundImage: `url(${secondSection.image})`}"
            >
              <div class="grid-layout dots-wrapper service-inner__dots--block-left">
                <div v-for="index in 64" :key="index" class="dot" />
              </div>
            </div>

            <div class="service-inner__text-content">
              <h3 class="h3 mb-4">{{ secondSection.title }}</h3>
              <p v-if="secondSection.description.length > 0" v-html="secondSection.description" />
              <ol
                v-if="secondSection.list.length > 0"
                class="service-inner__list"
              >
                <li v-for="(item, index) in secondSection.list" :key="index" class="section-text" v-html="item">
                  {{ item }}
                </li>
              </ol>
            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ServicesInnerPages',
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
    headingImage1: {
      type: String
    },
    headingImage2: {
      type: String
    },
    headingImage3: {
      type: String
    },
    firstSection: {
      type: Object,
      default: () => ({})
    },
    secondSection: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>