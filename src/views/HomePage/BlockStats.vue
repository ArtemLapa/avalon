<template>
  <section class="stats">
    <v-container>
      <v-row>
        <v-col>
          <div class="grid-layout stats__container">
            <ul class="grid-layout stats__list">
              <li
                v-for="(item, index) in statsInfo"
                :key="index"
                class="stats__item"
              >
                <div class="stats__item-content">
                  <h3>{{ item.statNumber }}</h3>
                  <p>{{ item.statDescription }}</p>
                </div>
              </li>
            </ul>

            <div class="stats__image"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockStats',
  data: () => ({
    statsInfo: [
      {
        statNumber: '15+',
        statDescription: 'Years of experience allows our company to leverage a rich technological ' +
          'and business management expertise to complete projects of various complexity levels most efficiently and quickly.'
      },
      {
        statNumber: '300+',
        statDescription: 'IT professionals. Besides developers, our team consists of business analysts,' +
          ' UI/UX designers, QA specialists, and DevOps engineers.'
      },
      {
        statNumber: '93%',
        statDescription: 'Recurring customers. We are recommended as a reliable IT company.'
      },
      {
        statNumber: '600+',
        statDescription: 'Delivered projects. As a software development company,' +
          ' Avalon creates a wide range of applications for achieving various business goals.'
      }
    ]
  })
}
</script>