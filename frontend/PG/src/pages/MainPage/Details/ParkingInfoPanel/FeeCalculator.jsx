import React, { useState, useMemo } from "react";
import { ParkingSquare, BarChart3, Car, Zap, TrendingUp, Clock } from "lucide-react";

// ============ FeeCalculator.jsx ============
export default function FeeCalculator() {
  const RATE_PER_10_MIN = 300;
  const [hours, setHours] = useState(1);
  const [hasPass, setHasPass] = useState(false);
  const [discount, setDiscount] = useState(0);

  const { total, base, effectiveRatePer10Min } = useMemo(() => {
    const parsedHours = isNaN(Number(hours)) ? 0 : Number(hours);
    const parsedDiscount = isNaN(Number(discount)) ? 0 : Number(discount);

    const minutes = Math.max(0, parsedHours * 60);

    let ratePer10Min = RATE_PER_10_MIN;
    if (hasPass) ratePer10Min = RATE_PER_10_MIN * 0.5;

    const units = minutes / 10;
    const baseFee = units * ratePer10Min;
    const finalFee = Math.max(0, baseFee - parsedDiscount);

    return {
      total: Math.round(finalFee),
      base: Math.round(baseFee),
      effectiveRatePer10Min: Math.round(ratePer10Min),
    };
  }, [hours, discount, hasPass]);

  return (
    <section className="relative rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-purple-900/30 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.4)] p-5 space-y-4 overflow-hidden group hover:border-purple-400/60 transition-all duration-300">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-black tracking-wide bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          요금 계산기
        </h3>
      </div>

      <div className="relative grid gap-4 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="text-purple-200 font-bold text-sm flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>이용 시간 (시간 단위)</span>
          </label>
          <input
            type="number"
            min="0"
            step="0.5"
            className="rounded-xl border-2 border-purple-500/50 bg-black/40 text-white px-4 py-3 text-base font-bold tabular-nums focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30 transition-all duration-200 hover:border-purple-400/70"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-200">
          <div>
            <p className="text-base text-emerald-200 font-bold">
              학생, 교직원 할인
            </p>
            <p className="text-sm text-emerald-300/70 font-medium mt-1">
              사용 시 기본 요금 50% 적용
            </p>
          </div>
          <button
            type="button"
            onClick={() => setHasPass((p) => !p)}
            className={`relative w-14 h-7 rounded-full flex items-center px-1 transition-all duration-300 ${
              hasPass
                ? "bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                : "bg-gray-700/50 border border-gray-600"
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-all duration-300 ${
                hasPass ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-purple-200 font-bold text-sm flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>할인 금액 (원)</span>
          </label>
          <input
            type="number"
            min="0"
            className="rounded-xl border-2 border-purple-500/50 bg-black/40 text-white px-4 py-3 text-base font-bold tabular-nums focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30 transition-all duration-200 hover:border-purple-400/70"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
      </div>

      <div className="relative mt-4 pt-4 border-t-2 border-purple-500/30 space-y-3">
        <div className="flex justify-between items-center p-3 rounded-lg bg-purple-950/40 border border-purple-500/20">
          <span className="text-purple-200 font-bold">10분당 요금</span>
          <span className="font-black text-lg tabular-nums text-purple-100">
            {effectiveRatePer10Min.toLocaleString()}
            <span className="font-bold ml-1 text-purple-300">원</span>
          </span>
        </div>

        <div className="flex justify-between items-center p-3 rounded-lg bg-purple-950/40 border border-purple-500/20">
          <span className="text-purple-200 font-bold">기본 요금</span>
          <span className="font-black text-lg tabular-nums text-purple-100">
            {base.toLocaleString()}
            <span className="font-bold ml-1 text-purple-300">원</span>
          </span>
        </div>

        <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-pink-600/30 to-purple-600/30 border-2 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <span className="text-lg text-pink-100 font-black">할인 적용 후</span>
          <span className="font-black text-2xl tabular-nums bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
            {total.toLocaleString()}
            <span className="font-black ml-1">원</span>
          </span>
        </div>
      </div>
    </section>
  );
}

// // src/pages/MainPage/Details/ParkingInfoPanel/FeeCalculator.jsx
// import React, { useState, useMemo } from "react";

// const RATE_PER_10_MIN = 300;

// function FeeCalculator() {
//   const [hours, setHours] = useState(1);
//   const [hasPass, setHasPass] = useState(false);
//   const [discount, setDiscount] = useState(0);

//   const { total, base, effectiveRatePer10Min } = useMemo(() => {
//     const parsedHours = isNaN(Number(hours)) ? 0 : Number(hours);
//     const parsedDiscount = isNaN(Number(discount)) ? 0 : Number(discount);

//     const minutes = Math.max(0, parsedHours * 60);

//     let ratePer10Min = RATE_PER_10_MIN;
//     if (hasPass) ratePer10Min = RATE_PER_10_MIN * 0.5;

//     const units = minutes / 10;
//     const baseFee = units * ratePer10Min;
//     const finalFee = Math.max(0, baseFee - parsedDiscount);

//     return {
//       total: Math.round(finalFee),
//       base: Math.round(baseFee),
//       effectiveRatePer10Min: Math.round(ratePer10Min),
//     };
//   }, [hours, discount, hasPass]);

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
//       <h3 className="text-base font-bold tracking-wide text-slate-50">
//         주차 요금 계산기
//       </h3>

//       <div className="grid gap-3 text-sm">
//         <div className="flex flex-col space-y-1">
//           <label className="text-slate-200 font-normal">
//             이용 시간 (시간 단위)
//           </label>
//           <input
//             type="number"
//             min="0"
//             step="0.5"
//             className="
//               rounded-lg border border-white/20
//               bg-white/5 text-slate-50
//               px-3 py-2 text-xs tabular-nums
//               focus:outline-none focus:ring-2 focus:ring-cyan-400/60
//             "
//             value={hours}
//             onChange={(e) => setHours(e.target.value)}
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-base text-slate-200 font-normal">
//               학생, 교직원 할인
//             </p>
//             <p className="text-[12px] text-slate-400 font-normal">
//               사용 시 기본 요금 50% 적용
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={() => setHasPass((p) => !p)}
//             className={`
//               w-10 h-5 rounded-full flex items-center px-0.5 transition
//               ${
//                 hasPass
//                   ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
//                   : "bg-white/30"
//               }
//             `}
//           >
//             <span
//               className={`
//                 w-4 h-4 rounded-full bg-white shadow transform transition
//                 ${hasPass ? "translate-x-5" : "translate-x-0"}
//               `}
//             />
//           </button>
//         </div>

//         <div className="flex flex-col space-y-1">
//           <label className="text-base text-slate-200 font-normal">
//             할인 금액 (원)
//           </label>
//           <input
//             type="number"
//             min="0"
//             className="
//               rounded-lg border border-white/20
//               bg-white/5 text-slate-50
//               px-3 py-2 text-xs tabular-nums
//               focus:outline-none focus:ring-2 focus:ring-cyan-400/60
//             "
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="mt-2 pt-2 border-t border-white/20 space-y-1 text-xs">
//         <div className="flex justify-between">
//           <span className="text-slate-300 font-normal">
//             10분당 요금
//           </span>
//           <span className="font-bold tabular-nums text-slate-50">
//             {effectiveRatePer10Min.toLocaleString()}
//             <span className="font-normal ml-0.5">원</span>
//           </span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-slate-300 font-normal">
//             기본 요금
//           </span>
//           <span className="font-bold tabular-nums text-slate-50">
//             {base.toLocaleString()}
//             <span className="font-normal ml-0.5">원</span>
//           </span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-base text-slate-300 font-normal">
//             할인 적용 후
//           </span>
//           <span className="font-extrabold text-base tabular-nums text-cyan-200">
//             {total.toLocaleString()}
//             <span className="font-normal ml-0.5">원</span>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeeCalculator;



// // src/pages/MainPage/Details/ParkingInfoPanel/FeeCalculator.jsx
// import React, { useState, useMemo } from "react";

// // 10분당 300원
// const RATE_PER_10_MIN = 300;

// function FeeCalculator() {
//   const [hours, setHours] = useState(1);
//   const [hasPass, setHasPass] = useState(false);
//   const [discount, setDiscount] = useState(0);

//   const { total, base, effectiveRatePer10Min } = useMemo(() => {
//     const parsedHours = isNaN(Number(hours)) ? 0 : Number(hours);
//     const parsedDiscount = isNaN(Number(discount)) ? 0 : Number(discount);

//     // 총 이용 시간(분)
//     const minutes = Math.max(0, parsedHours * 60);

//     // 학생/교직원 할인 시 50% 적용 → 10분 요금도 절반
//     let ratePer10Min = RATE_PER_10_MIN;
//     if (hasPass) {
//       ratePer10Min = RATE_PER_10_MIN * 0.5;
//     }

//     // 10분 단위 개수
//     const units = minutes / 10;
//     const baseFee = units * ratePer10Min;
//     const finalFee = Math.max(0, baseFee - parsedDiscount);

//     return {
//       total: Math.round(finalFee),
//       base: Math.round(baseFee),
//       effectiveRatePer10Min: Math.round(ratePer10Min),
//     };
//   }, [hours, discount, hasPass]);

//   return (
//     <section
//       className="
//         rounded-2xl border border-white/15
//         bg-white/12 backdrop-blur-xl
//         shadow-[0_16px_40px_rgba(15,23,42,0.75)]
//         p-4 space-y-3
//       "
//     >
//       <h3 className="text-sm font-semibold text-slate-50">주차 요금 계산기</h3>

//       <div className="grid gap-3 text-xs">
//         {/* 이용 시간 */}
//         <div className="flex flex-col space-y-1">
//           <label className="text-slate-200">이용 시간 (시간 단위)</label>
//           <input
//             type="number"
//             min="0"
//             step="0.5"
//             className="
//               rounded-lg border border-white/20
//               bg-white/5 text-slate-50
//               px-3 py-2 text-xs
//               focus:outline-none focus:ring-2 focus:ring-cyan-400/60
//             "
//             value={hours}
//             onChange={(e) => setHours(e.target.value)}
//             placeholder="예: 1.5"
//           />
//         </div>

//         {/* 학생/교직원 할인 토글 */}
//         <div className="flex items-center justify-between">
//           <div className="flex flex-col">
//             <span className="text-slate-200">학생, 교직원 할인</span>
//             <span className="text-[11px] text-slate-400">
//               사용 시 기본 요금 50% 적용
//             </span>
//           </div>
//           <button
//             type="button"
//             onClick={() => setHasPass((prev) => !prev)}
//             className={`
//               w-10 h-5 rounded-full flex items-center px-0.5 transition
//               ${
//                 hasPass
//                   ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
//                   : "bg-white/30"
//               }
//             `}
//           >
//             <span
//               className={`
//                 w-4 h-4 rounded-full bg-white shadow transform transition
//                 ${hasPass ? "translate-x-5" : "translate-x-0"}
//               `}
//             />
//           </button>
//         </div>

//         {/* 할인 금액 */}
//         <div className="flex flex-col space-y-1">
//           <label className="text-slate-200">할인 금액 (원)</label>
//           <input
//             type="number"
//             min="0"
//             className="
//               rounded-lg border border-white/20
//               bg-white/5 text-slate-50
//               px-3 py-2 text-xs
//               focus:outline-none focus:ring-2 focus:ring-cyan-400/60
//             "
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//             placeholder="예: 1000"
//           />
//         </div>
//       </div>

//       <div className="mt-1 pt-2 border-t border-white/20 grid gap-1 text-xs">
//         <div className="flex items-center justify-between">
//           <span className="text-slate-300">10분당 요금</span>
//           <span className="font-medium text-slate-50">
//             {effectiveRatePer10Min.toLocaleString()}원
//           </span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-slate-300">기본 요금</span>
//           <span className="font-medium text-slate-50">
//             {base.toLocaleString()}원
//           </span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="text-slate-300">할인 적용 후</span>
//           <span className="text-base font-semibold text-cyan-200">
//             {total.toLocaleString()}원
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeeCalculator;
