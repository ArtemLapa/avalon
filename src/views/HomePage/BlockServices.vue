<template>
  <section class="services">
    <v-container>
      <v-row>
        <v-col>
          <div class="services__container grid-layout">
            <div class="services__content-grid">
              <div class="subtitle-chip">Services</div>
              <h2 class="section-title">Services we offer</h2>
              <p class="section-text mt-4">
                Whether you need a new website, a revamp of your current site's design, custom software
                to streamline your business processes, or a mobile app to reach your customers on-the-go,
                we have the skills and expertise to deliver top-quality results.
              </p>
              <router-link class="btn btn--blue mt-5" :to="{ name: 'services' }">All services</router-link>
            </div>

            <div class="services__content-grid services__content-grid--cards">
              <div class="services__cards-grid">
                <div class="services__cards-wrapper">
                  <div class="services__card">
                    <router-link :to="{ name: 'web-development'}">
                      <div class="services__icon-wrapper">
                        <v-img src="~@/assets/icons/icon-1.svg" width="60" height="60"/>
                      </div>

                      <div class="services__card-content">
                        <h3 class="services__card-title">Websites development</h3>
                        <p class="services__card-text">
                          From simple corporate platforms to complex enterprise systems,
                          our team can handle any web development request and deliver
                          a solution that fully meets your expectations.
                        </p>
                      </div>

                      <v-img src="~@/assets/icons/chevron-right.svg" width="32" height="32" class="services__card-arrow" />
                    </router-link>
                  </div>

                  <div class="services__card">
                    <router-link :to="{ name: 'design'}">
                      <div class="services__icon-wrapper">
                        <v-img src="~@/assets/icons/icon-2.svg" width="60" height="60"/>
                      </div>

                      <div class="services__card-content">
                        <h3 class="services__card-title">UI/UX Design</h3>
                        <p class="services__card-text">
                          Our company delivers UI UX design and development services.
                          The main purpose of the following area of development is increasing customer gratification
                          with interesting products as well as improving usability and availability.
                        </p>
                      </div>

                      <v-img src="~@/assets/icons/chevron-right.svg" width="32" height="32" class="services__card-arrow" />
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="services__cards-grid">
                <div class="services__cards-wrapper">
                  <div class="services__card">
                    <router-link :to="{ name: 'custom-software-development' }">
                      <div class="services__icon-wrapper">
                        <v-img src="~@/assets/icons/icon-3.svg" width="60" height="60"/>
                      </div>

                      <div class="services__card-content">
                        <h3 class="services__card-title">Custom Software development</h3>
                        <p class="services__card-text">
                          Avalon builds custom solutions from scratch, ensuring their seamless integration
                          with existing environments and systems.
                        </p>
                      </div>

                      <v-img src="~@/assets/icons/chevron-right.svg" width="32" height="32" class="services__card-arrow" />
                    </router-link>
                  </div>

                  <div class="services__card">
                    <router-link :to="{ name: 'mobile-development' }">
                      <div class="services__icon-wrapper">
                        <v-img src="~@/assets/icons/icon-4.svg" width="60" height="60"/>
                      </div>

                      <div class="services__card-content">
                        <h3 class="services__card-title">Mobile Apps development</h3>
                        <p class="services__card-text">
                          Our vast expertise covers full-pledged software development services for mobile platforms:
                          from business analysis and prototyping to quality assurance
                          and further deployment of mobile applications.
                        </p>
                      </div>

                      <v-img src="~@/assets/icons/chevron-right.svg" width="32" height="32" class="services__card-arrow" />
                    </router-link>
                  </div>
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
  name: 'BlockServices'
}
</script>