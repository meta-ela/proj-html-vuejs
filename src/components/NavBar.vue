<template>
    <div class="container py-3 fixed-top" >
        <!-- stampare i dati con v-for??? -->
        <nav class="d-flex justify-content-between text-white py-2" v-on:scroll="backgroundNavBar()" :class="{ 'scroll': !view.scroll}">
            <div class="fs-5">
                <span class="colored_box_below_logo">NEX</span> GEN
            </div>
            <div>
                <!-- stampare i dati con v-for??? -->
                <ul class="d-flex gap-5 mb-0">
                    <li v-for="(link, i) in navBarLinks" :key="i">
                        <a class="text-white hover_style_link" :href="link.href">
                            {{ link.linkName }}
                        </a>
                    </li>
                    <li>
                        <a class="text-white hover_style_link" href="javascript:void(0)">
                            <i class="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a class="btn_full" href="javascript:void(0)">GET IN TOUCH</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { state } from "../store";

export default {
    name: "NavBar",

    computed: {
        navBarLinks() {
            return state.navBarLinks;
        }
    },

    data() {
        return {
            view: {
                scroll: true,
            }
        }
    },

    beforeMount() {
    window.addEventListener('scroll', this.backgroundNavBar)
    },

    methods: {
        backgroundNavBar() {
            if(window.scrollY > 40) {
                this.view.scroll = false
            } else {
                this.view.scroll = true
            }
        }
    },

    /* mounted: function () {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 40) {
                this.view.scroll = false
            } else {
                this.view.scroll = true
            }
        })
    } */
}

</script>

<style lang="scss" scoped>

</style>