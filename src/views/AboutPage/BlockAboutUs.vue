<template>
  <section class="about-us">
    <v-container>
      <v-row>
        <v-col>
          <div class="about-us__content-wrapper">
            <div class="grid-layout about-us__photo-content">
              <div class="about-us__image-wrapper">
                <div class="about-us__image about-us__image--1" />
                <div class="grid-layout dots-wrapper about-us__dots">
                  <div v-for="index in 64" :key="index" class="dot" />
                </div>
              </div>

              <div class="about-us__image about-us__image--2" />

              <div class="about-us__image about-us__image--3" />
            </div>

            <div class="about-us__section-content">
              <div class="subtitle-chip about-us__chip">About Us</div>

              <div class="about-us__text-content max-width-content max-width-content--large">
                <h2 class="section-title heading-medium about-us__title">
                  We design, build and deliver custom software solutions that guarantee success.
                </h2>
                <p class="section-text about-us__text mt-4">
                  Drive business growth and customer satisfaction through digital solutions that are smart,
                  secure, and data-driven.
                </p>
              </div>

              <div class="form-wrapper mx-auto">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(onSubmit)" class="d-flex justify-center flex-column align-center">
                    <div class="form-field">
                      <ValidationProvider name="E-mail" rules="required|email|min:8|max:30" v-slot="{ errors }">
                        <input
                          v-model="email"
                          class="form-input footer__input"
                          :class="errors[0] && 'form-input--error'"
                          type="email"
                          placeholder="Email address"
                        >
                        <span class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>

                      <button class="btn btn--blue footer__btn" type="submit">Subscribe</button>
                    </div>
                  </form>
                </ValidationObserver>
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
  name: 'BlockAboutUs',
  data: () => ({
    email: ''
  }),
  methods: {
    onSubmit () {
      console.log(this.formData)
    }
  }
}
</script>