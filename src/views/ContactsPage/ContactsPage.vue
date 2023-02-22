<template>
  <div>
    <BlockContact />
    <TheFaq
      title="Frequently asked question"
      :faq="contactsFaq"
    />
    <TheContact />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  components: {
    BlockContact: () => import('@/views/ContactsPage/BlockContact'),
    TheFaq: () => import('@/components/layouts/TheFaq'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
  data: () => ({
    contactsFaq: [
      {
        heading: 'Will I have a personal manager to contact on project issues?',
        isOpen: false,
        answer: 'Of course. For each customer and project, we have assigned responsible people with whom you contact.\n' +
          'Your personal manager will always be in touch with you, and he will report on what stages of development the project is at. You can also communicate your wishes to the development team through it.\n'
      },
      {
        heading: 'How can I control the progress of a project?',
        isOpen: false,
        answer: 'Thanks to a personal manager, you can ask at any time at what stage the project\'s development is, and get a comprehensive answer. When we take an order, we make sure to specify the terms of its implementation. And at the intermediate stages of development, the customer always has the opportunity to see the result.'
      },
      {
        heading: 'Why should I consider your software development company as a partner?',
        isOpen: false,
        answer: 'Thanks to our extensive experience in software development, we already have an established name that we are proud of. Clients choose us and recommend us to others.\n' +
          'Our distinguishing feature is teamwork and an integrated approach. We are only satisfied with the perfect result, so the whole team is fully involved in the development.\n'
      },
      {
        heading: 'Is it possible to further post-maintain the project by your team?',
        isOpen: false,
        answer: 'Of course. We will be happy to take care of the maintenance of the site or application, and you will not need to worry about it.\n'
      },
      {
        heading: 'What makes your software development process different?',
        isOpen: false,
        answer: 'Comprehensive approach and strategy. This is what we are really proud of. First, we analyze, identify the client’s requirements, and make a strategy for developing the project. So that it contains exactly what the client needs and guarantees 100% success. We have an individual approach to each task, making us industry leaders'
      }
    ]
  })
}
</script>