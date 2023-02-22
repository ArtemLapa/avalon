<template>
  <section class="contact">
    <v-container>
      <v-row>
        <v-col>
          <div class="contact__content-wrapper">
            <div class="grid-layout contact__grid-layout">
              <div class="contact__heading-wrapper">
                <h3 class="heading-small text-center">Ready for a new step in business development?</h3>
                <p class="section-text text-center">
                  View our services or click for a detailed consultation
                </p>
              </div>

              <div class="contact__btns-wrapper">
                <router-link class="btn btn--blue" :to="{ name: 'services' }">Our services</router-link>
                <router-link class="btn btn--gray" :to="{ name: 'contact' }">Contact</router-link>
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
  name: 'BlockContact'
}
</script>