<template>
<div>
    <div class="py-5 bg-secondary">
        <div class="container debug_border">
            <div class="row">
                <div class="col">
                    <div class="debug">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui sequi reprehenderit tempora nostrum repellendus, animi atque similique aliquid, modi excepturi eligendi ea in numquam quas harum nam et! Perferendis.
                        </p>
                        <ul>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <a class="debug_border" href="javascript:void(0)">GET IN TOUCH</a>
                        </ul>
                    </div>
                </div>
                <div class="col-8">
                    <TheCard></TheCard>
                </div>
            </div>
        </div>
    </div>
    <div class="py-1 bg-dark">
        <div class="container text-white">
            <div class="d-flex justify-content-between">
                <div class="debug_border">lorem lorem</div>
                <div class="debug_border">lorem lorem</div>
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