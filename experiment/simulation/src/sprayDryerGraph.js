function sprayDryerGraph(dataJson)
{
	let currentIndex = null; 
	if (currentIndex !== null) {
	    clearInterval(currentIndex); // Clear any existing interval
	    currentIndex = 0; // Reset the variable
	}
//	$("#checkDiv,#download").prop("hidden",true);

	var htm=''
//	+'<div class="container mt-5">'
	+' <h2 class="text-center text-light mb-4"></h2>'
	+' <div class="row" id="graphDiv">'
//	  <div class="row mb-3">
//    <!-- Checkboxes for toggling series -->
	+'  <div class="col-md-12 text-center" id="checkDiv" hidden>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="0" checked> <b>TT01</b></label>'
	+'      <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="1" checked><b> TT02</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked><b> FT</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="3" checked><b> NT</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="4" checked> <b>PUMP_SPEED</b></label>'
	+'   <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="5" checked> <b>FD_FAN_SPEED</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="6" checked><b> ID_FAN_SPEED</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="7" checked> <b>HEATER</b></label>'
	+' </div>'
	+'</div>'
	+'   <div class="col-md-12">'
	+'        <div id="marketChart" style="width:100%; height: 100%;"></div>'
	
	+'    </div>'
//	+'   <div class="col-md-2"> </div>'
	+'</div>'
//	+'</div>'
	$("#bodyTrends").html(htm);
//$("#buttonDiv").html("");
$('#download').on('click', function() {
	
//	$('#saveAsJpg').prop("hidden",true);
    html2canvas(document.querySelector("#marketChart")).then(canvas => {
        // Append the screenshot canvas to the body
        document.body.appendChild(canvas);
        $("canvas").css("display","none");
        // Optionally save the screenshot as an image
        var link = document.createElement('a');
        link.download = 'SprayDryerGraph.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
//$("#mainDiv").css("background-color","#000");
// currentIndex = 0;
var dataJson = {
		"TT01": [22,22,22,22,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45,50,55,60,70,80,90,100,110,120,120,120,120,120,120,120,120,120,120,120,120,119,118,117,115,113,110,112,114,116,118,120,122,124,126,128,130,130,130,130,130,130,130,129,128,129,130,130,130,130,130,130,130,132,131,130,130,130,130,131,132,133,134,135,134,135,134,133,132,131,130,130,130,131,132,133,132,131,131,131,131,130,130,130,130,130,130,130,130,131,132,132,131,132,133,132,130,125,110,100,90,80,75,70,65,62,61],
		"TT02": [20,20,20,20,20,20,20,20,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,40,43,46,50,52,55,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,68,66,64,62,62,63,64,65,66,67,68,69,70,70,70,70,70,70,70,70,70,68,66,66,66,66,66,66,66,66,67,67,66,66,66,66,67,68,69,70,71,71,71,71,70,70,69,69,69,68,69,69,70,70,70,70,70,69,69,69,69,69,69,69,69,69,69,69,71,71,71,72,71,70,67,63,61,55,49,45,43,41,40,40],
		"FT": [10,0,0,0,0,0,0,0.00216,0.00252,0.00288,0.00324,0.0036,0.00396,0.00432,0.00468,0.0054,0.00612,0.009,0.0108,0.0126,0.0144,0.0162,0.01692,0.01764,0.01872,0.02016,0.0216,0.0234,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.02484,0.02448,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.02484,0.02448,0.02412,0.02376,0.0234,0.02304,0.02268,0.02232,0.02196,0.0216,0.02124,0.02088,0.02052,0.02016,0.0198,0.01944,0.01908,0.01872,0.01836,0.018,0.01764,0.01728,0.0144,0.0108,0.0108,0.0108,0.0108,0.0108,0.0108,0.0072,0.0036,0,0,0,0,0],
		"NT": [0,0,0,0,0,0,0,-2.01,-2.68,-3.35,-4.02,-4.69,-5.36,-6.03,-6.7,-7.37,-8.04,-8.71,-13.4,-16.75,-20.1,-23.45,-25.46,-27.47,-29.48,-32.16,-34.84,-37.52,-40.2,-42.88,-44.22,-45.56,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-47.57,-46.9,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.23,-46.23,-45.56,-44.89,-44.22,-43.818,-43.282,-42.746,-42.21,-41.674,-41.138,-40.602,-40.066,-39.53,-38.994,-38.458,-37.922,-37.386,-36.85,-30.15,-23.45,-23.45,-23.45,-23.45,-23.45,-23.45,-16.75,-10.05,-6.7,-5.36,-4.02,-2.68,0],
		"P1_SPEED": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,7,9,11,12,13,14,15,16,17,18,19,20,25,30,35,40,45,50,55,60,65,70,70,70,70,70,70,70,70,70,70,65,65,70,69,68,67,66,65,64,63,62,61,60,61,62,63,68,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,50,45,40,35,30,25,20,10,0,0,0,0,0,0,0,0,0,0,0,0,0],
		"FD_SPEEDPer": [0,0,0,0,0,0,5,6,7,8,9,10,11,12,13,15,17,25,30,35,40,45,47,49,52,56,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,68,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,40,30,30,30,30,30,30,20,10,0,0,0,0,0],
		"ID_SPEEDPer": [0,0,0,0,0,0,2,3,4,5,6,7,8,9,10,11,12,13,20,25,30,35,38,41,44,48,52,56,60,64,66,68,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,70,71,71,71,71,71,71,71,71,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,69,68,67,66,65.4,64.6,63.8,63,62.2,61.4,60.6,59.8,59,58.2,57.4,56.6,55.8,55,45,35,35,35,35,35,35,25,15,10,8,6,4,0],
		"HeaterPer": [0,0,0,5,6,7,8,9,10,11,12,13,14,15,20,25,30,35,40,45,50,55,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,72,73,74,75,76,77,77,77,77,77,77,75,73,71,70,70,70,70,70,70,70,70,72,71,70,70,70,70,70,70,70,70,68,70,70,70,70,70,69,68,67,66,65,64,63,64,65,65,65,65,65,65,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,44,35,25,0,0,0,0,0,0,0,0,0,0,0],
		"time":[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130]
		}
		const allValues = Object.values(dataJson)
		    .flat()
		    .filter(value => value !== undefined && value !== null);

		// Find the minimum value
		const minValueY = Math.min(...allValues);

//		console.log("Minimum value:", minValueY);
		        // Initialize the chart
		        var chart = Highcharts.chart('marketChart', {
		            chart: {
		                type: 'line',
		                backgroundColor: '#222222',
		                animation: true,
		                marginRight: 10
		            },
		            plotOptions: {
		                pie: {
		                    allowPointSelect: true,
		                    cursor: 'pointer',
		                    dataLabels: {
		                        enabled: true,
		                        style: {
		                            color: '#000000', // Label color
		                            fontSize: '14px', // Label font size
		                            fontWeight: 'bold', // Label font weight
		                            textOutline: 'none' // Removes text outline
		                        },
		                        formatter: function () {
		                            return `<b>${this.point.name}</b>: ${this.percentage.toFixed(2)} %`; // Custom label text
		                        }
		                    }
		                }
		            },
		            exporting: { enabled: false },
					credits: { enabled: false},
		            title: {
		                text: 'SPRAY DRYER',
		                style: { color: '#ffffff', fontSize: '20px' }
		            },
		            xAxis: {
		                type: 'linear',
		                title: {
		                    text: 'TIME',
		                    style: { color: '#ffffff' }
		                },
						// min: yMin, // Use calculated y-axis min
						//max: yMax,
		                gridLineColor: '#444444',
		                labels: { style: { color: '#ffffff' } }
		            },
		            yAxis: {
					
		                title: {
		                    text: 'READINGS',
		                    style: { color: '#ffffff' }
		                },
						 min: minValueY, // Use calculated y-axis min
						//max: yMax,
		                gridLineColor: '#444444',
		                labels: { style: { color: '#ffffff' } }
		            },
		            legend: {
		                enabled: true,
		                itemStyle: { color: '#ffffff' },
		                itemHoverStyle: { color: '#dddddd' }
		            },
		            tooltip: {
		                shared: true,
		                backgroundColor: 'rgba(0,0,0,0.75)',
		                style: { color: '#ffffff' },
		                valueDecimals: 3
		            },
		            
		            series: [
		                {
		                    name: 'HOT AIR TEMPERATURE (TT01)',
		                    data: [],
		                    color: '#FF5733'
		                },
		                {
		                    name: 'PRODUCT TEMPERATURE (TT02)',
		                    data: [],
		                    color: '#33FF57'
		                },
		                {
		                    name: 'FLOW TRANSMITTER (FT)',
		                    data: [],
		                    color: '#3357FF'
		                },
						{
		                    name: 'VACUUM TRANSMITTER (NT)',
		                    data: [],
		                    color: '#ff9999'
		                },
		                {
		                    name: 'PUMP_SPEED',
		                    data: [],
		                    color: '#cc9900'
		                },
		                {
		                    name: 'FD_FAN_SPEED',
		                    data: [],
		                    color: '#00b3b3'
		                },
						 
		                {
		                    name: 'ID_FAN_SPEED',
		                    data: [],
		                    color: '#9900ff'
		                },
						{
		                    name: 'HEATER',
		                    data: [],
		                    color: '#ff00ff'
		                }
		            ],

		            credits: {
		                enabled: false
		            }
		        });
		        
		        // Initialize data and dynamically update
		      

		        setInterval(function () {
		            if (currentIndex < dataJson.time.length) {
		                const currentTime = dataJson.time[currentIndex];
		                const tt1 = dataJson.TT01[currentIndex];
		                const tt2 = dataJson.TT02[currentIndex];
		                const ft = dataJson.FT[currentIndex];
						 const nt = dataJson.NT[currentIndex];
		                const P1_SPEED = dataJson.P1_SPEED[currentIndex];
		                const FD_SPEEDPer = dataJson.FD_SPEEDPer[currentIndex];
						const ID_SPEEDPer = dataJson.ID_SPEEDPer[currentIndex];
		                const HeaterPer = dataJson.HeaterPer[currentIndex];

		                chart.series[0].addPoint(["TIME : "+currentTime, tt1], true, false);
		                chart.series[1].addPoint(["TIME : "+currentTime, tt2], true, false);
		                chart.series[2].addPoint(["TIME : "+currentTime, ft], true, false);
						 chart.series[3].addPoint(["TIME : "+currentTime, nt], true, false);
		                chart.series[4].addPoint(["TIME : "+currentTime, P1_SPEED], true, false);
		                chart.series[5].addPoint(["TIME : "+currentTime, FD_SPEEDPer], true, false);
						 chart.series[6].addPoint(["TIME : "+currentTime, ID_SPEEDPer], true, false);
		                chart.series[7].addPoint(["TIME : "+currentTime, HeaterPer], true, false);
		               
		                currentIndex++;
//		                console.log("currentIndex",currentIndex);
		            }
		            if(currentIndex==131){
		            	$("#download,#checkDiv").prop("hidden",false);
		            	
		            }
		            
		        }, 1000);

		     // Toggle series visibility based on checkbox
		     document.querySelectorAll('.series-toggle').forEach(checkbox => {
		     checkbox.addEventListener('change', function () {
		         const seriesIndex = parseInt(this.dataset.series);
		         const series = chart.series[seriesIndex];
		         if (this.checked) {
		             series.show();
		         } else {
		             series.hide();
		         }
		     });

});         
		        
		        
}
