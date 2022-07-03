import Vue from "vue";

export const state = Vue.observable({
	// conterrà tutte le proprietà che vorremmo aggiungere
	siteInfo: [
        {
            icon: "fa-solid fa-phone",
            info: "+1 (305) 1234-5678",
        },
        {
            icon: "fa-solid fa-envelope",
            info: "hello@example.com"
        },
        {
            icon: "fa-solid fa-location-dot",
            info: "Main Avenue, 987",
        },
    ]
})