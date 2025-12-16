// ============ CongestionBars.jsx ============
import { BarChart3 } from "lucide-react";


export default function CongestionBars({ data, activeTab }) {
  return (
    <section className="relative rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-cyan-900/30 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.4)] p-5 space-y-4 overflow-hidden group hover:border-cyan-400/60 transition-all duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-black tracking-wide bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            시간대별 혼잡도
          </h3>
        </div>
        <span className="text-sm font-bold text-cyan-200 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/30">
          0% ~ 100%
        </span>
      </div>

      <div className="relative space-y-3">
        {data.map((item) => {
          const width = `${item.value}%`;
          const isActive = activeTab === "전체" ? false : activeTab === item.label;
          
          return (
            <div
              key={item.label}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.4)]" 
                  : "bg-black/20 border border-cyan-900/30"
              }`}
            >
              <div className="w-12 flex-shrink-0">
                <span
                  className={`font-black text-base ${
                    isActive
                      ? "text-cyan-100 text-lg"
                      : "text-cyan-300"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              
              <div className="flex-1 h-6 rounded-full bg-black/40 overflow-hidden border border-cyan-900/50 relative">
                <div
                  className={`h-6 rounded-full transition-all duration-500 relative overflow-hidden ${item.color}`}
                  style={{ width }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              
              <div className={`w-14 text-right flex-shrink-0 font-black text-base tabular-nums ${
                isActive ? "text-cyan-100 text-lg" : "text-cyan-200"
              }`}>
                {item.value}
                <span className="font-bold ml-0.5">%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// // src/pages/MainPage/Details/ParkingInfoPanel/CongestionBars.jsx
// import React from "react";

// function CongestionBars({ data, activeTab }) {
//   return (
//     <section
//       className="
//         rounded-2xl border border-white/15
//         bg-white/12 backdrop-blur-xl
//         shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//         p-4 space-y-3
//         font-stardust
//       "
//     >
//       <div className="flex items-center justify-between">
//         <h3 className="text-base font-bold tracking-wide text-slate-50">
//           시간대별 혼잡도
//         </h3>
//         <span className="text-[13px] font-normal text-slate-300">
//           0% (여유) ~ 100% (매우 혼잡)
//         </span>
//       </div>

//       <div className="space-y-2">
//         {data.map((item) => {
//           const width = `${item.value}%`;
//           const isActive =
//             activeTab === "전체" ? false : activeTab === item.label;

//           return (
//             <div
//               key={item.label}
//               className="flex items-center space-x-2 text-base"
//             >
//               <div className="w-10 flex-shrink-0">
//                 <span
//                   className={
//                     isActive
//                       ? "font-bold tracking-wide text-slate-50"
//                       : "font-normal text-slate-300"
//                   }
//                 >
//                   {item.label}
//                 </span>
//               </div>

//               <div className="flex-1 h-4 rounded-full bg-white/10 overflow-hidden">
//                 <div
//                   className={`
//                     h-4 rounded-full ${item.color}
//                     transition-all duration-300
//                     ${isActive ? "shadow-[0_0_16px_rgba(248,250,252,0.8)]" : ""}
//                   `}
//                   style={{ width }}
//                 />
//               </div>

//               <div className="w-10 text-right flex-shrink-0 font-bold tabular-nums text-slate-200">
//                 {item.value}
//                 <span className="font-normal ml-0.5">%</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default CongestionBars;


// // src/pages/MainPage/Details/ParkingInfoPanel/CongestionBars.jsx
// import React from "react";

// function CongestionBars({ data, activeTab }) {
//   return (
//     <section
//       className="
//         rounded-2xl border border-white/15
//         bg-white/12 backdrop-blur-xl
//         shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//         p-4 space-y-3
//       "
//     >
//       <div className="flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-slate-50">시간대별 혼잡도</h3>
//         <span className="text-[11px] text-slate-300">
//           0% (여유) ~ 100% (매우 혼잡)
//         </span>
//       </div>

//       <div className="space-y-2">
//         {data.map((item) => {
//           const width = `${item.value}%`;
//           const isActive =
//             activeTab === "전체" ? false : activeTab === item.label;
//           return (
//             <div
//               key={item.label}
//               className="flex items-center space-x-2 text-xs"
//             >
//               <div className="w-10 text-slate-300 flex-shrink-0">
//                 <span
//                   className={
//                     isActive ? "font-semibold text-slate-50" : "text-slate-300"
//                   }
//                 >
//                   {item.label}
//                 </span>
//               </div>
//               <div className="flex-1 h-4 rounded-full bg-white/10 overflow-hidden">
//                 <div
//                   className={`
//                     h-4 rounded-full ${item.color}
//                     transition-all duration-300
//                     ${isActive ? "shadow-[0_0_16px_rgba(248,250,252,0.8)]" : ""}
//                   `}
//                   style={{ width }}
//                 />
//               </div>
//               <div className="w-10 text-right text-slate-200 flex-shrink-0">
//                 {item.value}%
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default CongestionBars;


// // src/pages/MainPage/Details/ParkingInfoPanel/CongestionBars.jsx
// import React from "react";

// function CongestionBars({ data, activeTab }) {
//   return (
//     <section className="bg-white/70 backdrop-blur-md rounded-xl shadow p-4 space-y-3">
//       <div className="flex items-center justify-between">
//         <h3 className="text-sm font-semibold text-gray-800">
//           시간대별 혼잡도
//         </h3>
//         <span className="text-[11px] text-gray-500">
//           0% (여유) ~ 100% (매우 혼잡)
//         </span>
//       </div>

//       <div className="space-y-2">
//         {data.map((item) => {
//           const width = `${item.value}%`;
//           const isActive =
//             activeTab === "전체" ? false : activeTab === item.label;
//           return (
//             <div
//               key={item.label}
//               className="flex items-center space-x-2 text-xs"
//             >
//               <div className="w-10 text-gray-600 flex-shrink-0">
//                 <span className={isActive ? "font-semibold text-gray-900" : ""}>
//                   {item.label}
//                 </span>
//               </div>
//               <div className="flex-1 h-4 rounded-full bg-gray-200 overflow-hidden">
//                 <div
//                   className={`h-4 rounded-full ${item.color} transition-all`}
//                   style={{ width }}
//                 />
//               </div>
//               <div className="w-10 text-right text-gray-700 flex-shrink-0">
//                 {item.value}%
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default CongestionBars;
