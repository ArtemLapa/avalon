<template>
  <section class="testimonials">
    <v-container>
      <v-row>
        <v-col>
          <div class="grid-layout testimonials__content-grid">
            <div class="testimonials__title-content">
              <div class="subtitle-chip">Testimonials</div>
              <h2 class="section-title">See what our clients say</h2>
              <p class="section-text mt-4">
                Our clients are what we are proud of.
              </p>
            </div>
            <div class="testimonials__btn-wrapper">
              <router-link class="btn btn--blue mt-5" :to="{ name: 'contact' }">Get in touch</router-link>
            </div>
          </div>

          <ul class="grid-layout testimonials__list">
            <li
              v-for="(item, index) in testimonials"
              :key="index"
              class="testimonials__item"
            >
              <div class="testimonials__card">
                <div class="testimonials__top-content">
                  <div
                    class="testimonials__photo"
                    :class="'testimonials__photo--' + ++index"
                    :style="{ backgroundImage: `url(${item.photo})` }"
                  />
                  <div class="grid-layout testimonials__name-wrapper">
                    <p class="testimonials__name">{{ item.name }}</p>
                    <p class="testimonials__company">{{ item.company }}</p>
                  </div>
                </div>

                <h3 class="testimonials__card-title">“{{ item.title }}”</h3>

                <p class="testimonials__card-text">{{ item.comment }}</p>

                <div class="testimonials__rating-wrapper">
                  <img src="~@/assets/icons/rating-star.svg" class="testimonials__rating-img" alt="star" />
                  <img src="~@/assets/icons/rating-star.svg" class="testimonials__rating-img" alt="star" />
                  <img src="~@/assets/icons/rating-star.svg" class="testimonials__rating-img" alt="star" />
                  <img src="~@/assets/icons/rating-star.svg" class="testimonials__rating-img" alt="star" />
                  <img src="~@/assets/icons/rating-star.svg" class="testimonials__rating-img" alt="star" />
                </div>
              </div>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockTestimonials',
  data: () => ({
    testimonials: [
      {
        photo: require('@/assets/images/testimonials-1.png'),
        name: 'John Irvin',
        company: '',
        title: 'I recommend this agency',
        comment: 'Cooperation with Avalon has brought visible benefits to my business.' +
          ' We ordered the development of a CRM system for our company. It’s very important for us that all the' +
          ' nuances and aspects of our sphere are observed. The result exceeded all our expectations.' +
          ' Very user-friendly interface, there are no problems to use.'
      },
      {
        photo: require('@/assets/images/testimonials-2.png'),
        name: 'Mark Cogan',
        company: '',
        title: 'The support is awesome',
        comment: 'We are very pleased with the cooperation. Avalon employees were always in touch,' +
          ' the projects were delivered on time with high quality.\n'
      },
      {
        photo: require('@/assets/images/testimonials-3.png'),
        name: 'Chris Miller',
        company: '',
        title: 'A game changer for us',
        comment: 'Development of the highest quality. Our project was very complex and long, and it was' +
          ' difficult for us to find a responsible contractor for its execution.' +
          ' The Avalon company coped with the goal. Thank you.'
      }
    ]
  })
}
</script>