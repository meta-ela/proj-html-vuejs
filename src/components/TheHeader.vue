<template>
    <div>
        <!-- info-bar superiore fisso -->
        <div class="info_bar_bg">
            <div class="container py-2">
                <div class="d-flex justify-content-between text-white">
                    <div>
                        <i class="fa-solid fa-clock me-1"></i>
                        Open Hours: Mon - Sat - 9:00 - 18:00
                    </div>
                    <div>
                        <!-- stampare i dati con v-for -->
                        <ul class="d-flex gap-4 mb-0 list-unstyled">
                            <li v-for="(info, i) in headerInfo" :key="i">
                                <a class="text-decoration-none text-white" href="javascript:void(0)">
                                    <i :class="info.icon" class="me-1"></i>
                                    {{ info.info}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- jumbotron image con dentro NavBar.vue -->
        <div class="jumbotron_bg">
            <NavBar></NavBar>
            <div class="container debug_border">
                <!-- nav bar con ciclo v-for -->
                <div class="row row-cols-2">
                    <div class="col debug mt-5">
                        <small>LOREM LOREM</small>
                        <h1>CARGO TRANSPORT</h1>
                        <P>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quos corporis aliquid ex perspiciatis dolor odit iste voluptates debitis eius quo inventore exercitationem
                        </P>
                        <a class="debug_border" href="javascript:void(0)">GET IN TOUCH</a>
                        <a class="debug_border" href="javascript:void(0)">READ MORE</a>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
/* import { state } from "../store"; */
import NavBar from './NavBar.vue';

export default {
    name: "TheHeader",
    components: { NavBar },

    data() {
        return {
            headerInfo: [
                {
                    icon: "fa-solid fa-phone",
                    info: "+1 (305) 1234-5678",
                },
                {
                    icon: "fa-solid fa-envelope",
                    info: "hello@example.com"
                },
                {
                    icon: "fa-brands fa-facebook-f",
                    info: "",
                },
                {
                    icon: "fa-brands fa-twitter",
                    info: "",
                },
                {
                    icon: "fa-brands fa-linkedin-in",
                    info: "",
                },
            ],
            siteInfo: [
                {
                    icon: "fa-solid fa-phone",
                    info: "+1 (305) 1234-5678",
                },
                {
                    icon: "fa-solid fa-envelope",
                    info: "hello@example.com"
                },
                {
                    icon: "fa-solid fa-location-dot",
                    info: "Main Avenue, 987",
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>