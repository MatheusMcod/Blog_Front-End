<template>
    <div>
        <nav class="bg-gray-900 text-white py-4 px-6 shadow md:flex justify-between items-center">
            <div class="flex items-center px-6">
                <img src="../assets/images/logo.png" alt="" class="w-20">
                <span class="text-xl pl-6">
                    Desenvolvedor Web
                </span>
            </div>
            
            <span @click="MenuOpen" class="absolute md:hidden right-6 top-8 cursor-pointer text-4xl">
                <font-awesome-icon :icon="['fas', 'bars']" v-if="!open"/>
                <font-awesome-icon :icon="['fas', 'x']" v-else/>
            </span>
            
            <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 mt-4.5 md:static bg-gray-900 absolute md:w-auto w-full top-30 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
                <li class="md:mx-5 md:my-0 my-6 border-l-2 border-primary rounded md:px-3 px-3 py-1.5 hover:bg-cyan-900 duration-200" v-for="Links in links" :key="Links.name"><a href="Links.link" class="text-xl">{{ Links.name }}</a></li>
                <li class="my-5"><ButonStyle>Register</ButonStyle></li>
                <li><ButonStyle>Login</ButonStyle></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue';
import ButonStyle from './ButonStyle.vue';

export default {
    components: {
        ButonStyle
    },
    setup() {
        let open = ref(false);
        let links =  [
            {name: "Home", link: "#"},
            {name: "Projetos", link: "#"},
            {name: "Contato", link: "#"},
            {name: "Blog", link: "#"},
        ];

        function MenuOpen() {
            open.value = !open.value;
        }

        return{links, open, MenuOpen};
    }
     
}
</script>
