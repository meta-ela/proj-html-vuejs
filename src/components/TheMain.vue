<template>
    <div>
        <!-- section bianco WHO WE ARE -->
        <section class="py-5">
            <div class="container debug_border">
                <div class="row">
                    <div class="col-8">
                        <div class="debug">
                            <small>WHO WE ARE</small>
                            <h2>Excellence in Transport</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi id et debitis rem nulla sit necessitatibus quaerat officia numquam at eaque laboriosam consectetur, corrupti magnam facilis, earum iusto iste?
                                Excepturi ab omnis ipsa at! Voluptates necessitatibus dolore eaque iusto in commodi explicabo qui porro atque, soluta perferendis dicta libero animi fugiat officiis adipisci sed facilis aliquid nam non ut!
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row flex-column h-100">
                            <div class="col">
                                <div class="debug h-100">
                                    <small>Vehicle Types</small>
                                    <ul>
                                        <li>light</li>
                                        <li>light</li>
                                        <li>light</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="debug h-100">
                                    <small>certifications</small>
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
            state
        }
    },
}
</script>

<style lang="scss" scoped>

</style>