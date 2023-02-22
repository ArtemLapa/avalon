<template>
  <section class="contacts">
    <v-container>
      <v-row>
        <v-col>
          <div class="contacts__grid grid-layout mb-7">
            <div class="contacts__content-grid">
              <div class="subtitle-chip">Contact</div>
              <h2 class="section-title">Get in touch with us</h2>
              <p class="section-text mt-4">
                You can get a free consultation on software development for your business
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="contacts__form-wrapper">
            <div class="contacts__form-heading">
              <h2 class="heading-small mb-4">Drop us a message</h2>
              <p class="max-width-content max-width-content--medium text-small">
                We will get back to you as soon as possible.
              </p>
            </div>

            <div class="contacts__main-content">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)" class="contacts__form">
                  <div class="mb-2">
                    <ValidationProvider name="Full Name" rules="required|alpha_spaces|min:2|max:40" v-slot="{ errors }">
                      <input v-model="formData.fullName" type="text" class="contacts__input form-input" :class="errors[0] && 'form-input--error'" placeholder="Full Name">
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-2">
                    <ValidationProvider name="E-mail" rules="required|email|min:8|max:30" v-slot="{ errors }">
                      <input v-model="formData.email" type="email" class="contacts__input form-input" :class="errors[0] && 'form-input--error'" placeholder="Email address">
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-2">
                    <ValidationProvider name="Telephone" :rules="{ required: true, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ }" v-slot="{ errors }">
                      <input v-model="formData.telephone" type="tel" class="contacts__input form-input" :class="errors[0] && 'form-input--error'" placeholder="Phone number">
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-2">
                    <ValidationProvider name="Message" rules="required|min:6|max:180" v-slot="{ errors }">
                      <textarea v-model="formData.message" maxlength="5000" placeholder="Message.." :class="errors[0] && 'form-input--error'" class="contacts__input form-input"/>
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div>
                    <button type="submit" class="btn btn--blue">Send</button>
                  </div>
                </form>
              </ValidationObserver>
            </div>

            <div class="contacts__info">
              <div class="contacts__info-item">
                <div class="contacts__icon-wrapper">
                  <v-icon size="18" color="#5cc97b">mdi-email</v-icon>
                </div>

                <div class="contacts__content-wrapper">
                  <a href="mailto:mail@avalonsofts.com">mail@avalonsofts.com</a>
                  <div>Help email support</div>
                </div>
              </div>
              <div class="contacts__info-item">
                <div class="contacts__icon-wrapper">
                  <v-icon size="18" color="#ff6e35">mdi-map-marker</v-icon>
                </div>

                <div class="contacts__content-wrapper">
                  <a href="https://goo.gl/maps/Bz9DggQpSLfArotcA" target="_blank">Pile I. 23, Zagreb, Croatia</a>
                  <div>Our office address</div>
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
  name: 'BlockContact',
  data: () => ({
    formData: {
      fullName: '',
      email: '',
      telephone: '',
      message: ''
    }
  }),
  methods: {
    onSubmit () {
      console.log(this.formData)
    }
  }
}
</script>