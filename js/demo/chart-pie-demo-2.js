// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// Pie Chart Example (51)
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["대해서 (0.34) ", "시스템에 (0.31) ", "고당 (0.16) "],
    datasets: [{
      data: [41.98, 38.27, 19.75],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (52)
var ctx52 = document.getElementById("myPieChart52");
var myPieChart52 = new Chart(ctx52, {
  type: 'doughnut',
  data: {
    labels: ["전화드렸어요 (0.3) ", "좀 (0.18) ", "지피케이아이로 (0.16) ", "해야 (0.1)"],
    datasets: [{
      data: [40.54, 24.32, 21.62, 13.51],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (53)
var ctx53 = document.getElementById("myPieChart53");
var myPieChart53 = new Chart(ctx53, {
  type: 'doughnut',
  data: {
    labels: ["보건소입니다 (0.2) ", "어제 (0.11) ", "ㅇㅇㅇ (0.1) ", "요양병원 (0.06)"],
    datasets: [{
      data: [42.55, 23.4, 21.28, 12.77],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (54)
var ctx54 = document.getElementById("myPieChart54");
var myPieChart54 = new Chart(ctx54, {
  type: 'doughnut',
  data: {
    labels: ["방사선 (0.21) ", "신청을 (0.18) ", "신청하려고 (0.15) ", "검사를 (0.08)"],
    datasets: [{
      data: [33.87, 29.03, 24.19, 12.9],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (55)
var ctx55 = document.getElementById("myPieChart55");
var myPieChart55 = new Chart(ctx55, {
  type: 'doughnut',
  data: {
    labels: ["감시 (0.24) ", "전수 (0.13) ", "사용자 (0.11) ", "떠요 (0.06)", "조사 (0.02)"],
    datasets: [{
      data: [42.86, 23.21, 19.64, 10.71, 3.57],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (56)
var ctx56 = document.getElementById("myPieChart56");
var myPieChart56 = new Chart(ctx56, {
  type: 'doughnut',
  data: {
    labels: ["그러면 (0.1) ", "공무원 (0.07) ", "보건소 (0.03) "],
    datasets: [{
      data: [50.0, 35.0, 15.0],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (57)
var ctx57 = document.getElementById("myPieChart57");
var myPieChart57 = new Chart(ctx57, {
  type: 'doughnut',
  data: {
    labels: ["승인 (0.08) ", "권한 (0.08) ", "방사선 (0.05) ", "요청하려고요 (0.04)", "신청했거든요 (0.04)"],
    datasets: [{
      data: [27.59, 27.59, 17.24, 13.79, 13.79],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (58)
var ctx58 = document.getElementById("myPieChart58");
var myPieChart58 = new Chart(ctx58, {
  type: 'doughnut',
  data: {
    labels: ["이거는 (0.1) ", "정보 (0.09) ", "들어가야 (0.05) ", "인증으로 (0.02)"],
    datasets: [{
      data: [38.46, 34.62, 19.23, 7.69],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (59)
var ctx59 = document.getElementById("myPieChart59");
var myPieChart59 = new Chart(ctx59, {
  type: 'doughnut',
  data: {
    labels: ["공인인증서 (0.17) ", "지금 (0.13) ", "저장을 (0.07) ", "로그인해서 (0.01)"],
    datasets: [{
      data: [44.74, 34.21, 18.42, 2.63],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (60)
var ctx60 = document.getElementById("myPieChart60");
var myPieChart60 = new Chart(ctx60, {
  type: 'doughnut',
  data: {
    labels: ["승인 (0.11) ", "권한 (0.1) ", "신청을 (0.05) ", "부탁드린다고 (0.02)"],
    datasets: [{
      data: [39.29, 35.71, 17.86, 7.14],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (61)
var ctx61 = document.getElementById("myPieChart61");
var myPieChart61 = new Chart(ctx61, {
  type: 'doughnut',
  data: {
    labels: ["하나요 (0.14) "],
    datasets: [{
      data: [100.0],
      backgroundColor: ['#476BDF'],
      hoverBackgroundColor: ['#476BDF'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (62)
var ctx62 = document.getElementById("myPieChart62");
var myPieChart62 = new Chart(ctx62, {
  type: 'doughnut',
  data: {
    labels: ["걸릴 (0.22) ", "코로나에 (0.21) ", "담배를 (0.15) ", "리스크가 (0.15)", "피우고 (0.1)"],
    datasets: [{
      data: [26.51, 25.3, 18.07, 18.07, 12.05],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (63)
var ctx63 = document.getElementById("myPieChart63");
var myPieChart63 = new Chart(ctx63, {
  type: 'doughnut',
  data: {
    labels: ["코로나에 (0.28) ", "도움이 (0.16) ", "될까요 (0.01) "],
    datasets: [{
      data: [62.22, 35.56, 2.22],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (64)
var ctx64 = document.getElementById("myPieChart64");
var myPieChart64 = new Chart(ctx64, {
  type: 'doughnut',
  data: {
    labels: ["마스크가 (0.05) ", "버려야 (0.03) ", "하나요 (0.02) ", "한번만 (0.02)", "비싼대 (0.02)"],
    datasets: [{
      data: [35.71, 21.43, 14.29, 14.29, 14.29],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (65)
var ctx65 = document.getElementById("myPieChart65");
var myPieChart65 = new Chart(ctx65, {
  type: 'doughnut',
  data: {
    labels: ["그런가요 (0.12) ", "손말고 (0.07) ", "다른곳에는 (0.04) "],
    datasets: [{
      data: [52.17, 30.43, 17.39],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (66)
var ctx66 = document.getElementById("myPieChart66");
var myPieChart66 = new Chart(ctx66, {
  type: 'doughnut',
  data: {
    labels: ["다들 (0.15) ", "백신맞으려고 (0.13) ", "대체 (0.12) ", "왜 (0.1)", "건가요 (0.09)"],
    datasets: [{
      data: [25.42, 22.03, 20.34, 16.95, 15.25],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6', '#C8ECF2', '#E9F7FA'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (67)
var ctx67 = document.getElementById("myPieChart67");
var myPieChart67 = new Chart(ctx67, {
  type: 'doughnut',
  data: {
    labels: ["코로나19 (0.36) ", "팔아도 (0.22) ", "백신상품을 (0.15) ", "되나요 (0.08)"],
    datasets: [{
      data: [44.44, 27.16, 18.52, 9.88],
      backgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (68)
var ctx68 = document.getElementById("myPieChart68");
var myPieChart68 = new Chart(ctx68, {
  type: 'doughnut',
  data: {
    labels: ["씻으면 (0.22) ", "손만 (0.21) ", "외출 (0.17) "],
    datasets: [{
      data: [36.67, 35.0, 28.33],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (69)
var ctx69 = document.getElementById("myPieChart69");
var myPieChart69 = new Chart(ctx69, {
  type: 'doughnut',
  data: {
    labels: ["아침은 (0.29) ", "어떻게 (0.21) ", "자가격리 (0.02) "],
    datasets: [{
      data: [55.77, 40.38, 3.85],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (70)
var ctx70 = document.getElementById("myPieChart70");
var myPieChart70 = new Chart(ctx70, {
  type: 'doughnut',
  data: {
    labels: ["코로나는 (0.35) ", "연관이 (0.34) ", "무슨 (0.19) ", "전자담배와 (0.19)", "있나요 (0.14)"],
    datasets: [{
      data: [28.93, 28.1, 15.7, 15.7, 11.57],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (71)
var ctx71 = document.getElementById("myPieChart71");
var myPieChart71 = new Chart(ctx71, {
  type: 'doughnut',
  data: {
    labels: ["맞나요 (0.27) "],
    datasets: [{
      data: [100.0],
      backgroundColor: ['#E64032'],
      hoverBackgroundColor: ['#E64032'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (72)
var ctx72 = document.getElementById("myPieChart72");
var myPieChart72 = new Chart(ctx72, {
  type: 'doughnut',
  data: {
    labels: ["감염확률이 (0.17) ", "확진자를 (0.14) ", "마스크 (0.09) ", "만나면 (0.01)"],
    datasets: [{
      data: [41.46, 34.15, 21.95, 2.44],
      backgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (73)
var ctx73 = document.getElementById("myPieChart73");
var myPieChart73 = new Chart(ctx73, {
  type: 'doughnut',
  data: {
    labels: ["여행을 (0.03) ", "확진자가 (0.03) ", "불안해서요 (0.01) "],
    datasets: [{
      data: [42.86, 42.86, 14.29],
      backgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (74)
var ctx74 = document.getElementById("myPieChart74");
var myPieChart74 = new Chart(ctx74, {
  type: 'doughnut',
  data: {
    labels: ["받았던 (0.11) ", "신랑이 (0.07) ", "될가요 (0.03) "],
    datasets: [{
      data: [52.38, 33.33, 14.29],
      backgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (75)
var ctx75 = document.getElementById("myPieChart75");
var myPieChart75 = new Chart(ctx75, {
  type: 'doughnut',
  data: {
    labels: ["한다는 (0.27) ", "역학조사를 (0.03) "],
    datasets: [{
      data: [90.0, 10.0],
      backgroundColor: ['#2DB7CA', '#2DB7CA'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (76)
var ctx76 = document.getElementById("myPieChart76");
var myPieChart76 = new Chart(ctx76, {
  type: 'doughnut',
  data: {
    labels: ["제가 (0.29) ", "가능할까요 (0.06) ", "병문안을 (0.04) "],
    datasets: [{
      data: [74.36, 15.38, 10.26],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (77)
var ctx77 = document.getElementById("myPieChart77");
var myPieChart77 = new Chart(ctx77, {
  type: 'doughnut',
  data: {
    labels: ["비어있는 (0.26) ", "주변에 (0.26) ", "단계인가요 (0.26) ", "확인하는 (0.25)"],
    datasets: [{
      data: [25.24, 25.24, 25.24, 24.27],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (78)
var ctx78 = document.getElementById("myPieChart78");
var myPieChart78 = new Chart(ctx78, {
  type: 'doughnut',
  data: {
    labels: ["말하는거죠 (0.38) ", "심각한지 (0.33) ", "병이 (0.24) ", "중증도라면 (0.24)"],
    datasets: [{
      data: [31.93, 27.73, 20.17, 20.17],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (79)
var ctx79 = document.getElementById("myPieChart79");
var myPieChart79 = new Chart(ctx79, {
  type: 'doughnut',
  data: {
    labels: ["환자를 (0.39) ", "말하나요 (0.32) ", "중증 (0.18) ", "환자는 (0.05)"],
    datasets: [{
      data: [41.49, 34.04, 19.15, 5.32],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (80)
var ctx80 = document.getElementById("myPieChart80");
var myPieChart80 = new Chart(ctx80, {
  type: 'doughnut',
  data: {
    labels: ["집단 (0.18) ", "발병됐다던데요 (0.07) "],
    datasets: [{
      data: [72.0, 28.0],
      backgroundColor: ['#E64032', '#E64032'],
      hoverBackgroundColor: ['#E64032', '#E64032'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (81)
var ctx81 = document.getElementById("myPieChart81");
var myPieChart81 = new Chart(ctx81, {
  type: 'doughnut',
  data: {
    labels: ["없어도 (0.14) ", "받을 (0.13) ", "돈내고 (0.09) ", "검사를 (0.06)"],
    datasets: [{
      data: [33.33, 30.95, 21.43, 14.29],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (82)
var ctx82 = document.getElementById("myPieChart82");
var myPieChart82 = new Chart(ctx82, {
  type: 'doughnut',
  data: {
    labels: ["동선을 (0.23) ", "공개하지 (0.08) ", "왜그렇죠 (0.05) ", "다 (0.03)"],
    datasets: [{
      data: [58.97, 20.51, 12.82, 7.69],
      backgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961', '#F9CCC9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (83)
var ctx83 = document.getElementById("myPieChart83");
var myPieChart83 = new Chart(ctx83, {
  type: 'doughnut',
  data: {
    labels: ["같으면 (0.17) ", "어떻게 (0.13) ", "확진자와 (0.13) ", "한명이라도 (0.12)", "만약 (0.05)"],
    datasets: [{
      data: [28.33, 21.67, 21.67, 20.0, 8.33],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (84)
var ctx84 = document.getElementById("myPieChart84");
var myPieChart84 = new Chart(ctx84, {
  type: 'doughnut',
  data: {
    labels: ["전염력이 (0.15) ", "경우에도 (0.13) ", "무증상인 (0.1) "],
    datasets: [{
      data: [39.47, 34.21, 26.32],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (85)
var ctx85 = document.getElementById("myPieChart85");
var myPieChart85 = new Chart(ctx85, {
  type: 'doughnut',
  data: {
    labels: ["브레인 (0.27) ", "포그가 (0.22) ", "뭔가요 (0.18) "],
    datasets: [{
      data: [40.3, 32.84, 26.87],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (86)
var ctx86 = document.getElementById("myPieChart86");
var myPieChart86 = new Chart(ctx86, {
  type: 'doughnut',
  data: {
    labels: ["검체는 (0.05) ", "상기도 (0.04) ", "하기도 (0.04) ", "무엇인가요 (0.03)", "무엇이고 (0.01)"],
    datasets: [{
      data: [29.41, 23.53, 23.53, 17.65, 5.88],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D', '#C2F0DF', '#E7FAF1'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (87)
var ctx87 = document.getElementById("myPieChart87");
var myPieChart87 = new Chart(ctx87, {
  type: 'doughnut',
  data: {
    labels: ["백신은 (0.34) ", "여러나라에서도 (0.21) ", "아직 (0.2) "],
    datasets: [{
      data: [45.33, 28.0, 26.67],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (88)
var ctx88 = document.getElementById("myPieChart88");
var myPieChart88 = new Chart(ctx88, {
  type: 'doughnut',
  data: {
    labels: ["들었는데 (0.22) ", "접촉했다고 (0.03) "],
    datasets: [{
      data: [88.0, 12.0],
      backgroundColor: ['#F7BE35', '#F7BE35'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (89)
var ctx89 = document.getElementById("myPieChart89");
var myPieChart89 = new Chart(ctx89, {
  type: 'doughnut',
  data: {
    labels: ["어제 (0.33) ", "아들이 (0.19) ", "열이 (0.11) ", "비맞고 (0.1)"],
    datasets: [{
      data: [45.21, 26.03, 15.07, 13.7],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (90)
var ctx90 = document.getElementById("myPieChart90");
var myPieChart90 = new Chart(ctx90, {
  type: 'doughnut',
  data: {
    labels: ["보고 (0.07) ", "지워서 (0.05) ", "안전안내문자인데 (0.01) "],
    datasets: [{
      data: [53.85, 38.46, 7.69],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (91)
var ctx91 = document.getElementById("myPieChart91");
var myPieChart91 = new Chart(ctx91, {
  type: 'doughnut',
  data: {
    labels: ["격리입원치료비를 (0.14) ", "해외유입 (0.13) ", "외국인은 (0.12) ", "부담하나요 (0.08)"],
    datasets: [{
      data: [29.79, 27.66, 25.53, 17.02],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (92)
var ctx92 = document.getElementById("myPieChart92");
var myPieChart92 = new Chart(ctx92, {
  type: 'doughnut',
  data: {
    labels: ["보호자식대는 (0.07) "],
    datasets: [{
      data: [100.0],
      backgroundColor: ['#2DB7CA'],
      hoverBackgroundColor: ['#2DB7CA'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (93)
var ctx93 = document.getElementById("myPieChart93");
var myPieChart93 = new Chart(ctx93, {
  type: 'doughnut',
  data: {
    labels: ["격리입원치료비 (0.24) ", "되나요 (0.15) ", "지원 (0.09) ", "생활치료센터에 (0.04)", "입소한 (0.01)"],
    datasets: [{
      data: [45.28, 28.3, 16.98, 7.55, 1.89],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (94)
var ctx94 = document.getElementById("myPieChart94");
var myPieChart94 = new Chart(ctx94, {
  type: 'doughnut',
  data: {
    labels: ["식당에서 (0.07) ", "자가격리대상자가 (0.04) ", "일하신 (0.01) "],
    datasets: [{
      data: [58.33, 33.33, 8.33],
      backgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBackgroundColor: ['#E64032', '#E64032', '#ED6961'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (95)
var ctx95 = document.getElementById("myPieChart95");
var myPieChart95 = new Chart(ctx95, {
  type: 'doughnut',
  data: {
    labels: ["정부에서 (0.09) ", "통신비를 (0.07) ", "코로나지원금으로 (0.06) ", "준다는데 (0.06)"],
    datasets: [{
      data: [32.14, 25.0, 21.43, 21.43],
      backgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#F7BE35', '#FACD66', '#FEEDCB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (96)
var ctx96 = document.getElementById("myPieChart96");
var myPieChart96 = new Chart(ctx96, {
  type: 'doughnut',
  data: {
    labels: ["마스크 (0.1) ", "안 (0.05) ", "끼면 (0.03) "],
    datasets: [{
      data: [55.56, 27.78, 16.67],
      backgroundColor: ['#12C584', '#12C584', '#4DCF9D'],
      hoverBackgroundColor: ['#12C584', '#12C584', '#4DCF9D'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (97)
var ctx97 = document.getElementById("myPieChart97");
var myPieChart97 = new Chart(ctx97, {
  type: 'doughnut',
  data: {
    labels: ["언제까지 (0.11) ", "지원금은 (0.06) ", "신청이예요 (0.02) "],
    datasets: [{
      data: [57.89, 31.58, 10.53],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (98)
var ctx98 = document.getElementById("myPieChart98");
var myPieChart98 = new Chart(ctx98, {
  type: 'doughnut',
  data: {
    labels: ["코로나19 (0.11) ", "있었나요 (0.05) ", "변이가 (0.02) ", "바이러스에서 (0.01)"],
    datasets: [{
      data: [57.89, 26.32, 10.53, 5.26],
      backgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBackgroundColor: ['#476BDF', '#476BDF', '#6D8AE5', '#CDD8F7'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (99)
var ctx99 = document.getElementById("myPieChart99");
var myPieChart99 = new Chart(ctx99, {
  type: 'doughnut',
  data: {
    labels: ["안된다구요 (0.01) "],
    datasets: [{
      data: [100.0],
      backgroundColor: ['#F7BE35'],
      hoverBackgroundColor: ['#F7BE35'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        

// Pie Chart Example (100)
var ctx100 = document.getElementById("myPieChart100");
var myPieChart100 = new Chart(ctx100, {
  type: 'doughnut',
  data: {
    labels: ["특고 (0.08) ", "안정지원금이 (0.01) ", "프리랜서 (0.01) "],
    datasets: [{
      data: [80.0, 10.0, 10.0],
      backgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBackgroundColor: ['#2DB7CA', '#2DB7CA', '#5CC8D6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    legend: {
      position: 'right',
      align: 'middle'
    },
    
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      caretPadding: 7,
    },
    cutoutPercentage: 80,

  },
});



        
