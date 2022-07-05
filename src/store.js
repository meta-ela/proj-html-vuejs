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
            href: "#home-section",
        },
        {
            linkName: "ABOUT",
            href: "#about-section",
        },
        {
            linkName: "SERVICES",
            href: "#services-section",
        },
        {
            linkName: "PROCESS",
            href: "#process-section",
        },
        {
            linkName: "TESTIMONIALS",
            href: "#testimonials-section",
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

    aboutFooterLink: [
        {
            icon: "fa-solid fa-angle-right",
            linkName: "The Company",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Institutional",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Social & Events",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Innovation",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Enviroment",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Technology",
            href: "javascript:void(0)",
        },
    ],

    transportFooterLink: [
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Industrialized",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Chemicals",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Packaged Liquids",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Construction",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Laminated Wood",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "And others",
            href: "javascript:void(0)",
        },
    ],

    supportFooterLink: [
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Responsibility",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Terms of Use",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "About Cookies",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Privacy Policy",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Accessibility",
            href: "javascript:void(0)",
        },
        {
            icon: "fa-solid fa-angle-right",
            linkName: "Information",
            href: "javascript:void(0)",
        },
    ],
})