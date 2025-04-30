import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import RoseAnchor from '@/components/user/shared/anchors/rose-anchor'

export const Route = createFileRoute(
  '/(public)/__p/start-business/investment-op/franchise-business',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Business Opportunities in the PH' label='Franchise business' img_url='/img-assets/start-a-business/franchise-business/2024-Q2-Update-Franchise-Business.png' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light space-y-20'>
          <div className='mx-4 max-lg:mx-0 flex flex-row max-lg:flex-col max-lg:space-y-20 items-center space-x-20'>
            <img src='/img-assets/start-a-business/franchise-business/franchise-picture.png' />
            <Paragraph><b>FRANCHISE</b><br/><br/>

            A franchise (or franchising) is a business model that involves a franchisor, which establishes the brand’s trademark or trade name and a business system, and a franchisee, who pays a royalty and often an initial fee for the right to do business under the franchisor’s name and system.<br/><br/>

            <div className='grid grid-cols-6 gap-y-5'>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-5'><b>Franchisor</b>: is the owner of the brand and operating system.</Paragraph>
              <Paragraph className='text-center'>&#8226;</Paragraph>
              <Paragraph className='col-span-5'><b>Franchisee</b>: is the “active” investor/operator and is the one who provides capital, workforce, and time to manage the unit.</Paragraph>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0'>
            <Heading4 className='text-center my-10'>COMMON TYPES OF FRANCHISING</Heading4>
            <Paragraph>There are two common types of franchising: product franchising and business format franchising. <b>Product franchising</b>, or trade name franchising, is a type wherein a manufacturer grants a franchisee the right to sell its products but with no business method.<br/><br/>

            Conversely, <b>business format franchising</b>, also known as a name and process franchise, entails a more extensive and continuous relationship between the franchisor and the franchisee. Apart from granting the right to use the name and market the products and services of the franchisor, the franchisee is also provided a complete plan for managing and operating the business – a transfer of the proven way of doing business that the franchisor has developed. This plan often includes a full range of services, including site selection, training, product supply, marketing plans, and even assistance in obtaining financing. The franchisor’s operating systems, technical expertise, marketing systems, training systems, management methods, and all relevant information are transferred to the franchisee.</Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0'>
            <Heading4 className='text-center my-10'>FRANCHISING LAWS AND REGULATIONS IN THE PHILIPPINES
            </Heading4>
            <Paragraph>The <b>Philippine Franchise Act of 1995</b> (Republic Act No. 9178) and its implementing rules and regulations primarily govern franchising in the Philippines. It provides guidelines and protection for both franchisors and franchisees.<br/><br/>

            To intensify government efforts to strengthen franchising and help businesses, especially micro, small, and medium enterprises (MSMEs), <b>Executive Order No. 169</b> was signed in 2022. It serves as a guide for the development of a transparent and business-friendly environment and promoting fair and equitable practices.</Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0'>
            <Heading4 className='text-center my-10'>PROS AND CONS OF FRANCHISING
            </Heading4>
            <Paragraph>Franchising offers numerous benefits, but it also presents challenges that franchisees should carefully look into before diving into franchising. Below are some of the advantages and disadvantages of franchising:<br/><br/>
            <div className='grid grid-cols-2 mt-10'>
              <div>
                <div className='grid grid-cols-6 gap-y-5'>
                  <Heading5 className='col-start-2 col-span-5'>ADVANTAGES</Heading5>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Strong brand name and recall (strong foundation)</b>: Franchisees benefit from the brand and reputation built by the franchisor.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Proven systems and procedures</b>: Franchisees gain access to a successful business model of the franchisor, hence reducing the risk of failure.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Solid marketing and promotions</b>: Franchisors typically provide training and marketing support that the franchisee needs.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Economies of Scale</b>: Franchisees may benefit from cost savings measures of the franchisors that might not be available to independent businesses.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Research and Development</b>: The product and service standards will be sustained through the franchisor’s regular visits and ongoing research and development.</Paragraph>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-6 gap-y-5'>
                  <Heading5 className='col-start-2 col-span-5'>DISADVANTAGES</Heading5>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Costs Involved</b>: Franchisees still need to pay franchise, royalty, and renewal fees.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Lack of Control</b>: Franchisees are required to follow the rules, standards, and procedures set by franchisors.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Restrictions Required by the Franchisor</b>: Franchisors require restrictions on pricing, territory, and other aspects that may affect the business.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Potential for Conflict</b>: Problems may arise from either side of franchisors or franchisees in terms of royalties or contract terms.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-5'><b>Dependence on the Franchisor</b>: Franchisees may face challenges if the franchisor fails to fulfill its obligations.</Paragraph>
                </div>
              </div>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-10'>
            <Heading4>UNDERSTANDING THE FRANCHISE AGREEMENT</Heading4>
            <Paragraph>The Franchise Agreement (FA) is the legal document that details the franchisor’s and franchisee’s rights and obligations, the franchise agreement’s terms, renewal provisions, and transfer and termination.<br/><br/>

            <b>What is included in the Franchise Agreement?</b><br/><br/>
            
              <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>1.</Paragraph>
                <Paragraph className='col-span-11'><b>Terms of Agreement</b>: The FA should specify how long the agreement will last. After the appointed period, the franchise is considered null and void.</Paragraph>
                <Paragraph className='text-center'>2.</Paragraph>
                <Paragraph className='col-span-11'><b>Fees</b>
                  <div className='grid grid-cols-12 gap-y-5 mt-5'>
                    <Paragraph className='text-center'>a.</Paragraph>
                    <Paragraph className='col-span-11'><b>Franchise fees</b>: The initial franchise fee, which is usually non-refundable, is paid at the start of a franchise relationship.</Paragraph>
                    <Paragraph className='text-center'>b.</Paragraph>
                    <Paragraph className='col-span-11'><b>Royalty</b>: It is usually a percentage of the franchisee’s sales and is typically paid weekly, biweekly, or monthly.</Paragraph>
                    <Paragraph className='text-center'>c.</Paragraph>
                    <Paragraph className='col-span-11'><b>Marketing contribution</b>: System-wide marketing contributions are also based on the percentage of franchisee’s sales.</Paragraph>
                  </div>
                </Paragraph>
                <Paragraph className='text-center'>3.</Paragraph>
                <Paragraph className='col-span-11'><b>Training and Support</b>: The FA should state the kind of training and support the franchisor will provide.</Paragraph>
                <Paragraph className='text-center'>4.</Paragraph>
                <Paragraph className='col-span-11'><b>Renewal </b>: Renewal periods allow the franchisor to review the FA, thus enabling them to decide whether to renew the agreement.</Paragraph>
                <Paragraph className='text-center'>5.</Paragraph>
                <Paragraph className='col-span-11'><b>Purchase of product</b>: Products and supplies used in the franchise system should maintain consistency. Hence, a detailed list of suppliers accredited by the franchisor is provided in the Operations Manual.</Paragraph>
                <Paragraph className='text-center'>6.</Paragraph>
                <Paragraph className='col-span-11'><b>Territory</b>: It determines the geographical boundaries a franchisee may operate or within which no other unit of the franchisor’s businesses may compete.</Paragraph>
                <Paragraph className='text-center'>7.</Paragraph>
                <Paragraph className='col-span-11'><b>Termination</b>: This explains the grounds for termination of the contract.</Paragraph>
              </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-10'>
            <Heading4>QUALITIES OF A GOOD FRANCHISE BUSINESS</Heading4>
            <Paragraph>A good franchise offers franchisees the necessary tools, resources, and support to succeed while maintaining the integrity and reputation of the franchise brand. Here are some of the qualities of a good franchise business that a potential franchisee can look into:<br/><br/>
            
            <div className='grid grid-cols-12 gap-y-5'>
              <Paragraph className='text-center'>1.</Paragraph>
              <Paragraph className='col-span-11'><b>Experience</b>: Successful franchisors have solid industry experience. They should be experts in their business. They are looking for individuals who can leverage the business skills they have developed from their professional and personal experience.</Paragraph>
              <Paragraph className='text-center'>2.</Paragraph>
              <Paragraph className='col-span-11'><b>Training</b>: Franchisors are experts in training new franchisees to develop the knowledge and skills necessary to ramp up and run their business model successfully.</Paragraph>
              <Paragraph className='text-center'>3.</Paragraph>
              <Paragraph className='col-span-11'><b>Ongoing Support</b>: Franchise support is provided on several levels, including ongoing training, new product development, and new technology. Good franchise companies constantly evolve their system to stay ahead of the competition and industry trends.</Paragraph>
              <Paragraph className='text-center'>4.</Paragraph>
              <Paragraph className='col-span-11'><b>Franchisor/Franchisee Relationships</b>: Effective franchise systems will develop a collaborative dynamic between the franchisor and franchisees and amongst the franchisees to continuously improve the business model and efficiencies. Annual conventions, mentoring groups, and advisory councils are a few ways franchisors support their franchisees.</Paragraph>
              <Paragraph className='text-center'>5.</Paragraph>
              <Paragraph className='col-span-11'><b>Name Recognition</b>: Some industries need strong brand names to help with their success, while others do not. There is a careful balance between having name recognition in your area and having available territory. Evaluating the franchise’s track record in new territories will be valuable in your research.</Paragraph>
              <Paragraph className='text-center'>6.</Paragraph>
              <Paragraph className='col-span-11'><b>Proven Sales and Marketing Systems</b>: Franchises should provide time-tested systems that fit their business model. Good franchisors have effective advertising materials and marketing approaches and know the best media options for their brand.</Paragraph>
              <Paragraph className='text-center'>7.</Paragraph>
              <Paragraph className='col-span-11'><b>Buying and Purchasing Power</b>: By pooling the resources from all the franchise owners, the franchise system should achieve better pricing on supplies, necessary products, or marketing mediums than you could do as an independent business owner.</Paragraph>
              <Paragraph className='text-center'>8.</Paragraph>
              <Paragraph className='col-span-11'><b>Demographics and Site Selection</b>: Franchisors should provide the demographics required to support a healthy business in their franchise. When the location of the business is vital to success, expect the franchisor to assist in identifying and evaluating the best locations.</Paragraph>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-10'>
            <Heading4>POINTS TO PONDER BEFORE BUYING A FRANCHISE BUSINESS</Heading4>
            <Paragraph>Before buying a franchise, remember that it’s necessary to consider various points to ensure that you will make an informed decision. Here are some points to ponder:<br/><br/>
            
            <div className='flex flex-row items-center space-x-20'>
              <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Ask yourself why you want to own a franchise.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Conduct a comprehensive research
                    <div className='grid grid-cols-12 gap-y-5 mt-5'>
                      <Paragraph className='text-center'>-</Paragraph>
                      <Paragraph className='col-span-11'>Have a complete understanding of the business you want.</Paragraph>
                      <Paragraph className='text-center'>-</Paragraph>
                      <Paragraph className='col-span-11'>Attend franchise seminars and read books on franchising.</Paragraph>
                      <Paragraph className='text-center'>-</Paragraph>
                      <Paragraph className='col-span-11'>Check your resources and experience in running a business, the hours and personal commitment to run the franchise, and how much money will be invested.</Paragraph>
                      <Paragraph className='text-center'>-</Paragraph>
                      <Paragraph className='col-span-11'>Check if the franchisor has training and support offered to franchisees.</Paragraph>
                    </div>
                  </Paragraph>
                </div>
              <img className='col-span-12' src='/img-assets/start-a-business/franchise-business/points-to-ponder.png' />
            </div><br/>

            <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Seek advice from franchise consultants, lawyers, and even existing franchisees to gain insights about the franchising business.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Review government laws, regulations, and registrations.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'>Check if the concept belongs to a growing market or trend. You want to move into a market or industry that is consistently growing.</Paragraph>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-10'>
            <Heading4>FRANCHISING STRATEGY TIPS FOR SUCCESS</Heading4>
            <Paragraph>Now that you have decided to start a franchise, given all considerations. It’s imperative that you also know how to make your business successful. Here are some tips:<br/><br/>

            <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>1.</Paragraph>
                <Paragraph className='col-span-11'><b>Choose a strategic site for your business</b>: Conduct thorough research to identify the perfect location for your business. Consider demographics, competition, and accessibility.</Paragraph>
                <Paragraph className='text-center'>2.</Paragraph>
                <Paragraph className='col-span-11'><b>Evaluate yourself in terms of financial capability and legalities</b>: It is crucial to franchise a business that has the right profitability for the investment that you put in. Study the length of time needed to recover your investment.</Paragraph>
                <Paragraph className='text-center'>3.</Paragraph>
                <Paragraph className='col-span-11'><b>Choose a franchise with a rigid business model</b>: Make sure you understand how your team prepared the overall business franchise program.</Paragraph>
                <Paragraph className='text-center'>4.</Paragraph>
                <Paragraph className='col-span-11'><b>Invest in marketing and promotions</b>: Even if the business is known in the field, having a hardcore marketing and innovation program is a plus.</Paragraph>
                <Paragraph className='text-center'>5.</Paragraph>
                <Paragraph className='col-span-11'><b>The franchisor’s all-out support</b>: Make sure you make the best of it by understanding the support you will get and who will support you from the headquarters.</Paragraph>
                <Paragraph className='text-center'>6.</Paragraph>
                <Paragraph className='col-span-11'><b>Provide excellent customer service</b>: Train employees to deliver exceptional customer service to build loyalty and attract more clients.</Paragraph>
                <Paragraph className='text-center'>7.</Paragraph>
                <Paragraph className='col-span-11'><b>Build a strong team</b>: Hire employees who share your commitment to the business’s success and provide them with the necessary skills and training they need.</Paragraph>
                <Paragraph className='text-center'>8.</Paragraph>
                <Paragraph className='col-span-11'><b>Embrace innovation, technology, and digital transformation</b>: Leverage technology to drive the business’s overall growth.</Paragraph>
                <Paragraph className='text-center'>9.</Paragraph>
                <Paragraph className='col-span-11'><b>Collaborate with stakeholders to strengthen the franchise ecosystem</b>: Franchise businesses can benefit from building strong relationships with suppliers, clients, franchisees, brands, associations, and company culture.</Paragraph>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-10'>
            <Heading4>AVOIDING FRANCHISE SCAMS</Heading4>
            <Paragraph>Individuals seeking business opportunities through franchising are sometimes exposed to scams. Be vigilant, watch out for these common scams:<br/><br/>

            <div className='grid grid-cols-12 gap-y-5'>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Too good to be valid claims of profitability</b>: Scammers may promise high returns with minimal effort or investment and downplay the risks in the franchise business.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Lack of legal documents</b>: Remember that all legal papers must be consistent and registered under the company name. Consider it a warning if discrepancies and inconsistencies exist in the franchisor’s legal papers.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Absence of the list of outlets</b>: It is safe to franchise from a business with at least two or more franchise outlets already.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Inadequate human resources</b>: A franchise business is expected to be run by individuals assigned to specific departments of the company. Inadequate human resources is a sign of an illegitimate business.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>No company address</b>: Every business offering a franchise opportunity should have a corporate office. Moreover, it should be an office with a registered BIR Registration and other government permits.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Unclear Franchise Agreement</b>: Consider it a red flag if the sales officer is rushing you to sign the contract without giving you ample time to evaluate it or seek legal advice.</Paragraph>
                <Paragraph className='text-center'>&#8226;</Paragraph>
                <Paragraph className='col-span-11'><b>Not a member of any franchise organizations</b>: Any legitimate franchise business should be accredited by any of the respected franchise organizations in the Philippines.</Paragraph>
            </div>
            </Paragraph>
          </div>
          {/*  */}
          <div className='mx-4 max-lg:mx-0 space-y-20'>
            <Paragraph>Click <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='http://44.199.161.141/wp-content/uploads/2024/05/List-of-Legitimate-franchise-businesses-in-the-Philippines-CFO-BaLinkBayan.pdf'>here</RoseAnchor> for <b>LIST OF SOME LEGITIMATE FRANCHISE BUSINESS IN THE PHILIPPINES</b></Paragraph>
            <div className='flex flex-row items-center space-x-20'>
              <img className='col-span-12' src='/img-assets/start-a-business/franchise-business/sources.png' />
              <Paragraph className='italic font-light'><b>SOURCES</b>:<br/><br/>

              International Franchise Conference (2023).<br/>
              Retrieved from <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.franchiseasiaph.com'>www.franchiseasiaph.com</RoseAnchor><br/><br/>

              Philippine Franchise Association.<br/>
              Retrieved from <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.pfa.org.ph'>www.pfa.org.ph</RoseAnchor><br/><br/>

              Franchise Market.<br/>
              Retrieved from <RoseAnchor className='text-rose-700 hover:text-rose-500' href_url='https://www.franchisemarket.ph'>www.franchisemarket.ph</RoseAnchor></Paragraph>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}