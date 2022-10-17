// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["주소", "서울", "집", "이사"],
    datasets: [{
      data: [60, 22, 11, 7],
      backgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBackgroundColor: ['#F8CF69', '#FADB91', '#FBE4AC', '#FDF3DB'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",      

    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
    legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}},
  },
});
