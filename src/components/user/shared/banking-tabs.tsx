"use client"

import { useState } from "react"
import { Smartphone, DollarSign, BarChart3, HandHelping } from "lucide-react"
import TabList from "./embed/tablist"
import Paragraph from "./paragraph"
import Heading5 from "./headings/heading-5"
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
        <div className="m-4 10">
          <Paragraph>The OFBank together with LANDBANK offers multi-purpose loans to OFs and their family members. MAy it be for a home loan Bahay para sa Bagong Bayani (3B), OFW Reintegration Loans for OFs deciding to retire, and a lot more. For more information, you may visit their <DarkRoseAnchor href_url="https://www.ofbank.com.ph/products-services/loans">website</DarkRoseAnchor>.</Paragraph>
        </div>
      ),
    },
    {
      idx: 1,
      title: "OFBank Mobile Banking",
      icon: <Smartphone className="absolute top-5 h-8" />,
      content: (
        <div className="p-4">
          <h2 className="text-lg font-bold mb-3">MOBILE BANKING</h2>
          <p className="mb-4">
            Experience convenient and secure banking with OFBank Mobile Banking app. Manage your accounts, transfer
            funds, pay bills, and more - all from your smartphone.
          </p>

          <h3 className="font-medium mt-4 mb-2">Download Our App</h3>
          <div className="space-y-2">
            <p className="font-medium">Google Play Store:</p>
            <a
              href="https://play.google.com/store/apps/details?id=ph.gov.overseasfilipinobank.mobilebanking&hl=en&gl=US"
              className="text-blue-600 hover:underline block"
              target="_blank"
            >
              https://play.google.com/store/apps/details?id=ph.gov.overseasfilipinobank.mobilebanking&hl=en&gl=US
            </a>

            <p className="font-medium mt-4">App Store:</p>
            <a
              href="https://apps.apple.com/us/app/ofbank-mobile-banking/id1396335444"
              className="text-blue-600 hover:underline block"
              target="_blank"
            >
              https://apps.apple.com/us/app/ofbank-mobile-banking/id1396335444
            </a>
          </div>
        </div>
      ),
    },
    {
      idx: 2,
      title: "Remittance and Money Transfer",
      icon: <DollarSign className="absolute top-5 h-8" />,
      content: (
        <div className="p-4">
          <p className="mb-4">
            Transferring and remitting money to anyone in the Philippines is easy-peasy with the OFBank App.
            Transferring funds from your account to a foreign account is also a breeze with OFBank. Your balance will
            reflect real time! For more information, you may visit their website{" "}
            <a href="#" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      idx: 3,
      title: "Secured Investment Transactions",
      icon: <BarChart3 className="absolute top-5 h-8" />,
      content: (
        <div className="p-4">
          <p className="mb-4">
            Planning to grow your financial portfolio and investing in government securities? With OFBank, you are
            assured of secured transactions and informed on the latest and verified investment opportunities like the
            Premyo Bonds Para sa Bayan program and more with OFBank. For more information, you may visit their website{" "}
            <a href="#" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </p>
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

      <div className="mt-4 border-t border-gray-200">{tabs[activeTab].content}</div>
    </div>
  )
}
