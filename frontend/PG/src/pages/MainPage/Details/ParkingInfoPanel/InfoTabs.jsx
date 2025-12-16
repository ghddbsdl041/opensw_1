// src/pages/MainPage/Details/ParkingInfoPanel/InfoTabs.jsx
import React from "react";

// props 에 hours 추가
function InfoTabs({ activeTab, onTabChange, hours = [8, 9, 13] }) {
  const tabs = ["전체", ...hours.map((h) => `${h}시`)];

  return (
    <div
      className="
        rounded-2xl border border-white/15
        bg-white/12 backdrop-blur-xl
        shadow-[0_16px_40px_rgba(15,23,42,0.75)]
        p-4 flex items-center justify-between
      "
    >
      <h2 className="text-base font-semibold text-slate-50">시간대 선택</h2>
      <div className="inline-flex rounded-full bg-white/10 p-1 space-x-1">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`
                px-3 py-1 text-base font-bold rounded-full transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-white shadow-[0_0_16px_rgba(56,189,248,0.9)]"
                    : "bg-white/5 text-slate-200 hover:bg-white/15"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default InfoTabs;
