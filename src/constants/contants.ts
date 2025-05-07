import type { CategoryData, Feature } from "./types"


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
        imgUrl: "/placeholder.svg?height=128&width=128",
    },
    {
        id: "workers",
        title: "OVERSEAS FILIPINO WORKERS (OFWS)",
        description: "How can BaLinkBayan help me and my family.",
        bgColor: "bg-red-400",
        imgUrl: "/placeholder.svg?height=128&width=128",
    },
    {
        id: "migrants",
        title: "MIGRANTS",
        description: "I am a BaLinkBayan and I want to rekindle my ties with the Philippines.",
        bgColor: "bg-blue-500",
        imgUrl: "/placeholder.svg?height=128&width=128",
    },
    {
        id: "retirees",
        title: "OVERSEAS FILIPINO RETIREES",
        description: "I am a BaLinkBayan and I want to retire in the Philippines.",
        bgColor: "bg-green-500",
        imgUrl: "/placeholder.svg?height=128&width=128",
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

export const services = [
    {
      onlineServices: 'OFW Assistance Information System (OASIS)',
      description: 'The OASIS is an online platform intended to facilitate better service delivery to overseas Filipino workers. By registering in OASIS, one is providing necessary information to DOLE, POEA, OWWA, and POLO-Tokyo that will enable them to respond to one’s concerns and provide appropriate services in view of the COVID-19 pandemic, such as testing, quarantine, and transportation.',
      govAgency: 'OWWA, DOLE, POEA',
      links:'https://www.facebook.com/OWWAofficial/',
    },
    {
      onlineServices: 'OFW Assistance Information System (OASIS) Voluntary Coverage of an Overseas Filipino Worker (OFW)',
      description: 'An OFW with existing SS number can continue paying contributions through SS Form RS-5. Posting of said payment will change the membership status to OFW.',
      govAgency: 'SSS',
      links:'https://www.sss.gov.ph/sss/appmanager/pages.jsp?page=ofwregistration',
    },
    {
      onlineServices: 'OFW Record Online Appointment',
      description: 'This online system is for OFWs, their immediate family, and other authorized parties who want to request for an overseas Filipino worker\'s OFW Information Sheet/Record.',
      govAgency: 'POEA',
      links: 'https://ofwrecords.poea.gov.ph/',
    },
    {
      onlineServices: 'Balik-Manggagawa Online Processing System',
      description: 'Get one’s Overseas Employment Certificate (OEC) or exemption online.',
      govAgency: 'POEA',
      links:'https://www.bmonline.ph/',
    },
    {
      onlineServices: 'Online Pre-Employment Orientation Seminar (PEOS)',
      description: 'Before going aboard for employment, Filipino workers have to take this online seminar. They have to pass the assessment test and obtain certification of completion before departure',
      govAgency: 'POEA',
      links:'https://peos.poea.gov.ph/',
    },
    {
      onlineServices: 'Verification of Status of Recruitment Agencies',
      description: 'This system allows potential OFWs to look up recruitment agencies and verify whether or not they are legally registered and recognized.',
      govAgency: 'POEA',
      links:'https://www.poea.gov.ph/cgi-bin/agList.asp?mode=act&mode=act',
    },
    {
      onlineServices: 'Verification of Agency\'s Job Orders',
      description: 'This system allows potential OFWs to look up job vacancies and verify whether or not they are legitimate postings.',
      govAgency: 'POEA',
      links:'https://www.poea.gov.ph/cgi-bin/JobVacancies/jobsMenu.asp',
    },
    {
      onlineServices: 'OFW e-Card Application Form',
      description: 'The OFW e-Card is proof of active membership that allows for access of OWWA programs and services. This e-card is also recognized as a government-issued ID and may be presented to any Philippine Overseas Labor Office (POLO), Philippine embassies and consulates.',
      govAgency: 'OWWA',
      links:'https://ecard.owwa.gov.ph/',
    },
    {
      onlineServices: 'Online Travel Tax Payment System',
      description: 'This is an online payment portal designed to provide a more convenient way of paying travel taxes.',
      govAgency: 'TIEZA',
      links:'https://tieza.gov.ph/online-travel-tax-payment-system/',
    },
    {
      onlineServices: 'Adjudication Case Status',
      description: 'This service enables users to monitor the status of their cases under POEA.',
      govAgency: 'POEA',
      links:'http://www.poea.gov.ph/cgi-bin/adjucases/caseinquiry.asp',
    },
    {
      onlineServices: 'Online Housing Loan Application System',
      description: 'Pag-IBIG Fund is bringing the Housing Loan Application process closer to its members via a soft-launch of this online facility where members with assigned Pag-IBIG Membership ID (MID) or Registration Tracking No (RTN) may accomplish and submit their Housing Loan Application.',
      govAgency: 'Pag-IBIG Fund',
      links:'https://www.pagibigfundservices.com/HousingLoan/Apply/Default.aspx',
    },
    {
      onlineServices: 'Online Housing Loan Verification',
      description: 'This service allows existing housing loan borrowers to check their housing loan balance and view their payments. Borrowers may also enrol to the Paperless Housing Loan Billing Services to receive the Billing Statement via email',
      govAgency: 'Pag-IBIG Fund',
      links:'https://www.pagibigfundservices.com/OnlineHLVerification/',
    },
    {
      onlineServices: 'OFW\'s Online Membership Savings Verification',
      description: 'This service allows OFW members to view their member savings with the Fund.',
      govAgency: 'Pag-IBIG Fund',
      links:'https://www.pagibigfundservices.com/OFWMCVerification/',
    },
    {
      onlineServices: 'Online Membership Registration',
      description: 'This service enables individuals to register with the Fund and secure their Pag-IBIG Membership ID Number or update their registration information.',
      govAgency: 'Pag-IBIG Fund',
      links:'https://www.pagibigfundservices.com/pubreg/starter_page.aspx',
    },
    {
      onlineServices: 'PSA Help Line',
      description: 'Order PSA Certificate of Live Birth, Certificate of Marriage, Certificate of No Marriage (CENOMAR), or request for Certificate of Death online from the Philippine Statistics Authority.',
      govAgency: 'PSA',
      links:'https://www.psahelpline.ph/',
    },
    {
      onlineServices: 'PRC Online Services',
      description: 'This online system is for the application and renewal of professional ID card. A representative can file the application and claim the professional ID in behalf of the professional.',
      govAgency: 'PRC',
      links:'https://www.prc.gov.ph/pic-renewal',
    },
    {
      onlineServices: 'LRA Online Tracking System',
      description: 'This system provides fast and easy access to a client’s transaction status with any Registry of Deeds by simply filling out the boxes with information which can be derived from the Official Receipt.',
      govAgency: 'LRA',
      links:'https://lots.lra.gov.ph/TransactionStatus/',
    },
    {
      onlineServices: 'Member Portal',
      description: 'This system enables PhilHealth members to check on the accuracy of their membership details',
      govAgency: 'PhilHealth',
      links:'https://memberinquiry.philhealth.gov.ph/member/',
    },
    {
      onlineServices: 'Case Rates Search',
      description: 'Provides members with information on PhilHealth\'s benefit packages',
      govAgency: 'PhilHealth',
      links:'https://www.philhealth.gov.ph/services/acr/',
    },
    {
      onlineServices: 'Online Single Entry Approach',
      description: 'e-SEnA is a free online service that facilitates requests for the conduct of conciliation-mediation. Single Entry Approach (SEnA) is an administrative approach to provide a speedy, impartial, inexpensive, and accessible settlement procedure of all labor issues or conflicts to prevent them from ripening into full-blown disputes or actual labor cases.',
      govAgency: 'DOLE',
      links:'https://sena.dole.gov.ph/',
    },
    {
      onlineServices: 'Uwian Na',
      description: 'This is a mobile application for OWWA-sheltered OFWs to accommodate and escort their transportation to go back home in the Philippines safely.',
      govAgency: 'OWWA',
      links:'https://play.google.com/store/apps/details?id=com.uwinatayo/',
    },
    {
      onlineServices: 'Project EASE',
      description: 'Project EASE or the Educational Assistance through Scholarship in Emergencies aims to provide educational assistance to qualified college-level dependents of active OWWA member-OFWs whose employment was affected by the COVID-19 pandemic.',
      govAgency: 'OWWA',
      links:'https://ease.owwa.gov.ph/',
    },
    {
      onlineServices: 'Tabang OFW',
      description: 'This program is providing one-time monetary assistance of ₱30,000 to college-level children of Overseas Filipino Workers (OFWs) affected by the COVID-19 pandemic.',
      govAgency: 'DOLE, CHED, OWWA',
      links:'http://tabangofw-ease.owwa.gov.ph/',
    },
    {
      onlineServices: 'Tabang Application Inquiry',
      description: 'This allows one to view the status of his/her application for the Tabang OFW program.',
      govAgency: 'DOLE, CHED, OWWA',
      links:'https://tabangtracker.owwa.gov.ph/',
    },
    {
      onlineServices: 'DOLE-AKAP for OFWs',
      description: 'This is for the provision of financial assistance to displaced land-based and sea-based Filipino workers due to coronavirus diseases.',
      govAgency: 'DOLE',
      links:'https://dole-akap.owwa.gov.ph/?fbclid=IwAR08_mVokBrUqofKFZu0h10RHyZKR73-st_VKzafVgxJI5cCu67EfTk5JH4',
    },
    {
      onlineServices: 'DOLE-AKAP Application Inquiry',
      description: 'This allows one to view the status of his/her application for the AKAP program.',
      govAgency: 'DOLE',
      links:'https://dole-akap.owwa.gov.ph/?fbclid=IwAR08_mVokBrUqofKFZu0h10RHyZKR73-st_VKzafVgxJI5cCu67EfTk5JH4',
    },
    {
      onlineServices: 'NWPC iLearn',
      description: 'In response to the growing demand of MSMEs for training on basic business processes, e-learning modules were developed and uploaded by the National Wages and Productivity Commission (NWPC) to the DOLE-LGLC Learning System to enhance training accessibility. The new e-learning modules include: ',
      description1: '1) 5Rs of Waste Management,',
      description2: '2) Bookkeeping for Micro Enterprises, and',
      description3: '3) Stock Control for Productivity Improvement',
      govAgency: 'DOLE',
      links:'https://elearning.nwpc.dole.gov.ph/login/index.php',
    },
  ]