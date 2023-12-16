import { facebook, instagram, twitter } from "../assets/icons";
import { android,  cctv,  fitclub, graphic, hendryshoes, kamulah, learntech, network, personalportofolio, web } from "../assets/images";

export const navlinks = [
    {href:"#home", label: "Home"},
    {href:"#portofolio", label: "Portofolio"},
    {href:"#products", label: "Products"},
    {href:"#contact", label: "Contact us"}
]

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Android Development", link: "/" },
            { name: "Website Design & Development", link: "/" },
            { name: "Graphic Design", link: "/" },
            { name: "Closed Circuit Television (CCTV) Installation", link: "/" },
            { name: "Networking(Internet Installation", link: "/" },
           
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "jobkilonzo95@gmail.com", link: "mailto:jobkilonzo95@gmail.com" },
            { name: "+254 725993935", link: "tel:+254 725993935" },
        ],
    },
];

export const products = [
    {
        imgURL: android,
        name: "Android Development"
    },
    {
        imgURL: web,
        name: "Website Design & Development"
    },
    {
        imgURL: graphic,
        name: "Graphic Design"
    },
    {
        imgURL: cctv,
        name: "CCTV Installation"
    }, 
    {
        imgURL: network,
        name: "Networking(Internet Installation)"
    }
]

export const portofolios = [
    {
        imgURL: hendryshoes,
        name: "Hendry Show Line", 
        url: "https://hendry-hike-store.pages.dev/"
    },
    {
        imgURL: learntech,
        name: "Learn Tech", 
        url: "https://learn-tech.pages.dev/"
    },
    {
        imgURL: fitclub,
        name: "The Fit Club", 
        url: "https://11c3255d.fitclub-2vk.pages.dev/"
    },
    {
        imgURL: kamulah,
        name: "Kamulah Radio/TV", 
        url: "https://kamullahradiotv.pages.dev/"
    },
    {
        imgURL: personalportofolio,
        name: "Portofolio", 
        url: "https://jobpeterportfolio.pages.dev/"
    }
]


export const clients = [
    {name: "Hendry Show Line", url: "https://hendry-hike-store.pages.dev/"},
    {name: "The Fit Club", url: "https://11c3255d.fitclub-2vk.pages.dev/"},
    {name: "Kamulah Radio/TV", url: "https://kamullahradiotv.pages.dev/"},
    {name: "Portofolio", url: "https://jobpeterportfolio.pages.dev/"}
]

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];