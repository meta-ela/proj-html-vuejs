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
    ],
    navBarLinks: [
        {
            linkName: "HOME",
            href: "javascript:void(0)",
        },
        {
            linkName: "ABOUT",
            href: "javascript:void(0)",
        },
        {
            linkName: "SERVICES",
            href: "javascript:void(0)",
        },
        {
            linkName: "PROCESS",
            href: "javascript:void(0)",
        },
        {
            linkName: "TESTIMONIALS",
            href: "javascript:void(0)",
        },
    ],
    headerInfo: [
        {
            icon: "fa-solid fa-phone",
            info: "+1 (305) 1234-5678",
        },
        {
            icon: "fa-solid fa-envelope",
            info: "hello@example.com"
        },
        {
            icon: "fa-brands fa-facebook-f",
            info: "",
        },
        {
            icon: "fa-brands fa-twitter",
            info: "",
        },
        {
            icon: "fa-brands fa-linkedin-in",
            info: "",
        },
    ],
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
    ],
    cardMainServicesInfo: [
        {
            subIcon: "fa-solid fa-arrow-right",
            icon: "fa-solid fa-truck-ramp-box",
            title: "Technology",
            text: "We are continually focused on developing technology solutions adapted to our client's needs."
        },
        {
            subIcon: "fa-solid fa-arrow-right",
            icon: "fa-solid fa-temperature-high",
            title: "Reefer Cargo",
            text: "Regular and frequent monitoring from the receipt of the loaded container to final destination."
        },
        {
            subIcon: "fa-solid fa-arrow-right",
            icon: "fa-solid fa-boxes-stacked",
            title: "Dry Cargo",
            text: "We work with most types of dry cargo, from valutable cargo to the most dangerous requiring care."
        },
    ],
    cardFeedbackInfo: [
        {
            subIcon: "fa-solid fa-quote-right",
            src: "/img/logo-1.png",
            title: "Technology",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        },
        {
            subIcon: "fa-solid fa-quote-right",
            src: "/img/logo-2.png",
            title: "Reefer Cargo",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        },
        {
            subIcon: "fa-solid fa-quote-right",
            src: "/img/logo-3.png",
            title: "Dry Cargo",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        },
    ],
})