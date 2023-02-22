<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col>
          <div class="grid-layout footer__top">
            <div class="footer__about">
              <a href="/">
                <v-img src="~@/assets/logo.svg" height="43" max-width="150" :transition="false" />
              </a>

              <p class="text-small footer__text mt-5">
                Avalon is a team of IT professionals who will develop the best solution for each of your projects.
                Our 10+ years of experience allows us to take on any complex task and do it with confidence,
                implementing any software.
              </p>
            </div>

            <nav class="footer__navigation">
              <p class="footer__list-title">Pages</p>

              <ul class="footer__navigation-list">
                <li class="footer__navigation-item">
                  <a href="/" class="footer__navigation-link">Home</a>
                </li>
                <li class="footer__navigation-item">
                  <router-link class="footer__navigation-link" :to="{ name: 'about' }">About</router-link>
                </li>
                <li class="footer__navigation-item">
                  <router-link class="footer__navigation-link" :to="{ name: 'services' }">Services</router-link>
                </li>
                <li class="footer__navigation-item">
                  <router-link class="footer__navigation-link" :to="{ name: 'contact' }">Contact</router-link>
                </li>
              </ul>
            </nav>

            <div class="footer__subscribe">
              <p class="footer__list-title">
                Are you interested in software development?
              </p>

              <p class="text-small footer__text mt-5">
                Please leave your contacts and we will discuss your project
              </p>

              <div class="form-wrapper mt-5">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <form @submit.prevent="handleSubmit(onSubmit)" class="footer__form">
                    <div class="form-field">
                      <ValidationProvider name="E-mail" rules="required|email|min:8|max:30" v-slot="{ errors }" class="form-input__wrapper">
                        <input
                          v-model="email"
                          class="form-input footer__input"
                          :class="errors[0] && 'form-input--error'"
                          type="email"
                          placeholder="Email address"
                        >
                        <span class="error-message">{{ errors[0] }}</span>
                      </ValidationProvider>

                      <button class="btn btn--blue footer__btn" type="submit">Send</button>
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="footer__bottom">
            <div class="footer__copyright">
              <p>
                @ All rights reserved. Avalon soft d.o.o.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
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