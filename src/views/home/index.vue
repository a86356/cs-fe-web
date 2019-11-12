<template>
  <div>

    <contactQQ></contactQQ>
    <TopNav></TopNav>
    <div style="height: 55px"></div>
    <router-view/>
    <FooterIndex></FooterIndex>

  </div>
</template>

<script>
    import FooterIndex from '@/components/footer/index'
    import contactQQ from '@/components/contact/index'
    import TopNav from '@/components/navbar/index'

    export default {

        methods: {
        },
        components:{
            FooterIndex,
            contactQQ,
            TopNav
        }
    };
</script>

<style lang="less" scoped>

</style>
