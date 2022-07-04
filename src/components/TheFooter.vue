<template>
<div>
    <div class="py-5 bg-secondary">
        <div class="container debug_border">
            <div class="row">
                <div class="col">
                    <div class="text-white">
                        <div class="fs-5">
                            <span class="colored_box_below_logo">NEX</span> GEN
                        </div>
                        <p class="fw-light">
                            A Functional HTML Template for Corporate & Business.
                        </p>
                        <ul>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            
                        </ul>
                        <a class="btn_outline" href="javascript:void(0)">GET IN TOUCH</a>
                    </div>
                </div>
                <div class="col-8">
                    <TheCard></TheCard>
                </div>
            </div>
        </div>
    </div>
    <div class="py-3 bg-dark">
        <div class="container text-white">
            <div class="d-flex justify-content-between fw-light">
                <small>Enjoy the low price. We are tracking any intention pf piracy.</small>
                <small>&copy;2020 NEXGEN is Proudly Powerend by <a class="text-primary" href="javascript:void(0)">Codings</a>.</small>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TheCard from './TheCard.vue';
export default {
    name: "TheFooter",
    components: { TheCard }
}
</script>

<style lang="scss" scoped>

</style>