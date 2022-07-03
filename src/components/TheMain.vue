<template>
    <div>
        <!-- section bianco WHO WE ARE -->
        <section class="py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-9">
                        <div>
                            <small class="text-primary">WHO WE ARE</small>
                            <h2 class="my-3">
                                <span class="colored_box_below"> <i class="bi bi-gem"></i> Excellence</span> in Transport</h2>
                            <p class="fw-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quo ex earum dolorum placeat tenetur sit quas et, aut officia, ut voluptas architecto! Beatae molestias cum accusantium commodi, corporis laboriosam.
                            </p>
                            <p class="fw-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quo ex earum dolorum placeat tenetur sit quas et, aut officia, ut voluptas architecto! Beatae molestias cum accusantium commodi, corporis laboriosam.
                            </p>
                            <div class="border_left_p mb-3">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quo ex earum dolorum placeat tenetur sit quas et, aut officia, ut voluptas architecto! Beatae molestias cum accusantium commodi, corporis laboriosam.
                                </p>
                            </div>
                            <p class="fw-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi at ducimus omnis voluptate tempora ipsum
                            </p>
                            <ul class="fw-light">
                                <li class="li_disc">lorem ipsum dolor sit amet</li>
                                <li class="li_disc">lorem ipsum dolor sit amet</li>
                                <li class="li_disc">lorem ipsum dolor sit amet</li>
                                <li class="li_disc">lorem ipsum dolor sit amet</li>
                                <li class="li_disc">lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col h-100">
                        <div class="row flex-column h-100 g-3">
                            <div class="col-7 w-100">
                                <div class="h-100">
                                    <div class="fs-4 fw-bold mb-2">Vehicle Types</div>
                                    <ul class="ps-0">
                                        <li v-for="(type, i) in vehicleTypesList" :key="i"
                                        class="d-flex border-bottom">
                                            <div class="box_img">
                                                <img class="w-100" :src="type.src" :alt="type.type">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center w-100">
                                                <div class="fw-bold fs-4">{{ type.type }}</div>
                                                <div class="fw-lighter">{{ type.weight }}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-5 w-100 ">
                                <div class="h-100">
                                    <div class="fs-4 fw-bold mb-2">Certifications</div>
                                    <div class="box_img_certifications ">
                                        <img class="w-100 shadow me-3" src="/img/certificate.png" alt="Vehicle Certificate">
                                        <img class="w-100 shadow" src="/img/certificate.png" alt="Vehicle Certificate">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- section nero ROAD TRANSPORT -->
        <div class="py-5 bg-secondary">
            <div class="container debug_border">
                <div class="debug">
                    <small>ROAD TRANSPORT</small>
                    <h2>Main Service</h2>
                    <div class="d-flex gap-5">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet fuga dolorem, esse quidem possimus illo temporibus voluptatem magni itaque veritatis quas nobis debitis quis, unde recusandae laboriosam accusamus sed ex!
                        </p>
                        <a class="debug_border" href="javascript:void(0)">GET IN TOUCH</a>
                    </div>
                </div>
                <TheCard></TheCard>
            </div>
        </div>

        <!-- section bianco HOW IT WORKS IN PRACTICE -->
        <div class="py-5">
            <div class="container debug_border">
                <div class="text-center">
                    <small>HOW IT WORKS IN PRACTICE</small>
                    <h2>Logistical Procedure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla laboriosam dolore suscipit quidem. Maxime obcaecati facere porro ex! Repudiandae rerum mollitia perspiciatis nostrum doloremque. Consectetur, temporibus. Facilis, accusantium iure!</p>
                </div>
            </div>
            <!-- road map???? -->
            <div class="debug_border mt-3 bg-primary">
                card e road-map
            </div>
        </div>

        <!-- section banner image WHAT ARE WE DOING -->
        <div class="py-5 banner_img d-flex justify-content-center align-items-center">
            <div class="container debug_border text-center text-white">
                <div>
                    <div>
                        <small>WHAT ARE WE DOING</small>
                        <h2>Results in Numbers</h2>
                    </div>
                    <div>
                        <div class="row row-cols-4">
                            <div class="col">
                                <div>
                                    <div>XY</div>
                                    <small>lorem</small>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div>XY</div>
                                    <small>lorem</small>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div>XY</div>
                                    <small>lorem</small>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div>XY</div>
                                    <small>lorem</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- section nera CUSTOMER TESTIMONIALS -->
        <div class="py-5 bg-secondary">
            <div class="container debug_border text-center">
                <div class="debug">
                    <small>CUSTOMER TESTIMONIALS</small>
                    <h2>Tusted Feedback</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quisquam recusandae aliquam quibusdam aperiam minus adipisci, facere fuga odio quo, aspernatur eos modi omnis magni dolores blanditiis quis molestiae dolor!
                    </p>
                </div>
                <TheCard></TheCard>
            </div>
        </div>

        <!-- section bianca con form SEND A MESSAGE -->
        <div class="py-5">
            <div class="container debug_border">
                <div class="row h-100">
                    <div class="col-8 ">
                        <div class="debug ">
                            <small>SEND A MESSAGE</small>
                            <h2>Get in Touch</h2>
                            <small>lore lorem lore ispum dnsj</small>
                        </div>
                        <form class="row g-3">
                            <div class="col-auto">
                                <input type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-auto">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                        </form>
                    </div>
                    <div class="col">
                        <div class="debug">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui sequi reprehenderit tempora nostrum repellendus, animi atque similique aliquid, modi excepturi eligendi ea in numquam quas harum nam et! Perferendis.
                            </p>
                            <ul>
                                <li>link</li>
                                <li>link</li>
                                <li>link</li>
                                <a class="debug_border" href="javascript:void(0)">VIEW MAP</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from "../store";
import TheCard from './TheCard.vue';

export default {
    name: "TheMain",
    components: { TheCard },

    data() {
        return {
            state,
            vehicleTypesList: [
                {
                    src: "/img/truck-1.png",
                    type: "Light",
                    weight: "Max Weight 1200 kg",
                },
                {
                    src: "/img/truck-1.png",
                    type: "Medium",
                    weight: "Max Weight 6000 kg",
                },
                {
                    src: "/img/truck-1.png",
                    type: "Heavy",
                    weight: "Max Weight 24000 kg",
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>