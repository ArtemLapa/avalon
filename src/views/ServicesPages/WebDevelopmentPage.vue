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
  name: 'WebDevelopmentPage',
  components: {
    InnerPageTemplate: () => import('@/views/ServicesPages/InnerPages/InnerPageTemplate'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
  data: () => ({
    title: 'Web development',
    description: 'In our custom website development services, we find solutions that suit a concrete business owner, match business goals and convey the high-quality work and persistence of the web development team.',
    bgImage1: require('@/assets/images/service-inner/web-development/web-1.png'),
    bgImage2: require('@/assets/images/service-inner/web-development/web-2.png'),
    bgImage3: require('@/assets/images/service-inner/web-development/web-3.png'),
    sectionOne: {
      title: 'What’s included in the service',
      description: '',
      image: require('@/assets/images/service-inner/web-development/section-1.png'),
      list: [
        '<b>'+'Production scheduling'+'</b>' + '<br>' +'Planning the works. Structuring the effort. Projecting the budget.',
        '<b>'+'UI/UX design'+'</b>'+ '<br>' +'Designing the foreground pages. Designing the UI elements. Creating User Experience. Delivering the prototype.',
        '<b>'+'Web app development'+'</b>'+ '<br>' +'Writing the back-end code. Writing the compiled code. Documenting the code. Developing UI (front-end).\n',
        '<b>'+'QA/Release'+'</b>'+ '<br>' +'Testing the web app. Fine-tuning the system. Managing the release. Deploying the web application.',
        '<b>'+'Maintenance and support'+'</b>'+ '<br>' +'Planned activity support. Performance testing. Committing enhancements.'
      ]
    },
    sectionTwo: {
      title: 'What results can you expect?',
      image: require('@/assets/images/service-inner/web-development/section-2.png'),
      description: 'Our specialists turn web applications into powerful tools to meet clients requirements and fulfill end-user expectations. Custom web development services go along with the original style inside the web solution.'+ '<br>' +
        'You’ll receive remarkable functionality and an intuitive interface affecting user thoughts.',
      list: []
    },
  })
}
</script>