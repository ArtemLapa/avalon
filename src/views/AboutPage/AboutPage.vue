<template>
  <div>
    <BlockAboutUs />
    <BlockOurStory />
    <BlockOurValues />
    <BlockMission />
    <TheContact />
    <TheFooter />
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  components: {
    BlockAboutUs: () => import('@/views/AboutPage/BlockAboutUs'),
    BlockOurStory: () => import('@/views/AboutPage/BlockOurStory'),
    BlockOurValues: () => import('@/views/AboutPage/BlockOurValues'),
    BlockMission: () => import('@/views/AboutPage/BlockMission'),
    TheContact: () => import('@/components/layouts/TheContact'),
    TheFooter: () => import('@/components/layouts/TheFooter')
  }
}
</script>