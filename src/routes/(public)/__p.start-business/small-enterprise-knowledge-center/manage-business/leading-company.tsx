import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import Heading5 from '@/components/user/shared/headings/heading-5'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'

export const Route = createFileRoute(
  '/(public)/__p/start-business/small-enterprise-knowledge-center/manage-business/leading-company',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Leading Your Company' label='Manage a Business' img_url='/img-assets/start-a-business/leading-company/managing-a-business.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] flex flex-col items-center justify-center mx-auto my-20 bg-light'>
          <Paragraph className='mb-32'>The Small Enterprise Knowledge Center provides a complete guide in starting and managing a business. Through the basic business modules, the Center aims to equip you with knowledge on the key aspects of a business. All materials published in the Center were based from the U.S. Small Business Administration website (www.sba.gov) and adapted to suit the local Philippine situation and laws.</Paragraph>
          <Heading4 className='text-center'>Leading Your Company</Heading4>
          <Paragraph className='mt-10'>Are you thinking about starting a business of your own? Explore the modules below to learn the aspects of starting a business and find ways on how to succeed.</Paragraph>
        </div>
        <div className='bg-cyan-900 max-lg:px-4 text-white w-full flex items-center flex-col justify-center py-5 mb-32'>
          <Accordion type='single' collapsible className='max-lg:mx-4 mx-auto w-full max-w-3xl'>
            <AccordionItem value='item-1' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Being a Leader</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph className='mt-5'>Over the past several years, one of the most important contributions psychology has made to the field of business has been in determining the key traits of acknowledged leaders. Psychological tests have been used to determine what characteristics are most commonly noted among successful leaders. This list of characteristics can be used for developmental purposes to help managers gain insight and develop their leadership skills.<br/><br/>

                The increasing rate of change in the business environment is a major factor in this new emphasis on leadership; whereas in the past, managers were expected to maintain the status quo in order to move ahead, new forces in the marketplace have made it necessary to expand this narrow focus. The new leaders of tomorrow are visionary. They are both learners and teachers. Not only do they foresee paradigm changes in society, but they also have a strong sense of ethics and work to build integrity in their organizations.<br/><br/>

                The traits of an effective leader include the following:<br/><br/>

                <b>Emotional stability</b>: Good leaders must be able to tolerate frustration and stress. Overall, they must be well-adjusted and have the psychological maturity to deal with anything they are required to face.<br/><br/>

                <b>Dominance</b>: Leaders are often competitive, decisive and usually enjoy overcoming obstacles. Overall, they are assertive in their thinking style as well as their attitude in dealing with others.<br/><br/>

                <b>Enthusiasm</b>: Leaders are usually seen as active, expressive and energetic. They are often very optimistic and open to change. Overall, they are generally quick and alert and tend to be uninhibited.<br/><br/>
                
                <b>Conscientiousness</b>: Leaders are often dominated by a sense of duty and tend to be very exacting in character. They usually have a very high standard of excellence and an inward desire to do their best. They also have a need for order and tend to be very self-disciplined.<br/><br/>

                <b>Social boldness</b>: Leaders tend to be spontaneous risk-takers. They are usually socially aggressive and generally thick-skinned. Overall, they are responsive to others and tend to be high in emotional stamina.<br/><br/>

                <b>Self-assurance</b>: Self-confidence and resiliency are common traits among leaders. They tend to be free of guilt and have little or no need for approval. They are generally unaffected by prior mistakes or failures.<br/><br/>

                <b>Compulsiveness</b>: Leaders are controlled and very precise in their social interactions. Overall, they are very protective of their integrity and reputation and consequently tended to be socially aware and careful, abundant in foresight, and very careful when making decisions or determining specific actions.<br/><br/>

                <b>Intuitiveness</b>: Rapid changes in the world today, combined with information overload result in an inability to know everything. In other words, reasoning and logic will not get you through all situations. In fact, more and more leaders are learning the value of using their intuition and trusting their gut when making decisions.<br/><br/>

                <b>Empathy</b>: Being able to put yourself in the other person’s shoes is a key trait of leaders today. Without empathy, you can’t build trust; without trust, you will never be able to get the best effort from your employees.<br/><br/>

                <b>Charisma</b>: People usually perceive leaders as larger than life. Charisma plays a large part in this perception. Leaders who have charisma are able to arouse strong emotions in their employees by defining a vision which unites and captivates them. Using this vision, leaders motivate employees to reach toward a future goal by tying the goal to substantial personal rewards and values.<br/><br/>

                Leaders are rarely (if ever) born. Circumstances and persistence are major components in the developmental process of any leader, so if your goal is to become a leader, work on developing those areas of your personality that you feel are not up to par. For instance, if you have all of the basic traits but do not consider yourself very much of a people person, try taking classes or reading books on empathy. On the other end, if relating to others has always come naturally to you, but you have trouble making logical decisions, try learning about tough-mindedness and how to develop more psychological resistance. Just remember, anyone can do anything they set their mind to.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Making Decisions</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Paragraph>As you manage your business, you will be faced with important decisions that may impact the future of your company. This may seem stressful, but keep these tips in mind and you’ll find yourself making wiser decisions in no time:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Define, as specifically as possible, what the decision is that needs to be made. Is this really your decision or someone else’s? Do you really need to make a decision? (If you do not have at least two options, there is no decision to be made.) When does the decision need to be made? Why is this decision important to you?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Brainstorm, and write down as many alternatives as you can think of. Be sure to use your resources (experienced friends and family, the Internet, etc.) to find out more about the implications of each option.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Visualize the outcome of each alternative. Do you feel more satisfied with one outcome than with the others?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Do a reality check. Cross off those alternatives that most likely will not occur.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Once you have made your decision, get moving on it. Worrying or second-guessing yourself will only cause stress. You have done your very best. Remember, no decision is set in stone!</Paragraph>
                </div>
                {/*  */}
                <Heading5>Common Decision-Making Mistakes</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Have you ever tried to learn ten new things all at once? If you have, you know that it is very easy to become overwhelmed and end up learning very little at all.That is because of the way the brain works. Our brains screen and categorize information so that we can understand the world around us without being overwhelmed by it. We get into trouble when we fail to realize that many of the perceptions we hold are based on what society (i.e., parents, teachers, the church, all institutions, etc.) teach us, not what we actually know to be true. Here are some common mistakes, leaders encounter when trying to make a decision:</Paragraph>
                  <img src='/img-assets/start-a-business/leading-company/decision-mistakes.png' />
                </div>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Relying too much on expert information. Oftentimes, people have a tendency to place too much emphasis on what experts say. Remember, experts are only human and have their own set of biases and prejudices just like the rest of us. By seeking information from a lot of different sources, you will get much better information than if you focused all of your energy on only one source.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Overestimating the value of information received from others. People have a tendency to overestimate the value of certain individuals in our society and underestimate the value of others. For instance, experts, authority figures, parents, high status groups, people who seem to have it all together, and people we respect have a way of swaying our opinion based simply on the fact that we believe they know more than we do. When you find yourself doing this, ask yourself:  Do they know as much about this problem as I do? Are their values the same as mine? Have they had any personal experiences with a problem like mine? In other words, keep their opinions in perspective.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Underestimating the value of information received from others. Whether we realize it or not, we also have a tendency to discount information we receive from individuals such as children, low status groups, women (yes, believe it!), the elderly, homemakers, blue-collar workers, artists, etc. This is unfortunate since many times these groups can paint a good picture of the other side of your problem. In other words, these groups may use entirely different values and perceptions in their answers to your questions. The result is a larger perspective of what the issues really are. Just make a note that if you find yourself discounting the information you receive from anyone, make sure you ask yourself why.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Only hearing what you want to hear or seeing what you want to see. Try this exercise. Ask a friend to look around them and make note of everything that is green. Now, have them close their eyes. Once their eyes are closed, ask them to tell you what around them is red. Almost everyone you ask will not be able to tell you what was red because they were focusing on what was green. Our perceptions work the same way. If we have expectations or biases that we are not aware of, we tend to see what we want to see.  Likewise, if someone tries to tell us something we do not want to hear, we simply do not hear them. This is a common mistake that many people make. The key is to be aware of your own prejudices and expectations while at the same time staying open to everything that comes your way.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Not listening to your feelings or gut reactions. Have you ever made a decision only to have it be followed by a major stomach ache or headache? This is your body talking to you. Our brains are constantly taking in more information than we can consciously process. All of this extra information gets buried in our subconscious. Although we may not be able to retrieve this information, our body stores it for us until it is needed. In moments when we need to make a decision, our bodies provide clues to the answer through feelings or gut reactions. Unfortunately, our society teaches us to ignore these feelings, but by tuning into your intuition, you will find that you will make much better decisions in the long run.</Paragraph>
                </div>
                {/*  */}
                <Heading5 className='text-right'>Making Time</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/leading-company/time.png' />
                  <Paragraph>You planned on getting to work early to finish the project that’s due today, but now the car won’t start. You know you wrote the mechanic’s name down somewhere, but now you can’t remember where you put it. You frantically search through your notes, but you can’t find it anywhere. There’s no way you’re going to have time to finish your project. You start to panic. The clcok just keeps ticking. Most of us have felt swamped at one time or another. With hectic work schedules, family responsibilities, and social engagements, there just doesn’t seem to be enough time for everything we need and want to do. However, there is light at the end of the tunnel. Although life will always provide us with its little twists and turns, once we learn to manage our time wisely, much of the day-to-day chaos in our lives can be reduced or even eliminated.   The first step in learning how to manage your time is to develop a general work schedule. Your work schedule should include time for yourself as well as time for the maintenance of your business.</Paragraph>
                </div>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>After you’ve defined the major elements of your workload, the next step is to prioritize them by identifying critical deadlines, routine maintenance items, and fun/relaxation time. Answering questions like “How much time do I have to make this decision, finish this task, or contact this person?” will help you to start identifying what needs to be done immediately versus what can wait. Setting priorities depends on deadlines, how many people you must call to get the information you need, and whether you can delegate or get assistance from others. If you are involved in group projects, reserve additional time for communication and problem-solving. Once you have identified your priorities, look at all of your options for achieving them. Evaluate and move forward with the ones you feel are the most useful for you. The only time to consider changing approaches mid-task is when you know the change will save time. If you are in doubt, it is usually best to consider in the direction you started. calendarBy setting up your work schedule and identifying your priorities, you have already started down the road to more effective time management.</Paragraph>
                  <img src='/img-assets/start-a-business/leading-company/calendar.png' />
                </div>
                {/*  */}
                <Paragraph>Other time management suggestions you may find useful for managing both your business life as well as your personal life include the following:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Contract out tasks</b>: Contract out tasks you do not have the expertise to complete. Your client will appreciate your honesty and effort to get the best result.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Start with the most worrisome task</b>: Start the morning, afternoon, or evening with the most worrisome task before you. This will reduce your anxiety level for the next task.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Complete deadline work early</b>: Not only will this reduce stress and lighten your work schedule, but it will also give you more self-confidence about managing your schedule.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Know your capacity for stress</b>: When you are hitting overload, take the break you need (even if it is a short one) when you need it.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Stay organized</b>: Take time at the end of each day to briefly organize your desk and make reminder lists of tasks for the next day or week.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Take advantage of down time</b>: Allow yourself some down time between busy periods to review your schedule and reevaluate your priorities.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Get physical</b>: Physical exertion such as walking, bicycling, swimming, or organized sports activities helps to discharge stress. Stretching, yoga, jumping rope, sit-ups, playing with children, or doing yard work are other types of therapeutic breaks you should consider during times of stress.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Have fun</b>: Be sure to have some fun while working or playing; a good sense of humor can keep most problems in perspective.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Divide up your time</b>: Decide how much time to spend on business development, personal needs, volunteerism, and family. Start by allowing 25 percent of your time for yourself. Each time you make a commitment, set a timeline for your involvement. Remember that maintenance takes at least 25 percent of the time you spend on any project whether it’s business, marriage, or serving on the board of a non-profit organization.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'><b>Build flexibility into your schedule</b>: Your availability to family and friends depends on the flexibility you build into your schedule. Female business owners frequently have the primary responsibility for making sure family members are cared for when they are dependent or ill, so it’s necessary to leave some time in your schedule for emergencies or to have good backup resources. Get to know your neighbors so you know who to call on for help in times of crisis.</Paragraph>
                </div>
                {/*  */}
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/leading-company/goal.png' />
                </div>
                <Paragraph>In the bigger picture, consider the relationship between your business life and your personal life. Be as realistic as possible when answering the following questions, keeping in mind what is most important to you:</Paragraph>
                <div className='grid grid-cols-12 gap-y-5'>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>What are your long term goals? Your partner’s goals?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Where are the conflicts, and where are the similarities?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>What is it that you really want to do? List all possible ways to accomplish this.</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>How long will it take you to reach your goal?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>How do your timeline and goals affect your family (parents, siblings, partner, children)?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>How do your personal goals conflict with or match your business goals?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>How much time can you donate to community programs?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Have you talked about your personal goals with your business partner?</Paragraph>
                  <Paragraph className='text-center'>&#8226;</Paragraph>
                  <Paragraph className='col-span-11'>Have you talked about your business goals with your personal partner?</Paragraph>
                </div>
                <Paragraph>Don’t underestimate the toll that emotional stress takes on your physical health and your ability to concentrate on your work or enjoy time with your family. Make sure you have time for the important people and events in your life.</Paragraph>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='border-b mb-2'>
              <AccordionHeader>
                <AccordionTrigger className='cursor-pointer hover:bg-teal-500 rounded-none w-full flex items-center justify-between p-4 text-lg font-medium'>
                  <Heading4>Managing Employees</Heading4>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className='my-10 space-y-10'>
                <Heading5>Employee Handbooks</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>The company employee handbook is one of the most important communication tools between your company and your employees. Not only does it set forth your expectations for your employees, but it also describes what they can expect from the company. It is essential that your company has one and that it be as clear and unambiguous as possible. Make certain that it is written in an understandable language which makes the company’s policies accessible.<br/><br/>

                  The company employee handbook and related personnel policies are usually the first formal communication that you will have with an employee after they join your team. Make sure the first impression is a good one. Similarly, in the event of a dispute or poor performance review, this will be the first place that the employee turns.</Paragraph>
                  <img src='/img-assets/start-a-business/leading-company/employee-handbook.png' />
                </div>
                <Paragraph><b>What Should an Employee Handbook Include?</b><br/><br/>

                The most effective employee handbooks cover the following topics. Links to guides discussing your legal obligations as an employer are provided below as a reference.</Paragraph>
                {/*  */}
                <Heading5>Compensation</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/leading-company/01-Compensation-01.png' />
                  <Paragraph>Clearly explain to your employees that your company will make necessary deductions for taxes and mandatory deductions for Social Security (SSS), PhilHealth and Pag-ibig as well as well as voluntary deductions for the company’s benefits programs. In addition, you should include your company’s legal obligations regarding overtime pay, and information on pay schedules, performance reviews and salary increases, time keeping, breaks and bonus compensation.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Work Schedules</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Describe your company’s policy regarding work hours and schedules, including attendance, punctuality, and reporting absences. Also include your company’s policy for flexible schedules and telecommuting.</Paragraph>
                  <img src='/img-assets/start-a-business/leading-company/02-WorkSched.png' />
                </div>
                {/*  */}
                <Heading5>Standards of Conduct</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/leading-company/03-StandardConduct-01.png' />
                  <Paragraph>Make sure you have thought out your expectations of how you want employees to conduct themselves in your workplace, including dress codes and inappropriate behavior. In addition, it’s important to remind your employees of their legal obligations, especially if your business is engaged in a regulated activity (for example, your company’s legal obligations to protect customer data or to avoid insider-trading activity).</Paragraph>
                </div>
                {/*  */}
                <Heading5>General Employment Information</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <Paragraph>Your employee handbook should include an a overview of your business and general employment policies covering employment eligibility, job classifications, employee referrals, employee records, job postings, probationary periods, termination and resignation procedures, transfers and relocation, and union information, if applicable.</Paragraph>
                  <img src='/img-assets/start-a-business/leading-company/04-GenEmployInfo.png' />
                </div>
                {/*  */}
                <Heading5>Safety and Security</Heading5>
                <div className='flex flex-row items-center space-x-20'>
                  <img src='/img-assets/start-a-business/leading-company/05-SecuritySafety-01.png' />
                  <Paragraph>This section should describe your company’s policy for creating a safe and secure workplace.<br/><br/>

                  Safety policies should also include your company’s policy regarding bad weather and hazardous community conditions.<br/><br/>

                  Finally, your security policy should include your commitment to creating a secure work environment, and your employee’s responsibility for abiding by all physical and information security policies, such as locking file cabinets or computers when they aren’t in use.</Paragraph>
                </div>
                {/*  */}
                <Heading5>Computers and Technology</Heading5>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/leading-company/06-CompTech-02.png' />
                </div>
                <Paragraph>Computers and communication technology are essential tools for conducting business. However employee misuse can have serious consequences for your company. Your employee handbook should include policies for appropriate computer and software use, and steps employees should take to secure electronic information, especially any personal identifiable information you collect from your customers. While not required, it is recommended that you develop policies on the use of social media in your workplace.</Paragraph>
                {/*  */}
                <Heading5>Media Relations</Heading5>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/leading-company/07-MediaRelations-02.png' />
                </div>
                <Paragraph>It’s a good business practice to have a single point of contact for all media inquiries, such as yourself or a public relations professional. You don’t want your employees to bring unwanted attention to your company by speaking about your business in ways that could easily be misrepresented in the media. Your employee handbook should include a section that discusses how you employees should handle calls from reporters or other media inquiries.</Paragraph>
                {/*  */}
                <Heading5>Employee Benefits</Heading5>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/leading-company/08-EmpBenefits-02.png' />
                </div>
                <Paragraph>Your company’s handbook should detail all benefit programs and eligibility requirements, including all benefits that may be required by law such as disability insurance, worker’s compensation.<br/><br/>

                The employee benefits section should also detail your plans for health insurance options, retirement, employee assistance, tuition reimbursement, business travel, and any other fringe benefits your business provides to attract and retain employees.</Paragraph>
                {/*  */}
                <Heading5>Leave</Heading5>
                <div className='flex justify-center'>
                  <img src='/img-assets/start-a-business/leading-company/09-Leaves-02.png' />
                </div>
                <Paragraph>Your company’s leave policies should be carefully documented, especially those that you are required to provide by law. In addition, you should explain your policies for vacation, holiday, bereavement, and sick leave.</Paragraph>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}