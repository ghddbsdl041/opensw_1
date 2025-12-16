// ============ SummaryCards.jsx ============
import { Car } from "lucide-react";
import { ParkingSquare, BarChart3 } from "lucide-react";

export default function SummaryCards({ totalSpaces, availablePrediction, saturation }) {
  return (
    <div className="space-y-3">
      {/* 총 주차 대수 */}
      <div className="relative rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-blue-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] p-5 flex items-center justify-between overflow-hidden group hover:border-blue-400/60 hover:scale-[1.02] transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            <Car className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-sm text-blue-200 font-bold mb-1">총 주차 대수</p>
            <p className="text-3xl font-black bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              {totalSpaces.toLocaleString()}
              <span className="text-lg font-bold text-blue-300 ml-1">대</span>
            </p>
          </div>
        </div>
        
        <span className="relative text-sm font-black px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-blue-100 border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          전체 구역
        </span>
      </div>

      {/* 주차 가능 예측 */}
      <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-emerald-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.4)] p-5 flex items-center justify-between overflow-hidden group hover:border-emerald-400/60 hover:scale-[1.02] transition-all duration-300">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.7)]">
            <ParkingSquare className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-sm text-emerald-200 font-bold mb-1">주차 가능 예측</p>
            <p className="text-3xl font-black bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              {availablePrediction.toLocaleString()}
              <span className="text-lg font-bold text-emerald-300 ml-1">대</span>
            </p>
          </div>
        </div>
        
        <span className="relative text-sm font-black px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600/40 to-teal-600/40 text-emerald-100 border-2 border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
          실시간
        </span>
      </div>

      {/* 포화도 */}
      {saturation != null && (
        <div className="relative rounded-2xl border-2 border-rose-500/40 bg-gradient-to-br from-rose-900/40 via-pink-900/30 to-rose-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(244,63,94,0.4)] p-5 flex items-center justify-between overflow-hidden group hover:border-rose-400/60 hover:scale-[1.02] transition-all duration-300 animate-pulse">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-[0_0_25px_rgba(244,63,94,0.7)]">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-rose-200 font-bold mb-1">포화도</p>
              <p className="text-3xl font-black bg-gradient-to-r from-rose-200 to-pink-200 bg-clip-text text-transparent">
                {saturation}
                <span className="text-xl font-bold text-rose-300 ml-1">%</span>
              </p>
            </div>
          </div>
          
          <span className="relative text-sm font-black px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white border-2 border-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.8)]">
            혼잡
          </span>
        </div>
      )}
    </div>
  );
}

// // src/pages/MainPage/Details/ParkingInfoPanel/SummaryCards.jsx
// import React from "react";
// import { ParkingSquare } from "lucide-react";
// import { BarChart3 } from "lucide-react";
// import { Car } from "lucide-react";

// function SummaryCards({ totalSpaces, availablePrediction, saturation }) {
//   return (
//     <div className="space-y-3">
//       {/* 총 주차 대수 */}
//       <div
//         className="
//           rounded-2xl border border-white/15
//           bg-white/12 backdrop-blur-xl
//           shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//           p-4 flex items-center justify-between
//         "
//       >
//         <div className="flex items-center space-x-3">
//           <div className="w-9 h-9 rounded-xl bg-indigo-500/30 flex items-center justify-center text-xl text-slate-50">
//             <Car className="w-5 h-5 text-slate-50" />
//           </div>
//           <div>
//             <p className="text-base text-slate-300">총 주차 대수</p>
//             <p className="text-lg font-semibold text-slate-50">
//               {totalSpaces.toLocaleString()}
//               <span className="text-xs font-normal text-slate-300 ml-1">대</span>
//             </p>
//           </div>
//         </div>
//         <span
//           className="
//             text-[14px] px-3 py-1 rounded-full
//             bg-gradient-to-r from-indigo-400/30 to-cyan-400/30
//             text-cyan-100 border border-cyan-300/40
//           "
//         >
//           전체 구역 기준
//         </span>
//       </div>

//       {/* 주차 가능 예측 */}
//       <div
//         className="
//           rounded-2xl border border-white/15
//           bg-white/12 backdrop-blur-xl
//           shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//           p-4 flex items-center justify-between
//         "
//       >
//         <div className="flex items-center space-x-3">
//           <div className="w-9 h-9 rounded-xl bg-emerald-500/30 flex items-center justify-center text-xl text-slate-50">
//             <ParkingSquare className="w-5 h-5 text-emerald-300" />
//           </div>
//           <div>
//             <p className="text-base text-slate-300">주차 가능 예측</p>
//             <p className="text-lg font-semibold text-slate-50">
//               {availablePrediction.toLocaleString()}
//               <span className="text-xs font-normal text-slate-300 ml-1">대</span>
//             </p>
//           </div>
//         </div>
//         <span
//           className="
//             text-[14px] px-3 py-1 rounded-full
//             bg-emerald-400/25 text-emerald-50
//             border border-emerald-300/50
//           "
//         >
//           실시간 추정
//         </span>
//       </div>

//       {/* 포화도: saturation 이 null/undefined 이면 숨기기 */}
//       {saturation != null && (
//         <div
//           className="
//             rounded-2xl border border-white/15
//             bg-white/12 backdrop-blur-xl
//             shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//             p-4 flex items-center justify-between
//           "
//         >
//           <div className="flex items-center space-x-3">
//             <div className="w-9 h-9 rounded-xl bg-rose-500/35 flex items-center justify-center text-xl text-slate-50">
//               <BarChart3 className="w-5 h-5 text-rose-400" />
//             </div>
//             <div>
//               <p className="text-xs text-slate-300">포화도</p>
//               <p className="text-lg font-semibold text-slate-50">
//                 {saturation}
//                 <span className="text-sm text-slate-300 ml-0.5">%</span>
//               </p>
//             </div>
//           </div>
//           <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-semibold shadow-[0_0_16px_rgba(244,63,94,0.8)]">
//             혼잡
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SummaryCards;
