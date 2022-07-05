<template>
    <div>
        <!-- info-bar superiore fisso -->
        <div class="info_bar_bg sticky-top">
            <div class="container py-2">
                <div class="d-flex justify-content-between text-white fw-light">
                    <div>
                        <i class="fa-solid fa-clock me-1"></i>
                        Open Hours: Mon - Sat - 9:00 - 18:00
                    </div>
                    <div>
                        <!-- stampare i dati con v-for -->
                        <ul class="d-flex gap-4 mb-0">
                            <li v-for="(info, i) in headerInfo" :key="i">
                                <a class="text-white" href="javascript:void(0)">
                                    <i :class="info.icon" class="me-1 hover_icon_link"></i>
                                    <span class="hover_simple_link">{{info.info}}</span> 
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
            <div class="container my-5">
                <!-- nav bar con ciclo v-for -->
                <div class="row">
                    <div class="col-4 mt-5">
                        <small class="text-primary">LOGISTIC SERVICES</small>
                        <h1 class="text-white">CARGO TRANSPORT</h1>
                        <P class="text-white fw-light mb-5">
                            Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles.
                        </P>
                        <a class="btn_full me-4" href="javascript:void(0)">GET IN TOUCH</a>
                        <a class="btn_outline" href="javascript:void(0)">READ MORE</a>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { state } from "../store";
import NavBar from './NavBar.vue';

export default {
    name: "TheHeader",
    components: { NavBar },

    computed: {
        headerInfo() {
            return state.headerInfo;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>