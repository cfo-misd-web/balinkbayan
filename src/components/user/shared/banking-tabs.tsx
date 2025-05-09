"use client"

import { useState } from "react"
import { Smartphone, DollarSign, BarChart3, HandHelping } from "lucide-react"
import TabList from "./embed/tablist"
import Paragraph from "./paragraph"
import DarkRoseAnchor from "./anchors/darkrose-anchor"

export default function BankingTabs() {
  const [activeTab, setActiveTab] = useState(1)

  const tabs = [
    {
      idx: 0,
      title: "Loans & other Services",
      icon: (
        <>
          <HandHelping className="absolute top-5 h-8" />
          <DollarSign className="absolute top-3 rotate-170 h-4"/>
        </>
      ),
      content: (
        <div>
          <Paragraph>The OFBank together with LANDBANK offers multi-purpose loans to OFs and their family members. MAy it be for a home loan Bahay para sa Bagong Bayani (3B), OFW Reintegration Loans for OFs deciding to retire, and a lot more. For more information, you may visit their <DarkRoseAnchor href_url="https://www.ofbank.com.ph/products-services/loans">website</DarkRoseAnchor>.</Paragraph>
        </div>
      ),
    },
    {
      idx: 1,
      title: "OFBank Mobile Banking",
      icon: <Smartphone className="absolute top-5 h-8" />,
      content: (
        <div>
          <Paragraph><b>GooglePlaystore</b>:<br/>
          
          <DarkRoseAnchor href_url="https://play.google.com/store/apps/details?id=ph.gov.overseasfilipinobank.mobilebanking&hl=en&gl=US">https://play.google.com/store/apps/details?id=ph.gov.overseasfilipinobank.mobilebanking&hl=en&gl=US</DarkRoseAnchor><br/><br/>
          
          <b>App Store</b>:<br/>
          
          <DarkRoseAnchor href_url="https://apps.apple.com/us/app/ofbank-mobile-banking/id1396335444">https://apps.apple.com/us/app/ofbank-mobile-banking/id1396335444</DarkRoseAnchor></Paragraph>
        </div>
      ),
    },
    {
      idx: 2,
      title: "Remittance and Money Transfer",
      icon: <DollarSign className="absolute top-5 h-8" />,
      content: (
        <div>
          <Paragraph>Transferring and remitting money to anyone in the Philippines is easy-peasy with the OFBank App. Transferring funds from your account to a foreign account is also a breeze with OFBank. Your balance will reflect real time! For more information, you may visit their website <DarkRoseAnchor href_url="https://www.ofbank.com.ph/products-services/remittance">here</DarkRoseAnchor>.</Paragraph>
        </div>
      ),
    },
    {
      idx: 3,
      title: "Secured Investment Transactions",
      icon: <BarChart3 className="absolute top-5 h-8" />,
      content: (
        <div>
          <Paragraph>Planning to grow your financial portfolio and investing in government securities? With OFBank, you are assured of secured transactions. Be informed on the latest and verified investment opportunities like the Premyo Bonds Para sa Bayan program and more with OFBank. For more information, you can visit their website <DarkRoseAnchor href_url="https://www.ofbank.com.ph/products-services/treasury">here</DarkRoseAnchor>.</Paragraph>
        </div>
      ),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto border border-teal-500">
      <div className="flex justify-center">
        {tabs.map((tab) => (
          <TabList key={tab.idx} tab={tab} setActiveTab={setActiveTab} activeTab={activeTab}/>
        ))}
      </div>

      <div className="px-4 pt-6 pb-10 border-t border-gray-200">{tabs[activeTab].content}</div>
    </div>
  )
}
