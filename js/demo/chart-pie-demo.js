// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["주소 (0.49) ", "서울 (0.18) ", "집 (0.09) ", "이사 (0.02)"],
    datasets: [{
      data: [60, 22, 11, 7],
      backgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBackgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
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



// Pie Chart Example (1)
var ctx1 = document.getElementById("myPieChart1");
var myPieChart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["안될까요 (0.19) ", "있는데 (0.19) ", "바꾸면 (0.17) ", "카드로 (0.17)"],
    datasets: [{
      data: [26, 26, 24, 24],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2'],
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


        

// Pie Chart Example (2)
var ctx2 = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["국민 (0.63) ", "결제하면 (0.2) ", "저도 (0.01) ", "있는거죠 (0.0)"],
    datasets: [{
      data: [75.0, 23.81, 1.19],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
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



        

// Pie Chart Example (3)
var ctx3 = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ["칠만 (0.43) ", "자동 (0.2) ", "구천 (0.1) ", "주문 (0.06)", "있잖아요 (0.02)"],
    datasets: [{
      data: [53.09, 24.69, 12.35, 7.41, 2.47],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (4)
var ctx4 = document.getElementById("myPieChart4");
var myPieChart4 = new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ["무통장입금으로 (0.66) ", "될까요 (0.11) ", "갑자기 (0.09) ", "지금 (0.08)", "해도 (0.01)"],
    datasets: [{
      data: [69.47, 11.58, 9.47, 8.42, 1.05],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (5)
var ctx5 = document.getElementById("myPieChart5");
var myPieChart5 = new Chart(ctx5, {
  type: 'doughnut',
  data: {
    labels: ["구만 (0.62) ", "팔천원 (0.15) "],
    datasets: [{
      data: [80.52, 19.48],
      backgroundColor: ['#476BDF', '#6D8AE5'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5'],
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



        

// Pie Chart Example (6)
var ctx6 = document.getElementById("myPieChart6");
var myPieChart6 = new Chart(ctx6, {
  type: 'doughnut',
  data: {
    labels: ["사용했는데 (0.06) ", "입금하면 (0.02) ", "금액만 (0.02) ", "적립금 (0.01)", "거죠 (0.0)"],
    datasets: [{
      data: [54.55, 18.18, 18.18, 9.09],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (7)
var ctx7 = document.getElementById("myPieChart7");
var myPieChart7 = new Chart(ctx7, {
  type: 'doughnut',
  data: {
    labels: ["소액결제로 (0.11) ", "검정으로 (0.08) ", "하고 (0.08) "],
    datasets: [{
      data: [40.74, 29.63, 29.63],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92'],
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



        

// Pie Chart Example (8)
var ctx8 = document.getElementById("myPieChart8");
var myPieChart8 = new Chart(ctx8, {
  type: 'doughnut',
  data: {
    labels: ["어떤 (0.1) ", "카드는 (0.1) ", "행사 (0.08) ", "방송 (0.03)", "은단 (0.03)"],
    datasets: [{
      data: [29.41, 29.41, 23.53, 8.82, 8.82],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (9)
var ctx9 = document.getElementById("myPieChart9");
var myPieChart9 = new Chart(ctx9, {
  type: 'doughnut',
  data: {
    labels: ["취소를 (0.61) ", "안 (0.15) ", "아직 (0.09) ", "출고가 (0.08)", "배송 (0.07)"],
    datasets: [{
      data: [61.0, 15.0, 9.0, 8.0, 7.0],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
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



        

// Pie Chart Example (10)
var ctx10 = document.getElementById("myPieChart10");
var myPieChart10 = new Chart(ctx10, {
  type: 'doughnut',
  data: {
    labels: ["한 (0.19) ", "와서 (0.09) ", "오전에 (0.08) ", "패딩 (0.08)", "칠만 (0.07)"],
    datasets: [{
      data: [37.25, 17.65, 15.69, 15.69, 13.73],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (11)
var ctx11 = document.getElementById("myPieChart11");
var myPieChart11 = new Chart(ctx11, {
  type: 'doughnut',
  data: {
    labels: ["할게요 (0.29) ", "주문 (0.23) ", "또 (0.08) ", "그걸로 (0.03)", "아 (0.03)"],
    datasets: [{
      data: [43.94, 34.85, 12.12, 4.55, 4.55],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (12)
var ctx12 = document.getElementById("myPieChart12");
var myPieChart12 = new Chart(ctx12, {
  type: 'doughnut',
  data: {
    labels: ["물건 (0.45) ", "거기 (0.16) ", "ㅇㅇ쇼핑에 (0.12) ", "하는데 (0.06)", "그러는데요 (0.03)"],
    datasets: [{
      data: [54.88, 19.51, 14.63, 7.32, 3.66],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (13)
var ctx13 = document.getElementById("myPieChart13");
var myPieChart13 = new Chart(ctx13, {
  type: 'doughnut',
  data: {
    labels: ["지난 (0.02) ", "혹시 (0.01) ", "같은 (0.01) ", "번에 (0.01)", "그 (0.01)"],
    datasets: [{
      data: [33.33, 16.67, 16.67, 16.67, 16.67],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (14)
var ctx14 = document.getElementById("myPieChart14");
var myPieChart14 = new Chart(ctx14, {
  type: 'doughnut',
  data: {
    labels: ["혹시 (0.09) ", "며칠 (0.05) ", "그 (0.04) ", "전에 (0.02)", "있어요 (0.01)"],
    datasets: [{
      data: [42.86, 23.81, 19.05, 9.52, 4.76],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



       

// Pie Chart Example (15)
var ctx15 = document.getElementById("myPieChart15");
var myPieChart15 = new Chart(ctx15, {
  type: 'doughnut',
  data: {
    labels: ["주문해 (0.94) ", "주세요 (0.02) ", "네 (0.01) "],
    datasets: [{
      data: [96.91, 2.06, 1.03],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92'],
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



       

// Pie Chart Example (16)
var ctx16 = document.getElementById("myPieChart16");
var myPieChart16 = new Chart(ctx16, {
  type: 'doughnut',
  data: {
    labels: ["반품 (0.28) ", "있어서 (0.17) ", "하나는 (0.17) ", "다르게 (0.14)", "거는 (0.11)"],
    datasets: [{
      data: [32.18, 19.54, 19.54, 16.09, 12.64],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (17)
var ctx17 = document.getElementById("myPieChart17");
var myPieChart17 = new Chart(ctx17, {
  type: 'doughnut',
  data: {
    labels: ["주문했는데 (0.23) ", "개를 (0.17) ", "있어서 (0.1) ", "받았는데 (0.08)", "전화가 (0.08)"],
    datasets: [{
      data: [34.85, 25.76, 15.15, 12.12, 12.12],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (18)
var ctx18 = document.getElementById("myPieChart18");
var myPieChart18 = new Chart(ctx18, {
  type: 'doughnut',
  data: {
    labels: ["반품 (0.43) ", "오나요 (0.13) ", "얘기를 (0.1) ", "가지러 (0.09)", "상품 (0.07)"],
    datasets: [{
      data: [52.44, 15.85, 12.2, 10.98, 8.54],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (19)
var ctx19 = document.getElementById("myPieChart19");
var myPieChart19 = new Chart(ctx19, {
  type: 'doughnut',
  data: {
    labels: ["싶어요 (0.09) ", "안맞고 (11.0) ", "허리가 (0.05) ", "옷이 (0.04)", "좀 (0.04)"],
    datasets: [{
      data: [0.8, 98.04, 0.45, 0.36, 0.36],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (20)
var ctx20 = document.getElementById("myPieChart20");
var myPieChart20 = new Chart(ctx20, {
  type: 'doughnut',
  data: {
    labels: ["반품하려고 (0.11) ", "주문한 (0.09) ", "합니다 (0.08) ", "했는데요 (0.06)", "거 (0.02)"],
    datasets: [{
      data: [30.56, 25.0, 22.22, 16.67, 5.56],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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


        

// Pie Chart Example (21)
var ctx21 = document.getElementById("myPieChart21");
var myPieChart21 = new Chart(ctx21, {
  type: 'doughnut',
  data: {
    labels: ["다시 (0.24) ", "받고 (0.16) ", "아직 (0.14) ", "배송 (0.14)", "수거 (0.1)"],
    datasets: [{
      data: [30.77, 20.51, 17.95, 17.95, 12.82],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (22)
var ctx22 = document.getElementById("myPieChart22");
var myPieChart22 = new Chart(ctx22, {
  type: 'doughnut',
  data: {
    labels: ["어떻게 (0.27) ", "되나요 (0.13) ", "그리고 (0.12) ", "제가 (0.1)", "신청하면 (0.05)"],
    datasets: [{
      data: [40.3, 19.4, 17.91, 14.93, 7.46],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (23)
var ctx23 = document.getElementById("myPieChart23");
var myPieChart23 = new Chart(ctx23, {
  type: 'doughnut',
  data: {
    labels: ["좀 (0.4) ", "크게 (0.1) ", "핑크는 (0.09) ", "그대로 (0.07)", "아니 (0.05)"],
    datasets: [{
      data: [56.34, 14.08, 12.68, 9.86, 7.04],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (24)
var ctx24 = document.getElementById("myPieChart24");
var myPieChart24 = new Chart(ctx24, {
  type: 'doughnut',
  data: {
    labels: ["다시 (0.37) ", "보내고 (0.19) ", "된다는 (0.13) ", "그럼 (0.11)", "대로 (0.1)"],
    datasets: [{
      data: [41.11, 21.11, 14.44, 12.22, 11.11],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (25)
var ctx25 = document.getElementById("myPieChart25");
var myPieChart25 = new Chart(ctx25, {
  type: 'doughnut',
  data: {
    labels: ["집으로 (0.22) ", "상품을 (0.15) ", "가고 (0.15) ", "아닌가요 (0.12)", "집에 (0.09)"],
    datasets: [{
      data: [30.14, 20.55, 20.55, 16.44, 12.33],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (26)
var ctx26 = document.getElementById("myPieChart26");
var myPieChart26 = new Chart(ctx26, {
  type: 'doughnut',
  data: {
    labels: ["할 (0.21) ", "수 (0.18) ", "있나요 (0.16) ", "백으로 (0.11)", "아 (0.11)"],
    datasets: [{
      data: [27.27, 23.38, 20.78, 14.29, 14.29],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (27)
var ctx27 = document.getElementById("myPieChart27");
var myPieChart27 = new Chart(ctx27, {
  type: 'doughnut',
  data: {
    labels: ["작동이 (0.43) ", "아예 (0.11) "],
    datasets: [{
      data: [79.63, 20.37],
      backgroundColor: ['#E64032', '#ED6961'],
      hoverBackgroundColor: ['#E64032', '#ED6961'],
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



        

// Pie Chart Example (28)
var ctx28 = document.getElementById("myPieChart28");
var myPieChart28 = new Chart(ctx28, {
  type: 'doughnut',
  data: {
    labels: ["교환했으면 (0.4) ", "좋겠는데 (0.33) ", "안되는지 (0.08) ", "처음에 (0.06)", "괜찮은거 (0.05)"],
    datasets: [{
      data: [43.48, 35.87, 8.7, 6.52, 5.43],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (29)
var ctx29 = document.getElementById("myPieChart29");
var myPieChart29 = new Chart(ctx29, {
  type: 'doughnut',
  data: {
    labels: ["사이즈 (0.1) ", "좀 (0.06) ", "옷을 (0.06) ", "교환 (0.05)", "조금 (0.04)"],
    datasets: [{
      data: [32.26, 19.35, 19.35, 16.13, 12.9],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (30)
var ctx30 = document.getElementById("myPieChart30");
var myPieChart30 = new Chart(ctx30, {
  type: 'doughnut',
  data: {
    labels: ["너무 (0.4) ", "배송이 (0.37) ", "주택인데 (0.06) ", "안오는 (0.05)", "가셨는지 (0.04)"],
    datasets: [{
      data: [43.48, 40.22, 6.52, 5.43, 4.35],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (31)
var ctx31 = document.getElementById("myPieChart31");
var myPieChart31 = new Chart(ctx31, {
  type: 'doughnut',
  data: {
    labels: ["언제 (0.09) ", "내일 (0.08) ", "도착하나요 (0.08) ", "이게 (0.03)", "열면 (0.01)"],
    datasets: [{
      data: [31.03, 27.59, 27.59, 10.34, 3.45],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (32)
var ctx32 = document.getElementById("myPieChart32");
var myPieChart32 = new Chart(ctx32, {
  type: 'doughnut',
  data: {
    labels: ["이게 (0.25) ", "도착을 (0.09) ", "만약에 (0.07) ", "있을수 (0.07)", "문제가 (0.06)"],
    datasets: [{
      data: [46.3, 16.67, 12.96, 12.96, 11.11],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (33)
var ctx33 = document.getElementById("myPieChart33");
var myPieChart33 = new Chart(ctx33, {
  type: 'doughnut',
  data: {
    labels: ["주소는 (0.24) ", "추가로 (0.2) ", "보내려고요 (0.14) ", "부산으로 (0.12)", "서울인데 (0.04)"],
    datasets: [{
      data: [32.43, 27.03, 18.92, 16.22, 5.41],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (34)
var ctx34 = document.getElementById("myPieChart34");
var myPieChart34 = new Chart(ctx34, {
  type: 'doughnut',
  data: {
    labels: ["씨제이 (0.36) ", "친구네 (0.09) ", "배송도 (0.02) "],
    datasets: [{
      data: [76.6, 19.15, 4.26],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D'],
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



        

// Pie Chart Example (35)
var ctx35 = document.getElementById("myPieChart35");
var myPieChart35 = new Chart(ctx35, {
  type: 'doughnut',
  data: {
    labels: ["없는 (0.35) ", "이런 (0.26) ", "거죠 (0.05) ", "거에 (0.01)", "드는건 (0.01)"],
    datasets: [{
      data: [51.47, 38.24, 7.35, 1.47, 1.47],
      backgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
      hoverBackgroundColor: ['#12C584', '#4DCF9D', '#80DFBB', '#C2F0DF', '#E7FAF1'],
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



        

// Pie Chart Example (36)
var ctx36 = document.getElementById("myPieChart36");
var myPieChart36 = new Chart(ctx36, {
  type: 'doughnut',
  data: {
    labels: ["배송지를 (0.08) ", "집으로 (0.07) ", "저희 (0.06) ", "엄마한테 (0.02)", "보내드리고 (0.02)"],
    datasets: [{
      data: [32.0, 28.0, 24.0, 8.0, 8.0],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (37)
var ctx37 = document.getElementById("myPieChart37");
var myPieChart37 = new Chart(ctx37, {
  type: 'doughnut',
  data: {
    labels: ["방법이 (0.14) ", "에이에스 (0.11) ", "있는 (0.08) "],
    datasets: [{
      data: [42.42, 33.33, 24.24],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D'],
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



       

// Pie Chart Example (38)
var ctx38 = document.getElementById("myPieChart38");
var myPieChart38 = new Chart(ctx38, {
  type: 'doughnut',
  data: {
    labels: ["상품을 (0.26) ", "삼월달이고 (0.07) ", "비용이 (0.06) ", "이게 (0.04)", "칠월인데 (0.03)"],
    datasets: [{
      data: [56.52, 15.22, 13.04, 8.7, 6.52],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (39)
var ctx39 = document.getElementById("myPieChart39");
var myPieChart39 = new Chart(ctx39, {
  type: 'doughnut',
  data: {
    labels: ["되나요 (0.1) ", "한쪽만 (0.08) ", "박스에 (0.05) ", "경우에 (0.05)", "에이에스 (0.04)"],
    datasets: [{
      data: [31.25, 25.0, 15.63, 15.63, 12.5],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (40)
var ctx40 = document.getElementById("myPieChart40");
var myPieChart40 = new Chart(ctx40, {
  type: 'doughnut',
  data: {
    labels: ["본사에서 (0.08) ", "촬영하라니 (0.06) ", "불량이 (0.06) ", "아니 (0.05)", "해달라는데 (0.05)"],
    datasets: [{
      data: [26.67, 20.0, 20.0, 16.67, 16.67],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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



        

// Pie Chart Example (41)
var ctx41 = document.getElementById("myPieChart41");
var myPieChart41 = new Chart(ctx41, {
  type: 'doughnut',
  data: {
    labels: ["언제쯤 (0.36) ", "오죠 (0.03) ", "신청해서 (0.02) "],
    datasets: [{
      data: [87.8, 7.32, 4.88],
      backgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#97ABEE'],
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



        

// Pie Chart Example (42)
var ctx42 = document.getElementById("myPieChart42");
var myPieChart42 = new Chart(ctx42, {
  type: 'doughnut',
  data: {
    labels: ["이제 (0.14) ", "넘은 (0.07) ", "년 (0.04) ", "계약한건데 (0.01)"],
    datasets: [{
      data: [53.85, 26.92, 15.38, 3.85],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
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



        

// Pie Chart Example (43)
var ctx43 = document.getElementById("myPieChart43");
var myPieChart43 = new Chart(ctx43, {
  type: 'doughnut',
  data: {
    labels: ["안 (0.19) ", "일 (0.05) ", "됐는데 (0.04) ", "년도 (0.02)", "나는 (0.01)"],
    datasets: [{
      data: [61.29, 16.13, 12.9, 6.45, 3.23],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
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



        

// Pie Chart Example (44)
var ctx44 = document.getElementById("myPieChart44");
var myPieChart44 = new Chart(ctx44, {
  type: 'doughnut',
  data: {
    labels: ["가입이 (0.11) ", "전화로 (0.1) ", "아이디 (0.08) ", "주문하려고 (0.07)", "하는데요 (0.07)"],
    datasets: [{
      data: [25.58, 23.26, 18.6, 16.28, 16.28],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9', '#FDEAE9'],
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



        

// Pie Chart Example (45)
var ctx45 = document.getElementById("myPieChart45");
var myPieChart45 = new Chart(ctx45, {
  type: 'doughnut',
  data: {
    labels: ["너무 (0.13) ", "그렇게 (0.07) ", "안되죠 (0.06) ", "방송에서 (0.06)", "없고 (0.04)"],
    datasets: [{
      data: [36.11, 19.44, 16.67, 16.67, 11.11],
      backgroundColor: ['#476BDF', '#6D8AE5', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (46)
var ctx46 = document.getElementById("myPieChart46");
var myPieChart46 = new Chart(ctx46, {
  type: 'doughnut',
  data: {
    labels: ["다시 (0.49) ", "할까요 (0.13) ", "아이디가 (0.03) ", "어머니 (0.03)"],
    datasets: [{
      data: [72.06, 19.12, 4.41, 4.41],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB'],
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



        

// Pie Chart Example (47)
var ctx47 = document.getElementById("myPieChart47");
var myPieChart47 = new Chart(ctx47, {
  type: 'doughnut',
  data: {
    labels: ["문자로 (0.29) ", "보내주세요 (0.21) ", "네 (0.11) ", "말고 (0.08)", "문자가 (0.04)"],
    datasets: [{
      data: [39.73, 28.77, 15.07, 10.96, 5.48],
      backgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
      hoverBackgroundColor: ['#2DB7CA', '#5CC8D6', '#8AD6E2', '#C8ECF2', '#E9F7FA'],
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



        

// Pie Chart Example (48)
var ctx48 = document.getElementById("myPieChart48");
var myPieChart48 = new Chart(ctx48, {
  type: 'doughnut',
  data: {
    labels: ["회원 (0.62) ", "가입이 (0.18) ", "해서요 (0.12) ", "네 (0.08)"],
    datasets: [{
      data: [62.0, 18.0, 12.0, 8.0],
      backgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9'],
      hoverBackgroundColor: ['#E64032', '#ED6961', '#F1938D', '#F9CCC9'],
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



       

// Pie Chart Example (49)
var ctx49 = document.getElementById("myPieChart49");
var myPieChart49 = new Chart(ctx49, {
  type: 'doughnut',
  data: {
    labels: ["안 (0.21) ", "그런 (0.15) ", "거는 (0.1) ", "왔으면 (0.05)", "이벤트 (0.01)"],
    datasets: [{
      data: [40.38, 28.85, 19.23, 9.62, 1.92],
      backgroundColor: ['#476BDF', '#6D8AE5', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
      hoverBackgroundColor: ['#476BDF', '#6D8AE5', '#6D8AE5', '#CDD8F7', '#EBEFFC'],
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



        

// Pie Chart Example (50)
var ctx50 = document.getElementById("myPieChart50");
var myPieChart50 = new Chart(ctx50, {
  type: 'doughnut',
  data: {
    labels: ["아침에 (0.2) ", "그거를 (0.15) ", "네 (0.14) ", "전화했어요 (0.13)", "또 (0.09)"],
    datasets: [{
      data: [28.17, 21.13, 19.72, 18.31, 12.68],
      backgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
      hoverBackgroundColor: ['#F7BE35', '#FACD66', '#FBDB92', '#FEEDCB', '#FFF9EB'],
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
