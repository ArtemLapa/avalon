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
  name: 'MobileDevelopmentPage',
  components: {
    InnerPageTemplate: () => import('@/views/ServicesPages/InnerPages/InnerPageTemplate'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
  data: () => ({
    title: 'Mobile development',
    description: 'Now that more than half the world’s internet traffic comes from mobile phones, building mobile apps isn’t just a good business - it’s mission-critical. Сonsumers expect to receive an amazing mobile experience from every business.',
    bgImage1: require('@/assets/images/service-inner/mobile/mobile-1.png'),
    bgImage2: require('@/assets/images/service-inner/mobile/mobile-2.png'),
    bgImage3: require('@/assets/images/service-inner/mobile/mobile-3.png'),
    sectionOne: {
      title: 'What’s included in the service',
      description: '',
      image: require('@/assets/images/service-inner/mobile/section-1.png'),
      list: [
        '<b>'+'Performance'+'</b>' + '<br>' +'We pursue the best possible mobility performance by integrating optimized back end systems, data handling, and fast UIs',
        '<b>'+'Security'+'</b>' + '<br>' +'We manage the risks of today’s mobile environment by using rigorous security standards at every stage of the app development process.',
        '<b>'+'User Experience'+'</b>' + '<br>' +'Mobility is a staple in computing today. We deliver stunning user-centric products with performance to match your business needs.'
      ]
    },
    sectionTwo: {
      title: 'What results can you expect?',
      image: require('@/assets/images/service-inner/mobile/section-2.png'),
      description: 'A well-designed mobile app can be much quicker than a website and it’s more personalized. Apps let you use mobile channels for attracting customers in the most efficient way. Choose a smoother user experience and elevate your brand.',
      list: []
    },
  })
}
</script>