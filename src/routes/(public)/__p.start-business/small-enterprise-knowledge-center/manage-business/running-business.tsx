import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Separator } from '@radix-ui/react-separator'
import { Table, TableHead, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/manage-business/running-business',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const advertAndPRItems = [
    {
      advertising: "Space or time in the mass media must be purchased.",
      publicRelations: "Mass media coverage (if any) is not paid for.",
    },
    {
      advertising: "You determine the message.",
      publicRelations: "The media controls the interpretation of the message.",
    },
    {
      advertising: "You control timing.",
      publicRelations: "The media controls the timing.",
    },
    {
      advertising: "One-way communication – using the mass media does not allow feedback.",
      publicRelations: "Two-way communication – the company should be listening as well as talking, and the various PR venues often provide immediate feedback.",
    },
    {
      advertising: "Message sponsor is identified.",
      publicRelations: "Message sponsor is not overtly identified.",
    },
    {
      advertising: "The intention of most messages is to inform, persuade, or remind about a product – usually with the intention of making a sale.",
      publicRelations: "The intention of public relations efforts is often to create goodwill, to keep the company and/or product in front of the public, or to humanize a company so the public relates to its people or reputation, rather than viewing the company as a non-personal entity.",
    },
    {
      advertising: "The public may view the message negatively, recognizing advertising as an attempt to persuade or manipulate them.",
      publicRelations: "The public often sees public relations messages that have been covered by the media as more neutral or believable.",
    },
    {
      advertising: "Very powerful at creating image.",
      publicRelations: "Can also create image, but can sometimes stray from how it was originally intended.",
    },
    {
      advertising: "Writing style is usually persuasive and can be very creative, often taking a conversational tone; it may even be grammatically incorrect.",
      publicRelations: "Writing style is generally more formal and less colloqui",
    },
  ]
  
  return (
    <>
      <BiggerBanner text='Running a Business' label='Manage a Business' img_url='/img-assets/start-a-business/leading-company/managing-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Running a Business</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Managing Business Finances and Accounting</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>As a business owner, you need to be smart about how you handle transactions between you and your suppliers and customers, including those that you transact with your employees . Learn about how you can manage these transactions.</Paragraph>
                {/*  */}
                <Heading5>Accepting Cash Only</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph className='mt-5'>Cash is the most commonly accepted and reliable form of payment for a business. Many small businesses operate as “cash only” merchants. If you’re thinking about starting a cash only business or if you’re considering expanding your current payment options, be aware of the pros and cons of only accepting cash.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/cash.png' />
                </div>
                <Paragraph><b>Pros</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Cash payments ensure that funds are received immediately.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Cash is the simplest form of payment and involves less bookkeeping.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Cash only businesses don’t have to worry about fees associated with other payment options.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>There is limited risk of fraud when accepting cash only.</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph><b>Cons</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Customers may walk away from the purchase if they don’t have enough cash and you may lose customers.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Keeping large sums of cash increases the amount of time you’ll spend managing finances.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Large sums of cash also poses a security risk.</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>The nature of some small businesses may make it smarter to stay cash only. Retail stores, street vendors, and barber shops are just a few examples of common cash only small businesses. At the end of the day, you will have to decide which payment options will create the most success for your business.</Paragraph>
                {/*  */}
                <Heading5>Accepting Checks</Heading5>
                <Paragraph className='mt-5'>If you want to expand your customer payment options beyond cash but aren’t ready to make the leap to card payments, accepting checks is another option to consider.</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph><b>Policies for Accepting Checks</b><br/><br/>
                  If your business accepts personal checks, establish a detailed check acceptance policy to help identify and avoid bad checks. Don’t just make a document and file it away–be sure to train your employees on the new policies and post reminders in visible and prominent locations.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/cheque.png' />
                </div>
                {/*  */}
                <Paragraph>Common policies usually include:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Checks must be from a local bank</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Checks should not be written and accepted for more than the purchase amount</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Starter checks, unnumbered checks, or non-personalized checks should not be accepted</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Accepted checks should be deposited as quickly as possible. Banks may refuse to honor checks dated back six months or more</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph>Employees should carefully examine every personal check for information that is essential for cashing the check:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The customer’s complete name and address must appear on the check</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The check date must be current.  Do not accept post- or future-dated checks</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The check must have a bank identification number, or routing transit number, that runs across the bottom, along with the customer’s account number and check number.  This information is used by a bank to identify the transaction and resolve payment issues</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The “Pay to the Order of” section must indicate your correct business’s name</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Both the written and numeric amounts must match</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The check should be signed in your presence and verified with photo identification</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Verifying</b><br/><br/>
                Verifying identification can help your business safeguard against fraud.  However, some laws regulate which forms of identification businesses can require to see. It may be illegal to require customers to show a credit card as a condition for accepting their check. However, commonly accepted forms of identification often include a driver’s license, I.D. card, or military I.D.<br/><br/>
                Follow these tips when verifying customer identification:<br/><br/>
                <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Make sure the signature on the customer’s identification matches the signature on the customer’s check</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Use discretion when recording personal information like phone numbers, identification numbers and expiration dates</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Trust your instincts and be on the lookout for suspicious behavior or fraud “red flags.” For questionable transactions, call the customer’s bank to verify legitimacy of a check</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph><b>Accepting Credit Cards</b><br/><br/>
                  Credit and debit cards are popular, convenient, flexible and have become increasingly important in business commers.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/credit-card.png' />
                </div>
                <Paragraph><b>Pros</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>A common method of customer payment</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Businesses can easily accept card payments</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>The convenience of card payments increases the likelihood of consumer purchase, especially during lack of cash on hand and therefore increases average sales</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph><b>Cons</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>An increased risk in fraud</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Business encounter small processing fees for purchase transactions</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Card transactions add another layer of detail to your business bookkeeping practices</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph className='mt-5'><b>Extending Credit to Your Customers</b><br/><br/>
                By extending credit to your customers, you give them the option to purchase products or services today and pay for them at a later date. When your business accepts credit card payments and personal checks or issues invoices customers, it is essentially extending credit on the assumption that customers have the funds to pay for the transaction.<br/><br/>

                When you extend credit to customers through card payments, the credit card company manages the risk. When you extend credit through invoices or personal checks, you are responsible for verifying and accepting payments and managing the risks that come with them.<br/><br/>

                Extending credit through invoices is common in some industries such as construction or manufacturing, but may not be practical for every business. To decide if extending credit is right for your business, weigh the associated rewards and risks.</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>The option of credit enables customers to focus less on prices, enhances customer relations, and has the potential to generate more sales.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Extending credit costs money. When you sell something on credit, you will not have payment on hand and will need to temporarily recoup the cost from other areas of your operating capital.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>If customers don’t pay, you could be in for a long settlement process that may not end in your favor.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Ask yourself if you have a significant business need to extend credit. Extending credit could be the factor that keeps your business afloat if it makes it easier for your customers to buy from you. Nevertheless, if it isn’t necessary it may not be worth the extra time and paperwork.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Establish Credit Practices</b><br/><br/>
                Before you extend credit to customers, be sure to establish detailed policies and understand consumer protection laws.</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Determine to whom you will extend credit such as individual customers or other businesses. Run credit checks on all customers before you agree to extend credit.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Develop clear, consistent payment guidelines. Your bills should indicate when payment is due, when it will be considered delinquent, and who to contact with questions.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Determine how you will bill or invoice customers. Will you or your employees mail requests for payment yourselves, or will you hire another company to handle invoicing?</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Create a plan for collecting late or defaulted payments. Regardless of the type of application or documents you use for credit transactions, be sure to get all of your customers’ information in writing. In return, provide them with a copy of your payment policy, which spells out how penalties will be applied to late payments and how you will handle unpaid bills. It’s important to have this documentation in case a fraudulent or delinquent credit transaction occurs.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Online Payment Services</Heading5>
                <Paragraph className='mt-5'>Online payment services allow business and consumers to exchange money electronically over the Internet. With an online payment service, your business can receive payment from virtually any customer with an email account. Online payment services have recently become very popular with businesses and consumers.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/online-payment.png' />
                </div>
                <Paragraph><b>Advantages of Online Payment Services</b><br/><br/>
                Online payment services can either replace or supplement your decision to accept credit and debit cards. Opening an online payment account is often faster and easier than setting up a Merchant Account (which is required to accept credit and debit card payments). Online payment accounts typically incur smaller fees than a traditional Merchant Account, which can have a big impact on businesses with many small transactions. From a customer-service perspective, it’s beneficial to have multiple payment options available. Online payment services are also user-friendly and can simplify the payment process by storing customer card information or billing customers at a later date.</Paragraph>
                <Paragraph><b>Disadvantages of Online Payment Services</b><br/><br/>
                As with all payment methods, online payment services have their drawbacks. Most of these services redirect customers to a payment service website to complete a transaction. Being forced to leave your business’s website can be confusing for customers – especially those new to online shopping – and could make them abandon a purchase they may have otherwise made.<br/><br/>

                Your business may not get enough value out of offering both an online payment service and accepting card payments. On the other hand, limited payment options may turn some customers away. Finding the right balance of payment options is something that is unique for every business.</Paragraph>
                <Paragraph><b>Security Concerns</b><br/><br/>
                Major providers of online payment services have developed features like two-factor authentication to help businesses enhance e-commerce security. Two-factor authentication requires businesses to enter a six-digit code in addition to their password, making third-party scams rare. As e-commerce becomes more popular, security features will continue to evolve. Be sure to research service provider plans for the most current security technology.</Paragraph>
                <Paragraph><b>Shopping Cart Services</b><br/><br/>
                Online payment services require a virtual shopping cart. Virtual shopping carts allow businesses to accept orders on multiple products from their website. A shopping cart can calculate the total, tax, and shipping costs of an order, in addition to collecting customer account and shipping information.<br/><br/>

                Some online payment service providers offer free shopping cart services to businesses. If your online payment service does not provide a free, secure shopping cart option, third-party shopping cart services can be used.</Paragraph>
                {/*  */}
                <Separator className='h-[2px] bg-gray-400'/>
                <Heading5 className='mt-20'>9 Steps to Setting up a Payroll System</Heading5>
                <Paragraph className='mt-5'>Whether you have one employee or 50, setting up a payroll system not only streamlines your ability to stay on top of your legal and regulatory responsibilities as an employer, but it can also save you time and help protect you from incurring costly penalties from the Bureau of Internal Revenue (BIR).</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'><b>Obtain a Tax Identification Number (TIN)</b><br/>
                  Before hiring employees, you need to get TIN from the BIR. It is issued when you register your business at the BIR and it is necessary for reporting taxes and other documents to the BIR. In addition, the EIN is necessary when reporting information about your employees to national agencies like SSS and PhilHealth.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'><b>Know the difference between an Employee and an Independent Contractor</b><br/>
                  Be clear on the distinction between an independent contractor and an employee. In legal terms, the line between the two is not always clear and it affects how you withhold income taxes, withhold and pay Social Security and PhilHealth Premiums.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'><b>Take Care of Employee Paperwork</b><br/>
                  New employees must also acquire their TIN from the BIR especially if this is their first time earning and paying taxes. Your employee must complete the form and return it to you so that you can withhold the correct the appropriate taxes from their pay.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'><b>Decide on a Pay Period</b><br/>
                  You may already have a manual process for this, but the pay period is determined by the Labor Code. Wages should be paid at least once every two weeks, or twice a month, at intervals not exceeding sixteen days. BIR also requires that you withhold income tax for that time period even if your employee does not work the full period.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'><b>Carefully Document Your Employee Compensation Terms</b><br/>
                  As you set up payroll, you’ll also want to consider how you handle paid time off (not a legal requirement, but offered by most businesses), how you track employee hours, if and how you pay overtime, and other business variables. Don’t forget that other employee compensation and business deductibles such as social security and health plan premiums will also need to be deducted from employee paychecks and paid to the appropriate organizations.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'><b>Choosing a Payroll System</b><br/>
                  Payroll administration requires an acute attention to detail and accuracy, so it’s worth doing some research to understand your options. Start by asking fellow business owners which method they use and if they have any tips for setting up and administering payroll. Typically, your options for managing payroll include in-house or outsourced options. However, regardless of the option you choose, you — as the employer — are responsible for reporting and paying of all payroll taxes.</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'><b>Running Payroll</b><br/>
                  Once you have all your forms and information collated, you can start running payroll. Depending on which payroll system you choose, you’ll either enter it yourself or give the information to your accountant.</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'><b>Record Keeping</b><br/>
                  The Anti-Money Laundering Law requires employers to maintain and safely store financial records of transactions for five years from the date of the accounts or transactions.</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-11'><b>Report Payroll Taxes</b><br/>
                  There are several payroll tax reports that you are required to submit to the appropriate authorities on either a quarterly or annual basis. Aside from the monthly remittances for Compensation Tax and SSS/PhilHealth/Pag-Ibig Premiums, the SSS, for example requires you to report Quarterly on the amount of premiums you have deducted and remitted from your employees. The BIR likewise requires businesses to submit annually an alphalist of all the taxpayers for the previous year.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Marketing</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Marketing 101</Heading5>
                <Paragraph className='mt-5'>In order to successfully grow your business, you’ll need to attract and then work to retain a large base of satisfied customers. Marketing emphasizes the value of the customer to the business, and has two guiding principles:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>All company policies and activities should be directed toward satisfying customer needs.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'>Profitable sales volume is more important than maximum sales volume.</Paragraph>
                </div>
                <Paragraph>To best use these principles, a small business should:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Determine the needs of their customers through market research.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Analyze their competitive advantages to develop a market strategy.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Select specific markets to serve by target marketing.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Determine how to satisfy customer needs by identifying a market mix.</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>Marketing programs, though widely varied, are all aimed at convincing people to try out or keep using particular products or services. Business owners should carefully plan their marketing strategies and performance to keep their market presence strong</Paragraph>
                {/*  */}
                <Heading5>Conducting Market Research</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph className='mt-5'>Successful marketing requires timely and relevant market information. An inexpensive research program, based on questionnaires given to current or prospective customers, can often uncover dissatisfaction or possible new products or services.<br/><br/>

                  Market research will also identify trends that affect sales and profitability. Population shifts, legal developments, and the local economic situation should be monitored to quickly identify problems and opportunities. It is also important to keep up with competitors’ market strategies.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/analyze-competition-1.png' />
                </div>
                {/*  */}
                <Heading5>Managing the Market Mix</Heading5>
                <Paragraph>Every marketing program contains four key components:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Products and Services</b>: Product strategies include concentrating on a narrow product line, developing a highly specialized product or service or providing a product-service package containing unusually high-quality service.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Promotion</b>: Promotion strategies focus on advertising and direct customer interaction. Good salesmanship is essential for small businesses because of their limited advertising budgets. Online marketing is a cheap, quick, and easy way to ensure that your business and product receive high visibility.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Price</b>: When it comes to maximizing total revenue, the right price is crucial.  Generally, higher prices mean lower volume and vice-versa; however, small businesses can often command higher prices because of their personalized service.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Distribution</b>: The manufacturer and wholesaler must decide how to distribute their products. Working through established distributors or manufacturers’ agents is generally easiest for small manufacturers. Small retailers should consider cost and traffic flow in site selection, especially since advertising and rent can be reciprocal: a low-cost, low-traffic location means spending more on advertising to build traffic.</Paragraph>
                  </div>
                </Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/marketing-sales-1.png' />
                </div>
                <Paragraph>The aforementioned steps combine to form a holistic marketing program.<br/><br/>

                The nature of the product or service is also important in citing decisions. If purchases are based largely on impulse, then high-traffic and visibility are critical. On the other hand, location is less of a concern for products or services that customers are willing to go out of their way to find. The Internet makes it easy for people to obtain goods from anywhere in the world, so if you’re worried about reaching a certain market, selling your product online may do wonders for your business.</Paragraph>
                {/*  */}
                <Heading5>Marketing 201</Heading5>
                <Paragraph className='mt-5'>Marketing is the process that companies use to get consumers interested in the items they’re selling. Marketing is advantageous to your business for many reasons. Here are just two of the benefits.<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>You alert customers to a product that suits their wants and/or needs.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Marketing will net your company profits, which will allow you to continue to do business in order to meet future customers’ needs.</Paragraph>
                  </div><br/>
                  Marketing efforts are the most successful when they focus on what the consumer wants, not on what you THINK the consumer wants.<br/><br/>

                  <b>How Can I Make My Customer Happy While Still Staying True to My Business?</b><br/><br/>

                  Marketing is defined as “the process of planning and executing the conception, pricing, promotion, and distribution of ideas, goods, and services to create exchanges that satisfy individual and organizational objectives.” Sounds complicated, but in order to be a successful marketer and businessperson, you’ll need to follow a few simple steps:
                </Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Define a target market.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Discover what products customers in your target market want to buy.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Set a price for these products.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Advertise your product to your customers.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Make your product available to your customers.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/running-business/market-analysis-2.png' />
                </div>
                {/*  */}
                <Paragraph><b>What Activities Are Included in Marketing?</b><br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <img src='/img-assets/start-a-business/running-business/marketing-plan-1.png' />
                    <div>
                      <Paragraph className='mt-5'>Marketing activities are numerous and varied. They include everything necessary to get a product off of a sketch pad and into the hands of consumers. Marketing includes activities such as:</Paragraph><br/>
                      <div className='grid grid-cols-12 gap-y-5'>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Designing a product to appear desirable to consumers</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Performing market research and pricing</Paragraph>
                        <Paragraph className='text-center'>-</Paragraph>
                        <Paragraph className='col-span-11'>Promoting the product through public relations, advertising, marketing communications, and sales and distribution</Paragraph>
                      </div>
                    </div>
                  </div>
                </Paragraph>
                <Paragraph>Marketing requires the orchestration of everyone who plays a role in the common goal of pleasing the customer. If you’re a small business owner with no employees, you may need to mentally break down the silos separating core business functions and think more holistically in terms of marketing strategies.</Paragraph>
                {/*  */}
                <Paragraph><b>How Can I Incorporate Marketing Into My Company?</b><br/><br/>

                The following represents a comprehensive list of marketing ideas that we’ve compiled for you to help you understand customer needs and ways to satisfy those needs.
                </Paragraph>
                {/*  */}
                <Paragraph><b>General Ideas</b><br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <div className='grid grid-cols-12 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Engage in at least one marketing activity every day.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Determine a percentage of gross income to spend annually on marketing.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Set specific marketing goals every year; review and adjust quarterly.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-11'>Carry business cards with you at all times. You never know who you’ll run into.</Paragraph>
                    </div>
                    <img src='/img-assets/start-a-business/running-business/understand-target.png' />
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Target Market</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Stay alert to trends that might impact your target market, product or promotion strategy.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Read market research studies about your profession, industry, product, target market groups, etc.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Collect competitors’ ads and literature; study them for information about strategy, product features, benefits, etc.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Ask clients why they hired you and solicit suggestions for improvement.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Identify a new market.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Join a list-serve (email list) related to your profession.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Subscribe to a LinkedIn group or a list-serve that serves your target market.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Product Development</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create a new service, technique or product.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Offer a simpler/cheaper/smaller version of your (or existing) product or service.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Offer a fancier/more expensive/faster/bigger version of your (or existing) product or service.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Update your services.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Education, Resources, and Information</b><br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <div className='grid grid-cols-8 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Establish a marketing and public relations advisory and referral team composed of your colleagues and/or neighboring business owners; share ideas and referrals and discuss community issues.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Create a forum or environment for employees to offer their suggestions.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Attend a marketing seminar.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Read a marketing book.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Subscribe to a marketing newsletter or other publication.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Subscribe to a marketing list-serve.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Train your staff, clients and colleagues to promote referrals.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Hold a monthly marketing meeting with employees or associates to discuss strategy and status and solicit marketing ideas.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Join an association or organization related to your profession.</Paragraph>
                    </div>
                    <img src='/img-assets/start-a-business/running-business/understand-segment-1.png' />
                  </div>
                </Paragraph>
                <div className='grid grid-cols-11 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Get a marketing intern to take you on as a client; it will give the intern experience and provide you with you some free marketing help.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Maintain a consultant card file for finding designers, writers, and other marketing professionals. Hire a marketing consultant and conduct several brainstorming sessions.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Visit another city or county to observe and learn from marketing techniques used there.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Pricing and Payment</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Analyze your fee structure and look for areas requiring modifications or adjustments. Establish a credit card payment option for clients.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Offer a discount to regular clients.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Learn to barter. Offer discounts to members of certain clubs/professional groups/organizations in exchange for promotions in their publications.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Provide cash discounts.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Offer financing or installment plans.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Marketing Communications</b><br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <div className='grid grid-cols-8 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Publish a newsletter for customers and prospects (it doesn’t have to be fancy or expensive).</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Develop an online brochure of services.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Produce separate business cards/sales literature for each of your target market segments (for example, government and commercial and/or business and consumer).</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Create a poster or calendar to give away to customers and prospects.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-7'>Print a slogan and/or one-sentence description of your business on letterhead, fax cover sheets and invoices. Get your business out on the Internet.</Paragraph>
                    </div>
                    <img src='/img-assets/start-a-business/running-business/technology-1.png' />
                  </div>
                </Paragraph>
                <div className='grid grid-cols-11 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Create a signature file to be used for all your email messages. It should contain contact details, including your website address and key information about your company that will make the reader want to contact you.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Include testimonials from customers in your literature.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Test a new mailing list. If it produces results, add it to your current direct mail lists or consider replacing a list that’s not performing up to expectations.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-10'>Announce free or special offers in your direct response pieces. (Direct responses may be direct mail, broadcast faxes, or email messages.) Include the offer in the beginning of the message as well as on the outside of the envelope for direct mail.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Media Relations</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Update your media list often so that press releases are sent to the right media outlet and person.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Send timely and newsworthy press releases as often as needed.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Write a column for the local newspaper, local business journal or a trade publication.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Circulate reprints of published articles.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Publicize your 500th client of the year (or other notable milestone).</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create an annual award and publicize it.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Get public relations and media training or read up on it.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Appear on a radio or TV talk show.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create your own TV program on your industry or your specialty. Market the show to your local cable station or public broadcasting station as a regular program, or see if you can air your show on an open access cable channel.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Write a letter to the editor of your local newspaper or trade magazine.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Take an editor to lunch to see what they’re writing out and explain how your business might fit in.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Get a publicity photo taken and enclose with press releases.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Consistently review newspapers and magazines for possible PR opportunities.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Submit tip articles to newsletters and newspapers.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Conduct industry research and develop a press release or article to announce an important discovery in your field.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create a press kit and keep its contents current.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Customer Service and Customer Relations</b><br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <div className='grid grid-cols-7 gap-y-5'>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Ask your clients to come back again.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Return phone calls promptly.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Set up an email or fax-on-demand system to easily respond to customer inquiries.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Use an answering machine or voice mail system to catch after-hours phone calls. Include basic information in your outgoing messages such a business hours, location, etc.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Ask clients what you can do to help them.</Paragraph>
                      <Paragraph className='text-center'>&#8226;</Paragraph>
                      <Paragraph className='col-span-6'>Take clients out to a ball game, show, or another special event – just send them two tickets with a note. Hold a seminar at your office for clients and prospects.</Paragraph>
                    </div>
                    <img src='/img-assets/start-a-business/running-business/partnership-1.png' />
                  </div>
                </Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Send handwritten thank you notes.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Send birthday cards and appropriate seasonal greetings.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Photocopy interesting articles and send them to clients and prospects with a hand-written FYI (for your information) note and your business card.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Send a book of interest or other appropriate business gift to a client with a handwritten note.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Create an area on your website specifically for your customers.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Redecorate your office or location where you meet with your clients.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Networking and Word of Mouth</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Join a Chamber of Commerce or other organization.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Join or organize a breakfast or lunch club with other professionals (not in your field) to discuss business and network referrals.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Serve on a city board or commission.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Host a holiday party.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Hold an open house.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Send letters to attendees after you attend a conference.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Join a community list-serve (email list) on the Internet.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Paragraph><b>Advertising</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Advertise during peak seasons for your business.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Get a memorable phone number, such as 1-800-WIDGETS.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Obtain a memorable URL and email address and include them on all marketing materials.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Provide Rolodex cards or phone stickers preprinted with your business contact information.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Promote your business jointly with other professionals via cooperative direct mail.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Advertise in a specialty directory or in the Yellow Pages.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Write an ad in another language to reach the non-English-speaking market. Place the ad in a publication that the market reads, such as a Hispanic newspaper.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Distribute advertising specialty products such as pens, mouse pads, or mugs.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Mail bumps – photos, samples and other innovative items to your prospect list. (A bump is simply anything that makes the mailing envelope bulge and makes the recipient curious about what’s in the envelope!)</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create a direct mail list of hot prospects.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Consider non-traditional tactics such as bus backs, billboards, and popular Web sites.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Project a message on the sidewalk in front of your place of business using a light directed through words etched in a glass window.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Consider placing ads in your newspaper’s classified section.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Consider a vanity automobile tag with your company name.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create a friendly bumper sticker for your car.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Code your ads and keep records of results.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Improve your building signage and directional signs inside and out.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Invest in a neon sign to make your office or storefront window visible at night.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Create a new or improved company logo or recolor the traditional logo.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Sponsor and promote a contest or sweepstakes.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/marketing-1.png' />
                </div>
                <Paragraph><b>Special Events and Outreach</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Get a booth at a fair/trade show attended by your target market.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Sponsor or host a special event or open house at your business location in cooperation with a local non-profit organization, such as a women’s business center. Describe how the organization helped you.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Give a speech or volunteer for a career day at a high school.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Teach a class or seminar at a local college or adult education center.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Sponsor an Adopt-a-Road area in your community to keep roads litter-free. People that pass by the area will see your name on the sign announcing your sponsorship.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Volunteer your time to a charity or nonprofit organization.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Donate your product or service to a charity auction.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Appear on a panel at a professional seminar.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Write a How To pamphlet or article for publishing.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Publish a book.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/sales-ideas.png' />
                </div>
                <Paragraph><b>Sales Ideas</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Start every day with two cold calls.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Read newspapers, business journal, and trade publications for new business openings, personnel appointments, and promotion announcements made by companies. Send your business literature to appropriate individuals and firms.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Give your sales literature to your lawyer, accountant, printer, banker, temp agency, office supply salesperson, advertising agency, etc. (expand your sales force for free).</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Put your fax number on order forms for easy submission.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Set up a fax-on-demand or e-mail system to easily distribute responses to company or product inquiries.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Follow up on your direct mailings, email messages and broadcast faxes with a friendly telephone call.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Try using the broadcast fax or email delivery methods instead of direct mail (broadcast fax and email allows you to send the same message to many locations at once).</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Use broadcast faxes or email messages to notify your customers of product service updates.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Extend your hours of operation.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Reduce response/turnaround time. Make reordering easy – use reminders. Provide pre-addressed envelopes.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Display product and service samples at your office.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Remind clients of the products and services you provide that they aren’t currently buying.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Call and/or send mail to former clients to try and reactivate them.</Paragraph>
                    <Paragraph className='text-center'>&#8226;</Paragraph>
                    <Paragraph className='col-span-11'>Take sales orders over the Internet.</Paragraph>
                  </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Marketing Performance</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>After implementing a marketing program, entrepreneurs must evaluate its performance. Every program should have performance standards to compare with actual results. Researching industry norms and past performances will help to develop appropriate standards.<br/><br/>

                Entrepreneurs should audit their company’s performance at least quarterly. The key questions are:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Is the company doing all it can to be customer-oriented?</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Do employees ensure the customers are satisfied and leave wanting to come back?</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Is it easy for the customer to find what he or she wants at a competitive price?</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Heading5>Advertising: The Basics</Heading5>
                <Paragraph>Think you have a great product? Unfortunately, no one’s going to know about it unless you advertise.<br/><br/>

                Advertising, if done correctly, can do wonders for your product sales, and you know what that means: more revenue and more success for your business. But be warned: it is not a panacea.<br/><br/>

                Below you will find a list of what advertising can and can’t do for your business, along with the steps you can take to start using advertising to your business’s advantage.<br/><br/><br/>
                
                <b>What Advertising Can Do For Your Business?</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Remind customers and inform prospective customers about the benefits of your product or service</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Establish and maintain your distinct identity</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Enhance your reputation</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Encourage existing customers to buy more of your product/service</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Attract new customers and replace lost ones</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Slowly build sales to boost your bottom line</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Promote your business to customers, investors, and others</Paragraph>
                  </div><br/><br/>
                
                <b>What Advertising Cannot Do For Your Business</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Create an instant customer base</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Cause an immediate, sharp increase in sales</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Solve cash flow or profit problems</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Substitute for poor or indifferent customer service</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Sell useless or unwanted products or services</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/marketing-1.png' />
                </div>
                <Paragraph><b>Two Important Virtues of Advertising</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>You have complete control. Unlike public-relations efforts, you determine exactly where, when and how often your message will appear, how it will look and what it will say. You can target your audience more readily and aim at very specific geographic areas.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>You can be consistent. Presenting your company’s image and sales message repeatedly to build awareness and trust. A distinctive identity will eventually become clearly associated with your company. Customers will recognize your brand and product quickly and easily if you’re consistent in presentation.</Paragraph>
                  </div><br/><br/>
                  
                  <b>Two Drawbacks of Advertising</b><br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'>It takes planning. Advertising works best and costs the least when the planning and preparation are done in advance. For example, you’ll pay less per ad in newspapers and magazines by agreeing to run several ads over time rather than deciding on an issue-by-issue basis. Likewise, you can save money by preparing a number of ads at once.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'>It takes time and persistence. The effectiveness of your advertising improves gradually over time because it’s impossible for every customer to see every ad. You must repeatedly remind prospects and customers about the benefits of doing business with you. The long-term effort triggers recognition and helps special offers or direct marketing payoff.</Paragraph>
                  </div>
                </Paragraph>
                {/*  */}
                <Heading5>Getting Ready to Advertise</Heading5>
                <Paragraph>Use the following steps to help draw a blueprint for your business’s advertising plan:<br/><br/>
                  <div className='flex flex-row items-center space-x-20'>
                    <div className='grid grid-cols-7 gap-y-5'>
                      <Paragraph className='text-center'>1.</Paragraph>
                      <Paragraph className='col-span-6'>What is the purpose of your advertising program? Start by defining your company’s long-range goals, then map out how marketing can help attain them. Focus on advertising routes complementary to your marketing efforts. Set measurable goals so you can evaluate the success of your advertising campaign. For example, do you want to increase overall sales by 20 percent this year? Boost sales to existing customers by 10 percent during each of the next three years? Appeal to younger or older buyers? Sell off old products to free resources for new ones?</Paragraph>
                    </div>
                    <img src='/img-assets/start-a-business/running-business/advertise.png' />
                  </div>
                </Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>How much can you afford to invest? Keep in mind that whatever amount you allocate will never seem like enough. Even giants such as Proctor & Gamble and Pepsi always feel they could augment their advertising budgets. Given your income, expenses, and sales projections, simple addition and subtraction can help you determine how much you can afford to invest. Some companies spend a full 10 percent of their gross income on advertising, others just 1 percent. Research and experiment to see what works best for your business.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>What are the features and benefits of your product or service? When determining features, think of automobile brochures that list engine, body and performance specifications. Next, and more difficult, determine the benefits those features provide to your customers. How does your product or service actually help them? For example, a powerful engine helps a driver accelerate quickly to get onto busy freeways.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Who is your audience? Create a profile of your best customer. Be as specific as possible, as this will be the focus of your ads and media choices. A restaurant may target adults who dine out frequently in the nearby city or suburban area. A computer software manufacturer may aim at information managers in companies with 10-100 employees. A bottled water company may try to appeal to athletes or people over 25 who are concerned about their health.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Who is your competition? It’s important to identify your competitors and their strengths and weaknesses. Knowing what your competition offers that you lack – and vice versa – helps you show prospects how your product or service is special and why they should do business with you instead of someone else. Knowing your competition will also help you find a niche in the marketplace.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>What do you know about your industry, market and audience? There are many sources of information to help you keep in touch with industry, market and buying trends without conducting expensive market research. Examples include U.S. Government materials from the Census Bureau and Department of Commerce. Public, business or university libraries are also a good option, as are industry associations, trade publications, and professional organizations. You can quickly and easily learn more about your customers by simply asking them about themselves, their buying preferences, and media habits. Another (more expensive) alternative is to hire a professional market research firm to conduct your research.</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>Your next step is to select the advertising vehicles you will use to carry your message and establish an advertising schedule. In most cases, knowing your audience will help you choose the media that will deliver your sales message most effectively. Use as many of the above tools as are appropriate and affordable. You can stretch your media budget by taking advantage of co-op advertising programs offered by manufacturers. Although programs vary, generally the manufacturer will pay for a portion of media space, time costs or mailer production charges up to a fixed amount per year. The total amount contributed is usually based on the quantity of merchandise you purchase.</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'>When developing your advertising schedule, be sure to take advantage of any special editorial or promotional coverage planned in the media you select. Newspapers, for example, often run special sections featuring real estate, investing, home and garden improvement, and tax advice. Magazines also often focus on specific themes in each issue.</Paragraph>
                  <Paragraph className='text-center'>9.</Paragraph>
                  <Paragraph className='col-span-11'>Advertising extends beyond the media described above. Other options include imprinting your company name and graphic identity on pens, paper, clocks, calendars and other giveaway items for your customers. Put your message on billboards, inside buses and subways, on vehicle and building signs, on point-of-sale displays and on shopping bags.</Paragraph>
                  <Paragraph className='text-center'>10.</Paragraph>
                  <Paragraph className='col-span-11'>You might co-sponsor events with nonprofit organizations and advertise your participation, attend or display at consumer or business trade shows, create tie-in promotions with allied businesses, distribute newsletters, conduct seminars, undertake contests or sweepstakes, send advertising flyers along with billing statements, use telemarketing to generate leads for salespeople, or develop sales kits with brochures, product samples, and application ideas.</Paragraph>
                </div>
                <Paragraph>The number of promotional tools used to deliver your message and repeat your name is limited only by your imagination and your budget.</Paragraph>
                {/*  */}
                <Paragraph><b>The Advertising Campaign</b><br/><br/>
                You are ready for action when armed with knowledge of your industry, market and audience, have a media plan and schedule, know your product or service’s most important benefits, and have measurable goals in terms of sales volume, revenue generated and other criteria.<br/><br/>

                The first step is to establish the theme that identifies your product or service in all of your advertising. The theme of your advertising reflects your special identity or personality and the particular benefits of your product or service. For example, cosmetics ads almost always rely on a glamorous theme. Many food products opt for healthy, all-American family campaigns. Automobile advertising frequently concentrates on how the car makes you feel about owning or driving it rather than performance attributes.<br/><br/>

                Tag lines reinforce the single most important reason for buying your product or service. “Nothing Runs Like a Deere” (John Deere farm vehicles) conveys performance and endurance with a nice twist on the word deer. “Ideas at Work” (Black & Decker tools and appliances) again signifies performance, but also shows reliability and imagination. “How the Smart Money Gets that Way” (Barron’s financial publication) clearly connotes prosperity, intelligence and success.</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/ad-campaign.png' />
                </div>
                <Paragraph><b>Comparing Advertising and Public Relations</b></Paragraph>
                <Table className='table-fixed'>
                  <TableHeader className='border-1'>
                    <TableRow>
                      <TableHead className="text-white border-r-1 text-center py-8">
                        <Heading5>Advertising</Heading5>
                      </TableHead>
                      <TableHead className="text-white text-center py-8">
                        <Heading5>Public Relations</Heading5>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-1'>
                    {advertAndPRItems.map((i,idx) => (
                      <TableRow key={idx}>
                        <TableCell className='border-r-1 py-5'>{i.advertising}</TableCell>
                        <TableCell className='py-5'>{i.publicRelations}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*  */}
                <Paragraph><b>Email Marketing</b><br/><br/>
                Email marketing is one of the most effective ways to keep in touch with customers. It’s cost effective and, if done properly, can help build brand awareness and loyalty. At a typical cost of only a few cents per message, email marketing is quite a bargain in terms of price and time when compared to direct mail. In addition, response rates on email marketing are strong, ranging from five to 35 percent, depending on the industry and format. Response rates for traditional mail average much lower, barely cracking the three percent mark.<br/><br/>

                Still not convinced email marketing is for you? Keep reading. Another benefit of email marketing is the demographic information that customers provide when signing up for your email newsletter. Discovering exactly who your customers are—how old they are, what their interests are, what region of the country they reside in—can help you tailor your products and services to best suit their needs</Paragraph>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/running-business/email-market.png' />
                </div>
                <Paragraph>If you’re ready to ready to create your email newsletter, ask yourself the following questions before you begin:<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>“Should I use HTML or Plain Text?”</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>Response rates for HTML newsletters are generally far higher than plain text, and graphics and colors tend to make the publications look far more professional. The downside is that HTML email is slower to download, and some email providers may screen out HTML email.<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>“What incentive, if any, am I providing consumers?”</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>To get customers to sign up for your newsletter, advertise the benefits of receiving your newsletter, such as helpful tips, informative content or early notification of special offers or campaigns.<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>“Am I going the extra mile?”</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>Many studies suggest that email newsletters are read far more carefully when they offer information that is useful to the customers’ lives rather than merely selling products and services. Helpful tips, engaging content and humor are often expected to accompany email newsletters.<br/><br/>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>“Did I ask too many questions?”</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph>Each demographic question you ask may reduce the number of customers signing up; therefore, it’s best to limit the amount of information you solicit or give customers the option of skipping the questionnaire.</Paragraph>
                {/*  */}
                <Paragraph><b>Why You Should Establish a Web Presence</b><br/><br/>
                
                Today’s business emphasis is on eCommerce. Rapid business transactions and unparalleled access to information has changed consumer behavior as well as expectations. If selling your product online isn’t salient to you, there are benefits to establishing a Web presence for your business. A business website can be as simple as a virtual marketing brochure that you can update on demand with little or no cost. Just having your company’s information available to current and prospective customers can greatly impact your marketing efforts by offering customers everything from pre-sale information to post-sale support and service. E-marketing has lessened the disadvantage that small businesses have faced for years when competing with larger businesses.<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'>Online Advertising Law</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'>Product Labeling</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'>Best Practices in Advertising and Marketing on the Internet</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'>Advertising Specific Products</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>How to Comply with Advertising Laws</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'>Telemarketing Laws</Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Sales</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Setting Up an Online Business</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Setting up your business on the Internet can be a lucrative way to attract customers, expand your market and increase sales. For the most part, the steps to starting an online business are the same as starting any business. However, doing business online comes with additional legal and financial considerations, particularly in the areas of privacy, security, copyright and taxation.<br/><br/>
                    
                  Rules and regulations for conducting e-commerce apply mainly to online retailers and other businesses that perform consumer transactions by collecting customer data. However, even if you do not sell anything online, laws covering digital rights and online advertising may still apply to you.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/online-market.png' />
                </div>
                {/*  */}
                <Paragraph><b>Protecting Your Customers’ Privacy</b><br/><br/>

                Learn the necessary steps you should take to protect your customers from identity theft and other misuses of their personal information. Any business that collects personal or financial data either through online sales, credit reports or applications should understand these rules and regulations.<br/><br/>

                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Collecting Sales Tax Over the Internet</Paragraph>
                  </div><br/>

                The existing tax laws and revenue issuances on the tax treatment of purchases (local or imported) and sale (local or international) of goods (tangible or intangible) or services shall be equally applied with no distinction on whether or not the marketing channel is the internet/digital media or the typical and customary physical medium.<br/><br/>
                
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'>Digital Rights/Copyright</Paragraph>
                  </div><br/>
                
                Personal data is not the only thing protected on the Internet. Digital works, including text, movies, music and art are copyrighted and protected via the Intellectual Property Code (RA No. 8293).
                </Paragraph>
                {/*  */}
                <Heading5>Sales Strategy</Heading5>
                <Paragraph>If your business involves selling a product, you are probably looking for ways to improve sales. A sales strategy will focus your efforts on your most important customer audiences, existing or potential.<br/><br/>

                Here are the most important things to keep in mind when designing a sales strategy.</Paragraph>
                <Paragraph><b>Create a sales plan</b><br/><br/>

                Having a document that outlines your sales goals and strategies will help you to stay on track and assess your progress. As you begin to define your sales plan, keep these things in mind:</Paragraph>
                {/*  */}
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/running-business/market-manage.png' />
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Sales goals</b>: These goals should be specific and measurable, not something like selling a million units. Base them on the nature of your product and try to break them down into manageable parts. For example, sell 50 units to end-users in 30 days and sell 100 units to local independent retailers in six months.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-11'><b>Sales activities</b>: These are your tactics — how you plan to make the sale. You may say you’ll sell direct-to-consumer through a website or via craft shows, for instance. Or this part of the plan may include activities like developing a sell sheet to send to independent retail stores.</Paragraph>
                  </div>
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'><b>Target accounts</b>: Your sales plan should also include the accounts you want to sell to. If it’s end-users, for example, plan how you’re going to reach them through eBay, classified ads or your website.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'><b>Timelines</b>: Put dates to all of the above elements so you can define your steps within a realistic timeline. Don’t forget that your timelines should be fluid–if you’re underachieving, your sales plan can help you figure out why and define the corrective steps you need to take.</Paragraph>
                </div>
                {/*  */}
                <Paragraph><b>Expand to new markets</b><br/><br/>

                Once you have established success in your current market, consider expanding to include other markets. This will open doors to bigger buyers.</Paragraph>
                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-7 gap-y-5'>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-6'><b>Get the correct buyer</b>: One of your biggest challenges is finding the right buyer within a large organization, so do your homework. If you’re experiencing roadblocks, consider hiring a distributor or manufacturer’s rep who already has established relationships in your industry.</Paragraph>
                    <Paragraph className='text-center'>-</Paragraph>
                    <Paragraph className='col-span-6'><b>Be prepared</b>: Develop a presentation and have professional-looking sell sheets ready. Your product should also have packaging that’s ready to go.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/running-business/market-customer.png' />
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'><b>Know your target</b>: Understand what products they already carry and how yours will fit in. Don’t waste your time pitching to a retailer who’s unlikely to carry your product.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'><b>Take advantage of special programs</b>: Some mass retailers, such as Wal-Mart, have local purchase programs that give managers authority to try local items. And other retailers may have different initiatives, such as minority business programs.</Paragraph>
                  <Paragraph className='text-center'>-</Paragraph>
                  <Paragraph className='col-span-11'><b>Be patient</b>: It can take up to a year or longer before you see your product on store shelves, so don’t get frustrated. And if the final answer is no, try to turn it into a learning experience.</Paragraph>
                </div>
                {/*  */}
                <Heading5>International Online Sales</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/running-business/sales.png' />
                  <Paragraph>Selling your products online allows for immediate entry into the global marketplace. However, shipping your product overseas presents a few challenges if you have little experience with taxes, duties, customs laws, and consumer protection issues involved with international commerce.<br/><br/>

                  If you’re interested in learning more about e-commerce, you can visit this <RoseAnchor href_url='https://ecommercebootcamp.digitalfilipino.com/course/overview-of-e-commerce-in-the-philippines/'>link</RoseAnchor>.</Paragraph>
                </div>
                <Paragraph className='mt-20 italic font-light text-center'>Source: <RoseAnchor href_url='http://digitalfilipino.com/tax-guidelines-e-commerce-transactions-philippines/'>http://digitalfilipino.com/tax-guidelines-e-commerce-transactions-philippines/</RoseAnchor></Paragraph>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-5' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Human Resources</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Employment and Labor Law</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Hiring employees or building a business team must be in compliance with employment and labor law. Each country varies on the standards and specific labor laws. In the Philippines setting, the Department of Labor and Employment is mandated in formulating policies and implementing programs and services in the field of labor and employment. Its function is anchored on the principles and guidelines of the Labor Code of the Philippines which act as the law governing employment practices and labor relations. This law prescribes the rules from preventing discrimination and harassment in the workplace; hiring and termination; employment benefits; compensation regulations; and guidelines in the organization and membership on labor unions.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/hiring.png' />
                </div>
                {/*  */}
                <Paragraph><b>Hiring Process</b></Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>1.</Paragraph>
                  <Paragraph className='col-span-11'><b>Secure an Employer Tax Identification Number (TIN)</b>Before hiring an employee, you must apply for an employment Tax Identification Number (TIN) from the BIR. For single proprietor, you must secure or download the BIR Form 1901; and for corporation/partnership, obtain a BIR Form 1903.</Paragraph>
                  <Paragraph className='text-center'>2.</Paragraph>
                  <Paragraph className='col-span-11'><b>Organize Withholding Taxes Records</b>Keeping records can help you monitor the progress of your business, prepare financial statements, identify sources of receipts, keep track of deductible expenses, prepare your tax returns, and support items reported on tax returns.</Paragraph>
                  <Paragraph className='text-center'>3.</Paragraph>
                  <Paragraph className='col-span-11'><b>Employee Eligibility Verification</b>Employers must require their employees to undergo eligibility verification such as medical and psychological exam, security and/or background check, and skills training to ensure their qualifications and capability of going to work.</Paragraph>
                  <Paragraph className='text-center'>4.</Paragraph>
                  <Paragraph className='col-span-11'><b>Register with concerned government agencies like DOLE and LGUs where you belong</b>As an employer, you are required to report and update newly hired and re-hired employees to the concerned government agencies such as BIR, SSS, PhilHealth, and HDMF. To learn more and find out the requirements, visit to the websites of the abovementioned agencies.</Paragraph>
                  <Paragraph className='text-center'>5.</Paragraph>
                  <Paragraph className='col-span-11'>Obtain Workers’ Compensation Insurance.</Paragraph>
                  <Paragraph className='text-center'>6.</Paragraph>
                  <Paragraph className='col-span-11'><b>Post Required Notices</b>You must inform your employees of their rights and responsibilities under labor law through displaying and disseminating informative posters and/or department circulars.</Paragraph>
                  <Paragraph className='text-center'>7.</Paragraph>
                  <Paragraph className='col-span-11'>File Your Taxes</Paragraph>
                  <Paragraph className='text-center'>8.</Paragraph>
                  <Paragraph className='col-span-11'><b>Get Organized and Be Informed</b>Fulfill your tax and reporting obligations, as well as the maintenance of a healthy and fair working environment.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-6' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Using Technology</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>The Internet has been a significant business level playing field for small and medium-sized companies to compete with the business giants on the same global arena. E-commerce is essential in promoting your business, especially to the tech savvy and time-starved consumers. Building an E-commerce website involves the use of advanced technology and expertise such as web development, E-Commerce integration, site hosting and payment processing provider.  Through the Internet, consumers could find and acquire a range of goods and services using electronic payment such as credit and bank card. However, online businesses are subject with financial and legal considerations, particularly in terms of privacy, security, copyright and taxation. Thus, businesses owners must be aware on the etiquette and rules in doing business online. With E-commerce as a tool, business owners can embrace this new effective business strategy to maintain its competitiveness towards innovation and ease of delivering service to its clients.</Paragraph>
                  <img src='/img-assets/start-a-business/running-business/technology-1.png' />
                </div>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            {/*  */}
            <AccordionItem value='item-7' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Insurance</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Business insurance is a common practice to purchase adequate cover your assets. It secures your business investments by minimizing financial risks linked with unpredicted events such as death of a partner, an injured employee, a lawsuit, or a natural disaster. It is necessary to maintain life, business interruption or other types of insurance to protect your investor’s or financial lender’s investments. In buying business insurance, here are the steps to help you determine and assess what is best for your business to provide adequate protection and reduce risks:<br/><br/>

                <div className='flex flex-row items-center space-x-20'>
                  <div className='grid grid-cols-12 gap-y-5'>
                    <Paragraph className='text-center'>1.</Paragraph>
                    <Paragraph className='col-span-11'><b>Identify and Evaluate the Risks</b>: Through the process of underwriting, the insurance company assess your application and ascertain whether it will provide all or a portion of the coverage being requested.</Paragraph>
                    <Paragraph className='text-center'>2.</Paragraph>
                    <Paragraph className='col-span-11'><b>Shop Around</b>: Insurance companies vary from the extent and coverage costs. Some brokers specialize in insuring specific types of business, while others can connect you with policies specific to your business activities.</Paragraph>
                    <Paragraph className='text-center'>3.</Paragraph>
                    <Paragraph className='col-span-11'><b>Examine a Business Owner’s Policy (BOP)</b>: It is essential to understand the extent of coverage in considering any BOP. Normally, it consists of covering property, general liability, vehicles, business interruption and other common coverage to most types of businesses.</Paragraph>
                    <Paragraph className='text-center'>4.</Paragraph>
                    <Paragraph className='col-span-11'><b>Find a Reliable, Licensed Agent</b>: An insurance agent must understand all the risks and interested in your needs associated with your business. Always look for a reputable and licensed brokers.</Paragraph>
                    <Paragraph className='text-center'>5.</Paragraph>
                    <Paragraph className='col-span-11'><b>Assess Your Insurance Coverage on an Annual Basis</b>: Discuss to your insurance broker regarding the changes in your business and how they affect your coverage.</Paragraph>
                  </div>
                  <img src='/img-assets/start-a-business/running-business/insurance-1.png' />
                </div>
                </Paragraph>
                {/*  */}
                <Paragraph>After discussing with your broker or insurance agent regarding your specific business risks, below are some of the types of insurance that you may consider purchasing depending on your broker’s advice:<br/><br/>

                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>General Liability Insurance</b>: It covers legal hassles due to injuries, accident and claims of negligence.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Product Liability Insurance</b>: This type of insurance is applicable for companies that manufacture, wholesale, distribute and retail a product which protects against financial loss caused by a harmful defective product.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Professional Liability Insurance</b>: Businesses owners providing services are bound by this insurance which protects them against malpractice, errors, and negligence in customer service provision.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Commercial Property Insurance</b>: Everything related to the loss and damage of company property caused by variety of events such as fire, smoke, civil disobedience and vandalism is covered by this type of insurance.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Home-Based Business Insurance</b>: It provides a limited amount of coverage for business equipment, but most standard homeowners’ policies exclude coverage for businesses operating in the home.</Paragraph>
                </div>
                </Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}