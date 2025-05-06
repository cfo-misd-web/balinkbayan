import asceoft from "@/assets/asceoft.svg"
import hashtag from "@/assets/hashtag.svg"
import type { CategoryData, Feature } from "./types"

export const worksexp = [
    {
        company: 'Asceoft Inc',
        role: 'Jr. Software Developer',
        duration: 'Jan 2024 - Present',
        logo: asceoft,
    },
    {
        company: 'Freelancer',
        role: 'Commision Based Web Developer',
        duration: '2022 - 2024',
        logo: hashtag,
    },
]

export const personalProjects = [
    {
        name: 'ICTS Logger',
        stack: 'React-Native, Expo, Javascript, PHP, MySql',
        logo: '/projects/CCSIT.png',
        url: 'https://github.com/rellity/appattthree',
    },
    {
        name: "Tracker Clone - Webflow",
        stack: 'React, NextJS, Tailwind, TypeScript',
        logo: '/projects/tracker.png',
        url: 'https://github.com/rellity/tracker-clone',
    },
    {
        name: 'Pocket Clone - Webflow',
        stack: 'React, NextJS, Tailwind, TypeScript',
        logo: '/projects/pocket.png',
        url: 'https://github.com/rellity/pocket-clone',
    },
]


export const navItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]


export const categories: CategoryData[] = [
    {
        id: "youth",
        title: "OVERSEAS FILIPINO YOUTH",
        description: "I want to be a BaLinkBayan and I am interested to learn more about the Philippines.",
        bgColor: "bg-yellow-300",
        imgUrl: "/img-assets/homepage/Overseas-Filipino-Youth-Logo-150x150.png",
    },
    {
        id: "workers",
        title: "OVERSEAS FILIPINO WORKERS (OFWS)",
        description: "How can BaLinkBayan help me and my family.",
        bgColor: "bg-red-400",
        imgUrl: "/img-assets/homepage/Overseas-Filipino-Workers-OFWS-Logo-150x150.png",
    },
    {
        id: "migrants",
        title: "MIGRANTS",
        description: "I am a BaLinkBayan and I want to rekindle my ties with the Philippines.",
        bgColor: "bg-blue-500",
        imgUrl: "/img-assets/homepage/Migrants-Logo-150x150.png",
    },
    {
        id: "retirees",
        title: "OVERSEAS FILIPINO RETIREES",
        description: "I am a BaLinkBayan and I want to retire in the Philippines.",
        bgColor: "bg-green-500",
        imgUrl: "/img-assets/homepage/Overseas-Filipino-Retirees-Logo-150x150.png",
    },
]

export const features: Feature[] = [
    {
        id: "entrepreneur",
        number: "01",
        title: "Helping overseas Filipinos to be an entrepreneur",
        description:
            "Explore business and investment opportunities in your hometown and other parts of the country. We will guide you in building sustainable enterprises while you help inspire the country's strong economic rally. Invest in the Philippines!",
        actions: [{ label: "Start a Business", url: "#" }],
    },
    {
        id: "donate",
        number: "02",
        title: "Encourage overseas Filipinos to share their fortune and skills",
        description:
            "Give back and help your kababayan. Partake in causes that will benefit Filipinos in need. BalinkBayan through the Commission on Filipinos Overseas' Linkod sa Kapwa Pilipino facilitate the flow of assistance from you to specific beneficiaries in the Philippines.",
        actions: [{ label: "Donate and Volunteer", url: "#" }],
    },
    {
        id: "government",
        number: "03",
        title: "Provide access to government online services",
        description:
            "Through BaLinkBayan, you will be provided online access to services of national government agencies such as the Social Security System, Home Development Mutual Fund (otherwise known as Pag-IBIG Fund) and the Philippine Health Insurance Corporation or PhilHealth.",
        actions: [
            { label: "National Government Online Services", url: "#" },
            { label: "Local Government Online Services", url: "#" },
        ],
    },
]