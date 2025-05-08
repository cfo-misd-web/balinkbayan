import Paragraph from "../paragraph"

type Tab = {
    idx: number,
    title: string,
    icon: React.ReactNode,
    content: React.ReactNode,
}

export default function TabList(
    {tab, setActiveTab, activeTab}:
    {tab: Tab, activeTab: number, setActiveTab: (tabId: number) => void}
) {
    return (
        <button
            key={tab.idx}
            onClick={() => setActiveTab(tab.idx)}
            className={`relative flex flex-col items-center justify-center text-center w-full h-[150px] transition-colors ${
            activeTab === tab.idx ? "bg-teal-500 text-white" : "bg-cyan-50 hover:bg-amber-50"
            }`}
            role="tab"
            aria-selected={activeTab === tab.idx}
        >
            {tab.icon}
            <Paragraph className="mt-10 text-center text-sm font-black">{tab.title}</Paragraph>
            {activeTab === tab.idx && (
            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-teal-500"
                style={{ bottom: "-10px" }}
            ></div>
            )}
        </button>
    )
}

