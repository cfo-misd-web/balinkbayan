import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { Separator } from '@radix-ui/react-separator'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/choose-business-structure',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Choose your Business Structure' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Choose your Business Structure</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Sole Proprietorship</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>A sole proprietorship is the simplest and most common structure chosen to start a business. It is an unincorporated business owned and run by one individual with no distinction between the business and you, the owner. You are entitled to all profits and are responsible for all your business’s debts, losses and liabilities.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/choose-business-structure/sole-proprietor.png' />
                </div>
                {/*  */}
                <Heading5>Forming a Sole Proprietorship</Heading5>
                <Paragraph>You do not have to take any formal action to form a sole proprietorship. As long as you are the only owner, this status automatically comes from your business activities. In fact, you may already own one without knowing it. If you are a freelance writer, for example, you are a sole proprietor:</Paragraph>
                <Separator className='h-[2px] bg-gray-400' />
                {/*  */}
                <Heading5 className='mt-20'>Advantages of a Sole Proprietorship</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Easy and inexpensive to form: A sole proprietorship is the simplest and least expensive business structure to establish. Costs are minimal, with legal costs limited to obtaining the necessary license or permits.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Complete control. Because you are the sole owner of the business, you have complete control over all decisions. You aren’t required to consult with anyone else when you need to make decisions or want to make changes.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Easy tax preparation. Your business is not taxed separately, so it’s easy to fulfill the tax reporting requirements for a sole proprietorship. The tax rates are also the lowest of the business structures.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Disadvantages of a Proprietorship</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Unlimited personal liability. Because there is no legal separation between you and your business, you can be held personally liable for the debts and obligations of the business. This risk extends to any liabilities incurred as a result of employee actions.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Hard to raise money. Sole proprietors often face challenges when trying to raise money. Because you can’t sell stock in the business, investors won’t often invest. Banks are also hesitant to lend to a sole proprietorship because of a perceived lack of credibility when it comes to repayment if the business fails.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Heavy burden. The flipside of complete control is the burden and pressure it can impose. You alone are ultimately responsible for the successes and failures of your business.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Cooperative</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>A cooperative is a business or organization owned by and operated for the benefit of those using its services. Profits and earnings generated by the cooperative are distributed among the members, also known as user-owners.<br /><br />

                  Typically, an elected board of directors and officers run the cooperative while regular members have voting power to control the direction of the cooperative. Members can become part of the cooperative by purchasing shares, though the amount of shares they hold does not affect the weight of their vote.<br /><br />

                  Cooperatives are common in the healthcare, retail, agriculture, art and restaurant industries.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/organization-1.png' />
                </div>
                <Heading5>Forming a Cooperative</Heading5>
                <Paragraph>Forming a cooperative is different from forming any other business entity. To start up, a group of potential members must agree on a common need and a strategy on how to meet that need. An organizing committee then conducts exploratory meetings, surveys, and cost and feasibility analyses before every member agrees with the business plan. Not all cooperatives are incorporated, though many choose to do so. If you decide to incorporate your cooperative, you must complete the following steps:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>File Articles of Incorporation. The articles of incorporation legitimizes your cooperative and includes information like the name of the cooperative, business location, purpose, duration of existence, and names of the incorporators, and capital structure. Once the charter members (also known as the incorporators) file with your city/municipality business entity registration office and the articles are approved, you should create bylaws for your cooperative.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Create Bylaws. While the law does not require bylaws, they do need to comply with city/municipality law and are essential to the success of your cooperative. Bylaws list membership requirements, duties, responsibilities and other operational procedures that allow your cooperative to run smoothly. According to most city/municipality laws, the majority of your members must adopt articles of incorporation and bylaws. Consult an attorney to verify that your bylaws comply with city/municipality laws.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Create a Membership Application. To recruit members and legally verify that they are part of the cooperative, you must create and issue a membership application. Membership applications include names, signatures from the board of directors and member rights and benefits.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Conduct a Charter Member Meeting and Elect Directors. During this meeting, charter members discuss and amend the proposed bylaws. By the end of the meeting, all of the charter members should vote to adopt the bylaws. If the board of directors were not named in the articles of incorporation, you must designate them during the charter meeting.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Obtain Licenses and Permits. You must obtain relevant business licenses and permits. Regulations vary by industry and locality.</Paragraph>
                </div>
                <Separator className='h-[2px] bg-gray-400' />
                {/*  */}
                <Heading5 className='mt-20'>Advantages of a Cooperative</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Less Taxation. Similar to an LLC, cooperatives that are incorporated normally are not taxed on surplus earnings (or patronage dividends) refunded to members. Therefore, members of a cooperative are only taxed once on their income from the cooperative and not on both the individual and the cooperative level.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Reduce Costs and Improve Products and Services. By leveraging their size, cooperatives can more easily obtain discounts on supplies and other materials and services. Suppliers are more likely to give better products and services because they are working with a customer of more substantial size. Consequently, the members of the cooperative can focus on improving products and services.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Perpetual Existence. A cooperative structure brings less disruption and more continuity to the business. Unlike other business structures, members in a cooperative can routinely join or leave the business without causing dissolution.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Democratic Organization. Democracy is a defining element of cooperatives. The democratic structure of a cooperative ensures that it serves its members’ needs. The amount of a member’s monetary investment in the cooperative does not affect the weight of each vote, so no member-owner can dominate the decision-making process. The “one member-one vote” philosophy particularly appeals to smaller investors because they have as much say in the organization as does a larger investor.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Disadvantages of a Cooperative</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Obtaining Capital through Investors. Cooperatives may suffer from slower cash flow since a member’s incentive to contribute depends on how much they use the cooperative’s services and products. While the “one member-one vote” philosophy is appealing to small investors, larger investors may choose to invest their money elsewhere because a larger share investment in the cooperative does not translate to greater decision-making power.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Lack of Membership and Participation. If members do not fully participate and perform their duties, whether it be voting or carrying out daily operations, then the business cannot operate at full capacity. If a lack of participation becomes an ongoing issue for a cooperative, it could risk losing members.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Corporation</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>A corporation is an independent legal entity owned by shareholders. This means that the corporation itself, not the shareholders that own it, is held legally liable for the actions and debts the business incurs.<br /><br />

                  Corporations are more complex than other business structures because they tend to have costly administrative fees and complex tax and legal requirements. Because of these issues, corporations are generally suggested for established, larger companies with multiple employees.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/create-business-plan/organization-2.png' />
                </div>
                <Paragraph>For businesses in that position, corporations offer the ability to sell ownership shares in the business through stock offerings. “Going public” through an initial public offering (IPO) is a major selling point in attracting investment capital and high quality employees.</Paragraph>
                <Separator className='h-[2px] bg-gray-400' />
                {/*  */}
                <Heading5 className='mt-20'>Advantages of a Corporation</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Limited Liability. When it comes to taking responsibility for business debts and actions of a corporation, shareholders’ personal assets are protected. Shareholders can generally only be held accountable for their investment in stock of the company.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Ability to Generate Capital. Corporations have an advantage when it comes to raising capital for their business – the ability to raise funds through the sale of stock.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Corporate Tax Treatment. Corporations file taxes separately from their owners. Owners of a corporation only pay taxes on corporate profits paid to them in the form of salaries, bonuses, and dividends, while any additional profits are awarded a corporate tax rate, which is usually lower than a personal income tax rate.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Attractive to Potential Employees. Corporations are generally able to attract and hire high-quality and motivated employees because they offer competitive benefits and the potential for partial ownership through stock options.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Disadvantages of a Corporation</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Time and Money. Corporations are costly and time-consuming ventures to start and operate. Incorporating requires start-up, operating and tax costs that most other structures do not require.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Double Taxing. In some cases, corporations are taxed twice – first, when the company makes a profit, and again when dividends are paid to shareholders.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Additional Paperwork. Because corporations are highly regulated by city/municipality, and in some cases local agencies, there are increased paperwork and recordkeeping burdens associated with this entity.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Partnership</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>A partnership is a single business where two or more people share ownership.<br /><br />

                  Each partner contributes to all aspects of the business, including money, property, labor or skill. In return, each partner shares in the profits and losses of the business.<br /><br />

                  Because partnerships entail more than one person in the decision-making process, it’s important to discuss a wide variety of issues up front and develop a legal partnership agreement. This agreement should document how future business decisions will be made, including how the partners will divide profits, resolve disputes, change ownership (bring in new partners or buy out current partners) and how to dissolve the partnership. Although partnership agreements are not legally required, they are strongly recommended and it is considered extremely risky to operate without one.</Paragraph>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/choose-business-structure/partnership-1.png' />
                </div>
                <Heading5>Types of Partnership</Heading5>
                <Paragraph>There are three general types of partnership arrangements:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>General Partnerships assume that profits, liability and management duties are divided equally among partners. If you opt for an unequal distribution, the percentages assigned to each partner must be documented in the partnership agreement.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Limited Partnerships (also known as a partnership with limited liability) are more complex than general partnerships. Limited partnerships allow partners to have limited liability as well as limited input with management decisions. These limits depend on the extent of each partner’s investment percentage. Limited partnerships are attractive to investors of short-term projects.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Joint Ventures act as general partnership, but for only a limited period of time or for a single project. Partners in a joint venture can be recognized as an ongoing partnership if they continue the venture, but they must file as such.</Paragraph>
                </div>
                <Separator className='h-[2px] bg-gray-400' />
                {/*  */}
                <Heading5 className='mt-20'>Advantages of a Partnership</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Easy and Inexpensive. Partnerships are generally an inexpensive and easily formed business structure. The majority of time spent starting a partnership often focuses on developing the partnership agreement.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Shared Financial Commitment. In a partnership, each partner is equally invested in the success of the business. Partnerships have the advantage of pooling resources to obtain capital. This could be beneficial in terms of securing credit, or by simply doubling your seed money.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Complementary Skills. A good partnership should reap the benefits of being able to utilize the strengths, resources and expertise of each partner.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Partnership Incentives for Employees. Partnerships have an employment advantage over other entities if they offer employees the opportunity to become a partner. Partnership incentives often attract highly motivated and qualified employees.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Disadvantages of a Corporation</Heading5>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Joint and Individual Liability. Similar to sole proprietorships, partnerships retain full, shared liability among the owners. Partners are not only liable for their own actions, but also for the business debts and decisions made by other partners. In addition, the personal assets of all partners can be used to satisfy the partnership’s debt.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Disagreements among Partners. With multiple partners, there are bound to be disagreements Partners should consult each other on all decisions, make compromises, and resolve disputes as amicably as possible.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Shared Profits. Because partnerships are jointly owned, each partner must share the successes and profits of their business with the other partners. An unequal contribution of time, effort, or resources can cause discord among partners.</Paragraph>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}