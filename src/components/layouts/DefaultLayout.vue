<template>
    
    <NavigationBar></NavigationBar>
    <slot></slot>
    <FooterBar></FooterBar>
    
</template>

<script>
    import NavigationBar from '@/views/NavigationBar';
    import FooterBar from '@/views/FooterBar.vue';

    export default {
        components: {
            NavigationBar,
            FooterBar
        }
    }
</script>