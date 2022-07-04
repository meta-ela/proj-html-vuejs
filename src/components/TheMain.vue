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
                <div class="d-flex gap-4 h-100"> 
                    <TheCard v-for="(card, i) in cardMainServicesInfo" :key="i"
                    :subIcon="card.subIcon"
                    :icon="card.icon"
                    :title="card.title"
                    :text="card.text"
                    type="infoServices"
                    ></TheCard>
                </div>
            </div>
        </div>

        <!-- section bianco HOW IT WORKS IN PRACTICE -->
        <div class="py-5 bg-teal-100">
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
            <div class="container py-5 text-center text-white">
                <div>
                    <div class="text-primary text-uppercase py-3">CUSTOMER TESTIMONIALS</div>
                    <h2>Trusted <span class="colored_box_below">Feedback</span></h2>
                    <P class="fw-light my-5">
                        We work intensively in search of ideals that can add up in the lives of our customers.
                        This is what moves us and we are grateful foe the recognition.
                    </P>
                </div>
                <div class="d-flex gap-4 h-100"> 
                    <TheCard v-for="(card, i) in cardFeedbackInfo" :key="i"
                    :subIcon="card.subIcon"
                    :image="card.src"
                    :title="card.title"
                    :text="card.text"
                    type="infoFeedback"
                    ></TheCard>
                </div>
            </div>
        </div>

        <!-- section bianca con form SEND A MESSAGE -->
        <div class="py-5">
            <div class="container py-5">
                <div class="row h-100">
                    <div class="col-9 ">
                        <div class="mb-5">
                            <div class="text-primary text-uppercase">SEND A MESSAGE</div>
                            <h2>Get in <span class="colored_box_below text-primary">Touch</span></h2>
                            <small class="fw-light mt-5">
                                We eill respond to your message as soon as possible.
                            </small>
                        </div>
                        <form class="row g-3 mb-4">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-6">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Phone">
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="More info">
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                            </div>
                        </form>
                        <button class="btn_outline bg-primary">Send</button>
                    </div>
                    <div class="col">
                        <div class="fw-light">
                            <div class="fs-4 fw-bold mb-2">Example Inc.</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <ul class="ps-0 pb-3">
                                <li v-for="(info, i) in siteInfo" :key="i">
                                    <a class="text-primary d-flex align-items-center gap-3 py-1" href="javascript:void(0)">
                                        <div class="colored_box_below_round">
                                            <i :class="info.icon"></i>
                                        </div>
                                        {{ info.info}}
                                    </a>
                                </li>
                            </ul>
                            <a class="btn_outline text-primary" href="javascript:void(0)">VIEW MAP</a>
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

    computed: {
        vehicleTypesList() {
            return state.vehicleTypesList;
        },
        roadMapList() {
            return state.roadMapList;
        },
        roadNumbersList() {
            return state.roadNumbersList;
        },
        siteInfo() {
            return state.siteInfo;
        },
        cardMainServicesInfo() {
            return state.cardMainServicesInfo;
        },
        cardFeedbackInfo() {
            return state.cardFeedbackInfo;
        },
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