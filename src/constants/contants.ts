import asceoft from "@/assets/asceoft.svg"
import hashtag from "@/assets/hashtag.svg"
import type { CategoryData, Feature, optional } from "./types"


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
  export const australia:optional[] = [
    {
      country: 'Australia',
      name: 'EMBASSY OF THE PHILIPPINES, CANBERRA',
      headOffice1: 'H.E. (Ms.) Belen F. Anota',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '1 Moonah Place, Yarralumla, Canberra, A.C.T. 2600',
      email1: 'canberra.pe@dfa.gov.ph;',
      email2: 'cbrpe@philembassy.org.au',
      website: 'https://www.philembassy.org.au',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, ADELAIDE',
      headOffice1: 'Mr. Reynaldo Dante G. Juanta',
      headOffice2: 'Consul General, ad honorem',
      address: '61 Melville Street, South Plympton 5038, South Australia',
      email1: 'rdgjuanta@bigpond.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, BRISBANE',
      headOffice1: 'Mrs. Margaret Grummitt',
      headOffice2: 'Consul General, a.h.',
      address: 'Regus, Level 22, 69 Ann Street, Brisbane, QLD 4000',
      email1: 'alang@cgrgroup.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, DARWIN',
      headOffice1: 'Mr. Januario John R. Rivas',
      headOffice2: 'Consul General, ad honorem',
      address: '22 Mirrakma Crescent Lyons, Northern Territory 0812',
      email1: 'philcon.nt@gmail.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, HOBART',
      headOffice1: 'pjgreen@kpmg.com.au',
      address: 'Level 3, 100 Melville Street, Hobart, Tasmania 7000',
      email1: 'pjgreen@kpmg.com.au',
    },
    {
      name: 'PHILIPPINE CONSULATE, MELBOURNE',
      headOffice1: 'Ms. Virginia Kalong',
      headOffice2: 'Consul, ad honorem',
      address: 'Suite 1205, No. 1, Queens Road, Melbourne, Victoria 3004',
      email1: 'info@philconsulate.com.au;',
      email2: 'consul@philconsulate.com.au',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, PERTH',
      headOffice1: 'Mr. Gerald Francis Donnelly',
      headOffice2: 'Consul General, ad honorem',
      address: 'Unit 2/116 Mounts Bay Road, Perth, Western Australia 6000',
      email1: 'gfdonnelly@iprimus.com.au',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, SYDNEY',
      headOffice1: 'Hon. (Ms.) Anne J. Louis',
      headOffice2: 'Consul General',
      address: 'Philippine Centre, Level 1',
      address2: '27-33 Wentworth Avenue, Sydney NSW 2000',
      email1: 'sydney.pcg@dfa.gov.ph;',
      email2: 'contact@philippineconsulate.com.au',
      website: 'https://www.philippineconsulate.com.au',
    },
  ]
  export const austria:optional[] = [
    {
      country: 'Austria',
      name: 'EMBASSY OF THE PHILIPPINES, VIENNA',
      headOffice1: 'H.E. (Ms.) Lourdes O. Yparraguirre',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'Laurenzerberg 2/2/ZWG, A-1010 Vienna, Austria',
      email1: 'vienna.pe@dfa.gov.ph;',
      email2: 'office@philippine-embassy.at',
      website: 'https://www.philippine-embassy.at',
    },
    {
      name: 'PHILIPPINE CONSULATE, INNSBRUCK',
      headOffice1: 'Dr. Christian Traweger',
      headOffice2: 'Consul, ad honorem',
      address: 'Karl-Schoenherr-Strasse 7, A-6020 Innsbruck, Austria',
      email1: 'philippine-consulate@imad.at',
    },
    {
      name: 'PHILIPPINE CONSULATE, KLANGENFURT',
      headOffice1: 'Mr. Mag. Wolfgang Rossbacher',
      headOffice2: 'Consul, ad honorem',
      address: 'St. Veiter Ring 1/A A-9020 Klangenfurt, Austria',
      email1: 'w.rossbacher@rt.co.at',
    },
  ]
  export const brazil:optional[] = [
    {
      country: 'Brazil',
      name: 'EMBASSY OF THE PHILIPPINES, BRASILIA',
      headOffice1: 'H.E. (Ms.) Eva G. Betita',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'SEN, Avenida das Nacoes, Lote 01 Brasilia, D.F. CEP: 70431-900, Brazil',
      email1: 'brasilia.pe@dfa.gov.ph;',
      email2: 'brasiliaemb@yahoo.com',
      website: 'https://www.philembassy.be',
    },
    {
      name: 'PHILIPPINE CONSULATE, STA. CATARINA',
      headOffice1: 'Mr. Marco Antonio Cachel',
      headOffice2: 'Consul, ad honorem',
      address: '1120, Sao Jose, Itajai, Sta. Catarina CEP 88304-401, Brazil',
      email1: 'cachel@terra.com.br',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MANAUS',
      headOffice1: 'Mr. Francisco Rodrigues Da Silva Filho',
      headOffice2: 'Consul General, ad honorem',
      address: '1219 Centro, Manaus, Amazonas CEP 69020-110, Brazil',
      email1: 'posto.fortaleza@uol.com.br',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, PARANA',
      headOffice1: 'Mr. Kiyoshi Ishitani',
      headOffice2: 'Consul General, ad honorem',
      address: 'Av. Marechal Deodoro 630, 20 Andar, Ed. Centro Commercial Italia (CCI) Cjs. 2002/4, Curitiba, Paraná, Brazil CEP 80010-912, Brazil',
      email1: 'ishitani@ishitani.adv.br',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, RECIFE',
      headOffice1: 'Mr. Sergio Kano',
      headOffice2: 'Consul General, ad honorem',
      address: 'No. 830-Salas 1805/1806, Ed. Centro Empresarial Iberbras – Boa Viagem Recife, Pernambuco CEP: 51021-310, Brazil',
      email1: 'filipinasconsul@gmail.com;',
      email2: 'skano@teconsuape.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, RIO DE JANEIRO',
      headOffice1: 'Dr. Romulo De Melo Mene',
      headOffice2: 'Consul General, ad honorem',
      address: '143, Ipanema Rio de Janeiro CEP 22421-030, Brazil',
      email1: ' info@owl-ind.com.br;',
      email2: ' romulomene@owl-ind.com.br',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, SAO PAOLO',
      headOffice1: 'Mr. Vitor Manuel Martins Botelho',
      headOffice2: 'Consul General, ad honorem',
      address: 'Praça República 32, 1° Andar, Centro – São Paulo, Sao Paolo CEP 01045-000, Brazil',
      email1: 'filipinascgsp@hotmail.com;',
      email2: 'vmmb@uninet.com.br',
    },
  ]
  export const canada:optional[] = [
    {
      country: 'Canada',
      name: 'EMBASSY OF THE PHILIPPINES, OTTAWA',
      headOffice1: 'H.E. (Mr.) Leslie B. Gatan',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '130 Albert St. Ste. 900 Ottawa, Ontario, K1P 5G4 Canada',
      email1: 'ottawa.pe@dfa.gov.ph;',
      email2: 'embassyofphilippines@rogers.com',
      website: 'https://www.philembassy.ca',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, ALBERTA',
      headOffice1: 'Mrs. Esmeralda P. Agbulos',
      headOffice2: 'Consul General, ad honorem',
      address: 'Rm 107, 4990 92 Ave., Edmonton A.B. T6V 2V4',
      email1: 'honconedmontonPCG@hotmail.com;',
      email2: 'honconsulmelda@hotmail.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, SASKATCHEWAN',
      headOffice1: 'Dr. Carlos S. Maningas',
      headOffice2: 'Consul, ad honorem',
      address: '4-115 3rd Avenue South, Saskatoon, Saskatchewan S7K 1L7',
      email1: 'filcas@sasktel.net',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, ST. JOHN’S NEWFOUNDLAND AND LABRADOR',
      headOffice1: 'Ms. Hazel Ouano-Alpuerto',
      headOffice2: 'Consul General, ad honorem',
      address: '27 Symonds Avenue, St. John’s, Newfoundland A1E 3A4, Canada',
      email1: 'hazel.ouano@yahoo.com;',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, TORONTO',
      headOffice1: 'Hon. (Ms.) Juvener M. Mahilum-West',
      headOffice2: 'Consul General',
      address: '161 Eglinton Avenue East, Suite 800, Toronto, Ontario M4P 1J5 Canada',
      email1: 'toronto.pcg@dfa.gov.ph;',
      email2: 'torontopc@philcongen-toronto.com',
      website: 'https://www.philcongen-toronto.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, VANCOUVER',
      headOffice1: 'Hon. (Mr.) Jose Arthur P. Ampeso',
      headOffice2: 'Consul General',
      address: 'Suite 1405, 700 West Pender Street, Vancouver, B.C. V6V 1G8 Canada',
      email1: 'vancouver.pcg@dfa.gov.ph;',
      email2: 'vancouverpcg@telus.net',
      website: 'https://www.vancouverpcg.net',
    },
  ]
  export const china:optional[] = [
    {
      country: 'China',
      name: 'EMBASSY OF THE PHILIPPINES, BEIJING',
      headOffice1: 'H.E. (Ms.) Sonia C. Brady',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '23 Xiu Shui Bei Jie, Jian Guo Men Wai, Beijing, 100600 People’s Republic of China',
      email1: 'beijing.pe@dfa.gov.ph;',
      email2: 'philemb_beijing@yahoo.com',
      website: 'https://www.philembassychina.org',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, CHONGQING',
      headOffice1: 'Hon. (Ms.) Amelita C. Aquino',
      headOffice2: 'Consul General',
      address: 'Unit 2903-05 Metropolitan Tower, 68 Zourong Road, Yuzhong District, Chongqing 400010, People’s Republic of China',
      email1: 'chongqing.pcg@dfa.gov.ph;',
      email2: 'chongqingpcg@gmail.com',
      website: 'https://www.philcongenchongqing.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, GUANGZHOU',
      headOffice1: 'Hon. (Mr.) Raly L. Tejada',
      headOffice2: 'Consul General',
      address: 'Room Nos. 706-712 Guangdong International Hotel 339 Huanshi Dong Lu, Guangzhou, Guangdong, 510098 P.R.O.C.',
      email1: 'guangzhou.pcg@dfa.gov.ph;',
      email2: 'post@guangzhoupcg.org;',
      email3: 'philcongenguangzhou@yahoo.com',
      website: 'https://www.philcongenguangzhou.org',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, HONG KONG',
      headOffice1: 'Hon. (Mr.) Noel Eugene Eusebio M. Servigon',
      headOffice2: 'Consul General',
      address: '14th Floor, United Centre, 95 Queensway Admiralty, Hong Kong SAR',
      email1: 'hongkong.pcg@dfa.gov.ph;',
      email2: 'hongkongpc@philcongen-hk.com',
      website: 'http://www.philcongen-hk.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MACAU',
      headOffice1: 'Hon. (Mr.) Danilo T. Ibayan',
      headOffice2: 'Consul General',
      address: 'Units 1404-1406, 14/F AIA Tower, Avenida Comercial de Macau, Macau SAR',
      email1: 'macau.pcg@dfa.gov.ph;',
      email2: 'info@philcongenmacau.org;',
      email3: 'pcgmacau@gmail.com',
      website: 'https://www.philcongenmacau.org',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, SHANGHAI',
      headOffice1: 'Hon. (Mr.) Charles C. Jose',
      headOffice2: 'Consul General',
      address: 'Suite 301 Metrobank Plaza 1160 Yan An West Road, Changning District, Shanghai, China 200052',
      email1: 'shanghai.pcg@dfa.gov.ph;',
      email2: 'pcg@philcongenshanghai.org',
      website: 'https://www.philcongenshanghai.org',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, XIAMEN',
      headOffice1: 'Hon. (Mr.) Adelio Angelito C. Cruz',
      headOffice2: 'Consul General',
      address: 'No. 2 Ling Xiang Li, Lianhua District, Xiamen City 361009 People’s Republic of China',
      email1: 'xiamen.pcg@dfa.gov.ph;',
      email2: 'xiamenpc@yahoo.com',
      website: 'https://www.philcongenxiamen.com',
    },
  ]
  export const france:optional[] = [
    {
      country: 'France',
      name: 'EMBASSY OF THE PHILIPPINES, PARIS',
      headOffice1: 'H.E. (Ms.) Cristina G. Ortega',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '4 Hameau de Boulainvilliers / 45 Rue du Ranelagh 75016 Paris, France',
      email1: 'paris.pe@dfa.gov.ph;',
      email2: 'ambaphilparis@wanadoo.fr',
      website: 'https://www.philembassyparis.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, BORDEAUX',
      headOffice1: 'Mr. Daniel Fournier',
      headOffice2: 'Consul General, ad honorem',
      address: '31 rue Tastet – 33000, Bordeaux, France',
      email1: 'consulat.philippines.bordeaux@avoues.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, LYON',
      headOffice1: 'Mr. Jean-Jacques Rinck',
      headOffice2: 'Consul, ad honorem',
      address: '5 place Antonin Poncet 69002 Lyon, France',
      email1: 'rinckconsul@consulatedesphilippines.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MARSEILLE',
      headOffice1: 'Mr. Jean Louise Cordesse',
      headOffice2: 'Consul General, ad honorem',
      address: '2 rue Mascaron 13006, Marseille, France',
      email1: 'jl.cordesse@free.fr',
    },
    {
      name: 'PHILIPPINE CONSULATE, NICE',
      headOffice1: 'Mr. Gerard Clyde Gaspar',
      headOffice2: 'Consul, ad honorem',
      address: '43 rue Hérold 06300 Nice, France',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, BORDEAUX',
      headOffice1: 'Mr. Guy Alain Lafont De Sentenac',
      headOffice2: 'Consul, ad honorem',
      address: '1, rue du Poids de l’Huile 31000 Toulouse, France',
      email1: 'sentenac@msgw.com;',
      email2: 'consulat-philippines.toulouse@msgw.com',
    },
  ]
  export const germany:optional[] = [
    {
      country: 'Germany',
      name: 'EMBASSY OF THE PHILIPPINES, BERLIN',
      headOffice1: 'Mr. Mardomel Celo D. Melicor',
      headOffice2: 'Charge d’ Affaires, a. i.',
      address: 'Uhlandstrasse 97, 10715 Berlin, Federal Republic of Germany',
      email1: 'berlin.pe@dfa.gov.ph;',
      email2: 'berlinpe@t-online.de',
      website: 'https://www.philembassyparis.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, DRESDEN',
      headOffice1: 'Mr. Hartmut Fromm',
      headOffice2: 'Consul, ad honorem',
      address: '31 rue Tastet – 33000, Bordeaux, France',
      email1: 'philippinekonsulat@fromm-dresden.de',
    },
    {
      name: 'PHILIPPINE CONSULATE, ESSEN',
      headOffice1: 'Mr. Heinz Peter Heidrich',
      headOffice2: 'Consul, ad honorem',
      address: 'Gildehofstrasse 2, 45127 Essen, Germany',
      email1: 'heinz-peter.heidrich@bibessen.de;',
      email2: 'nrw-hc@philippine-embassy.de',
    },
    {
      name: 'PHILIPPINE CONSULATE, MAINZ',
      headOffice1: 'Ms. Loredanna Hess',
      headOffice2: 'Vice-Consul, ad honorem',
      address: 'Holzhofstrasse 3, 55116 Mainz, Germany',
      email1: 'loredanna.hess@web.de;',
      email2: 'bw-hcg@philippine-embassy.de',
    },
    {
      name: 'PHILIPPINE CONSULATE, MUNICH',
      headOffice1: 'Mr. Eckbert von Bohlen und Halbach',
      headOffice2: 'Consul, ad honorem',
      headOffice3: 'Ms. Jutta Hippelein',
      headOffice4: 'Vice Consul, ad honorem',
      address: 'Nussbaumstrasse 10/V, 80336 Munich, Germany',
      email1: 'bayern-hc@philippine-embassy.de',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, STUTTGART',
      headOffice1: 'Mr. Gerhard Zeidler',
      headOffice2: 'Consul General, ad honorem',
      address: 'DEKRA Headquarters, Handwerkstrasse 15, 70565 Stuttgart, Germany',
      email1: 'gerhard.zeidler@dekra.com;',
      email2: 'bw-hcg@philippine-embassy.de',
    },
  ]
  export const greece:optional[] = [
    {
      country: 'Greece',
      name: 'EMBASSY OF THE PHILIPPINES, BERLIN',
      headOffice1: 'H.E. (Mr.) Meynardo L. Montealegre',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '26 Antheon Street, Paleo Psychico 154-52 Athens, Greece',
      email1: 'athens.pe@dfa.gov.ph;',
      email2: 'athenspe@otenet.gr',
    },
    {
      name: 'PHILIPPINE CONSULATE, CRETE',
      headOffice1: 'Mr. Alexandros Fasoulakis',
      headOffice2: 'Consul, ad honorem',
      address: 'No. 3 Saint Ekaterinis Square, 712 01 Heraklion, Crete, Greece',
    },
    {
      name: 'PHILIPPINE CONSULATE, PATRAS',
      headOffice1: 'Ms. Anastasia Manolopoulou',
      headOffice2: 'Consul, ad honorem',
      address: '111 Patron Clauss Street, Patras 26335, Greece',
    },
    {
      name: 'PHILIPPINE CONSULATE, RHODES',
      headOffice1: 'Mr. Michalis J. Roditis',
      headOffice2: 'Consul, ad honorem',
      address: '3, Australias Str., P.O. Box 4172, Rhodes GR 85100, Greece',
      email1: 'mroditis@hol.gr',
    },
    {
      name: 'PHILIPPINE CONSULATE, THESSALONIKI',
      headOffice1: 'Mr. Nikolaos Margaropoulos',
      headOffice2: 'Consul, ad honorem',
      address: '22 Dodekanissou Street GR 54626 Thessaloniki, Greece',
    },
  ]
  export const india:optional[] = [
    {
      country: 'India',
      name: 'EMBASSY OF THE PHILIPPINES, NEW DELHI',
      headOffice1: 'H.E. (Mr.) Benito B. Valeriano',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '50-N Nyaya Marg. Chanakyapuri, New Delhi 110021, India',
      email1: 'newdelhi.pe@dfa.gov.ph;',
      email2: 'newdelhipe@bol.net.in',
      website: 'https://www.newdelhipe.com',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, CALCUTTA (KOLKATA)',
      headOffice1: 'Mr. Krishna Kumar Khemka',
      headOffice2: 'Consul General, ad honorem',
      address: '37 Shakespeare Sarani, 2/F, Kolkata, India 700017',
      email1: 'pcqkolkata@gmail.com;',
      email2: 'kkkhemka@vsnl.net',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, CHENNAI (MADRAS)',
      headOffice1: 'Mr. Ashwin C. Mutiah',
      headOffice2: 'Consul General, ad honorem',
      address: '“Spic House” Main Building,VIII Floor, 88 Mount Road, Guindy, Chennai, India 600032',
      email1: 'pcgchennai@spic.co.in',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MUMBAI (BOMBAY)',
      headOffice1: 'Ms. Rajashree Birla',
      headOffice2: 'Consul, ad honorem',
      headOffice3: 'Mr. Retnasamy Swaminathan',
      headOffice4: 'Consul, ad honorem',
      headOffice5: 'Ms. S. Krishna Moorthy',
      headOffice6: 'Vice Consul, ad honorem',
      address: '1st Floor, Industry House, 159 Churchgate Reclamation, Mumbai, India 400020',
      email1: 'pcgmumbai@gmail.com',
    },
  ]
  export const indonesia:optional[] = [
    {
      country: 'Indonesia',
      name: 'EMBASSY OF THE PHILIPPINES, JAKARTA',
      headOffice1: 'Mr. Roberto O. Manalo',
      headOffice2: 'Charge d’ Affaires',
      address: '6-8 Jalan Imam Bonjol, Menteng, Jakarta Pusat 10310, Republic of Indonesia',
      email1: 'jakarta.pe@dfa.gov.ph;',
      email2: 'phjkt@indo.net.id',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MANADO',
      headOffice1: 'Hon. (Mr.) Jose D.L. Burgos',
      headOffice2: 'Consul General',
      address: 'Jalan 17 Augustus, Tanjung Bato, Manado, North Sulawesi, Indonesia 95119',
      email1: 'manado.pcg@dfa.gov.ph;',
      email2: 'manadopcg09@yahoo.com;',
      email3: 'manadopcg09@gmail.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, SURABAYA',
      headOffice1: 'Mr. Carmelito J. Sagrado',
      headOffice2: 'Consul, ad honorem',
      address: 'JI Kaliwaron 128 Surabaya, 60285 Indonesia',
    },
  ]
  export const israel:optional[] = [
    {
      country: 'Israel',
      name: 'EMBASSY OF THE PHILIPPINES, TEL-AVIV',
      headOffice1: 'H.E. (Mr.) Generoso D.G. Calonge',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'No. 18 Bnei Dan Street, Tel-Aviv, 62260 Israel',
      email1: 'telaviv.pe@dfa.gov.ph;',
      email2: 'filembis@netvision.net.il',
      website: 'https://www.philembtelaviv.co.il',
    },
    {
      name: 'PHILIPPINE CONSULATE, ASHDOD',
      headOffice1: 'Mr. Boaz Waksman',
      headOffice2: 'Consul, ad honorem',
      address: 'Ophir Tours Ltd., 11 Rogozin Street, Ashdod, Israel',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, HAIFA',
      headOffice1: 'Mr. Carmel Hacohen',
      headOffice2: 'Consul General, ad honorem',
      address: '6 Watson Street, Haifa 34751, Israel',
      email1: 'hacohen@bezeqint.net',
    },
  ]
  export const italy:optional[] = [
    {
      country: 'Italy',
      name: 'EMBASSY OF THE PHILIPPINES, ROME',
      headOffice1: 'H.E. (Mr.) Virgilio A. Reyes, Jr.',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'Viale delle Medaglie d’Oro 112-114, 00136 Rome, Italy',
      email1: 'rome.pe@dfa.gov.ph;',
      email2: 'romepe2007@gmail.com',
      website: 'https://www.philembassy-rome.net',
    },
    {
      name: 'PHILIPPINE CONSULATE, FLORENCE',
      headOffice1: 'Dr. Fabio Fanfani',
      headOffice2: 'Consul, ad honorem',
      address: 'Via Ridolfi nr. 50129 Florence, Italy',
      email1: 'fabio.fanfani@institutofanfani.it',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MILAN',
      headOffice1: 'Hon. (Ms.) Lourdes S. Tabamo',
      headOffice2: 'Consul General',
      address: 'Via Stromboli No. 1, 20144 Milan, Italy',
      email1: 'milan.pcg@dfa.gov.ph;',
      email2: 'milanpcg@libero.it;',
      email3: 'philcongenmilan@gmail.com',
      website: 'https://www.philcongenmilan.net',
    },
    {
      name: 'PHILIPPINE CONSULATE, REGGIO CALABRIA',
      headOffice1: 'Mr. Domenico Marciano',
      headOffice2: 'Consul, ad honorem',
      address: 'Via Galileo Galilei No. 7 (Ground Floor), 89129 Reggio Calabria',
      email1: 'philconsulrc@virgilio.it',
    },
  ]
  export const japan:optional[] = [
    {
      country: 'Japan',
      name: 'EMBASSY OF THE PHILIPPINES, TOKYO',
      headOffice1: 'H.E. (Mr.) Manuel M. Lopez',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '5-15-5, Roppongi Minato-ku;',
      address2: 'Tokyo 106-8537, Japan',
      email1: 'tokyo.pe@dfa.gov.ph;',
      email2: 'phjp@gol.com',
      website: 'https://tokyo.philembassy.net',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, NAGOYA',
      headOffice1: 'Mr. Masaaki Furukawa',
      headOffice2: 'Consul General, ad honorem',
      address: '4/F, Century Toyota Bldg. 4-9-8 Meieki, Nakamura-ku, Nagoya City, 450-8575, Japan',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, NAHA CITY',
      headOffice1: 'Ms. Asako Nakamoto Alarcon',
      headOffice2: 'Consul General, ad honorem',
      address: '2nd Floor Aljon Building, 2-35-1 Aragasuku Ginowan City, Okinawa, Japan 901-22',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, OSAKA',
      headOffice1: 'Hon. (Ms.) Ma. Teresa L. Taguiang',
      headOffice2: 'Consul General',
      address: 'Twin 21 MID Tower, 2-1-61 Shiromi, Chuo-ku Osaka, Japan',
      email1: 'osaka.pcg@dfa.gov.ph;',
      email2: 'osakapc@osk.3web.ne.jp',
      website: 'https://www.osakapcg.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, SAPPORO CITY',
      headOffice1: 'Mr. Kenichi Tobe',
      headOffice2: 'Consul, ad honorem',
      address: '1-2-27 Ichijo, Nishi Hakken, Nishi-ku, Sapporo-shi 063',
    },
  ]
  export const mexico:optional[] = [
    {
      country: 'Mexico',
      name: 'EMBASSY OF THE PHILIPPINES, MEXICO',
      headOffice1: 'H.E. (Mr.) George B. Reyes',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'Rio Rhin #56',
      address2: 'Colonia Cuauhtemoc',
      address3: 'Delegacion Cuauhtemoc',
      address4: 'C.P. 06500 Mexico Distrito Federal',
      email1: 'mexico.pe@dfa.gov.ph;',
      email2: 'ambamexi@gmail.com',
    },
    {
      name: 'PHILIPPINE CONSULATE, GUADALAJARA',
      headOffice1: 'Mr. Martin Camarena De Obeso',
      headOffice2: 'Consul, ad honorem',
      headOffice3: 'Mrs. Martha Mejia De Castaneda',
      headOffice4: 'Vice Consul, a.h.',
      address: 'Calle Justo Sierra No. 2487, Col. Ladron de Guevara 4680, Guadalajara, Jalisco, Mexico',
      email1: 'martcado@hotmail.com;',
      email2: 'cfilip@prodigy.net.mx',
    },
    {
      name: 'PHILIPPINE CONSULATE, MONETERREY',
      headOffice1: 'Mr. Francisco E. Cue',
      headOffice2: 'Consul, ad honorem',
      address: '106 Mision San Patricio Street, San Pedro Garza Garcia City, Nuevo Leon, N.L. 66270 Nuevo Leon, Mexico',
      email1: 'cue.francisco@gmail.com',
    },
  ]
  export const netherlands:optional[] = [
    {
      country: 'Netherlands',
      name: 'EMBASSY OF THE PHILIPPINES, THE HAGUE',
      headOffice1: 'H.E. (Ms.) Lourdes G. Morales',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'Laan Copes Van Cattenburch 125, 2585 EZ, The Hague, Netherlands',
      email1: 'thehague.pe@dfa.gov.ph;',
      email2: 'thehague@philembassy.nl',
      website: 'https://www.philembassy.nl',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, AMSTERDAM',
      headOffice1: 'Mr. Eppo H. Horlings',
      headOffice2: 'Consul General, ad honorem',
      address: 'Crown Building, South',
      address2: 'Hullen Bergweg 365a',
      address3: '1101 CP Amsterdam Z.O.',
      email1: 'ehhorlings@assurance.nl',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, ROTTERDAM',
      headOffice1: 'Mr. Aart Korteland',
      headOffice2: 'Consul General, ad honorem',
      address: 'STC-Group, Lloydstraat 300, 133/F, Room 13.05 – 3024 EA Rotterdam Postbus 63140, 3002 JC Rotterdam',
      email1: 'aart.korteland@denocomp.nl',
    },
  ]
  export const newZealand:optional[] = [
    {
      country: 'New Zealand',
      name: 'EMBASSY OF THE PHILIPPINES, WELLINGTON',
      headOffice1: 'H.E. (Ms.) Virginia H. Benavidez',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '50 Hobson Street, Thorndon, Wellington, New Zealand',
      email1: 'wellington.pe@dfa.gov.ph;',
      email2: 'embassy@wellington-pe.co.nz',
      website: 'https://www.philembassy.org.nz',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, AUCKLAND',
      headOffice1: 'Mrs. Emilia Pe-Shi',
      headOffice2: 'Consul General, ad honorem',
      headOffice3: 'Ms. Johanna Chan',
      headOffice4: 'Vice Consul, a.h.',
      address: '395 Lake Road, Takapuna North Shore City 0622',
      email1: 'admin@philconsul.org.nz',
    },
    {
      name: 'PHILIPPINE CONSULATE, CHRISTCHURCH',
      headOffice1: 'Mr. Edric Peter Wait',
      headOffice2: 'Consul, ad honorem',
      address: '230A Clyde Road, Fendalton, P.O. Box 22-303, Christchurch, New Zealand',
    },
  ]
  export const russia:optional[] = [
    {
      country: 'Russia',
      name: 'EMBASSY OF THE PHILIPPINES, MOSCOW',
      headOffice1: 'H.E. (Mr.) Alejandro B. Mosquera',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: 'Karmanitsky Peruoulok 6/8',
      address2: '121099 Moscow, Russian Federation',
      email1: 'moscow.pe@dfa.gov.ph;',
      email2: 'moscowpe@stream.ru;',
      email3: 'pe.moscow@yahoo.com',
      website: 'https://www.phil-embassy.ru',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, ST. PETERSBURG',
      headOffice1: 'Mr. Sergey Alexeev',
      headOffice2: 'Consul General, ad honorem',
      address: 'Business Center, “SENTRAKO” Bolshoy Prospekt, 103 Vasilievsky Ostrov St., Petersburg 199106, Russia',
      email1: 'lenexpo@mail.lenexpo.ru;',
      email2: 'g.surkov@lenexpo.ru',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, VLADIVOSTOK',
      headOffice1: 'Mr. Yuri M. Kostyukov',
      headOffice2: 'Consul General, ad honorem',
      address: 'St. Admirala Fokina, 20, 5th Floor Vladivostok, 690091',
      email1: 'philhoncon@mail.primorye.ru',
    },
  ]
  export const saudiArabia:optional[] = [
  ]
  export const singapore:optional[] = [
  ]
  export const southAfrica:optional[] = [
  ]
  export const spain:optional[] = [
  ]
  export const switzerland:optional[] = [
  ]
  export const syria:optional[] = [
  ]
  export const timorLeste:optional[] = [
  ]
  export const thailand:optional[] = [
  ]
  export const turkey:optional[] = [
  ]
  export const unitedArabEmirates:optional[] = [
  ]
  export const unitedKingdom:optional[] = [
  ]
  export const unitedStatesOfAmerica:optional[] = [
  ]
  export const vatican:optional[] = [
  ]
  export const venezuela:optional[] = [
  ]
  export const vietnam:optional[] = [
  ]