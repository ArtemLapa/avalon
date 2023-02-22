<template>
  <section class="intro">
    <v-container>
      <v-row>
        <v-col>
          <div class="grid-layout intro__grid">
            <div class="intro__heading-wrapper">
              <h1 class="text-white intro__heading max-width-content">IT solutions that grow your business.</h1>
              <p class="text-gray intro__text max-width-content">Bring your idea to life with expert-level of Custom Software Development Services</p>

              <div class="intro__btn-wrapper">
                <router-link class="btn btn--blue" :to="{ name: 'services' }">Our services</router-link>
                <router-link class="btn btn--gray" :to="{ name: 'contact' }">Contact us</router-link>
              </div>

              <div class="grid-layout dots-wrapper intro__dots">
                <div v-for="index in 64" :key="index" class="dot" />
              </div>
            </div>

            <div class="intro__grid-photos">
              <div class="intro__grid-image intro__grid-image--1" />
              <div class="intro__grid-image intro__grid-image--2" />
              <div class="intro__grid-image intro__grid-image--3" />
              <div class="intro__grid-image intro__grid-image--4" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockIntro'
}
</script>