import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/start-a-business/choose-location-equipment',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Choose Your Location & Equipment (HLUBR)' label='Start a Business' img_url='/img-assets/start-a-business/thinking-about-it/starting-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Choose Your Location & Equipment (HLUBR)</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Tips for Choosing your Business Location</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>When it comes to starting your own business, or growing your existing one, entrepreneurs agree that site location is one of the most crucial and challenging components for success. Selecting a location requires an extensive amount of research and planning, but luckily resources are available to help guide you through the process.<br /><br />

                  Here are tips to consider when choosing the right location for your business:</Paragraph>
                {/*  */}
                <Heading5>Know Your Needs</Heading5>
                <Paragraph className='mt-5'>Choose a location that provides exposure to your potential clients. There are also factors to consider:</Paragraph>
                <div className='flex justify-center'>insurance-1
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Brand Image</b>: Is the location consistent with the image you want to maintain?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Competitors </b>: You can save on the cost of location analysis by looking at where your competitors are. By being in close proximity to them, you can benefit from their marketing efforts. Of course, it’s still a good idea to make your own evaluations of a particular property, even if your competitors seem to be thriving in the area. Staying ahead of the game in this regard will help your business grow should you decide, for instance, that you later want to open another location.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Accessibility</b>: Your business may be visible and offering a great product, but it is also important that your customers, suppliers and employees have easy access to it. A good location should have several nearby parking spots and gas stations to cater to those who drive. It should also be as near as possible to bus stops or MRT stations so people can get to your location with ease.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Expansion</b>: If you anticipate further expansion, look for a building that has extra space should you need it.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Safety</b>: This is an increasingly important issue for both customers and employees. Is the parking close by? Well lit? Is there security on the premises?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Zoning Regulations</b>: These determine whether you can conduct your type of business in certain properties or locations. You can find out how property is zoned by contacting your local planning agency.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Check Your Finances</Heading5>
                <Paragraph>Balance cost with other factors. You will need to be aware of other financial considerations:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Hidden Costs</b>: Very few spaces are business-ready, so take into account the costs for renovation and essential building renovation and upgrades for your new potential location.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Taxes </b>: What are the income and sales tax rates for your municipality? What about property taxes? Could you pay less in taxes by locating your business across a nearby municipality line?</Paragraph>
                </div>
                <Paragraph>Is the Area Business Friendly?<br /><br />

                  Understanding laws and regulations imposed on businesses in a particular location is essential. As you look to grow your business, it can be advantageous to work with a business mentor. Check what programs and support local government units offer to small businesses. Do your research. Talk to other business owners and potential co-tenants.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Leasing Commercial Space</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Leasing commercial office space is one of the largest expenses incurred by new and expanding businesses, so it is important to do your due diligence. Here are some tips for negotiating a commercial lease for your small business.</Paragraph>
                <Heading5>Lease Agreement</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Lease term and rent are your first negotiation points. It is generally recommended that small businesses negotiate one- to two-year leases with the option to renew. You will also want to factor in rent increases over the term and renewal options so you are not charged with an unexpected rent increase without warning.<br /><br />

                    Consider working with a broker to help you negotiate with the landlord. It is also important to consult a knowledgeable real estate lawyer; they can often recommend the right choice for you and protect your interests as you negotiate your lease through the broker.</Paragraph>
                  <img src='/img-assets/start-a-business/choose-location-equipment/insurance-1.png' />
                </div>
                {/*  */}
                <Heading5>Expenses</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/choose-location-equipment/invest-guide-real-property-1.png' />
                  <Paragraph>In addition to your monthly lease payment, find out what expenses you may incur beyond rent.<br /><br />

                    Commercial real estate landlords often incorporate extra expenses into the lease such as maintenance fees, upkeep for shared facilities (Common Area Maintenance or CAM), etc. Other expenses to consider are utilities. These charges are usually the responsibility of the tenant, so find out how these are measured. Are they individually metered or apportioned by square footage? Ask to see these “hidden fees” and policies as well as examples of costs that are typically incurred by tenants.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Maintenance and Repair</Heading5>
                <Paragraph>While residential leasing often places the burden of maintenance and upkeep on the shoulders of the landlord, commercial leases are different. Commercial leases vary regarding maintenance and repair – some stipulate that the tenant is responsible for all property upkeep and repairs while others specify that the tenant is responsible for systems like air conditioning, plumbing, etc.</Paragraph>
                {/*  */}
                <Heading5>Read the Lease</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Be sure to read over your lease in detail and hire an attorney who specializes in commercial real estate to walk you through the clauses and fine print.</Paragraph>
                  <img src='/img-assets/start-a-business/choose-location-equipment/repair.png' />
                </div>
                {/*  */}
                <Heading5>Protect Your Business</Heading5>
                <Paragraph>To protect your investment and long-term business interests, it is worth investigating and negotiating some potential add-on clauses to your lease. These might include:</Paragraph>
                <Paragraph><b>Sublease</b>: This builds in some flexibility, allowing you to sublet your space to another business.</Paragraph>
                <Paragraph><b>Exclusivity clause</b>: Prevents the landlord from leasing other spaces on the property to a direct competitor of yours.</Paragraph>
                <Paragraph><b>Co-tenancy</b>: If the property’s anchor tenant closes business, a co-tenancy agreement can protect you from a potential loss of customers, allowing you to break the lease if the landlord does not replace the anchor tenant in a specified time period.</Paragraph>
                {/*  */}
                <Heading5>What if you default?</Heading5>
                <Paragraph>Should you default on your lease payments, there are steps you can take during the lease negotiation process to protect yourself. Find out what the lease agreement states. Will you be locked out immediately? Will the landlord initiate eviction proceedings? Can you negotiate more time? Could you pay only the current month’s rent instead of the remaining amount owed on the lease?</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Leasing Business Equipment</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>Looking to equip your new business? Whether you need computers, desks, machinery, or a vehicle, you want to make cost effective purchasing decisions. Why not consider leasing equipment instead of buying it? Here is some information to help you decide if leasing is right for you.</Paragraph>
                {/*  */}
                <Heading5>Benefits of Leasing Business Equipment</Heading5>
                <Paragraph>Aside from a reduced cash outlay, there are many benefits to leasing equipment:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Leasing can save you the time and hassle involved in finding someone who will extend you credit for purchasing equipment.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>You can keep pace with emerging technology.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Short-term leases give you the opportunity to evaluate whether the equipment fits your needs.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Maintenance may be included in the lease, saving you additional costs.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>If you use the leased asset in your business, you may enjoy a potential tax advantage because your lease or rental payments are fully deductible.</Paragraph>
                </div>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/choose-location-equipment/business-equipment.png' />
                </div>
                <Paragraph>Leasing also has its disadvantages. For example, the lifetime cost of the asset is generally going to be higher than if you purchased it. You are also giving up any ownership interest, which can be especially costly if you rely on the equipment and find at the end of the lease that the equipment is too expensive to purchase outright. You may also find that you lose the tax benefits of depreciation deductions.</Paragraph>
                {/*  */}
                <Heading5>Factors to Consider When Leasing Equipment</Heading5>
                <Paragraph>There are many variables to consider when making the decision to lease equipment. Here are a few considerations:<br /><br />

                  If you anticipate needing the equipment for the long-term and want to establish equity in it, try to negotiate a purchase option under which a portion of your lease payments is credited to the purchase price.<br /><br />

                  Doing your homework can help prevent undesirable legal repercussions. Consider asking a lawyer to look over a lease before signing it.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}