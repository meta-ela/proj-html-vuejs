<template>
    <div>
        <!-- info-bar superiore fisso -->
        <div class="info_bar_bg">
            <div class="container debug_border">
                <div class="d-flex justify-content-between">
                    <div class="debug">
                        Lorem ipsum dolor sit
                    </div>
                    <div>
                        <!-- stampare i dati con v-for??? -->
                        <ul class="d-flex gap-5 debug mb-0">
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
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
import NavBar from './NavBar.vue';
export default {
    name: "TheHeader",
    components: { NavBar }
}
</script>

<style lang="scss" scoped>

</style>