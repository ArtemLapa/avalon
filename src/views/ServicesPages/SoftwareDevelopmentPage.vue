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
  name: 'SoftwareDevelopmentPage',
  components: {
    InnerPageTemplate: () => import('@/views/ServicesPages/InnerPages/InnerPageTemplate'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
  data: () => ({
    title: 'Software development',
    description: 'We provide software product development services for startups from all over the world. Our company has 7 years of experience in transforming unique business ideas into top-notch market-ready solutions.',
    bgImage1: require('@/assets/images/service-inner/software/soft-1.png'),
    bgImage2: require('@/assets/images/service-inner/software/soft-2.png'),
    bgImage3: require('@/assets/images/service-inner/software/soft-3.png'),
    sectionOne: {
      title: 'What’s included in the service',
      description: '',
      image: require('@/assets/images/service-inner/software/section-1.png'),
      list: [
        '<b>'+'Analysis'+'</b>' + '<br>' +'Deep research of product/service background. Competitor investigation to create a high-effective solution.',
        '<b>'+'Design'+'</b>' + '<br>' +'Following the latest UX/UI trends in design. Creating outstanding apps, websites, games with high conversion rates.',
        '<b>'+'Coding'+'</b>' + '<br>' +'Using cutting edge technologies and permanent code review for fast and flawless project performance.\n',
        '<b>'+'Deploy'+'</b>' + '<br>' +'Cloud or server configuration according to project requirements. Uploading website or app to the production server.',
        '<b>'+'Supportscheduling'+'</b>' + '<br>' +'Providing robust software work, fixing and offering new features for upgrade. Marketing services for brand promotion.'
      ]
    },
    sectionTwo: {
      title: 'What results can you expect?',
      image: require('@/assets/images/service-inner/software/section-2.png'),
      description: 'Digital transformation is replacing more and more outdated “analog” capabilities and functions. To order the development of software or a site today, it is required for an ambitious start-up, for a growing commercial company thinking about increasing sales and transferring services online, and for a large organization that decided to optimize its business strategy.'+ '<br>' +
        'Avalon will analyze all software development requirements for your business. Develop an individual development plan, create a user-friendly design, and make it all come true.',
      list: []
    },
  })
}
</script>