import NewsList from '@/components/user/shared/list/news-list'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/__p/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    // News container
    <ul className='mt-10 mb-20'>
      {/* Template news */}
      <NewsList
        newsTitle='Now Available: 2024 BaLinkBayan Accomplishment Report of the Commission on Filipinos Overseas (CFO)'
        newsDescription='In 2024, the CFO’s BaLinkBayan Project achieved significant milestones and formed new collaborations. Check out the 2024 Accomplishment Report to see the progress the Project has made in the CFO’s ongoing mission to help overseas Filipinos stay connected with the Philippines.'
        postedDate='April 8, 2025'
        imageUrl='https://balinkbayan.gov.ph/wp-content/uploads/2025/04/for-eblast-819x1024.jpg'/>
        
      <NewsList
        newsTitle='CFO AND GO NEGOSYO TEAM UP TO PROMOTE ENTREPRENEURSHIP AND FACILITATE MENTORSHIP AND NETWORKING OPPORTUNITIES AMONG OVERSEAS FILIPINOS AND THEIR FAMILIES'
        newsDescription='Mandaluyong City – The Commission on Filipinos Overseas (CFO) and Go Negosyo officially signed on March 26, 2025, a Memorandum of Understanding (MOU) to promote entrepreneurship among overseas Filipinos and their families.'
        postedDate='March 27, 2025'
        imageUrl='https://balinkbayan.gov.ph/wp-content/uploads/2025/03/Screenshot-2025-03-27-134202.png'/>
        
      <NewsList
        newsTitle='CFO Officially Partners with Pasig City, Making It the 2nd LGU in NCR for the BaLinkBayan Project'
        newsDescription='On 16 October 2024, the Commission on Filipinos Overseas (CFO) officially entered into a Memorandum of Agreement (MOA) with Pasig City, marking it as the second partner of the CFO in the National Capital Region.'
        postedDate='October 21, 2024'
        imageUrl='https://balinkbayan.gov.ph/wp-content/uploads/2025/04/for-eblast-819x1024.jpg'/>
        
      <NewsList
        newsTitle='RECAP: CFO and Antipolo City formalizes partnership through the BaLinkBayan Project'
        newsDescription='Antipolo City Mayor Casimiro Ynares III extended a warm welcome to the CFO team in his message, acknowledging Secretary Romulo V. Arugay’s commitment to serving overseas Filipinos (OFs).'
        postedDate='October 2, 2024'
        imageUrl='https://balinkbayan.gov.ph/wp-content/uploads/2025/04/for-eblast-819x1024.jpg'/>
    </ul>
  )
}
