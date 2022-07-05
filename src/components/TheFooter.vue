<template>
<div>
    <div class="py-5 bg-secondary">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <div class="text-white">
                        <div class="fs-5 mb-4">
                            <span class="colored_box_below_logo">NEX</span> GEN
                        </div>
                        <p class="fw-light">
                            A Functional HTML Template for Corporate & Business.
                        </p>
                        <ul class="ps-0 pb-3">
                            <li v-for="(info, i) in siteInfo" :key="i">
                                <a class="text-white d-flex align-items-center gap-3 py-1" href="javascript:void(0)">
                                    <div>
                                        <i :class="info.icon"></i>
                                    </div>
                                    <span class="hover_simple_link">{{ info.info}}</span>
                                </a>
                            </li>
                        </ul>
                        <a class="btn_outline" href="javascript:void(0)">GET IN TOUCH</a>
                    </div>
                </div>
                <!-- card con collegamento dati a store -->
                <div class="col">
                    <div class="card">
                        <h4 class="fw-bold">About</h4>
                        <ul class="ps-0">
                            <li class="my-1" v-for="(link, i) in aboutFooterLink" :key="i">
                                <a class="text-light fw-light" :href="link.href">
                                    <i class="me-2" :class="link.icon"></i>
                                    <span class="hover_simple_link">{{ link.linkName}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h4 class="fw-bold">Transport</h4>
                        <ul class="ps-0">
                            <li class="my-1" v-for="(link, i) in transportFooterLink" :key="i">
                                <a class="text-light fw-light" :href="link.href">
                                    <i class="me-2" :class="link.icon"></i>
                                    <span class="hover_simple_link">{{ link.linkName}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h4 class="fw-bold">Support</h4>
                        <ul class="ps-0">
                            <li class="my-1" v-for="(link, i) in supportFooterLink" :key="i">
                                <a class="text-light fw-light" :href="link.href">
                                    <i class="me-2" :class="link.icon"></i>
                                    <span class="hover_simple_link">{{ link.linkName}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- barra footer inferiore -->
    <div class="py-3 bg-dark">
        <div class="container text-white">
            <div class="d-flex justify-content-between fw-light">
                <small>Enjoy the low price. We are tracking any intention pf piracy.</small>
                <small>&copy;2020 NEXGEN is Proudly Powerend by <a class="text-primary hover_simple_link" href="javascript:void(0)">Codings</a>.</small>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { state } from "../store";

export default {
    name: "TheFooter",

    computed: {
        siteInfo() {
            return state.siteInfo;
        },
        aboutFooterLink() {
            return state.aboutFooterLink;
        },
        transportFooterLink() {
            return state.transportFooterLink;
        },
        supportFooterLink() {
            return state.supportFooterLink;
        }

    }
}
</script>

<style lang="scss" scoped>

</style>