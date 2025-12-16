// ============ InfoTabs.jsx ============
import { Clock } from "lucide-react";

export default function InfoTabs({ activeTab, onTabChange, hours = [8, 9, 13] }) {
  const tabs = ["전체", ...hours.map((h) => `${h}시`)];
  
  return (
    <div className="relative rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.4)] p-5 flex items-center justify-between overflow-hidden group hover:border-indigo-400/60 transition-all duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative flex items-center space-x-3">
        {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          <Clock className="w-5 h-5 text-white" />
        </div> */}
        <h2 className="text-xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          시간대
        </h2>
      </div>
      
      <div className="relative inline-flex rounded-2xl bg-black/40 p-1.5 space-x-2 border border-indigo-700/40">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`relative px-4 py-2 text-base font-black rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.8)] scale-105"
                  : "bg-transparent text-indigo-200 hover:bg-indigo-950/50 hover:text-indigo-100"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/20 to-pink-400/20 animate-pulse"></div>
              )}
              <span className="relative">{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}