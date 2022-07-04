<template>
    <div>
        <!-- section bianco WHO WE ARE -->
        <section class="py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-9">
                        <div>
                            <small class="text-primary text-uppercase">WHO WE ARE</small>
                            <h2 class="my-3">
                                <span class="colored_box_below text-primary"> <i class="bi bi-gem"></i> Excellence</span> in Transport
                            </h2>
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
            <div class="container py-5">
                <div>
                    <div class="text-primary text-uppercase">ROAD TRANSPORT</div>
                    <h2 class="my-3 text-white">
                        Main <span class="colored_box_below">Services</span>
                    </h2>
                    <div class=" row">
                        <div class="col-8">
                            <P class="text-white fw-light mb-5">
                                With all of this expertise and capability comes an unrivalled commitment to customer service. We will
                                work hard to understand your needs in order to develop a productive, long-term partnership.
                            </P>
                        </div>
                        <div class="col">
                            <div class="d-flex justify-content-end">
                                <a class="btn_outline" href="javascript:void(0)">SEE ALL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <TheCard></TheCard>
            </div>
        </div>

        <!-- section bianco HOW IT WORKS IN PRACTICE -->
        <div class="py-5">
            <div class="container pt-5">
                <div class="text-center">
                    <div class="text-primary text-uppercase py-4">HOW IT WORKS IN PRACTICE</div>
                    <h2><span class="colored_box_below text-primary">Logistical</span> Procedure</h2>
                    <P class="fw-light mb-5">
                        We work with innovative methodologies to ensure that the entire delivery process is done form
                        start to finish as planned.
                    </P>
                </div>
            </div>
            <!-- road map -->
            <div>
                <div class="road_map_border pb-5">
                    <div class="d-flex flex-column justify-content-center align-items-center text-center">
                        <div class="row">
                            <div class="col"></div>
                            <div class="col-2" v-for="(map, i) in roadMapList" :key="i">
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <div class="colored_box_below_round mb-3 fw-bold position">{{ map.number }}</div>
                                    <div class="height_120">
                                        <h4 class="fw-bold mt-5">{{ map.title }}</h4>
                                    </div>
                                    <small class="fw-light">{{ map.text }}</small>
                                </div>
                            </div>
                            <div class="col"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- section banner image WHAT ARE WE DOING -->
        <div class="py-5 banner_img d-flex justify-content-center align-items-center">
            <div class="container py-5 text-center text-white">
                <div>
                    <div>
                        <div class="text-primary text-uppercase py-3">WHAT ARE WE DOING</div>
                        <h2><span class="colored_box_below">Results</span> in Numbers</h2>
                    </div>
                    <div>
                        <div class="row row-cols-4">
                            <div class="col" v-for="(result, i) in roadNumbersList" :key="i">
                                <div class="py-5">
                                    <div class="text-primary fw-bold fs-3">{{ randomNumber() }}</div>
                                    <small class="fs-5">{{ result }}</small>
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
            ],
            roadMapList: [
                {
                    number: "01",
                    title: "Collection of information",
                    text: "lorem ipsum dolor sit amet consectectur.",
                },
                {
                    number: "02",
                    title: "Service Invoice Sending",
                    text: "lorem ipsum dolor sit amet consectectur.",
                },
                {
                    number: "03",
                    title: "Withdrawal of Cargo",
                    text: "lorem ipsum dolor sit amet consectectur.",
                },
                {
                    number: "04",
                    title: "Transport Customer Order",
                    text: "lorem ipsum dolor sit amet consectectur.",
                },
                {
                    number: "05",
                    title: "Successful Delivery",
                    text: "lorem ipsum dolor sit amet consectectur.",
                },
            ],
            roadNumbersList: [
                "Certifications",
                "Employees",
                "Customers",
                "Countries Served",
            ]
        }
    },

    methods: {
        randomNumber() {
            return Math.floor(Math.random() * 500) + 1
        }
    }
}
</script>

<style lang="scss" scoped>

</style>