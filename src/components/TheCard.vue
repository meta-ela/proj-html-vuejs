<template >
<div v-if="type == 'infoServices'">
    <div class="card">
        <div class="d-flex justify-content-end">
            <i class="text-primary" :class="subIcon"></i>
        </div>
        <div class="colored_box_below_round box_shadow_color_round">
            <i :class="icon"></i>
        </div>
        <div class="py-4">
            <div class="fw-bold fs-4 mb-3">
                {{title}}
            </div>
            <div class="fw-light">
                {{text}}
            </div>
        </div>
    </div>
</div>

<div v-else>
    <div class="card">
        <div class="d-flex box_img_card">
            <img class="w-100" :src="image" :alt="title">
        </div>
        <div class="fw-light py-4 text-start">
            {{text}}
        </div>
        <div class="d-flex justify-content-end">
            <i :class="subIcon"></i>
        </div>
    </div>
</div> 
</template>



<script>

export default {
    name: "TheCard",
    props: [
        "subIcon",
        "icon",
        "title",
        "text",
        "type",
        "image",
    ],

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";


.fa-truck-ramp-box, 
.fa-temperature-high,
.fa-boxes-stacked {
    font-size: 2rem;
}

.fa-quote-right {
    font-size: 2rem;
    color: grey;
    margin-top: -40px;
}

.colored_box_below_round{
    width: 60px;
    height: 60px;
}

.box_img_card {
    width: 150px;
    height: 35px;
}

img {
    filter: invert(1);
}

</style>