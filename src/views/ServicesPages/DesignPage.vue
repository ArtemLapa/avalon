<template>
  <div>
    <InnerPageTemplate
      :title="title"
      :description="description"
      :headingImage1="bgImage1"
      :headingImage2="bgImage2"
      :headingImage3="bgImage3"
      :firstSection="sectionOne"
      :secondSection="sectionTwo"
    />
    <TheContact />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DesignPage',
  components: {
    InnerPageTemplate: () => import('@/views/ServicesPages/InnerPages/InnerPageTemplate'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
  data: () => ({
    title: 'UI/UX Design',
    description: 'Avalon offers UI/UX design services for startups and established businesses, and delivers mobile and web products that impact and capture audiences.\n' +
      '\n' +
      'Establish a strong business identity with state-of-the-art UI/UX design services.\n',
    bgImage1: require('@/assets/images/service-inner/design/design-1.png'),
    bgImage2: require('@/assets/images/service-inner/design/design-2.png'),
    bgImage3: require('@/assets/images/service-inner/design/design-3.png'),
    sectionOne: {
      title: 'What’s included in the service',
      description: 'In order to design, build, and launch your new successful and usable mobile app or website we implement the following process broken down into 6 distinct steps and honed over a decade of design experience. The first aim and the gateway intention of any design are to engage a user. We thoroughly study every new case to find that unique trait to build upon.' +'<br>' +
        'We create modern interfaces, develop innovative digital products for business and entertainment, and create brands, websites, applications and other software. Our UI/UX design services are focused on helping you provide your vision and showcase your products to make more significant profits.\n',
      image: require('@/assets/images/service-inner/design/section-1.png'),
      list: []
    },
    sectionTwo: {
      title: 'What results can you expect?',
      image: require('@/assets/images/service-inner/design/section-2.png'),
      description: 'Avalon is a company that gives your product an original vision. We believe that great design forms a bridge between stakeholders and customers.' + '<br>' + ' Thanks to our developments in the field of UI/UX Design, we will be able to create a convenient interface for a mobile application, website or any other software.',
      list: []
    },
  })
}
</script>