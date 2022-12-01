// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';



// Pie Chart Example (1)

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["안될까요 (0.19) ", "있는데 (0.19) ", "바꾸면 (0.17) ", "카드로 (0.17)", "주문한게 (0.12)"],
    datasets: [{
      data: [22.62, 22.62, 20.24, 20.24, 14.29],
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
 

// Pie Chart Example (2)
var ctx2 = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["국민 (0.63) ", "결제하면 (0.2) ", "저도 (0.01) "],
    datasets: [{
      data: [75.0, 23.81, 1.19],
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

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example (51)
var ctx51 = document.getElementById("myPieChart51");
var myPieChart51 = new Chart(ctx51, {
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
    labels: ["하나요 (0.14) ", "None (0.0) ", "None (0.0) "],
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
    labels: ["맞나요 (0.27) ", "None (0.0) ", "None (0.0) "],
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
    labels: ["한다는 (0.27) ", "역학조사를 (0.03) ", "None (0.0) "],
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
    labels: ["집단 (0.18) ", "발병됐다던데요 (0.07) ", "None (0.0) "],
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
    labels: ["들었는데 (0.22) ", "접촉했다고 (0.03) ", "None (0.0) "],
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
    labels: ["보호자식대는 (0.07) ", "None (0.0) ", "None (0.0) "],
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
    labels: ["안된다구요 (0.01) ", "None (0.0) ", "None (0.0) "],
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



        

// Pie Chart Example (1000)
var ctx1000 = document.getElementById("myPieChart1000");
var myPieChart1000 = new Chart(ctx1000, {
  type: 'doughnut',
  data: {
    labels: ["걸릴 (0.13) ", "코로나에 (0.11) ", "리스크가 (0.09) ", "전자담배를 (0.07) "],
    datasets: [{
      data: [32.5, 27.5, 22.5, 17.5],
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
