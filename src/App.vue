<template>
  <component :is = 'layout'>
    <router-view/>
  </component>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import NavigationBar from './views/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  setup() {
    const defaultLayout = 'default';

    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    console.log(currentRoute.value.meta.layout)

    return {
      layout,
    }
  }
}

</script>