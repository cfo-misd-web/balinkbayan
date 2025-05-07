import type { NavItem } from "./nav-types";

export const navLinks: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: '/about',
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
        href: '/start-business',
        sublinks: [
            {
                label: 'Investment and Business Opportunities',
                href: '/start-business/investment-op',
                links: [
                    {
                        label: 'Agriculture',
                        href: '/start-business/investment-op/agriculture',
                    },
                    {
                        label: 'Franchise Business',
                        href: '/start-business/investment-op/franchise-business',
                    },
                    {
                        label: 'Financial Investment',
                        href: '/start-business/investment-op/financial-investment',
                    },
                    {
                        label: 'Real Property',
                        href: '/start-business/investment-op/real-property',
                    },
                    {
                        label: 'Retail',
                        href: '/start-business/investment-op/retail',
                    },
                    {
                        label: 'Services',
                        href: '/start-business/investment-op/services',

                    },
                    {
                        label: 'Small and Medium Scale Manufacturing',
                        href: '/start-business/investment-op/scale-manufacturing',
                    }
                ]
            },
            {
                label: 'Small Enterprise Knowledge Center',
                href: '/start-business/small-enterprise-knowledge-center',
                sublinks: [
                    {
                        label: 'Starting a Business',
                        subsublinks: [
                            {
                                label: 'Thinking of Starting a business?',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/thinking-about-it',
                            },
                            {
                                label: 'Create a Business Plan',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/create-business-plan',
                            },
                            {
                                label: 'Choose your Business Structure',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/choose-business-structure',
                            },
                            {
                                label: 'Obtain Business Licenses & Permits',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/obtain-business-licenses-permits',
                            },
                            {
                                label: 'Learn About Business Law and Regulations',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/learn-business-regulations',
                            },
                            {
                                label: 'Finance Your Business',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/finance-business',
                            },
                            {
                                label: 'Filing and Paying Taxes',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/filing-paying-taxes',
                            },
                            {
                                label: 'Choose your Location and Equipment (HLUBR)',
                                href: '/start-business/small-enterprise-knowledge-center/start-a-business/choose-location-equipment',
                            }
                        ]
                    },
                    {
                        label: 'Register your Business',
                        subsublinks: [
                            {
                                label: "Business Registration Guide",
                                href: '/start-business/small-enterprise-knowledge-center/register-business/business-registration-guide',
                            },
                            {
                                label: "Barangay Micro-Business Enterprise Act of 2002",
                                href: '/start-business/small-enterprise-knowledge-center/register-business/barangay-micro-business-enterprise-act',
                            }
                        ]
                    },
                    {
                        label: 'Managing a Business',
                        subsublinks: [
                            {
                                label: "Leading Your Company",
                                href: '/start-business/small-enterprise-knowledge-center/manage-business/leading-company',
                            },
                            {
                                label: "Growing your Business",
                                href: '/start-business/small-enterprise-knowledge-center/manage-business/growing-business',
                            },
                            {
                                label: "Running a Business",
                                href: '/start-business/small-enterprise-knowledge-center/manage-business/running-business',
                            },
                            {
                                label: "Getting Out",
                                href: '/start-business/small-enterprise-knowledge-center/manage-business/getting-out',
                            }
                        ]
                    }
                ]
            },
        ],
    },
    {
        label: 'Donate and Volunteer',
        href: '/donate',
        sublinks: [
            {
                label: 'Donate',
                links: [
                    {
                        label: 'Donation for LINKAPIL',
                        href: '/donate/donate/linkapil-donations',
                    },
                    {
                        label: 'Surgical and Medical Mission',
                        href: '/donate/donate/surgical-medical-mission',
                    },
                ],

            },
            {
                label: 'Volunteer',
                links: [
                    {
                        label: 'Balik Turo',
                        href: '/donate/volunteer/balik-turo',
                    },
                    {
                        label: 'Balik Scientist',
                        href: '/donate/volunteer/balik-scientist',
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
                        href: "/services/national-gov-services/sss",
                    },
                    {
                        label: "Pag-IBIG",
                        href: "/services/national-gov-services/pagibig",
                    },
                    {
                        label: "PhilHealth",
                        href: "/services/national-gov-services/philhealth",
                    },
                    {
                        label: "Reintegration Program",
                        href: "/services/national-gov-services/reintegration-prog",
                    }
                ]
            },
            {
                label: "Other Government Online Services for Overseas Filipinos",
                href: "/services/other-online-gov-services",
            },
            {
                label: "Local Government Partners",
                href: "/services/local-gov-partners",
            },
            {
                label: "Filipino Association Overseas' Partners",
                links: [
                    {
                        label: "Balinkbayan Filipino Korean Heritage Association, South Korea",
                        target: "_blank",
                        href: "https://filkoha.balinkbayan.gov.ph/",
                    },
                    {
                        label: "BalinkBayan Coalition of Filipino American Chamber of Commerce",
                        target: "_blank",
                        href: "https://cofacc.balinkbayan.gov.ph/",
                    },
                    {
                        label: "BalinkBayan Philippine Institute of Civil Engineers, Qatar",
                        target: "_blank",
                        href: "https://piceqatar.balinkbayan.gov.ph/",
                    },
                    {
                        label: "Balinkbayan Institute of Electronics Engineers of the Philippines",
                        target: "_blank",
                        href: "https://iecep.balinkbayan.gov.ph/",
                    },
                    {
                        label: "BalinkBayan Indiana Feed The Hungry",
                        target: "_blank",
                        href: "https://fth.balinkbayan.gov.ph/",

                    },
                    {
                        label: "Balinkbayan Association of Fil-Am Teachers in America",
                        target: "_blank",
                        href: "https://afta.balinkbayan.gov.ph/",
                    },
                    {
                        label: "Batangas Varsitarian International Chapter Singapore (BVISG)",
                        target: "_blank",
                        href: "https://bvisg.balinkbayan.gov.ph/",
                    },
                    {
                        label: "Philippine Bayanihan Society Singapore (PBSS)",
                        target: "_blank",
                        href: "https://pbss.balinkbayan.gov.ph/",
                    },
                    {
                        label: "United Architects of the Philippines-Singapore Chapter (UAPS)",
                        target: "_blank",
                        href: "https://uaps.balinkbayan.gov.ph/",
                    },
                    {
                        label: "Kalayaan Cultural Community Center",
                        target: "_blank",
                        href: "https://kccc.balinkbayan.gov.ph/",
                    }
                ]
            },
            {
                label: "Partners Resource Agencies and Organizations",
                links: [
                    {
                        label: "Bureau of Treasury (BTr)",
                        href: "/services/resource-agency/bureau-of-the-treasury",
                    },
                    {
                        label: "Cooperative Development Authority (CDA)",
                        href: "/services/resource-agency/cooperative-development-authority",
                    },
                    {
                        label: "Overseas Filipino Bank (OFBank)",
                        href: "/services/resource-agency/overseas-filipino-bank",
                    }
                ]
            },
            {
                label: "Tourism Incentive for Overseas Filipinos",
                href: "/services/tourism-incentive",
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