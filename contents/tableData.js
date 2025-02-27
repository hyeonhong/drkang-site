export const tableData = {
  vaccination: {
    header: ['항목', '대상', '진료비'],
    rows: [
      [['2', 'A형 간염'], '15세 이상', '80,000원'],
      ['15세 미만', '50,000원'],
      [['2', 'B형 간염'], '10세 이상', '30,000원'],
      ['10세 미만', '20,000원'],
      [['2', 'BCG'], '피내용', '20,000원'],
      ['경피용', '70,000원'],
      ['DPT', '디피티', '20,000원'],
      ['IPV', '폴리오', '20,000원'],
      ['MMR', '홍역 볼거리 풍진', '40,000원'],
      ['수두', '수두', '40,000원'],
      ['TdaP', '성인형 DPT', '50,000원'],
      ['HiB', '뇌수막염', '40,000원'],
      [['2', '폐구균백신'], '신플로릭스', '100,000원'],
      ['프리베나', '130,000원'],
      [['2', '로타장염'], '로타텍', '100,000원'],
      ['로타릭스', '130,000원'],
      [['2', '인유두종백신'], '가다실4가', '180,000원'],
      ['가다실9가', '200,000원'],
      ['수막구균', '멘비오', '150,000원'],
      [['2', '일본뇌염'], '베로세포', '40,000원'],
      ['제박스', '40,000원'],
      [['3', '독감'], '0.25cc', '25,000원'],
      ['3가0.5cc', '30,000원'],
      ['4가0.5cc', '40,000원'],
      ['대상포진', '스카이조스터', '150,000원']
    ]
  },
  exam: {
    header: ['항목', '진료비'],
    rows: [
      ['독감 신속항원 검사', '30,000원'],
      ['결핵 피부반응검사 ', '25,000원'],
      ['A형 간염 항체 검사', '20,000원'],
      ['B형 간염 항원 항체 검사', '20,000원'],
      ['홍역 항체 검사', '25,000원'],
      ['볼거리 항체 검사', '25,000원'],
      ['풍진 항체 검사', '25,000원'],
      ['수두 항체 검사', '25,000원'],
      ['혈액형 검사', '5,000원'],
      ['건강검진 빈혈 검사', '10,000원'],
      ['건강검진 비타민D 검사', '10,000원'],
      ['건강검진 신장, 간기능 검사 ', '40,000원'],
      ['건강검진 지방대사 검사', '20,000원'],
      ['건강검진 갑상선기능 검사', '20,000원'],
      ['건강검진 종합 혈액검사(암표지자 포함)', '150,000원'],
      ['성장 호르몬 전 검사', '100,000원'],
      ['모발 미네랄 검사', '150,000원'],
      ['건강검진 소변유기산 검사', '250,000원'],
      ['건강검진 만성알레르기 IgG90종검사', '400,000원'],
      ['타액호르몬 검사', '180,000원'],
      ['하이코민 주사', '10,000원'],
      ['아개운해 주사', '20,000원'],
      ['칵테일 주사', '50,000원'],
      ['아미노산주사', '20,000원'],
      ['태반(라이넥)주사', '15,000원'],
      ['태반(멜스몬)주사', '25,000원'],
      ['백옥주사', '40,000원'],
      ['신델라주사', '30,000원'],
      ['멀티미네랄주사', '50,000원'],
      ['징코발 주사', '20,000원'],
      ['감초주사', '20,000원'],
      ['아연주사', '20,000원'],
      ['마늘주사', '30,000원'],
      ['비타민D주사', '40,000원'],
      ['아르기닌 주사', '50,000원'],
      ['프리미엄 알르기닌주사', '80,000원'],
      ['삭센다 주사', '130,000원'],
      ['성장호르몬 주사', '50,000원']
    ]
  },
  treatments: {
    header: ['구분', '항목', '진료기간', '비용'],
    rows: [
      [['3', '비만클리닉'], ['3', '체성분 검사 + 상담 + 처방료'], '1주', '15,000원'],
      ['2주', '20,000원'],
      ['3~4주', '30,000원'],
      [['3', '탈모클리닉'], ['3', '탈모상담 + 처방료'], '1달', '15,000원'],
      ['2달', '20,000원'],
      ['3달', '30,000원'],
      [['2', '스킨케어'], '10분 치료', '', '10,000원'],
      ['추가처치시', '', '비용추가'],
      ['프롤로테라피1', '기본', '', '50,000원'],
      ['프롤로테라피2', '태반 포함', '', '70,000원']
    ]
  },
  paperwork: {
    header: ['구분', '비용'],
    rows: [
      ['일반 진단서 (진단명 기재)', '20,000원'],
      ['수술 확인서 (진단명 기재)', '20,000원'],
      ['병사용 진단서', '20,000원'],
      ['건강진단서 (취업용)', '20,000원'],
      ['진료확인서 (유치원, 학교제출용)', '3,000원'],
      ['진료확인서 (직장제출용)', '10,000원'],
      ['소견서 (진단명 기재 x)', '10,000원'],
      ['보험회사 제출서류', '20,000원'],
      ['영문 예방접종 증명서', '20,000원'],
      ['국문 예방접종 증명서', '3,000원'],
      ['영유아 검진 기간 후 검진 (발달검사포함)', '20,000원'],
      ['영유아 검진 결과지 재발행', '1,000원'],
      ['예방접종 싸이트 접종내역 복사', '1,000원']
    ]
  },
  officeHours: [
    ['평일', 'am 09:00 - pm 06:30'],
    ['목요일', 'pm 02:00 - pm 09:00'],
    ['토요일', 'am 09:00 - pm 03:00'],
    ['점심시간', 'pm 01:00 - pm 02:00'],
    ['일요일/공휴일', '휴무']
  ]
}

export default tableData
