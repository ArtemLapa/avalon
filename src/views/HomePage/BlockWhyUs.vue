<template>
  <section class="why-us">
    <v-container>
      <v-row>
        <v-col>
          <div class="grid-layout why-us__container">
            <div class="why-us__grid-content">
              <div class="grid-layout why-us__image-content">
                <div class="why-us__image-wrapper">
                  <div class="why-us__grid-image-1"/>
                  <div class="grid-layout dots-wrapper why-us__dots">
                    <div v-for="index in 56" :key="index" class="dot" />
                  </div>
                </div>

                <div class="why-us__grid-image-2"/>
              </div>
            </div>

            <div class="why-us__grid-content why-us__grid-content--right">
              <div class="subtitle-chip">Why Choose Us</div>
              <h2 class="section-title">Let’s design and build future-proof digital experiences together</h2>
              <p class="section-text mt-4">
                We work with you to develop a comprehensive evaluation of your software
                development strategy and product architecture.
              </p>
              <ul class="why-us__list">
                <li class="why-us__item">
                  <div class="why-us__item-icon">
                    <v-icon color="#5cc97b" size="18">mdi-check</v-icon>
                  </div>
                  <p>We design technology solutions that fulfill human needs and solve customer problems.</p>
                </li>
                <li class="why-us__item">
                  <div class="why-us__item-icon">
                    <v-icon color="#5cc97b" size="18">mdi-check</v-icon>
                  </div>
                  <p>We have the experience and expertise to handle your IT services needs with understanding and professionalism.</p>
                </li>
                <li class="why-us__item">
                  <div class="why-us__item-icon">
                    <v-icon color="#5cc97b" size="18">mdi-check</v-icon>
                  </div>
                  <p>We forge open, long-lasting partnerships with our customers.</p>
                </li>
                <li class="why-us__item">
                  <div class="why-us__item-icon">
                    <v-icon color="#5cc97b" size="18">mdi-check</v-icon>
                  </div>
                  <p>We focus on excellence and adhere to high standards, clean code, and user-centered solutions.</p>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockWhyUs'
}
</script>