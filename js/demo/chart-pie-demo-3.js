// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
        
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
