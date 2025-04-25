import type { NavItem } from "./nav-types";

export const navLinks: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: 'About',
        links: [
            {
                label: 'About Balinkbayan',
                href: '/about/balinkbayan',
            },
            {
                label: 'About CFO',
                href: '/about/cfo',
            },
        ],
    },
    {
        label: 'Start a Business',
        sublinks: [
            {
                label: 'Investment and Business Opportunities',
                links: [
                    {
                        label: 'Agriculture',
                        href: '/start-business/investment-op/agriculture',
                    },
                    {
                        label: 'Franchise Business',
                        href: '/investment/franchise',
                    },
                    {
                        label: 'Financial Investment',
                        href: '/investment/financial-investment',
                    },
                    {
                        label: 'Real Property',
                        href: '/investment/real-property',
                    },
                    {
                        label: 'Retail',
                        href: '/investment/retail',
                    },
                    {
                        label: 'Services',
                        href: '/investment/services',

                    },
                    {
                        label: 'Small and Medium Scale Manufacturing',
                        href: '/investment/small-and-medium-scale-manufacturing',
                    }
                ]
            },
            {
                label: 'Small Enterprise Knowledge Center',
                sublinks: [
                    {
                        label: 'Starting a Business',
                        subsublinks: [
                            {
                                label: 'Thiking of Starting a business?',
                                href: '/start-business/guide',
                            },
                            {
                                label: 'Choose a Business Plan',
                                href: '/start-business/business-plan',
                            },
                            {
                                label: 'Obtain Business Licenses & Permits(Register your Business)',
                                href: '/start-business/business-licenses-permits',
                            },
                            {
                                label: 'Learn About Business Law and Regulations',
                                href: '/start-business/business-law-regulations',
                            },
                            {
                                label: 'Finance Your Business(Track Your Finance)',
                                href: '/start-business/finance-your-business',
                            },
                            {
                                label: 'Filing and Paying Taxes',
                                href: '/start-business/filing-paying-taxes',
                            },
                            {
                                label: 'Choose you Location and Equipment(HLUBR)',
                                href: '/start-business/choose-location-equipment',
                            }
                        ]
                    },
                    {
                        label: 'Register your Business',
                        subsublinks: [
                            {
                                label: "Bussiness Registration Guide",
                                href: '/start-business/business-registration-guide',
                            },
                            {
                                label: "Barangay Micro-Business Enterprise Act of 2002",
                                href: '/start-business/barangay-micro-business-enterprise-act',
                            }
                        ]
                    },
                    {
                        label: 'Managing a Business',
                        subsublinks: [
                            {
                                label: "Leading Your Company",
                                href: '/start-business/leading-company',
                            },
                            {
                                label: "Growing your Bussiness",
                                href: '/start-business/growing-business',
                            },
                            {
                                label: "Running a Bussiness",
                                href: '/start-business/running-business',
                            },
                            {
                                label: "Getting Out",
                                href: '/start-business/getting-out',
                            }
                        ]
                    }
                ]
            },
        ],
    },
    {
        label: 'Donate and Volunteer',
        sublinks: [
            {
                label: 'Donate',
                links: [
                    {
                        label: 'Donation for LINKAPIL',
                        href: '/donate/linkapil',
                    },
                    {
                        label: 'Surgical and Medical Mission',
                        href: '/donate/surgical-medical-mission',
                    },
                ],

            },
            {
                label: 'Volunteer',
                links: [
                    {
                        label: 'Balik Turo',
                        href: '/volunteer/balik-turo',
                    },
                    {
                        label: 'Balik Scientist',
                        href: '/volunteer/balik-scientist',
                    },
                ],
            },
        ],
    },
    {
        label: "Access Government Services",
        sublinks: [
            {
                label: "National Government Services",
                links: [
                    {
                        label: "Social Security System (SSS)",
                        href: "/services/sss",
                    },
                    {
                        label: "Pag-IBIG",
                        href: "/services/pag-ibig",
                    },
                    {
                        label: "PhilHealth",
                        href: "/services/philhealth",
                    },
                    {
                        label: "Reintegration Program",
                        href: "/services/reintegration-program",
                    }
                ]
            },
            {
                label: "Other Government Online Services for Oveseas Filipinos",
                href: "/services/other-government-online-services",
            },
            {
                label: "Local Government Partners",
                href: "/services/local-government-partners",
            },
            {
                label: "Filipino Assiociation Overseas' Partners",
                links: [
                    {
                        label: "Balinkbayan Filipino Korean Heritage Association South Korea",
                        href: "/services/overseas-partners/balinkbayan-filipino-korean-heritage-association-south-korea",
                    },
                    {
                        label: "BalinkBayan Coalition of Filipino American Chamber of Commerce",
                        href: "/services/overseas-partners/balinkbayan-coalition-of-filipino-american-chamber-of-commerce",
                    },
                    {
                        label: "BalikBayan Philippine Institute of Civil Engineers, Qatar",
                        href: "/services/overseas-partners/balikbayan-philippine-institute-of-civil-engineers-qatar",
                    },
                    {
                        label: "BalikBayan Institute of Electronics Engineers of the Philippines",
                        href: "/services/overseas-partners/balikbayan-institute-of-electronics-engineers-of-the-philippines",
                    },
                    {
                        label: "BalikBayan Indiana Feed The Hungry",
                        href: "/services/overseas-partners/balikbayan-indiana-feed-the-hungry",

                    },
                    {
                        label: "BalikBayan Association of Fil-Am Teachers in America",
                        href: "/services/overseas-partners/balikbayan-association-of-fil-am-teachers-in-america",
                    },
                    {
                        label: "Batangas Varsitarian International Chapter Singapore (BVISO)",
                        href: "/services/overseas-partners/batangas-varsitarian-international-chapter-singapore-bviso",
                    },
                    {
                        label: "Philippine Bayanihan Society Singapore (PBSS)",
                        href: "/services/overseas-partners/philippine-bayanihan-society-singapore-pbss",
                    },
                    {
                        label: "United Architects of the Philippines-Singapore Chapter (UAPS)",
                        href: "/services/overseas-partners/united-architects-of-the-philippines-singapore-chapter-uaps",
                    },
                    {
                        label: "Kalayaan Cultural Community Center",
                        href: "/services/overseas-partners/kalayaan-cultural-community-center",
                    }
                ]
            },
            {
                label: "Partners Resource Agencies and Organizations",
                links: [
                    {
                        label: "Bureau of Treasure (BTr)",
                        href: "/services/partners/bureau-of-treasure",
                    },
                    {
                        label: "Cooperative Development Authority (CDA)",
                        href: "/services/partners/cooperative-development-authority",
                    },
                    {
                        label: "Overseas Filipino Bank (OFBank)",
                        href: "/services/partners/overseas-filipino-bank",
                    }
                ]
            },
            {
                label: "Tourism Incentive for Overseas Filipinos",
                href: "/services/tourism-incentive-for-overseas-filipinos",
            }



        ],
    },
    {
        label: "News",
        href: "/news",
    },
    {
        label: "Downloads",
        href: "/downloads",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
];