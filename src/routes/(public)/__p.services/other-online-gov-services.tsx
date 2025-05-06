import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'
import Button from '@/components/user/shared/buttons/button'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Heading } from 'lucide-react'
type optional = {
  country?:string,
  name:string,
  headOffice1:string,
  headOffice2?:string,
  headOffice3?:string,
  headOffice4?:string,
  headOffice5?:string,
  headOffice6?:string,
  address:string,
  address2?:string,
  email1?:string,
  email2?:string,
  email3?:string,
  website?:string,
}


export const Route = createFileRoute(
  '/(public)/__p/services/other-online-gov-services',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const services = [
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
      description0: <br/>,
      description1: '1) 5Rs of Waste Management,',
      description2: '2) Bookkeeping for Micro Enterprises, and',
      description3: '3) Stock Control for Productivity Improvement',
      govAgency: 'DOLE',
      links:'https://elearning.nwpc.dole.gov.ph/login/index.php',
    },
  ]
  const australia:optional[] = [
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
  const austria:optional[] = [
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
  const brazil:optional[] = [
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
  const canada:optional[] = [
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
  const china:optional[] = [
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
  const france:optional[] = [
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
  const germany:optional[] = [
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
  const greece:optional[] = [
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
  const india:optional[] = [
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
  const indonesia:optional[] = [
    {
      country: 'Indonesia',
      name: 'EMBASSY OF THE PHILIPPINES, JAKARTA',
      headOffice1: 'H.E. (Mr.) Benito B. Valeriano',
      headOffice2: 'Ambassador Extraordinary and Plenipotentiary',
      address: '50-N Nyaya Marg. Chanakyapuri, New Delhi 110021, India',
      email1: 'newdelhi.pe@dfa.gov.ph;',
      email2: 'newdelhipe@bol.net.in',
    },
    {
      name: 'PHILIPPINE CONSULATE GENERAL, MANADO',
      headOffice1: 'Mr. Krishna Kumar Khemka',
      headOffice2: 'Consul General, ad honorem',
      address: '37 Shakespeare Sarani, 2/F, Kolkata, India 700017',
      email1: 'pcqkolkata@gmail.com;',
      email2: 'kkkhemka@vsnl.net',
      email3: '',
    },
    {
      name: 'PHILIPPINE CONSULATE, SURABAYA',
      headOffice1: 'Mr. Carmelito J. Sagrado',
      headOffice2: 'Consul, ad honorem',
      address: 'JI Kaliwaron 128 Surabaya, 60285 Indonesia',
    },
  ]
  const iran:optional[] = [
  ]
  const israel:optional[] = [
  ]
  const italy:optional[] = [
  ]
  const japan:optional[] = [
  ]
  const jordan:optional[] = [
  ]
  const kenya:optional[] = [
  ]
  const republicOfKorea:optional[] = [
  ]
  const kuwait:optional[] = [
  ]
  const laos:optional[] = [
  ]
  const lebanon:optional[] = [
  ]
  const libya:optional[] = [
  ]
  const malaysia:optional[] = [
  ]
  const mexico:optional[] = [
  ]
  const myanmar:optional[] = [
  ]
  const netherlands:optional[] = [
  ]
  const newZealand:optional[] = [
  ]
  const nigeria:optional[] = [
  ]
  const norway:optional[] = [
  ]
  const oman:optional[] = [
  ]
  const pakistan:optional[] = [
  ]
  const papuaNewGuinea:optional[] = [
  ]
  const poland:optional[] = [
  ]
  const portugal:optional[] = [
  ]
  const qatar:optional[] = [
  ]
  const russia:optional[] = [
  ]
  const saudiArabia:optional[] = [
  ]
  const singapore:optional[] = [
  ]
  const southAfrica:optional[] = [
  ]
  const spain:optional[] = [
  ]
  const switzerland:optional[] = [
  ]
  const syria:optional[] = [
  ]
  const timorLeste:optional[] = [
  ]
  const thailand:optional[] = [
  ]
  const turkey:optional[] = [
  ]
  const unitedArabEmirates:optional[] = [
  ]
  const unitedKingdom:optional[] = [
  ]
  const unitedStatesOfAmerica:optional[] = [
  ]
  const vatican:optional[] = [
  ]
  const venezuela:optional[] = [
  ]
  const vietnam:optional[] = [
  ]

  return (
    <>
      <BiggerBanner text='Access Government Services' label='Other Government Online Services for Overseas Filipinos' img_url='/img-assets/gov-services/other-gov-services/airport-people-walking-4120835.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light space-y-20'>
          <Heading4>Other Government Online Services for Overseas Filipinos</Heading4>
          <div className='space-y-10'>
            <Paragraph>Access other government online services for overseas Filipinos. Find out what their special programs are for overseas Filipinos.</Paragraph>
            {/*  */}
            <Table >
              <TableHeader className='border-1'>
                <TableRow>
                  <TableHead className="text-white bg-teal-500 border-r-1 border-gray-400 text-center py-8">
                    <Heading5>Online Services</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 border-r-1 border-gray-400 py-8">
                    <Heading5>Description of Service/Benefits</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 border-r-1 border-gray-400 py-8">
                    <Heading5>Government Agency</Heading5>
                  </TableHead>
                  <TableHead className="text-white text-center bg-teal-500 py-8">
                    <Heading5>Links</Heading5>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='border-1 '>
                {services.map((i,idx) => (
                  <TableRow key={idx}>
                    <TableCell className='border-r-1 border-gray-400'>{i.onlineServices}</TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.description}
                      <p>{i.description0}{i.description1}</p>
                      <p>{i.description2}</p>
                      <p>{i.description3}</p>
                    </TableCell>
                    <TableCell className='border-r-1 border-gray-400'>{i.govAgency}</TableCell>
                    <TableCell><RoseAnchor className='text-rose-700 hover:text-rose-500 break-all' href_url={i.links}>{i.links}</RoseAnchor></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/*  */}
          <Heading4>Directory of Philippine Embassies and Consulates Overseas</Heading4>
        </div>
          <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32 mt-10'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-7xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>ARGENTINA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='border-r-1 border-gray-400'>Argentina</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BUENOS AIRES</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>H.E. (Mr.) Rey A. Carandang<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='border-r-1 border-gray-400'>Embajada de la República de Filipinas, Zapiola 1701,<br/><br/>C1426AUI Ciudad Autónoma de Buenos Aires</TableCell>
                      <TableCell className='border-r-1 border-gray-400 break-all'>buenosaires.pe@dfa.gov.ph;<br/>pheba@fibertel.com.ar</TableCell>
                      <TableCell><RoseAnchor className='break-all' href_url='https://www.embafil.com.ar'>www.embafil.com.ar</RoseAnchor></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>AUSTRALIA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {australia.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>AUSTRIA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {austria.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>BAHRAIN</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Bahrain</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, MANAMA</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Sahid S. Glang<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Villa No. 992, Road No. 3119, New Zinj, Manama, Kingdom of Bahrain</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>manama.pe@dfa.gov.ph;<br/>manamape@batelco.com.ph</TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy-bahrain.org'>www.philembassy-bahrain.org</RoseAnchor></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>BANGLADESH</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Bangladesh</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DHAKA</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Bahnarim A. Guinomla<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 17, Road No. 7, Baridhara, Dhaka 1212, People’s Republic of Bangladesh</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>dhaka.pe@dfa.gov.ph;<br/>philemb2@aknetbd.com</TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassydhaka.org'>www.philembassydhaka.org</RoseAnchor></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>BELGIUM</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Belgium</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BRUSSELS</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Victoria S. Bataclan<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 17, Road No. 7, Baridhara, Dhaka 1212, People’s Republic of Bangladesh</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>dhaka.pe@dfa.gov.ph;<br/>philemb2@aknetbd.com</TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.be'>www.philembassy.be</RoseAnchor></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, DHAKA</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mr. Peter van Bogaert<br/>Consul General, ad honorem<br/><br/>Mr. Antonio A. Guansing<br/>Consul, ad honorem</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>90 Duerne, Antwerp, Belgium</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>pb.vanbogaert@skynet.be;<br/>aguansing@skynet.be</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-7' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>BRAZIL</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {brazil.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-8' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>BRUNEI</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Brunei</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BRUNEI</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Nestor Z. Ochoa<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Simpang 336, Diplomatic Enclave<br/>Jalan Kebangsaan, Bandar Seri Begawan, BA 1210<br/>Brunei Darussalam</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>brunei.pe@dfa.gov.ph;<br/>bruneipe@brunet.bn/;<br/>bruneipe@gmail.com</TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.philembassy.be'>www.philippine-embassybrunei.com</RoseAnchor></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-9' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>CAMBODIA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Cambodia</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PHNOM PENH</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Mr.) Noe A. Wong<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>House No. 15, Street 422, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Kingdom of Cambodia</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>phnompenh.pe@dfa.gov.ph;<br/>phnompenhpe@ezecom.com.kh</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-10' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>CANADA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {canada.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-11' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>CHILE</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Chile</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, SANTIAGO</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Ma. Consuelo Puyat-Reyes<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Felix de Amesti No. 367, Las Condes, Santiago, Chile</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>santiago.pe@dfa.gov.ph;<br/>embassyphil@vtr.net/<br/>embafilsantiago@vtr.net</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'></TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, SAN ANTONIO</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mrs. Ingeborg Gwinner Maurice<br/><br/>Consul, ad honorem</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Avenida del Mar 02 Santo Domingo, San Antonio, Chile</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>igwinner@mi.cl</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-12' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>CHINA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {china.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                        <p>{i.email3}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-13' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>CZECH REPUBLIC</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Czech Republic</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, PRAGUE</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Evelyn D. Austria-Garcia<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Senovazne Namesti 8, 110 00, Prague 1, Czech Republic</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>prague.pe@dfa.gov.ph;<br/><br/>praguepe@gmail.com</TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url='https://www.praguepe.cz'>www.praguepe.cz</RoseAnchor></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-14' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>EGYPT</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Egypt</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, CAIRO</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. Claro S. Cristobal<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Road 200, Villa 28 Degla, Maadi, Cairo, Arab, Republic of Egypt</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>cairo.pe@dfa.gov.ph;<br/>cairope@tedata.net.eg;<br/>cairo.pe@dfa.gov.ph</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-15' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>FINLAND</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Finland</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>PHILIPPINE CONSULATE, GREATER HELSINKI</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Mrs. Teresita Zurbano Ruutu<br/><br/>Vice Consul, ad honorem</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>Ukonkivenpolku 3e, Fi-01610 Vantaa, Finland</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>teresita.ruutu@saunalahti.fi</TableCell>
                      <TableCell className='p-2'></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-16' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>FRANCE</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {france.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-17' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>GERMANY</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {germany.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p>{i.headOffice2}</p>
                        <p><br/>{i.headOffice3}</p>
                        <p>{i.headOffice4}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-18' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>GREECE</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {greece.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p><br/>{i.headOffice2}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                        <p>{i.email3}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-19' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>HUNGRARY</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    <TableRow>
                      <TableCell className='p-2 border-r-1 border-gray-400'>Hungrary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>EMBASSY OF THE PHILIPPINES, BUDAPEST</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>H.E. (Ms.) Eleanor L. Jaucian<br/><br/>Ambassador Extraordinary and Plenipotentiary</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>1026 Budapest , Gabor Aron utca 58 Budapest, Hungary</TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>budapest.pe@dfa.gov.ph;<br/>consular.ph;<br/>@mail.datanet.hu</TableCell>
                      <TableCell className='p-2 break-all'>phbuda@mail.datanet.hu</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value='item-20' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <p className='text-sm font-light'>INDIA</p>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Table>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 border-gray-400 text-center py-8">
                        <Heading5>Country</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Name</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Head of Office</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Address</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center border-r-1 border-gray-400 py-8">
                        <Heading5>Email</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Website</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1 '>
                    {india.map((i,idx) => (
                    <TableRow key={idx}>
                      <TableCell className='p-2 border-r-1 border-gray-400'>{i.country}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.name}</TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.headOffice1}
                        <p>{i.headOffice2}</p>
                        <p><br/>{i.headOffice3}</p>
                        <p>{i.headOffice4}</p>
                        <p><br/>{i.headOffice5}</p>
                        <p>{i.headOffice6}</p>
                      </TableCell>
                      <TableCell className='p-2 text-left border-r-1 border-gray-400'>{i.address}
                        <p>{i.address2}</p>
                      </TableCell>
                      <TableCell className='p-2 border-r-1 border-gray-400 break-all'>{i.email1}
                        <p>{i.email2}</p>
                      </TableCell>
                      <TableCell className='p-2'><RoseAnchor className='break-all' href_url={i.website}>{i.website}</RoseAnchor></TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
      </section>
    </>
  )
}