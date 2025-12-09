import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# -----------------------------------------------------------------------------
# [DATA CONFIGURATION] 
# 이 데이터는 실제 입출차 현황 데이터를 바탕으로 2025년 9월 1일 ~ 10월 31일 (총 61일) 간의 입출차 로그를 분석한 결과입니다.
# -----------------------------------------------------------------------------

# 1. 핵심 지표 (KPIs) - 61일간의 통합 평균
kpi_data = {
    "avg_daily_traffic": 2730,       # 일 평균 입차량
    "total_days": 61,                # 분석 기간
    "avg_duration": 161,             # 평균 주차 시간 (분)
    "median_duration": 9,            # 중위 주차 시간 (분) - 매우 짧음!
    "short_term_ratio": 55.7,        # 30분 이내 출차 비율 (%)
    "peak_hour": 8                   # 가장 혼잡한 시간 (08시)
}

# 2. 시간대별 평균 입차량 (0시~23시)
hourly_avg_data = {
    'Hour': list(range(24)),
    'Avg_Count': [14.6, 7.0, 6.2, 5.8, 6.7, 19.6, 84.4, 127.9, 431.6, 209.6, 260.5, 163.1, 214.6, 184.4, 161.8, 121.2, 149.0, 151.7, 130.1, 88.3, 63.8, 52.5, 43.1, 32.5]
}

# 3. 요일별 평균 입차량
weekday_avg_data = {
    'Day': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'Avg_Count': [3494, 3565, 3523, 3477, 2553, 1066, 1060],
    'Type': ['Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekend', 'Weekend']
}

# 4. 게이트별 점유율 (%)
gate_share_data = {
    'Gate': ['정문 우측', '정문 좌측', '동문', '서문', '일송기념관', '기타'],
    'Share': [46.9, 23.3, 10.9, 6.0, 6.0, 6.9]
}

# -----------------------------------------------------------------------------
# [STREAMLIT APP LAYOUT]
# -----------------------------------------------------------------------------

# 페이지 기본 설정
st.set_page_config(
    page_title="한림대 주차 분석", 
    layout="wide"
)

# 메인 타이틀
st.title("🏫 한림대학교 주차 이용 패턴 및 통합 분석")
st.markdown("**분석 기준:** 2025년 9월~10월 전체 데이터 통합 (총 61일) | **목표:** '학교 입출차 현황 패턴' 도출")
st.info("💡실제 입출차 현황 데이터를 바탕으로 2025년 9월 1일 ~ 10월 31일 (총 61일) 간의 입출차 로그를 분석한 결과를 시각화합니다.")

# --- SECTION 1: K습니다.")
    with c2:
        with st.container(border=True):
            st.markdown("### 📉 금요일의 트래픽")
            st.markdown("월~목 대비 금요일 트래픽이 **1,000대(-28%)** 급감합니다. 주 4일 수업과 공강의 영향이 뚜렷합니다.")

    # 두 번째 줄
    c3, c4 = st.columns(2)
    with c3:
        with st.container(border=True):
            st.markdown("### 🚨 정문 병목 주의")
            st.markdown("차량 **10대 중 7대**가 정문으로 몰립니다. **08~09시 등교 시간** 정문 앞 신호 체계 및 교통 정리가 필수적입니다.")
    with c4:
        with st.container(border=True):
            st.markdown("### 🍱 점심시간 2차 피크")
            st.markdown("**12시~13시**에 입차량이 다시 튀어 오릅니다. 교직원 식사 이동 및 외부 방문객 유입 시간대입니다.")

    # 세 번째 줄
    c5, c6 = st.columns(2)
    with c5:
        with st.container(border=True):
            st.markdown("### 🌊 꾸준한 주간 유입")
            st.markdown("일반 회사와 다릅니다. 수업 교체 시간인 **09시~16시** 사이에도 시간당 **150대 이상**이 꾸준히 들어옵니다.")
    with c6:
        with st.container(border=True):
            st.markdown("### 🏖️ 여유로운 주말")
            st.markdown("주말 유입은 평일의 1/3 수준(약 1,000대)입니다. 주말 행사나 시설 대관 시 주차 공간은 매우 넉넉합니다.")

# Footer
st.markdown("---")
#st.caption("본 대시보드는 2025년 9월 1일부터 10월 31일까지의 입출차 로그 데이터를 통합 분석하여 생성되었습니다.")
