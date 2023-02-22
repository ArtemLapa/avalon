<template>
  <section class="our-values">
    <v-container>
      <v-row>
        <v-col>
          <div>
            <div class="grid-layout our-values__text-wrapper">
              <div class="our-values__content-wrapper">
                <div class="subtitle-chip">Our Values</div>

                <div class="max-width-content max-width-content--large">
                  <h2 class="section-title">The core values behind our work</h2>
                  <p class="section-text mt-4">
                    Our team rests on the unshakable values that unite and inspire us. We believe that all our
                    IT solutions can change the world and make people's lives better and more comfortable.
                  </p>
                </div>
              </div>

              <div class="our-values__btn-wrapper">
                <router-link class="btn btn--blue" :to="{ name: 'contact' }">Get in touch</router-link>
              </div>
            </div>

            <div class="grid-layout our-values__cards-wrapper">
              <div class="our-values__card">
                <div class="our-values__icon-wrapper">
                  <div class="grid-layout our-values__icon-grid">
                    <div class="our-values__icon our-values__icon--1" />
                    <div class="our-values__icon" />
                    <div class="our-values__icon our-values__icon--3" />
                    <div class="our-values__icon" />
                  </div>
                </div>

                <h3 class="heading-small our-values__card-heading">Innovation</h3>

                <p class="our-values__card-text">
                  We introduce the latest technologies and solutions into our work.
                </p>
              </div>

              <div class="our-values__card">
                <div class="our-values__icon-wrapper">
                  <div class="grid-layout our-values__icon-grid">
                    <div class="our-values__icon our-values__icon--1" />
                    <div class="our-values__icon our-values__icon--2" />
                    <div class="our-values__icon our-values__icon--3" />
                    <div class="our-values__icon" />
                  </div>
                </div>

                <h3 class="heading-small our-values__card-heading">Growth</h3>

                <p class="our-values__card-text">
                  We are constantly growing and developing together with the team and customers.
                </p>
              </div>

              <div class="our-values__card">
                <div class="our-values__icon-wrapper">
                  <div class="grid-layout our-values__icon-grid">
                    <div class="our-values__icon our-values__icon--1" />
                    <div class="our-values__icon our-values__icon--2" />
                    <div class="our-values__icon our-values__icon--3" />
                    <div class="our-values__icon our-values__icon--4" />
                  </div>
                </div>

                <h3 class="heading-small our-values__card-heading">Result</h3>

                <p class="our-values__card-text">
                  Consistently high results are what our clients value us for.
                </p>
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
  name: 'BlockOurValues'
}
</script>