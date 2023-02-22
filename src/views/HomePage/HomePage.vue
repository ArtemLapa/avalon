<template>
  <div>
    <BlockIntro />
    <BlockServices />
    <BlockWhyUs />
    <BlockStats />
    <BlockTestimonials />
    <TheContact />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    TheContact: () => import('@/components/layouts/TheContact'),
    BlockTestimonials: () => import('@/views/HomePage/BlockTestimonials'),
    BlockStats: () => import('@/views/HomePage/BlockStats'),
    BlockWhyUs: () => import('@/views/HomePage/BlockWhyUs'),
    BlockServices: () => import('@/views/HomePage/BlockServices'),
    BlockIntro: () => import('@/views/HomePage/BlockIntro'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  },
}
</script>