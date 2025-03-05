var dataJson={};
var startCount=0;
var datasheetCount=0;
var trendsCount=0;
var selectedValue=1000;


function sprayDryerMimic(){
	
	timerMasterJson.squences=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	 
	$("#Header").html("	<center><span >SIMULATION</span></center>");
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1">Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="reset" class="btn btn-danger" style="width:100%" disabled>Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheet" class="btn btn-danger" style="width:100%;margin-top:10px;" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#modalTrends" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
	
		
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'

		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>FT</b></label></td>'
		+'   <td><label class="PMCValue" id="ft">0</label>m/s</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT01 </b></label></td>'
		+' <td><label class="PMCValue" id="tt1">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT02</b></label></td>'
		+' <td><label class="PMCValue" id="tt2">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>NT </b></label></td>'
		+' <td><label class="PMCValue" id="nt">0</label>mBar</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>HEATER </b></label></td>'
		+' <td><label class="PMCValue" id="hf">0</label>mBar</td>'
		+'  </tr>'
		
		+'  <tr>'
		+' <td><label><b>PUMP</b></label></td>'
		+' <td><label class="PMCValue" id="pump">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FD FAN :</b></label></td>'
		+' <td><label class="PMCValue" id="fdfan">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>ID FAN :</b></label></td>'
		+' <td><label class="PMCValue" id="idfan">0</label>%</td>'
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled >Result</button>'
		+'</div>'
		
		
		+'<!-- The Modal -->'  
   +'<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="modelTitle1" aria-hidden="true">'  
  +'<div class="modal-dialog" id="modelDialog1" role="document">'  
    +'<div class="modal-content">'  
     +' <!-- Modal Header -->'  
      +'<div class="modal-header"> ' 
       +' <h4 class="modal-title" id="modelTitle1"></h4>  '
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'  
        +'  <span aria-hidden="true">&times;</span>'  
        +'</button>'  
      +'</div>  '
      +'<!-- Modal body -->  '
      +'<div class="modal-body" id="modelBody1"> ' 
       +' <!-- Content will be populated here -->'  
      +'</div> ' 
      +'<!-- Modal footer --> ' 
      +'<div class="modal-footer">  '
        +'<button type="button" class="btn btn-danger" data-dismiss="modal" id = "modalClose">OK</button>'  
      +'</div>'  
    +'</div>'  
 +' </div> ' 
+'</div>'  
+'<!-- End Modal -->'
		
		//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="modalTrends">'
		+'    <div class="modal-dialog modal-xl " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="bodyTrends">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;">Download </button>'
//		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
	
	$("#Selection").html(htm);
	
	
	spryerDryermimicDiagram();
	
	$("#graph").click(function(){
		sprayDryerGraph(dataJson);
		trendsCount++;
	});
	
	$("#btnResult").click(function(){
		resultJson.animationStart=startCount;
		resultJson.datasheet=datasheetCount;
		resultJson.trends=trendsCount;
//		console.log(resultJson);
		result();
	});
	
	
	$("#reset").click(function(){
		
		$("#Selection").html('');
		$("#diagram").html('');
	     $("#datasheet").prop("disabled",true);
		 // Example Usage
		resetApp();
		 $("#startBtn").prop("disabled",false);
//		console.log("reset clicked ");
	});
	
	$("#datasheet").click(function(){
		const link = document.createElement('a'); 
	    link.setAttribute('download', 'sprayDryerData.pdf'); 
	    link.setAttribute('href', 'images/sprayDryerData.pdf'); 
	    link.setAttribute('target','_blank')
	    document.body.appendChild(link); 
	    link.click(); 
	    document.body.removeChild(link);
	    datasheetCount++;
		});
}



function stopAnimationsAndTimers() {
  // Stop specific animations on elements that need to be reset
  $("#Selection").stop(true, true); // Example for stopping any animation on #Selection
   
  // Clear timeouts and intervals that might be running and causing issues
  clearRelevantTimers();
}

// Function to clear all relevant timeouts and intervals
function clearRelevantTimers() {
  let highestTimeoutId = setTimeout(() => { }); // Get the highest timeout ID
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i); // Clear each timeout
  }

  let highestIntervalId = setInterval(() => { }); // Get the highest interval ID
  for (let i = 0; i < highestIntervalId; i++) {
    clearInterval(i); // Clear each interval
  }

//  console.log("Timers cleared.");
}

// Function to reset animations and states without disturbing existing functionality
function resetApp() {
	
	  resetFlg =1;
//	 console.log("reset stop "+resetFlg);
  // Step 1: Stop animations and clear relevant timeouts
	 
	 
  stopAnimationsAndTimers();

  // Step 2: Reset any specific state or UI if needed
 
//  $("#Selection").html(htm); // Update the content as needed

  // Step 3: Reinitialize functions like spryerDryermimicDiagram if required
//  spryerDryermimicDiagram(); // Assuming you need to reinitialize this for the reset
      sprayDryerMimic();
//  console.log("Reset complete.");
}


//function downloadPDFDirectly() {
//  const pdfUrl = 'images/sprayDryerData.pdf'; // Local or server URL of the PDF
//  const fileName = 'sprayDryerData.pdf'; // Name of the file to be saved
//
//  // Create a hidden anchor element
//  const link = document.createElement('a');
//  link.href = pdfUrl;
//
//  // Set the `download` attribute to force download
//  link.download = fileName;
//
//  // Append the anchor element to the DOM temporarily
//  document.body.appendChild(link);
//
//  // Clean up by removing the anchor element
//  document.body.removeChild(link);
//}



  
var plantData = 0; 
var resetFlg = 0;


function spryerDryermimicDiagram()
{	
	
//	var paper = Raphael("container", 1500, 700);
//var paper = Raphael("container", 1500, 700);

//	console.log("pd : " + plantData);

var w = 1250;
var h = 800;
var x = 20, y = 55;
//$("#diagram").html("");
// Get the dimensions of the window
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		
		// Define the desired virtual canvas size
		var virtualWidth = 1500;
		var virtualHeight = 1000;
		
		// Create the Raphael canvas
		var paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		
		// Set the viewBox to scale content dynamically
		paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
		
		// Detect device pixel ratio
		var scaleFactor = window.devicePixelRatio || 1;
		
		// Define scale adjustment based on screen scaling
		var scale;
		if (scaleFactor === 1) {
		    // 100% scaling
		   scale = 1 * 1.1 / scaleFactor;
		} else if (scaleFactor > 1 && scaleFactor <= 1.25) {
		    // 125% scaling
		    scale = 1 * 1.4 / scaleFactor; // Adjust as per your requirement
		} else {
		    // Other scaling (e.g., 150%, etc.)
		    scale = 1 / scaleFactor; // Default adjustment
		}
		
		// Apply the scale to the canvas using transform
		paper.canvas.setAttribute('style', `transform: scale(${scale}); transform-origin: 0 0;`);
		
		// Ensure the canvas matches the screen dimensions
		paper.setSize('100%', '100%');

//if ($(window).width() < 500) {
//	width = $(this).width();
//	paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
//	paper.setViewBox(0, 0, w, h, true);
//	paper.setSize('94%', '100%');
//} else {
//	paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
//	paper.setViewBox(0, 0, w, h, true);
//	paper.setSize('94%', '100%');
//}

 dataJson = {
"TT01": [22,22,22,22,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45,50,55,60,70,80,90,100,110,120,120,120,120,120,120,120,120,120,120,120,120,119,118,117,115,113,110,112,114,116,118,120,122,124,126,128,130,130,130,130,130,130,130,129,128,129,130,130,130,130,130,130,130,132,131,130,130,130,130,131,132,133,134,135,134,135,134,133,132,131,130,130,130,131,132,133,132,131,131,131,131,130,130,130,130,130,130,130,130,131,132,132,131,132,133,132,130,125,110,100,90,80,75,70,65,62,61],
"TT02": [20,20,20,20,20,20,20,20,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,40,43,46,50,52,55,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,68,66,64,62,62,63,64,65,66,67,68,69,70,70,70,70,70,70,70,70,70,68,66,66,66,66,66,66,66,66,67,67,66,66,66,66,67,68,69,70,71,71,71,71,70,70,69,69,69,68,69,69,70,70,70,70,70,69,69,69,69,69,69,69,69,69,69,69,71,71,71,72,71,70,67,63,61,55,49,45,43,41,40,40],
"FT": [0,0,0,0,0,0,0,0.00216,0.00252,0.00288,0.00324,0.0036,0.00396,0.00432,0.00468,0.0054,0.00612,0.009,0.0108,0.0126,0.0144,0.0162,0.01692,0.01764,0.01872,0.02016,0.0216,0.0234,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.02484,0.02448,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.0252,0.02484,0.02448,0.02412,0.02376,0.0234,0.02304,0.02268,0.02232,0.02196,0.0216,0.02124,0.02088,0.02052,0.02016,0.0198,0.01944,0.01908,0.01872,0.01836,0.018,0.01764,0.01728,0.0144,0.0108,0.0108,0.0108,0.0108,0.0108,0.0108,0.0072,0.0036,0,0,0,0,0],
"NT": [0,0,0,0,0,0,0,-2.01,-2.68,-3.35,-4.02,-4.69,-5.36,-6.03,-6.7,-7.37,-8.04,-8.71,-13.4,-16.75,-20.1,-23.45,-25.46,-27.47,-29.48,-32.16,-34.84,-37.52,-40.2,-42.88,-44.22,-45.56,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-47.57,-46.9,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-47.57,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.9,-46.23,-46.23,-45.56,-44.89,-44.22,-43.818,-43.282,-42.746,-42.21,-41.674,-41.138,-40.602,-40.066,-39.53,-38.994,-38.458,-37.922,-37.386,-36.85,-30.15,-23.45,-23.45,-23.45,-23.45,-23.45,-23.45,-16.75,-10.05,-6.7,-5.36,-4.02,-2.68,0],
"P1_SPEED": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,7,9,11,12,13,14,15,16,17,18,19,20,25,30,35,40,45,50,55,60,65,70,70,70,70,70,70,70,70,70,70,65,65,70,69,68,67,66,65,64,63,62,61,60,61,62,63,68,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,50,45,40,35,30,25,20,10,0,0,0,0,0,0,0,0,0,0,0,0,0],
"FD_SPEEDPer": [0,0,0,0,0,0,5,6,7,8,9,10,11,12,13,15,17,25,30,35,40,45,47,49,52,56,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,68,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,40,30,30,30,30,30,30,20,10,0,0,0,0,0],
"ID_SPEEDPer": [0,0,0,0,0,0,2,3,4,5,6,7,8,9,10,11,12,13,20,25,30,35,38,41,44,48,52,56,60,64,66,68,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,70,71,71,71,71,71,71,71,71,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,69,69,68,67,66,65.4,64.6,63.8,63,62.2,61.4,60.6,59.8,59,58.2,57.4,56.6,55.8,55,45,35,35,35,35,35,35,25,15,10,8,6,4,0],
"HeaterPer": [0,0,0,5,6,7,8,9,10,11,12,13,14,15,20,25,30,35,40,45,50,55,60,65,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,72,73,74,75,76,77,77,77,77,77,77,75,73,71,70,70,70,70,70,70,70,70,72,71,70,70,70,70,70,70,70,70,68,70,70,70,70,70,69,68,67,66,65,64,63,64,65,65,65,65,65,65,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,44,35,25,0,0,0,0,0,0,0,0,0,0,0],
"time":[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130]
}
//console.log(dataJson);

var x = 10, y = 50;
var overAllDelay = 0;

var milkyColor = "  90- #fce5ae -#fce09d - #faf3d9";
 
var airColor = "50-#ede8e8-#878383";
//var fireColor = "50-#fcfafa-#f53b3b";
var fireColor = "90-#bf5652-#c2bcbc";
var compressedAirColor = "90-#2f5a8d-#ffffff";
var heatedLiquid = "80-#e5d0b7-#ed2618";

var afterSprayAirColor = "80-#e5d0b7-#eb655b";
var mediumTempAir = "80-#e5d0b7-#f2986b";
//var coldAir = "90-#004080-#66ccff-#e6f7ff";
var coldAir = "90-#7496b0-#80cfff-#e6f7ff";

var time = selectedValue;
//console.log(" mimic time "+time);
//console.log("selectedValue "+selectedValue);
var rectMain = paper.rect((x+285),y-35,300,70).attr({"stroke":"#545557","stroke-width":3});

paper.text((x + 332), (y -20), "Start-up").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#4e4f52","font-weight":"bold" });
var stOn = paper.image("images/green.png", (x + 310), (y-10 ), 40, 40);
var stOff = paper.image("images/red.png", (x +310), (y-10), 40, 40);

paper.text((x + 434), (y -20), "Running").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#4e4f52","font-weight":"bold" });
var rnOn = paper.image("images/green.png", (x + 415), (y -10), 40, 40);
var rnOff = paper.image("images/red.png", (x +415), (y -10), 40, 40);

paper.text((x + 540), (y -20), "Shutdown").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#4e4f52","font-weight":"bold" });
var shOn = paper.image("images/green.png", (x + 520), (y -10), 40, 40);
var shOff = paper.image("images/red.png", (x +520), (y -10), 40, 40);



// Draw the tank outline
var tank = paper.path("M" + (x + 10) + " " + (y + 150) + 
    " l 100 0 l 0 -100 l -25 -25 l 0 -15 l -50 0 l 0 15 l -25 25 z");

	tank.attr({
	    stroke: "#000",
	    "stroke-width": 2,
	    fill: "#fff" // Gradient from light gray to dark gray
	});

//Transparent water fill inside the tank
var water = paper.rect(x + 11, y + 50, 98, 100); // X, Y, Width, Height
	water.attr({
	    fill: milkyColor, // A blend of blue tones for water
	    stroke: "none"
	});

var pipe = paper.path("M" + (x + 55) + " " + (y + 150) + " l 0 50 l 148 0" + 
                      "M" + (x + 63) + " " + (y + 150) + " l 0 42.5 l 138 0");



//var lsLineTop = paper.path("M"+(x + 110) + " " + (y + 100)+" l 57 0 l 0 -60 l -8 0 l 0 52 l -49 0 z");
//lsLineTop.attr({"fill":"50-#fff-#929695"});

var lsLineTop = paper.path("M"+(x + 111) + " " + (y +58)+" l 40 0 l 0 -20 l 8 0 l 0 28 l -48 0");
lsLineTop.attr({"fill":"50-#fff-#929695"});

var lsLineBottom = paper.path("M"+(x + 111) + " " + (y +130)+" l 40 0 l 0 -20 l 8 0 l 0 28 l -48 0");
lsLineBottom.attr({"fill":"50-#fff-#929695"});

var lsLineCompress = paper.path("M"+(x + 908) + " " + (y +70)+" l 0 -38 l 8 0 l 0 38");
lsLineCompress.attr({"fill":"50-#fff-#929695"});		

var screw1Rect = paper.rect((x + 135),(y + 187),45,20,5);
screw1Rect.attr({"fill":"50-#808080-#303030"});

var screw2Rect = paper.rect((x + 208),(y + 220),45,20,5);
screw2Rect.attr({"fill":"50-#808080-#303030"}); 

var screw1RectB = paper.rect((x + 131.8),(y + 187),6,20);
screw1RectB.attr({"fill":"#000"});

var screw2RectB = paper.rect((x + 249),(y + 220),6,20);
screw2RectB.attr({"fill":"#000"});

 var screw1Rect1 = paper.rect((x + 121),(y + 179),10,35);
screw1Rect1.attr({"fill":"#529c9e"});

var screw1Rect2 = paper.rect((x + 255),(y + 213),10,35);
screw1Rect2.attr({"fill":"#529c9e"});


var airPipe = paper.path("M"+(x+50)+" "+(y+400)+"l 160 0 " +"M"+(x+50)+" "+(y+408)+" l 160 0"+"M"+(x+50)+" "+(y+408)+" l 160 0");

var airPipeContinue = paper.path("M"+(x+218)+" "+(y+400)+"l 120 0 " 
                          +"M"+(x+218)+" "+(y+408)+" l 120 0");
                          
var airPipeContinue1 =  paper.path("M"+(x+355)+" "+(y+400)+"l 30 0 l 0-185 " 
                          +"M"+(x+355)+" "+(y+408)+" l 38 0 l 0 -194");                         

 var airPipeContinue2 =  paper.path("M"+(x+384.5)+" "+(y+145)+"l 0 -43 l 200 0"+ 
                         "M"+(x+392.5)+" "+(y+145)+"l 0 -35 l 192 0"); 


var lsLineRedSen = paper.path("M"+(x + 96.5) + " " + (y + 400)+"  l 0 -60 l -8 0 l 0 60 z ");
lsLineRedSen.attr({"fill":"50-#fff-#929695"});


 var lsLineGreenSen = paper.path("M"+(x + 262) + " " + (y + 400)+"  l 0 -60 l -8 0 l 0 60 z ");
lsLineGreenSen.attr({"fill":"50-#fff-#929695"});


 var lsLineGreenSen1 = paper.path("M"+(x + 449) + " " + (y + 240)+"  l 0 -60 l -8 0 l 0 68  l 35 0 l 0 -8 l -28 0");                                       
lsLineGreenSen1.attr({"fill":"50-#929695-#fff"}); 

 var lsLineGreenSen3 = paper.path("M"+(x + 1037) + " " + (y + 270)+"  l 0 40 l -35 0 l 0 -8 l 27 0 l 0 -32 z");                                       
lsLineGreenSen3.attr({"fill":"50-#929695-#fff"});


var lsLineGreenSen4 = paper.path("M"+(x + 1110) + " " + (y + 200)+"  l 0 40 l -40 0 l 0 -8 l 32 0 l 0 -32 z");                                       
lsLineGreenSen4.attr({"fill":"50-#929695-#fff"});


 var pipeCont = paper.path("M"+(x+272)+" "+(y+226.5)+"l 40 0"+"M"+(x+272)+" "+(y+233.5)+"l 47 0");
 
 var pipeCont1 = paper.path("M"+(x+311.5)+" "+(y+226.5)+"l 0 -168"+
                            "M"+(x+319.2)+" "+(y+234)+"l 0 -167.5");
 
 var pipeCont2 = paper.path("M"+(x+311)+" "+(y+59)+"l 271 0 l 0 20"+
                            "M"+(x+318.5)+" "+(y+67)+"l 256 0 l 0 10"); 
 
 
 var compressAirPipe = paper.path("M"+(x+930)+" "+(y+70)+"l -45 0"+"M"+(x+930)+" "+(y+78)+"l -45 0");
 var compressAirPipe1 = paper.path("M"+(x+890)+" "+(y+70)+"l -60 0 l 0 -30 l -77 0"+
                                    "M"+(x+890)+" "+(y+78)+"l -60 0 l 0 30.5 l -77 0");
 
 var compressAirPipe2CPatch = paper.path("M"+(x+750)+" "+(y+46)+" l 73 0 l 0 57 l -73 0");
 
  var compressAirPipe3 = paper.path("M"+(x+720)+" "+(y+109)+" l -110 0" +
                                  "M"+(x+720)+" "+(y+103)+" l -110 0");
 
 var compressAirPipe4 = paper.path("M"+(x+750)+" "+(y+47)+" l -105 0 l -60 60"+ 
                                 "M"+(x+750)+" "+(y+40)+" l -108 0 l -60 60");
 
 

 var connectedPipe = paper.path("M"+(x+574.8)+" "+(y+138)+" l 0 17.5"+"M"+(x+582.7)+" "+(y+138)+" l 0 17.5");
 
  //Spray Dryer

 
		var cx = x + 580; // Center x-coordinate of the ellipse
		var cy = y + 175; // Center y-coordinate of the ellipse
		var rx = 105;     // Horizontal radius of the ellipse
		var ry = 20;      // Vertical radius of the ellipse
		
	
		var sprayOutline = paper.path(
		    "M" + (x + 475.1) + " " + (y + 175) + // Starting point
		    " l 0 160 l 92 92 l 26 0 " +            // Vertical and diagonal lines
		    " l 92 -92 l 0 -160 " +                 // Closing the outline
		    " M" + (cx - rx) + " " + cy +           // Move to the leftmost point of the ellipse
		    " A" + rx + " " + ry +                  // Arc parameters: radii
		    " 0 0 1 " + (cx + rx) + " " + cy        // End point of the arc (rightmost point of the ellipse)
		).attr({  fill: "90-#e5d0b7-#9c9992", stroke: "none"});

      var sprikRect = paper.rect((x+566.5),(y+155.3),25,10).attr({  fill: "#292926", stroke: "none"});                              
      var sprikLine = paper.path("M"+(x+569)+" "+(y+165)+" l 0 20 l 20 0 l 0 -20 ")                              
       .attr({  fill: "50-#8f8d89-#d4d4d4", stroke: "#6e6e6d"});
        var ell = paper.ellipse(x+580,y+175,105,20).attr({"stroke":"#948d84"}).toFront();
        
        var ell1 = paper.ellipse(x+580,y+334,105,20).attr({"stroke":"#b6a68e"}).toFront();
        
 // Spray bottom 
  
  var r1 = paper.rect((x+565),(y+425),30,6).attr({"fill":"#6b6b6a","stroke":"#545452"});
  var r2 = paper.rect((x+567.5),(y+431),25,10).attr({"fill":"#949491","stroke":"#545452"});

  
  // Spray bottom pipe
  
  var pipeline = paper.path("M"+(x+576)+" "+(y+441)+" l 0 36 l 82 0 l 0 -80 l 78 0"+
                           "M"+(x+584)+" "+(y+441)+" l 0 28 l 65 0 l 0 -80 l 87 0");
  
  
  //cyclone
  

	// Draw the top half of the ellipse as an arc
	var rx = 30; // Horizontal radius of the ellipse
	var ry = 6;  // Vertical radius of the ellipse
	var cx = x + 766; // Center x-coordinate of the ellipse
	var cy = y + 370; // Center y-coordinate of the ellipse
	
//  var cycloneTop = paper.ellipse(x+766,y+360,30,6).attr({"stroke":"#948d84"}).toFront();
  var pipe1 = paper.path("M"+(x+736)+" "+(y+370)+" l 0 80 l 20 20 l 20 0 l 20 -20 l 0 -80 "+
                      "M" + (cx - rx) + "," + cy + "A" + rx + "," + ry + " 0 0,1 " + (cx + rx) + "," + cy)
                      .attr({fill: "90-#e5d0b7-#9c9992", stroke: "none"}).toFront();

	var cycloneTop = paper.ellipse(x + 766, y + 370, 30, 6).attr({ "stroke": "#948d84" }).toFront();
	var cycloneTop1 = paper.ellipse(x + 766, y + 448, 30, 6).attr({ "stroke": "#b6a68e" }).toFront();
  
                                
		var sprikLine1 = paper.path("M"+(x+761)+" "+(y+362)+" l 0 13 l 10 0 l 0 -13 ")                              
       .attr({  fill: "50-#8f8d89-#d4d4d4", stroke: "#6e6e6d"});
    var sprikRect1 = paper.rect((x+757),(y+358),18,8).attr({  fill: "#292926", stroke: "none"}).toFront();
    
    var cyclonePipeTop = paper.path("M"+(x+762.5)+" "+(y+358)+" l 0 -60 l 50 0"+"M"+(x+840)+" "+(y+299)+" l 50 0"
                              +"M"+(x+770)+" "+(y+358)+" l 0 -52 l 42 0"+"M"+(x+840)+" "+(y+306.5)+" l 50 0");
    
 
 //scrubber
    
    
    var cx = x + 928; // X center of the ellipse
	var cy = y + 270; // Y center of the ellipse
	var rx = 38;      // Horizontal radius of the ellipse
	var ry = 6;       // Vertical radius of the ellipse
	
	// Path for the top half of the ellipse as an arc
	var arcPath = "M" + (cx - rx) + "," + cy + " A" + rx + "," + ry + " 0 0,1 " + (cx + rx) + "," + cy;        
    
    var pipe2 = paper.path("M"+(x+890)+" "+(y+270)+" l 0 100 l 30 30 l 16 0 l 30 -30 l 0 -100 "+arcPath)
                      .attr({fill: "90-#e5d0b7-#9c9992", stroke: "none"}).toFront();
 
    var scrubberTop = paper.ellipse(x + 928, y + 270, 38, 6).attr({ "stroke": "#948d84" }).toFront();
    
    var scrubberTop1 = paper.ellipse(x + 928, y + 369, 38, 6).attr({ "stroke": "#b6a68e" }).toFront();
    
    
    var sprikLine1 = paper.path("M"+(x+924)+" "+(y+263)+" l 0 13 l 10 0 l 0 -13 ")                              
       .attr({  fill: "50-#8f8d89-#d4d4d4", stroke: "#6e6e6d"});
    var sprikRect1 = paper.rect((x+920),(y+260),18,8).attr({  fill: "#292926", stroke: "none"}).toFront();
    
    
    //Connecting pipes
    
     var pipe3 = paper.path("M"+(x+925.3)+" "+(y+260)+" l 0 -70 l 76.5 0 l 0 150 l 50 0"
                          +"M"+(x+933)+" "+(y+260)+" l 0 -62 l 60 0 l 0 150 l 60 0");
    
    var pipe4 = paper.path("M"+(x+1062)+" "+(y+60)+" l 0 250"+
                             "M"+(x+1069.5)+" "+(y+60)+" l 0 250");
    
 

  //  Images
var motor_img = paper.image("images/motor.png", (x + 147), (y + 170), 85, 85).toFront();
var motorOff_img = paper.image("images/motorRed.png", (x + 176), (y + 205), 30, 30).toFront();

var n1_img = paper.image("images/notch1.png", (x + 152), (y + 392), 20, 20).toFront();
var n2_img = paper.image("images/notch2.png", (x + 217), (y + 393), 20, 20).toFront();

var heater_img = paper.image("images/heater2.png", (x + 362), (y + 140), 58, 80);

var couple_img = paper.image("images/couple2.png", (x + 549), (y + 74), 65, 65).toFront();
var compressor_img = paper.image("images/airFilter.png", (x + 830), (y + 50), 100, 60).toFront();

var valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
var valve_img1 = paper.image("images/svValve2.png", (x + 720), (y + 67), 45, 50).toFront();

var IdFan_img1 = paper.image("images/IdUpdatedFan.png", (x + 1050), (y +300), 90, 80).toFront();

var exhaustCap_img1 = paper.image("images/exhaust1.png", (x + 1021), (y +25), 90, 80).toFront();

// Fan base
 var cBase = paper.circle((x+195),y+403,30).attr({"fill":"#636362","stroke-width":3,"stroke":"#292727"}).toFront();

// Fan Image
var fdFan_img = paper.image("images/fan.png", (x + 165), (y + 372), 60, 60).toFront();

var offFan_img = paper.image("images/offMotor.png", (x + 170), (y + 335), 50, 30).toFront();
var offFan_img1 = paper.image("images/offMotor.png", (x + 1080), (y + 287), 50, 30).toFront();


var cont2Pipe = paper.image("images/pipe1.png", (x + 914), (y + 406), 30, 25).toFront();
var cont1Pipe = paper.image("images/pipe1.png", (x + 750), (y + 470), 30, 28).toFront();

var containerValve_img = paper.image("images/containerValve.png", (x + 907), (y + 390), 70, 30).toFront();
var containerValve_img1 = paper.image("images/containerValve.png", (x + 744), (y + 465), 70, 30).toFront();


//heater rectangle

var heaterRect = paper.rect((x + 370), (y + 145),40,70,5).attr({"fill":"#d1b0b0", "opacity": 1}).toFront();
// var heaterRect = paper.rect();

var r = 360;

  var isRotating = true; // Flag to control rotation

	function rotateInfinite() {
	    if (!isRotating) return; // Exit if rotation is stopped
	
	    fdFan_img.animate(
	        { 'transform': 'r' + 360 }, // Rotate 360 degrees
	        time, // Duration of rotation
	        function () {
	            fdFan_img.attr({ transform: '' }); // Reset transformation to keep animation smooth
	            rotateInfinite(); // Call the function again for infinite rotation
	        }
	    );
	}

  function stopRotation(){
        isRotating = !isRotating; // Toggle the rotation state
	    if (isRotating) {
	        rotateInfinite(); // Restart rotation if toggled on
	    }
  }


   ttSensor(x,y);
   ttSensor(x+190,y+210);
   

   electromagneticFlowMeter(x,y);
   electromagneticFlowMeter(x+490,y-101);
   
   container1(x,y+3);
   container1(x+164,y-64);
   
   
   screw(x+ 113,y+179);
   screw(x+ 113,y+192);
   screw(x+ 113,y+204);
   
   
   screw(x+ 265.5,y+213);
   screw(x+ 265.5,y+226);
   screw(x+ 265.5,y+239);

//   rectTextBoxes(x+72,y+30);   //p1
var p1Rect = paper.rect((x+80+72),(y+230+30),45,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  
//   rectTextBoxes(x+237,y+10);  //heater 

var heaterRect1 = paper.rect((x+80+233),(y+230+10),45,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  

   rectTextBoxes(x+84,y+232);  //fd fan
//   rectTextBoxes(x+232,y+212); 
  
  	var ftRect = paper.rect((x+80+228),(y+230+212),70,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  


//   rectTextBoxes(x+338,y-110); //tt01
      var tt01Rect = paper.rect((x+78+338),(y+230-110),45,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  

   
//   rectTextBoxes(x+615,y+40); //tt02
      var tt02Rect = paper.rect((x+80+615),(y+230+40),45,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  

//   rectTextBoxes(x+718,y-25);
   
    var ntRect = paper.rect((x+80+720),(y+230-25),60,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  

    rectTextBoxes(x+980,y+180);   //id fan
    
   // labels
   
   var p1Label = paper.text((x+190),y+162,"P1").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
   
   var AirSupplyLabel = paper.text((x+100),y+425,"Air Supply").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
   
   var psll1Label = paper.text((x+95),y+290,"PSLL1").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

	  var fdFanLabel = paper.text((x+193),y+445,"FD Fan").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
  var pshh1Label = paper.text((x+260),y+290,"PSHH1").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
 
  var ftLabel = paper.text((x+340),y+425,"FT").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
 
  var lsllLabel = paper.text((x+200),y+100,"LSLL").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var lshhLabel = paper.text((x+200),y+15,"LSHH").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var heaterLabel = paper.text((x+350),y+224,"Heater").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var tt01Label = paper.text((x+502),y+150,"TT01").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
  var ttshhLabel = paper.text((x+415),y+250,"TSHH").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var tt02Label = paper.text((x+720),y+320,"TT02").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var ntLabel = paper.text((x+830),y+323,"NT").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
  
   var psll2Label = paper.text((x+1030),y+210,"PSLL2").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});
 	  
  var pshh2Label = paper.text((x+1108),y+138,"PSHH2").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

var idfanLabel = paper.text((x+1090),y+390,"ID Fan").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

var compressLabel = paper.text((x+960),y+95,"From Compressor").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

 var svdBlockLabel = paper.text((x+815),y+25,"SV for Dblocking").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

 var svpneumaticLabel = paper.text((x+750),y+130,"SV for pneumatic supply").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

 var feedtankLabel = paper.text((x+61),y-6,"Feed Tank").attr({
font: "15px Arial", fill: "#14336b", stroke: "#51565e", "stroke-width": 0.5});

var dryingchamberLabel = paper.text((x+580),y+280,"Drying Chamber").attr({
font: "15px Arial", fill: "#7a6f6f", stroke: "#858181", "stroke-width": 0.5});

var cycloneLabel = paper.text((x+766),y+406,"Cyclone").attr({
font: "12px Arial", fill: "#7a6f6f", stroke: "#858181", "stroke-width": 0.5});

var cycloneSeperatorLabel = paper.text((x+766),y+423,"Seperator").attr({
font: "12px Arial", fill: "#7a6f6f", stroke: "#858181", "stroke-width": 0.5});

 var scrubberLabel = paper.text((x+927.8),y+312,"Scrubber &").attr({
font: "12px Arial", fill: "#7a6f6f", stroke: "#858181", "stroke-width": 0.5});

 var bagFilterLabel = paper.text((x+929),y+330,"Bag filter").attr({
font: "12px Arial", fill: "#7a6f6f", stroke: "#858181", "stroke-width": 0.5});

var p1MotorValTxt = paper.text(x+174,y+273.5,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var p1Unit = paper.text(x+212,y+275," % ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var fdFanValTxt = paper.text(x+193,y+475,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var fdUnit = paper.text(x+238,y+475," % ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var ftValTxt = paper.text(x+342.5,y+455,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var ftUnit = paper.text(x+402,y+455," m/s ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var heaterValTxt = paper.text(x+335,y+253.5,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var heaterUnit = paper.text(x+372,y+253.5," % ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var tt01ValTxt = paper.text(x+439,y+133.5,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#f20a0a","font-weight":"bold"});
var tt01Unit = paper.text(x+475,y+133.5,"\u00B0C ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var tt02ValTxt = paper.text(x+718,y+284,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#f20a0a","font-weight":"bold"});
var tt02Unit = paper.text(x+755,y+284,"\u00B0C ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var ntValTxt = paper.text(x+829,y+218.6,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var ntUnit = paper.text(x+890,y+218.6," mBar ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});

var idFanValTxt = paper.text(x+1090,y+423,"0").attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
var idUnit = paper.text(x+1136,y+423," % ").attr({"font-size":18,"fill":"#0a4cf2","font-weight":"bold"});
 
function iterateTT01() {
// Hide initial text

	
// Loop over the TT01 array
for (let i = 0; i < dataJson.TT01.length; i++) {

	 setTimeout(() => {

     tt01ValTxt.remove();
     tt02ValTxt.remove();
     p1MotorValTxt.remove();
     fdFanValTxt.remove();
     ftValTxt.remove();
     heaterValTxt.remove();
     ntValTxt.remove();
     idFanValTxt.remove();
     
     $("#ft").text(dataJson.FT[i]);
     $("#tt1").text(dataJson.TT01[i]);
     $("#tt2").text(dataJson.TT02[i]);
     $("#nt").text(dataJson.NT[i]);
     $("#hf").text(dataJson.HeaterPer[i]);
     $("#pump").text(dataJson.P1_SPEED[i]);
     $("#fdfan").text(dataJson.FD_SPEEDPer[i]);
     $("#idfan").text(dataJson.ID_SPEEDPer[i]);
     
   tt01ValTxt = paper.text(x + 439, y + 133.5, dataJson.TT01[i]).attr({"font-size": 18,"font-family": "digital-clock-font","fill": "#f20a0a","font-weight": "bold"});
   tt02ValTxt = paper.text(x+718,y+284,dataJson.TT02[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#f20a0a","font-weight":"bold"});
   p1MotorValTxt = paper.text(x+174,y+273.5,dataJson.P1_SPEED[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
   fdFanValTxt = paper.text(x+193,y+475,dataJson.FD_SPEEDPer[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
   ftValTxt = paper.text(x+342.5,y+456,dataJson.FT[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
   heaterValTxt = paper.text(x+335,y+253.5,dataJson.HeaterPer[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
 ntValTxt = paper.text(x+830,y+218.6,dataJson.NT[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});

   
//   if(dataJson.NT[i] > 0){ 
//	$("#nt").text("-"+dataJson.NT[i]);
//   ntValTxt = paper.text(x+830,y+218.6,"-"+dataJson.NT[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
//   }else{
//	$("#nt").text(dataJson.NT[i]);
//    ntValTxt = paper.text(x+830,y+218.6,dataJson.NT[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
//
//   }
   idFanValTxt = paper.text(x+1090,y+423,dataJson.ID_SPEEDPer[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
      
       if (i === 15) {
      setTimeout(() => afterSprayDryer(), time);
       }
     if (i === 45) {
        waterAnimate();
    }
     if(i === 67){
     
    }
     if(i === 118){
      
        motorGreen_img.remove();
        motorOff_img = paper.image("images/motorRed.png", (x + 176), (y + 205), 30, 30).toFront();
        
        animateMilkToWhite();            
          stopAnimation();
                 stopAnimation1();
                 
                   heaterRect.toFront();
 heaterRect.animate({ "fill":"#d1b0b0","opacity": 1},time*10);
         
    }
    if(i >= 121 && i <129){
         
       
         
       if(incFlg===1){
	     stopProcessInLoop();
        } 
       
       
     }
    

    if(dataJson.TT01[i] > 134){
       setTimeout(() => toggleSensor("sensor5", "red"));
    }else{
      setTimeout(() => toggleSensor("sensor5", "green"));
   }
   
  
}, i*(time*2.5)); // Delay increases with each iteration - later 2500 final

	
}
}

var incFlg = 1;



function stopProcessInLoop(){

    setTimeout(() => {
                // Step 4: Animate milk and update valves
//                animateMilkToWhite();
                valve_img1.toBack();
                valve_img.toFront();
                svDblock();

                valve_img.remove();
                valve_img1 = paper.image("images/svValve2G.png", (x + 720), (y + 5), 45, 50).toFront();

                setTimeout(() => {
                    // Step 5: Stop additional animations
//                    stopAnimation();
//                    stopAnimation1();
                    
                    
                    setTimeout(() => {
                        // Step 6: Trigger particle animations
                        animateParticles(x, y,100);
                       animateParticles1(x + 164, y - 67,100);
                         
                        setTimeout(() => {
                            // Step 7: Swap valve images
                            valve_img.toBack();
                            valve_img1.toFront();
                            stopAnimation();
                            stopAnimation1();
                            

                            setTimeout(() => {
                                // Step 8: Remove and recreate valve image
                                valve_img1.remove();
                                valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();

                                // Step 9: Repeat valve tasks (if needed)
                                setTimeout(() => {
                                    
                                    valve_img.toBack();
                                    valve_img1.toFront();

                                    setTimeout(() => {
//                                        stopAnimationRepeat();
//                                        stopAnimation1Repeat();
                                       
                                        setTimeout(() => {
                                           animateParticles(x, y,100);
                                             animateParticles1(x + 164, y - 67,100);
//                                            startParticleAnimation();
                                            setTimeout(() => {
                                                valve_img.toBack();
                                                valve_img1.toFront();
                                                stopAnimation();
                                                stopAnimation1();
//												stopParticleAnimation();
                                                setTimeout(() => {
                                                    // Final valve recreation
                                                    valve_img1.remove();
                                                    valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
                                                    
                                                     setTimeout(() => {
                                    
                                    valve_img.toBack();
                                    valve_img1.toFront();

                                    setTimeout(() => {
//                                                stopAnimationRepeat();
//                                                stopAnimation1Repeat();
//                                        stopParticleAnimation();
                                        setTimeout(() => {
                                          animateParticles(x, y,100);
  										animateParticles1(x + 164, y - 67,100);
                                           
                                            setTimeout(() => {
                                                valve_img.toBack();
                                                valve_img1.toFront();
                                                stopAnimation();
                                                stopAnimation1();
//                                                 stopParticleAnimation();
                                                setTimeout(() => {
                                                    // Final valve recreation
                                                    valve_img1.remove();
                                                    valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
                                                    
                                                    
                                                    setTimeout(() => {
                                                      
					       onFan_img.remove();
						  offFan_img = paper.image("images/offMotor.png", (x + 170), (y + 335), 50, 30).toFront();
                                    stopRotation();                  
                                                  
                                                  setTimeout(() => {
                                                  animateAirRemove();
                                                 
                                                      setTimeout(() => {
																animateToOriginal(0);
																 setTimeout(() => {
																afterSprayDryerRemove();
																
																setTimeout(() => {
																 offFan_on.remove();
                       offFan_img1 = paper.image("images/offMotor.png", (x + 1080), (y + 287), 50, 30).toFront();
                      											shOff.toFront(); 	
                      											$("#datasheet,#graph,#btnResult").prop("disabled",false); 
                      											$("#reset").prop("disabled",false);
                      											$("#startBtn").prop("disabled",true); 				
														 }, time * 2); 	
																 }, time ); 
                                                     }, time ); 
                                                     }, time);   
                                                   }, time );  
                                                    
                                                }, time ); // Delay for final valve recreation
                                            }, time ); // Delay for swapping valve images
                                        }, time); // Delay for particle animations
                                    }, time ); // Delay for stopping animations
                                }, time ); // Delay for second valve sequence
                                                    
                                                 
                                                }, time ); // Delay for final valve recreation
                                            }, time ); // Delay for swapping valve images
                                        }, time ); // Delay for particle animations
                                    }, time ); // Delay for stopping animations
                                }, time ); // Delay for second valve sequence
                            }, time ); // Delay for removing and recreating valve image
                        }, time ); // Delay for swapping valve images
                    }, time ); // Delay for particle animations
                }, time ); // Delay for stopping animations
            }, time); // Delay for milk animation and valve tasks
            
incFlg++;

}


  //text box
function rectTextBoxes(x,y){
var textRect = paper.rect((x+80),(y+230),60,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})  
 } 
  

	function animateFill(step) {
// Define the two gradient colors
const color1 = "#ed4432"; // First shade (light beige)
const color2 = "#e5d0b7"; // Second shade (red)

// Calculate the gradient stops for the current step
const mixRatio = step / 100; // Ratio increases with each step
const topColor = mixColors(color2, color2, mixRatio); // Gradual transition for the top
const bottomColor = mixColors(color2, color1, mixRatio + 0.3 > 1 ? 1 : mixRatio + 0.3); // Stronger shift for the bottom color

// Create the gradient string (top-to-bottom gradient)
const gradientString = `270-${bottomColor}-${topColor}`;

// Update the fill attribute of the drying chamber
sprayOutline.attr({
    fill: gradientString, // Apply the updated gradient
});

// Continue the animation until the step reaches 100
if (step < 100) {
    const stepIncrement = 7; // Step increments by 10 for faster animation
    const delayPerStep = 100; // Delay in ms between each step

    setTimeout(() => animateFill(step + stepIncrement), delayPerStep*100); // Recursive call
} else {
    // Ensure the final state is a gradient from color1 to color2
    sprayOutline.attr({
        fill: `270-${color1}-${color2}`, // Final gradient
    });

    
}



 // Call the next function after completion
}



	// Helper function to mix two colors based on a ratio  
	function mixColors(color1, color2, ratio) {  
	    // Convert colors to RGB  
	    let rgb1 = hexToRgb(color1);  
	    let rgb2 = hexToRgb(color2);  
	
	    // Mix each channel based on the ratio  
	    let r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);  
	    let g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);  
	    let b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);  
	
	    // Convert back to hex  
	    return rgbToHex(r, g, b);  
	}  
	
	function hexToRgb(hex) {  
	    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")  
	    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;  
	    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);  
	
	    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);  
	    return result ? {  
	        r: parseInt(result[1], 16),  
	        g: parseInt(result[2], 16),  
	        b: parseInt(result[3], 16)  
	    } : null;  
	}  
	
	function rgbToHex(r, g, b) {  
	    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');  
	}  


// Start button logic
 var motorGreen_img ;
 var onFan_img;
 var offFan_on;

 document.getElementById("startBtn").addEventListener("click", function () {
	 
	 
//	 startTimer();
//	  updateCounter();
//	  
	 startCount++;
  // Configure and show the modal
  $("#modelDialog1").addClass("modal-lg");
  $("#modelTitle1").html("Check the Components");
  var modelBody1=''
	  +'<b>Before starting the plant check whether<br>- All valves are closed <br>' 
	  +'- All pumps are switched off<br>- The instrument air, electricity and other required utilities are available <br>'
	 +' - The production schedule mandates to produce and <br>'
	 +' - Raw material is available</b>'
	
  $("#modelBody1").html(modelBody1);
  
  if(startCount>1){
	   time = selectedValue;
//		 console.log(" start time "+time);
//		 console.log("selectedValue after start "+selectedValue);
	  modelBody1+=''
		 
		  +' <div class="panel">'
			 +' <h5>Set Simulation Time</h5>'
			 +' <div class="form-check form-check-inline">'
			 +'   <input class="form-check-input" type="radio" name="plantTime" id="twoMinutes" value="300">'
			 +'   <label class="form-check-label radio-label" for="twoMinutes">2 min</label>'
			 +'  </div>'
		  +'  <div class="form-check form-check-inline">'
		  +'    <input class="form-check-input" type="radio" name="plantTime" id="threeMinutes" value="500">'
		  +'    <label class="form-check-label radio-label" for="threeMinutes">3 min</label>'
		  +'  </div>'
		  +'  <div class="form-check form-check-inline">'
		  +'    <input class="form-check-input" type="radio" name="plantTime" id="fourMinutes" value="700">'
		  +'    <label class="form-check-label radio-label" for="fourMinutes">4 min</label>'
		  +'  </div>'
		  +'  <div class="form-check form-check-inline">'
		  +'    <input class="form-check-input" type="radio" name="plantTime" id="fiveMinutes" value="1000">'
		  +'    <label class="form-check-label radio-label" for="threeMinutes">5 min</label>'
		  +'  </div>'
		  +'  <div class="form-check form-check-inline">'
		  +'    <input class="form-check-input" type="radio" name="plantTime" id="sixMinutes" value="1400">'
		  +'    <label class="form-check-label radio-label" for="fourMinutes">6 min</label>'
		  +'  </div>'
//		  +'	  <div id="selectedTime">Selected Time: None</div>'
		  +'	</div>'
		  $("#modelBody1").html(modelBody1);
  }
 
  
  
  
  $("#modelBody1").css({
	            'font-weight': '500',            // Add padding
	            'font-family': 'math',       // Font style
	            'font-size': '16px',          // Font size
	            'color': '#0c55a3'               // Text color
	        });

  $("#reset").prop("disabled",false);
  $("#startBtn").prop("disabled",true);
  $("#datasheet").prop("disabled",true);
  // Stop any ongoing animations or timers
  const radioButtons = document.querySelectorAll('input[name="plantTime"]');
  const selectedTimeDiv = document.getElementById('selectedTime');
  
  // Add event listeners to each radio button
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
//      selectedTimeDiv.textContent = `Selected Time: ${radio.value}`;
//      console.log(${radio.value});
       selectedValue = $('input[name="plantTime"]:checked').val();
//      console.log("on change event "+selectedValue);
      time = selectedValue;
//		 console.log(" start time "+time);
//		 console.log("selectedValue after start "+selectedValue);
//      $('#selectedTime').text(`Selected Time: ${selectedValue}`);
     
    });
  });
//  stopAnimationsAndTimers();
   
  // Clear previous event listeners to avoid duplicates
  $("#myModal1").off("hidden.bs.modal").on("hidden.bs.modal", function () {
//    console.log("Modal has been closed!");

    // Remove the backdrop if it still exists
    $(".modal-backdrop").remove();

    // Proceed with further functionality
    if (typeof stOn !== "undefined") {
      stOn.toFront();
    }

    resetFlg = 0; // Reset the flag
//    console.log("resetFlg start " + resetFlg);

    let completedAnimations = 0;

    if (resetFlg === 0) {
      // Trigger animations with setTimeout
      setTimeout(() => toggleSensor("sensor8", "green"), time);
      
      // Remove images if they exist
      if (offFan_img) offFan_img.remove();
      if (offFan_img1) offFan_img1.remove();

      setTimeout(() => stOff.toFront(), time * 2);
      setTimeout(() => rnOn.toFront(), time * 2);

      // Add new images and bring to front
      onFan_img = paper.image("images/onMotor.png", x + 170, y + 335, 50, 30).toFront();
      offFan_on = paper.image("images/onMotor.png", x + 1080, y + 287, 50, 30);

      // Trigger animation and check completion
      animateAir(() => {
        completedAnimations++;
        checkCompletion();
      });

      // Execute additional logic
      iterateTT01();
    } else {
//      console.log("No animation triggered due to resetFlg.");
    }
  });

  // Show the modal
  $("#myModal1").modal("show");
  
  $("#modalClose").click(function(){
	 $("#myModal1").modal("hide");
})
  // Close the modal after a delay
//   $("#myModal1").modal("hide") // Close after 1 second
});




 
 
 
//document.getElementById("startBtn").addEventListener("click", function () {
//  // Stop any ongoing animations before starting the new animation sequence
//  
//  
//                $("#modelDialog1").addClass("modal-md");
//				$("#modelTitle1").html("Error box");
//				  $("#modelBody1").html("<b>Check the Components</b> ");
//				  $("#modelBody1").css("color","red");
//  
//  stopAnimationsAndTimers();
//
//  // Proceed with the animation sequence
//  stOn.toFront();
//  resetFlg =0;
//  
//  console.log("resetFlg start "+resetFlg);
//  
//  // Ensure that the counter for completed animations starts at 0
//  let completedAnimations = 0;
//   
//   if(resetFlg == 0){
//  // Example of your animation setup (using timeouts to trigger sensor changes)
//  setTimeout(() => toggleSensor("sensor8", "green"), time);
//  setTimeout(() => toggleSensor("sensor4", "red"), time * 3);
//
//  // Remove previous images if necessary
//  offFan_img.remove();
//  offFan_img1.remove();
//
//  // Trigger the next animations (with time delays)
//  setTimeout(() => stOff.toFront(), time * 2);
//  setTimeout(() => rnOn.toFront(), time * 2);
//
//  // Place new fan images in front
//  onFan_img = paper.image("images/onMotor.png", (x + 170), (y + 335), 50, 30).toFront();
//  offFan_on = paper.image("images/onMotor.png", (x + 1080), (y + 287), 50, 30);
//
//   // Start the animations again (like animateAir)
//  animateAir(() => {
//    completedAnimations++;
//    checkCompletion();
//  });
//
//  // Call other functions as necessary (like iterateTT01)
//  iterateTT01();
//  }else{
//	console.log("no animation");
//}
//});
//

// Completion check function
  function checkCompletion() {
	if(resetFlg == 0){
    var finalConnection = paper.rect((x + 575), (y + 134), 7, 0).attr({ "fill": heatedLiquid, "stroke": "none" });
    finalConnection.animate({ height: 21, y: y + 134 }, time, function () {
      animateFill(0); // Make sure the fill animation is executed correctly
    });
    couple_img.toFront();
    }
  }

 

//Remove after spray dryer

function afterMotorRemove(){
	if (resetFlg === 0) {
 var motorRect1 = paper.rect(x + 1062, y + 307, 7, 0).attr({ fill: "#fff", stroke: "none" });
  exhaustCap_img1.toFront();
  motorRect1.animate({height: 205, y: y + 102}, (time/2), "linear", function () {
     
   	  });
   	  }
}

function afterScrubberRemove(){
var scrubberRect1 = paper.rect(x + 926, y + 261, 7, 0).attr({ fill: "#fff", stroke: "none" }); 
var scrubberRect2 = paper.rect(x + 926, y + 190, 0, 7).attr({ fill: "#fff", stroke: "none" });
var scrubberRect3 = paper.rect(x + 994, y + 190, 7, 0).attr({ fill: "#fff", stroke: "none" });
var scrubberRect4 = paper.rect(x + 994, y + 340.5, 0,7).attr({ fill: "#fff", stroke: "none" }); 

 scrubberRect1.animate({ height: 69, y: y + 192 }, (time/2), "linear", function () {
   scrubberRect2.animate({ width:75 }, (time/2), "linear", function () {
	 scrubberRect3.animate({ height: 157 }, (time/2), "linear", function () {
		scrubberRect4.animate({ width: 58 }, (time/2), "linear", function () {

			 afterMotorRemove();
   	  });
   	 });
   });
});
}

function afterCycloneRemove(){
	if (resetFlg === 0) {
var cycloneRect1 = paper.rect(x + 762.5, y + 358, 7, 0).attr({ fill: "#fff", stroke: "none" });
var cycloneRect2 = paper.rect(x + 762.5, y + 298.5, 0, 7).attr({ fill: "#fff", stroke: "none" });
var cycloneRect3 = paper.rect(x + 850, y + 299.2, 0, 7).attr({ fill: "#fff", stroke: "none" });

 cycloneRect1.animate({ height: 58, y: y + 300 }, (time/2), "linear", function () {
	cycloneRect2.animate({ width: 43.5 }, (time/2), "linear", function () {
		cycloneRect3.animate({ width: 40 }, (time/2), "linear", function () {
			 afterScrubberRemove();
		   });
		});
	 });
}
}


function afterSprayDryerRemove(callback) {
var sprayRect1 = paper.rect(x + 576, y + 441, 8, 0).attr({ fill: "#fff", stroke: "none" });
var sprayRect2 = paper.rect(x + 576, y + 469, 0, 8).attr({ fill: "#fff", stroke: "none" });
var sprayRect3 = paper.rect(x + 649.5, y + 468.5, 8, 0).attr({ fill: "#fff", stroke: "none" });
var sprayRect4 = paper.rect(x + 649.5, y + 389, 0, 8).attr({ fill: "#fff", stroke: "none" });

sprayRect1.animate({ height: 34 }, (time/2), "linear", function () {
    sprayRect2.animate({ width: 81 }, (time/2), "linear", function () {
        sprayRect3.animate({ height: 76, y: y + 391.5 }, (time/2), "linear", function () {
            sprayRect4.animate({ width: 86.5 }, (time/2), "linear", function () {
                    containerValve_img11.remove();
                    containerG.remove();
                  
 containerValve_img = paper.image("images/containerValve.png", (x + 907), (y + 390), 70, 30).toFront();
 containerValve_img1 = paper.image("images/containerValve.png", (x + 744), (y + 465), 70, 30).toFront();

                    
                    
                  afterCycloneRemove();
                if (callback) callback(); // Notify when done
            });
        });
    });
});
}


//airColor

function afterMotor(){
 var motorRect1 = paper.rect(x + 1062, y + 307, 7, 0).attr({ fill: airColor, stroke: "none" });
  exhaustCap_img1.toFront();
  motorRect1.animate({height: 205, y: y + 102}, time, "linear", function () {
	 
   	  });
}

function afterScrubber(){
if (resetFlg === 0) {
containerValve_img.remove();
 containerG = paper.image("images/containerGreen.png", (x + 907), (y + 390), 70, 30).toFront();

var scrubberRect1 = paper.rect(x + 926, y + 261, 7, 0).attr({ fill: coldAir, stroke: "none" }); 
var scrubberRect2 = paper.rect(x + 926, y + 190, 0, 7).attr({ fill: coldAir, stroke: "none" });
var scrubberRect3 = paper.rect(x + 994, y + 190, 7, 0).attr({ fill: coldAir, stroke: "none" });
var scrubberRect4 = paper.rect(x + 994, y + 340.5, 0,7).attr({ fill: coldAir, stroke: "none" }); 

 scrubberRect1.animate({ height: 69, y: y + 192 }, time, "linear", function () {
   scrubberRect2.animate({ width:76 }, time, "linear", function () {
	 scrubberRect3.animate({ height: 157 }, time, "linear", function () {
		scrubberRect4.animate({ width: 58 }, time, "linear", function () {
			 afterMotor();
   	  });
   	 });
   });
});
}
}

function afterCyclone(){

 containerValve_img1.remove();
 containerValve_img11 = paper.image("images/containerGreen.png", (x + 744), (y + 465), 70, 30).toFront();

var cycloneRect1 = paper.rect(x + 762.5, y + 358, 7, 0).attr({ fill: mediumTempAir, stroke: "none" });
var cycloneRect2 = paper.rect(x + 762.5, y + 298.5, 0, 7).attr({ fill: mediumTempAir, stroke: "none" });
var cycloneRect3 = paper.rect(x + 850, y + 299.2, 0, 7).attr({ fill: mediumTempAir, stroke: "none" });

 cycloneRect1.animate({ height: 58, y: y + 300 }, time, "linear", function () {
	cycloneRect2.animate({ width: 43.5 }, time, "linear", function () {
		cycloneRect3.animate({ width: 40 }, time, "linear", function () {
			 afterScrubber();
		   });
		});
	 });
}


function afterSprayDryer(callback) {
	if (resetFlg === 0) {
var sprayRect1 = paper.rect(x + 576, y + 441, 8, 0).attr({ fill: afterSprayAirColor, stroke: "none" });
var sprayRect2 = paper.rect(x + 576, y + 469, 0, 8).attr({ fill: afterSprayAirColor, stroke: "none" });
var sprayRect3 = paper.rect(x + 649.5, y + 468.5, 8, 0).attr({ fill: afterSprayAirColor, stroke: "none" });
var sprayRect4 = paper.rect(x + 649.5, y + 389, 0, 8).attr({ fill: afterSprayAirColor, stroke: "none" });

sprayRect1.animate({ height: 35 }, time, "linear", function () {
    sprayRect2.animate({ width: 81 }, time, "linear", function () {
        sprayRect3.animate({ height: 80, y: y + 388.5 }, time, "linear", function () {
            sprayRect4.animate({ width: 87.5 }, time, "linear", function () {
                  afterCyclone();
                if (callback) callback(); // Notify when done
            });
        });
    });
});
 }
}


//Updated animateAir with callback

var airRect = paper.rect(x + 50.2, y + 400, 160, 8).attr({ fill: airColor, stroke: "none" }).toBack();

var airRect3r,airRect4r;
//animateAirRemove();
function animateAirRemove() {
var airRect1 = paper.rect(x + 180, y + 400, 0, 8).attr({ fill: "#fff", stroke: "none" });
var airRect2 = paper.rect(x + 360.5, y + 400, 0, 8).attr({ fill: "#fff", stroke: "none" });
 airRect3r = paper.rect(x + 385.5, y + 410, 7, 0).attr({ fill: "#fff", stroke: "none" });
 airRect4r = paper.rect(x + 384.8, y + 142, 8, 0).attr({ fill: "#fff", stroke: "none" });
var airRect5 = paper.rect(x + 385, y + 102, 0, 8).attr({ fill: "#fff", stroke: "none" });

cBase.toFront();
fdFan_img.toFront();
//heater_img.toBack();

n1_img.toFront();
n2_img.toFront();

airRect3r.toFront();
airRect4r.toFront();

// heaterRect.toFront();
// heaterRect.animate({ "fill":"#d1b0b0","opacity": 1},1000); 
 
airRect1.animate({ width: 133 }, time, "linear", function () {
    airRect2.animate({ width: 31 }, time, "linear", function () {
        airRect3r.animate({ height: 182, y: y + 219 }, time, "linear", function () {
           
//                airRect4.toBack();
                airRect4r.animate({ height: 40, y: y + 102 }, time, "linear", function () {
                     compressedAirRemoved();
                    airRect5.animate({ width: 190 }, time, "linear", function () {

                       finalConnection = paper.rect((x + 575), (y + 134), 7, 0).attr({ "fill": "#fff", "stroke": "none" });
                  finalConnection.animate({ height: 21, y: y + 134 }, time, function () {
                        couple_img.toFront();
//                        heater_img.toFront();
//                        callback(); // Notify that animateAir is done
                        });
                    });
                });
        
        });
    });
});
}



function animateAir(callback) {
var airRect1 = paper.rect(x + 180, y + 400, 0, 8).attr({ fill: airColor, stroke: "none" });
var airRect2 = paper.rect(x + 360.5, y + 400, 0, 8).attr({ fill: airColor, stroke: "none" });
var airRect3 = paper.rect(x + 385.5, y + 406, 7, 0).attr({ fill: airColor, stroke: "none" });
var airRect4 = paper.rect(x + 384.8, y + 145, 8, 0).attr({ fill: fireColor, stroke: "none" });
var airRect5 = paper.rect(x + 385, y + 102, 0, 8).attr({ fill: fireColor, stroke: "none" });

cBase.toFront();
fdFan_img.toFront();
n1_img.toFront();
n2_img.toFront();

rotateInfinite();
 airRect3.toBack();
 airRect4.toBack();
 
airRect1.animate({ width: 136.3 }, time, "linear", function () {
    airRect2.animate({ width: 33 }, time, "linear", function () {
        airRect3.animate({ height: 190, y: y + 216 }, time, "linear", function () {
            // Start compressedAir here
      heaterRect.animate({ "fill": "#fff", "opacity": 0.1 }, time*100);
      
      setTimeout(() => toggleSensor("sensor3", "green"), time);
        if(resetFlg ==0){
            compressedAir();
            }

//                airRect4.toBack();
                airRect4.animate({ height: 42, y: y + 103 }, time*2.5, "linear", function () {
        
                    airRect5.animate({ width: 190 }, time*2.5, "linear", function () {
                        couple_img.toFront();
                     
                        callback(); // Notify that animateAir is done
                    });
                });

        });
    });
});


}


function compressedAir(callback) {
	
var compressAir1 = paper.rect((x + 930), (y + 70), 0, 8).attr({ "fill": compressedAirColor, stroke: "none" });
var compressAir2 = paper.rect((x + 868), (y + 70), 0, 8).attr({ "fill": compressedAirColor, stroke: "none" });
var compressAir3 = paper.rect((x + 823), (y + 72), 7, 0).attr({ "fill": compressedAirColor, "stroke": "none" });
var compressAir4 = paper.rect((x + 750 + 80), (y + 40), 0, 5.5).attr({ "fill": compressedAirColor, "stroke": "none" });
var compressAir4Simul = paper.rect((x + 750 + 80), (y + 103), 0, 5.5).attr({ "fill": compressedAirColor, "stroke": "none" });
var compressAir5 = paper.rect((x + 720), (y + 103), 0, 5.5).attr({ "fill": compressedAirColor, "stroke": "none" });
var compressAir5Simu1 = paper.rect((x + 720), (y + 41), 0, 5.5).attr({ "fill": compressedAirColor, "stroke": "none" });
valve_img1.toFront();
valve_img.toFront();

couple_img.toFront();
compressAir1.animate({ x: (x + 930 - 40), width: 40 }, time, function () {
 
    compressAir2.animate({ x: (x + 868 - 42), width: 42 }, time, function () {
        compressAir3.animate({ height: 68, y: (y + 80 - 40) }, time, function () {
            compressAir4.animate({ width: 80, x: (x + 750) }, time);
          
            compressAir4Simul.animate({ width: 80, x: (x + 750) }, time, function () {
  valve_img1 = paper.image("images/svValve2G.png", (x + 720), (y + 67), 45, 50);

                compressAir5.animate({ width: 120, x: (x + 600) }, time, function () {

                    couple_img.toFront();
                    callback(); // Notify that compressedAir is done
                });
            });
        });
    });
});
}


function animateSlantedFill(path, startX, startY) {
    var steps = 10; // Number of steps for the animation
    var currentStep = 0;
    var interval = 500 / steps; // Time for each step

    // Recursive function to update the path incrementally
    function step() {
        if (currentStep <= steps) {
            var height = 60 * (currentStep / steps); // Incremental height
            path.attr({
                path: "M" + startX + " " + startY +
                      "l -" + height + " " + height +
                      "l 5 5 l " + height + " -" + height + " z"
            });
            currentStep++;
            setTimeout(step, interval);
        }
    }
    step(); // Start the animation
}

var rect1 = paper.rect(x + 55.6, y + 151, 7, 46).attr({ fill: milkyColor, stroke: "none" });
var rect2 = paper.rect(x + 55.5, y + 153.2 + 40, 57.2, 6).attr({ fill: milkyColor, stroke: "none" });
//Updated waterAnimate with callback

var gifPath = "images/water-sprinkler-system-black.gif"; // Adjust the path according to your file structure
                var gif = paper.image(gifPath, (x + 548), (y + 185), 60, 70).attr({ opacity: 0.1 }).hide();
                
var stopDuration = 0;
var htt1 = 90;
var ptt = 1;

//waterAnimate();
function waterAnimate(callback) {
  
 
   
  motorOff_img.remove();
  motorGreen_img = paper.image("images/motorGreen.png", (x + 178), (y + 207), 24, 24).toFront();

//    var totalDuration = time * 40; // Total animation duration
//	var targetHeight = 0; // Final height
//	var finalY = y + 150; // Final Y position
//    
    var delay = time*2;
//    
//	// Determine the time to stop animation at y + 80
//	var stopY = y + 140; // The Y position at which you want to stop
//	var distanceToStop = stopY - (y + 50); // Distance to y + 80
//	var percentageToStop = distanceToStop / (finalY - (y + 50)); // Fraction of total distance
//	 stopDuration = percentageToStop * totalDuration; // Time required to reach y + 80
//	// Animate the water
//	water.animate({ height: 0, y: finalY }, totalDuration+(time*2), "linear");

  
  intFact = 1;
   
   var b = paper.path('M' + (x + 60) + ' ' + (y + 50 ) + 'l 0 0').attr({ 'stroke': "#fff", 'stroke-width': '98' });
	level = b.animate({
		path: "M" + (x + 60) + " " + (y + 50 ) + "  l 0  " + (htt1) + "", 'stroke-width': '98', 'stroke': "#fff",
		opacity: 1
	}, time*185);
 var pinterval = setInterval(function() {
//		lltIndicator.toFront();
//		lhtIndicator.toFront();
		if (ptt > 0 && ptt < 95) {
			if (ptt == 12 ) {
				toggleSensor("sensor1", "green", time);
			}
			if (ptt == 90) {
				toggleSensor("sensor2", "red", time);
			}
			ptt = ptt + intFact;
//			console.log("ptt "+ptt);
		} else {
			clearInterval(pinterval);
//			console.log("Interval cleared");
		}
	}, time*2);
  
      
    
//	stopAnimationSeq();
	
   couple_img.toFront();

var rect3 = paper.rect(x + 274, y + 227.1, 0, 5.5).attr({ fill: milkyColor, stroke: "none" });
rect3.animate({ width: 45 }, delay, "linear", function () {
//   setTimeout(() => toggleSensor("sensor1", "green"), time);
    var rect4 = paper.rect(x + 312.3, y + 230, 6, 0).attr({ fill: milkyColor, stroke: "none" });
    rect4.animate({ height: 170, y: y + 60 }, delay, "linear", function () {
        
        var rect5 = paper.rect((x + 316), (y + 59.5), 0, 7).attr({ fill: milkyColor, stroke: "none" });
        rect5.animate({ width: 265 }, delay, "linear", function () {
            var rect6 = paper.rect((x + 575), (y + 60), 6.5, 0).attr({ fill: milkyColor, stroke: "none" });
            rect6.animate({ height: 15 }, delay, "linear", function () {
                couple_img.toFront();

                // Show GIF
               
                gif.show();
                
                // Delay before calling animateParticles
                setTimeout(() => {
                    animateParticles(x, y,time); // First animation

                    // Delay before calling animateParticles1
                    setTimeout(() => {
                        animateParticles1(x + 164, y - 67,time); // Second animation
                    }, time * 3.5); // Delay before calling animateParticles1 (in ms)
                    
                }, time * 3); // Delay before calling animateParticles (in ms)
            });
        });
    });
});


fdFan_img.toFront();
Pipe_img.toFront();
}


function animateMilkToWhite() {

rnOn.toBack(); 
rnOff.toFront();

shOn.toFront(); 
// Animate rect3
var rect3 = paper.rect(x + 274, y + 227.1, 0, 5.5).attr({ fill: "#ffffff", stroke: "none" });
rect3.animate({ width: 45 }, time, "linear", () => {
    rect3.attr({ fill: "#ffffff" }); // Ensure final color

    // Animate rect4
    var rect4 = paper.rect(x + 312.3, y + 230, 6, 0).attr({ fill: "#ffffff", stroke: "none" });
    rect4.animate({ height: 170, y: y + 60 }, time, "linear", () => {
        rect4.attr({ fill: "#ffffff" }); // Ensure final color

        // Animate rect5
        var rect5 = paper.rect(x + 316, y + 59.5, 0, 7).attr({ fill: "#ffffff", stroke: "none" });
        rect5.animate({ width: 265 }, time, "linear", () => {
            rect5.attr({ fill: "#ffffff" }); // Ensure final color

            // Animate rect6
            var rect6 = paper.rect(x + 575, y + 60, 6.5, 0).attr({ fill: "#ffffff", stroke: "none" });
            rect6.animate({ height: 15 }, time, "linear", () => {
                rect6.attr({ fill: "#ffffff" }); // Ensure final color
                 gif.hide();
                
            });
        });
    });
});
}


function compressedAirRemoved(){
 
// valve_img.remove();
//valve_img1.toFront();

// valve_img1 = paper.image("images/svValve2G.png", (x + 720), (y + 5), 45, 50).toFront();
var compressAir5 = paper.rect((x + 720), (y + 103), 0, 5.5).attr({ "fill": "#fff", "stroke": "none" });
compressAir5Simu1 = paper.rect((x + 720), (y + 41), 0, 5.5).attr({ "fill": "#fff", "stroke": "none" });

	compressAir5Simu1.animate({ width: 80, x: (x + 640) }, time, function () {
                  var compressAir5Simu2 = paper.path("M" + (x + 642) + " " + (y + 40) + "l -60 60 l 5 5 l 60 -60 z")
 						.attr({ "fill": "#fff", "stroke": "none" }); 
				  compressAir5.animate({ width: 120, x: (x + 600) }, time, function () {

                    couple_img.toFront();
                    callback(); // Notify that compressedAir is done
                });
				    animateSlantedFill(compressAir5Simu2, x + 642, y + 40);
				     
                    couple_img.toFront();			  
   });
 
}

function svDblock(){
valve_img.remove();
//valve_img1.toFront();

 valve_img1 = paper.image("images/svValve2G.png", (x + 720), (y + 5), 45, 50).toFront();
var compressAir5 = paper.rect((x + 720), (y + 103), 0, 5.5).attr({ "fill": "#fff", "stroke": "none" });
compressAir5Simu1 = paper.rect((x + 720), (y + 41), 0, 5.5).attr({ "fill": compressedAirColor, "stroke": "none" });

	compressAir5Simu1.animate({ width: 80, x: (x + 640) }, time, function () {
                  var compressAir5Simu2 = paper.path("M" + (x + 642) + " " + (y + 40) + "l -60 60 l 5 5 l 60 -60 z")
 						.attr({ "fill": compressedAirColor, "stroke": "none" }); 
				  compressAir5.animate({ width: 120, x: (x + 600) }, time, function () {

                    couple_img.toFront();
                    callback(); // Notify that compressedAir is done
                });
				    animateSlantedFill(compressAir5Simu2, x + 642, y + 40);
				     
                    couple_img.toFront();			  
   });
}



function stopAnimationSeq() {
// Stop the animation before the tank becomes empty
var totalDuration = time * 40; // Total animation duration
var targetHeight = 0; // Final height
var finalY = y + 150; // Final Y position

// Determine the time to stop animation at y + 140

var stopY = y + 140;


var distanceToStop = stopY - (y + 50); // Distance to stop position
var percentageToStop = distanceToStop / (finalY - (y + 50)); // Fraction of total distance
var stopDuration = percentageToStop * totalDuration; // Time required to reach stopY

 
//if(stopY == (y+130)){
// console.log("sensor2");

//}

console.log("stopDuration " + stopDuration);
  
   setTimeout(() => toggleSensor("sensor2", "red"), stopDuration-1500);
  
// Start the sequence
setTimeout(() => {
    // Step 1: Stop the water animation
   
    water.stop();
    rnOn.toBack(); 
     rnOff.toFront();
      shOn.toFront();	
    
//    setTimeout(() => {
//        // Step 2: Change motor image
////        motorGreen_img.remove();
////        motorOff_img = paper.image("images/motorRed.png", (x + 176), (y + 205), 30, 30).toFront();
//
//        setTimeout(() => {
//            // Step 3: Update heater-related visuals
////            heater_img.toBack();
////            airRect3.toBack();
////            airRect4.toBack();
////            
////             heater_img.toBack();
////            heaterRect.toFront();
////            heaterRect.animate({ "fill": "#d1b0b0", "opacity": 1 }, stopDuration + 1000);
//
//            setTimeout(() => {
//                // Step 4: Animate milk and update valves
//                animateMilkToWhite();
//                valve_img1.toBack();
//                valve_img.toFront();
//                svDblock();
//
//                valve_img.remove();
//                valve_img1 = paper.image("images/svValve2G.png", (x + 720), (y + 5), 45, 50).toFront();
//
//                setTimeout(() => {
//                    // Step 5: Stop additional animations
//                    stopAnimation();
//                    stopAnimation1();
//                    
//                    
//                    setTimeout(() => {
//                        // Step 6: Trigger particle animations
//                        animateParticles(x, y);
//                        animateParticles1(x + 164, y - 67);
//                         
//                        setTimeout(() => {
//                            // Step 7: Swap valve images
//                            valve_img.toBack();
//                            valve_img1.toFront();
//                            stopAnimation();
//                            stopAnimation1();
//                            
//
//                            setTimeout(() => {
//                                // Step 8: Remove and recreate valve image
//                                valve_img1.remove();
//                                valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
//
//                                // Step 9: Repeat valve tasks (if needed)
//                                setTimeout(() => {
//                                    
//                                    valve_img.toBack();
//                                    valve_img1.toFront();
//
//                                    setTimeout(() => {
//                                        stopAnimation();
//                                        stopAnimation1();
//                                       
//                                        setTimeout(() => {
//                                            animateParticles(x, y);
//                                            animateParticles1(x + 164, y - 67);
////                                            startParticleAnimation();
//                                            setTimeout(() => {
//                                                valve_img.toBack();
//                                                valve_img1.toFront();
//                                                stopAnimation();
//                                                stopAnimation1();
////												stopParticleAnimation();
//                                                setTimeout(() => {
//                                                    // Final valve recreation
//                                                    valve_img1.remove();
//                                                    valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
//                                                    
//                                                     setTimeout(() => {
//                                    
//                                    valve_img.toBack();
//                                    valve_img1.toFront();
//
//                                    setTimeout(() => {
//                                        stopAnimation();
//                                        stopAnimation1();
////                                        stopParticleAnimation();
//                                        setTimeout(() => {
//                                            animateParticles(x, y);
//                                            animateParticles1(x + 164, y - 67);
//                                           
//                                            setTimeout(() => {
//                                                valve_img.toBack();
//                                                valve_img1.toFront();
//                                                stopAnimation();
//                                                stopAnimation1();
////                                                 stopParticleAnimation();
//                                                setTimeout(() => {
//                                                    // Final valve recreation
//                                                    valve_img1.remove();
//                                                    valve_img = paper.image("images/svValve2.png", (x + 720), (y + 5), 45, 50).toFront();
//                                                    
//                                                    
//                                                    setTimeout(() => {
//                                                      
//					       onFan_img.remove();
//						  offFan_img = paper.image("images/offMotor.png", (x + 170), (y + 335), 50, 30).toFront();
//                                    stopRotation();                  
//                                                  
//                                                  setTimeout(() => {
//                                                  animateAirRemove();
//                                                 
//                                                      setTimeout(() => {
//																animateToOriginal(0);
//																 setTimeout(() => {
//																afterSprayDryerRemove();
//																
//																setTimeout(() => {
//																 offFan_on.remove();
//                       offFan_img1 = paper.image("images/offMotor.png", (x + 1080), (y + 287), 50, 30).toFront();																	
//														 }, time * 2); 	
//																 }, time * 2); 
//                                                     }, time * 4); 
//                                                     }, time * 2);   
//                                                   }, time * 2);  
//                                                    
//                                                }, time * 2); // Delay for final valve recreation
//                                            }, time * 2); // Delay for swapping valve images
//                                        }, time * 2); // Delay for particle animations
//                                    }, time *2); // Delay for stopping animations
//                                }, time * 2); // Delay for second valve sequence
//                                                    
//                                                 
//                                                }, time * 2); // Delay for final valve recreation
//                                            }, time * 2); // Delay for swapping valve images
//                                        }, time * 2); // Delay for particle animations
//                                    }, time * 2); // Delay for stopping animations
//                                }, time * 2); // Delay for second valve sequence
//                            }, time * 2); // Delay for removing and recreating valve image
//                        }, time * 2); // Delay for swapping valve images
//                    }, time * 2); // Delay for particle animations
//                }, time * 2); // Delay for stopping animations
//            }, time * 2); // Delay for milk animation and valve tasks
//        }, time * 2); // Delay for heater animation
//    }, time * 2); // Delay for motor image change
}, stopDuration); // Initial delay before stopping the water animation
}

function animateToOriginal(step) {
// Original gradient colors
const originalColor1 = "#e5d0b7"; // First color of the original gradient
const originalColor2 = "#9c9992"; // Second color of the original gradient
const currentColor1 = "#ed4432"; // Current first shade (e.g., redder tone)
const currentColor2 = "#ed4432"; // Current second shade (e.g., redder tone)

// Mix colors for each gradient stop
const mixedColor1 = mixColors(currentColor1, originalColor1, step / 100);
const mixedColor2 = mixColors(currentColor2, originalColor2, step / 100);

// Create the gradient string
const gradientString = `90-${mixedColor1}-${mixedColor2}`;

// Update the fill attribute
sprayOutline.attr({
    fill: gradientString,
});

// Continue the animation until fully transitioned
if (step < 100) {
    setTimeout(() => animateToOriginal(step + 1), 20); // Adjust speed by changing interval (20ms)
}
}

//Helper function to mix two colors based on a ratio
function mixColors(color1, color2, ratio) {
const rgb1 = hexToRgb(color1);
const rgb2 = hexToRgb(color2);

// Interpolate RGB channels
const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);

return rgbToHex(r, g, b);
}

//Converts a hex color to an RGB object
function hexToRgb(hex) {
// Expand shorthand hex (e.g., #03F -> #0033FF)
const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result
    ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
      }
    : null;
}

//Converts RGB values to a hex color
function rgbToHex(r, g, b) {
return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}


let isAnimating = false; // Flag to control the animation
let currentFillLine = null; // Preserve the current fill line between starts and stops
let currentParticlesInRow = 0; // Preserve the current row's particle count
let totalParticlesCount = 0; // Preserve total particle count
var containerValve_img11;



function animateParticles(x, y,time1) {
// Initialize variables if starting for the first time
if (currentFillLine === null) {
    currentFillLine = y + 550; // Starting vertical fill line at the bottom of the shape
    currentParticlesInRow = 0;
    totalParticlesCount = 0;
}

//containerValve_img1.remove();
// containerValve_img11 = paper.image("images/containerGreen.png", (x + 744), (y + 465), 70, 30).toFront();

let shapeBottom = y + 554; // Bottom y-coordinate of the shape
let shapeTop = y + 500; // Top y-coordinate of the shape
let shapeLeft = x + 736; // Left x-bound of the shape
let shapeRight = x + 796; // Right x-bound of the shape
let particleRadius = 1.5;

let rowCapacity = Math.floor((shapeRight - shapeLeft) / (2 * particleRadius)); // Particles per row
let totalCapacity = rowCapacity * Math.floor((shapeBottom - shapeTop) / (2 * particleRadius)) * 1.26;

// Function to create random particles and animate them
function createParticles() {
    let numParticles = Math.floor(Math.random() * 2) + 4; // Randomly choose between 4 or 5 particles
    let spreadOffsets = [];

    for (let i = 0; i < numParticles; i++) {
        let randomX = Math.floor(Math.random() * (shapeRight - shapeLeft - 2 * particleRadius + 1)) + shapeLeft + particleRadius;
        spreadOffsets.push(randomX);
    }

    for (let i = 0; i < numParticles; i++) {
        let particle = paper.circle(x + 766, y + 502, particleRadius).attr({
            fill: "#948d84",
            stroke: "none"
        });

        particle.animate(
            {
                cx: spreadOffsets[i],
                cy: currentFillLine
            },
            time1*2,
            "linear",
            function () {
                particle.attr({
                    cy: particle.attrs.cy - 2
                });

                currentParticlesInRow++;
                totalParticlesCount++;

                if (currentParticlesInRow >= rowCapacity) {
                    currentFillLine -= 2;
                    currentParticlesInRow = 0;

                    if (currentFillLine < shapeTop) {
                        currentFillLine = shapeBottom;
                    }
                }

                if (totalParticlesCount >= totalCapacity || !isAnimating) {
                    clearInterval(interval);
                }
            }
        );
    }
}

isAnimating = true;
let interval = setInterval(() => {
    if (totalParticlesCount < totalCapacity && isAnimating) {
        createParticles();
    } else {
        clearInterval(interval);
    }
}, time1*3);
}

function stopAnimation() {
isAnimating = false;
}



let isAnimating1 = false;
let currentFillLine1 = null;
let currentParticlesInRow1 = 0;
let totalParticlesCount1 = 0;
var containerG;




function animateParticles1(x, y,time1) {
if (currentFillLine1 === null) {
    currentFillLine1 = y + 550;
    currentParticlesInRow1 = 0;
    totalParticlesCount1 = 0;
}

//containerValve_img.remove();
// containerG = paper.image("images/containerGreen.png", (x + 743.5), (y + 456.5), 70, 30).toFront();

let shapeBottom = y + 554;
let shapeTop = y + 500;
let shapeLeft = x + 736;
let shapeRight = x + 796;
let particleRadius = 1;

let rowCapacity = Math.floor((shapeRight - shapeLeft) / (2 * particleRadius));
let totalCapacity = rowCapacity * Math.floor((shapeBottom - shapeTop) / (2 * particleRadius)) * 0.9;

function createParticles() {
    let numParticles = Math.floor(Math.random() * 2) + 4;
    let spreadOffsets = [];

    for (let i = 0; i < numParticles; i++) {
        let randomX = Math.floor(Math.random() * (shapeRight - shapeLeft - 2 * particleRadius + 1)) + shapeLeft + particleRadius;
        spreadOffsets.push(randomX);
    }

    for (let i = 0; i < numParticles; i++) {
        let particle = paper.circle(x + 766, y + 502, particleRadius).attr({
            fill: "#948d84",
            stroke: "none"
        });

        particle.animate(
            {
                cx: spreadOffsets[i],
                cy: currentFillLine1
            },
            time1*2,
            "linear",
            function () {
                particle.attr({
                    cy: particle.attrs.cy - 1
                });

                currentParticlesInRow1++;
                totalParticlesCount1++;

                if (currentParticlesInRow1 >= rowCapacity) {
                    currentFillLine1 -= 2;
                    currentParticlesInRow1 = 0;

                    if (currentFillLine1 < shapeTop) {
                        currentFillLine1 = shapeBottom;
                    }
                }

                if (totalParticlesCount1 >= totalCapacity || !isAnimating1) {
                    clearInterval(interval);
                }
            }
        );
    }
}

isAnimating1 = true;
let interval = setInterval(() => {
    if (totalParticlesCount1 < totalCapacity && isAnimating1) {
        createParticles();
//        exhaustParticles();
        
       
        
    } else {
        clearInterval(interval);
    }
}, time1*2.5);

 setTimeout(() => {
   startParticleAnimation();
});

}

function stopAnimation1() {
isAnimating1 = false;
  
  if (particleInterval) {
    clearInterval(particleInterval); // Stop the interval
    particleInterval = null; // Reset the interval variable
}

// Stop all ongoing particle animations
particles.forEach((particle) => {
    particle.circle.stop(); // Stop the individual particle animation
    particle.circle.remove(); // Optionally, remove the particle immediately
});

// Clear the particles array
particles = [];  
  
  
}

//Containers  
  
    function container1(x,y){
    var cont1Top = paper.ellipse(x + 766, y + 500, 30, 6).attr({ "stroke": "#948d84" }).toFront();
    
 
    var contOutLine = paper.path(
			  "M" + (x + 736) + " " + (y + 500) + // Move to the starting point
			  " l 0 55 l 60 0 l 0 -55" +          // Draw the rectangular outline
			  " A30,6 0 0,0 " + (x + 736) + " " + (y + 500) // Add the arc from right to left
			).attr({
			  stroke: "#948d84", // Set stroke color
			  fill: "90-#d7d9d7-#b0b2b6-#8d8f93-#f8f9f8"       // Ensure no fill for the shape
			});
     var rectCont2 = paper.rect(x+730, y+545,72,18,5).attr({fill: "90-#d7d9d7-#b0b2b6-#8d8f93-#f8f9f8", 
         stroke: "#8d8f93", }).toFront();
//	var cycloneBottom1 = paper.ellipse(x + 766, y + 448, 30, 6).attr({ "stroke": "#b6a68e" }).toFront();
    }

    var flowMeter_img ,  Pipe_img;
function electromagneticFlowMeter(x,y){
 flowMeter_img = paper.image("images/electroMagneticFlowMeter.png", (x + 308), (y + 338), 60, 60).toFront();
 Pipe_img = paper.image("images/pipe.png", (x + 310), (y + 380), 60, 45).toFront();
}

var sensors = {};

	// Create a green sensor and store it
	function createGreenSensor(id, x, y) {
//	    console.log("Creating green sensor with id:", id, "at", x, y);
	
	    // Create green sensor parts
	    var sensor = {
	        lslRect: paper.rect(x + 147, y + 24, 32, 42).attr({ "fill": "10-#5c6160-#000" }),
	        lslSmallRect: paper.rect(x + 151, y + 66, 24, 8).attr({ "fill": "10-#5c6160-#000" }),
	        lslGreenRectBig: paper.rect(x + 152, y + 30, 22, 10).attr({ "fill": "#66de66" }), // Green color
	        lslGreenRectSmall: paper.rect(x + 152, y + 45, 22, 6).attr({ "fill": "#66de66" })  // Green color
	    };
	
	    // Store in sensors object
	    sensors[id] = sensor;
//	    console.log("Sensor created:", sensor);
	}
	
	// Create a red sensor and store it
	function createRedSensor(id, x, y) {
//	    console.log("Creating red sensor with id:", id, "at", x, y);
	
	    // Create red sensor parts
	    var sensor = {
	        lslRect: paper.rect(x + 147, y + 18, 32, 42).attr({ "fill": "10-#5c6160-#000" }),
	        lslSmallRect: paper.rect(x + 151, y + 60, 24, 8).attr({ "fill": "10-#5c6160-#000" }),
	        lslGreenRectBig: paper.rect(x + 152, y + 24, 22, 10).attr({ "fill": "#f54242" }), // Red color
	        lslGreenRectSmall: paper.rect(x + 152, y + 39, 22, 6).attr({ "fill": "#f54242" })  // Red color
	    };
	
	    // Store in sensors object
	    sensors[id] = sensor;
//	    console.log("Sensor created:", sensor);
	}
	
	// Toggle the sensor's color (green or red)
	function toggleSensor(id, color) {
	    if (sensors[id]) {
	        var sensor = sensors[id];
	        if (color === "green") {
	            sensor.lslGreenRectBig.attr({ "fill": "#66de66" }); // Update to green
	            sensor.lslGreenRectSmall.attr({ "fill": "#66de66" }); // Update to green
	        } else if (color === "red") {
	            sensor.lslGreenRectBig.attr({ "fill": "#f54242" }); // Update to red
	            sensor.lslGreenRectSmall.attr({ "fill": "#f54242" }); // Update to red
	        }
//	        console.log(`Sensor ${id} toggled to ${color}.`);
	    } else {
//	        console.error("Sensor with id", id, "not found.");
	    }
	}


function screw(x,y){
var sq1 = paper.rect((x ),(y ),8,8).attr({"fill":"red"});

}

function ttSensor(x,y){
var ttSensorImage = paper.image("images/ttSensor.png", (x + 505), (y + 118), 40, 60).toFront();
} 

function blinkAndSetColor(id, finalColor, blinkCount = 6, blinkInterval = 200) {
if (!sensors[id]) {
    console.error("Sensor with id", id, "not found.");
    return;
}

let blinkState = false; // Toggle state
let currentBlink = 0;

// Get sensor reference
let sensor = sensors[id];
let elements = [sensor.lslGreenRectBig, sensor.lslGreenRectSmall]; // Parts to blink

// Start blinking
let blinkTimer = setInterval(() => {
    blinkState = !blinkState; // Toggle visibility
    elements.forEach(el => el.attr({ "fill-opacity": blinkState ? 0 : 1 })); // Blink effect

    currentBlink++;
    if (currentBlink >= blinkCount) {
        clearInterval(blinkTimer); // Stop blinking
        elements.forEach(el => el.attr({ "fill-opacity": 1 })); // Ensure visible
        toggleSensor(id, finalColor); // Set final color
    }
}, blinkInterval);
}

const particleWidth = 1076; // Fixed width
const particleHeight = 160; // Fixed height

//Parameters for particles
const particleRadius = 1.5; // Fixed radius for all particles
const startX = particleWidth; // Horizontal start position: center of the canvas
const startY = particleHeight + particleHeight; // Start below the canvas
const centerY = particleHeight / 2; // Target position: center of the canvas

//To track all generated particles
let particles = [];

//Variable to store the interval ID
let particleInterval;

//Generate a single particle
function generateParticle() {
// Create a particle (circle) at the starting point
const circle = paper.circle(startX, startY, particleRadius);
circle.attr({
    fill: "#5b5b5c",
    stroke: "none"
});

// Animate the circle upwards to the center
const duration = Math.random() * 2000 + 1000; // Random duration between 1 and 3 seconds
const animation = circle.animate({ cy: centerY }, duration, "ease-out", () => {
    // Remove the particle after animation completes
    circle.remove();
});

// Store the particle's animation for later control
particles.push({ circle, animation });
}

//Continuously generate particles
function startParticleAnimation() {
// Store the interval ID for generating particles
particleInterval = setInterval(() => {
    generateParticle(); // Generate one particle at a time
}, 300); // Generate a particle every 300ms
}

//Function to stop the particle animation
function stopParticleAnimation() {
// Stop generating new particles
if (particleInterval) {
    clearInterval(particleInterval); // Stop the interval
    particleInterval = null; // Reset the interval variable
}

// Stop all ongoing particle animations
particles.forEach((particle) => {
    particle.circle.stop(); // Stop the individual particle animation
    particle.circle.remove(); // Optionally, remove the particle immediately
});

// Clear the particles array
particles = [];
}

createRedSensor("sensor1", x - 8, y - 30); //LSHH
createGreenSensor("sensor2", x - 8, y + 48); //LSLL
createRedSensor("sensor3", x + 750, y - 35); //From compressor
createGreenSensor("sensor4", x + 95, y + 280); //PSHH1	
createGreenSensor("sensor5", x + 282, y + 142); //TSHH
createGreenSensor("sensor6", x + 869, y + 200); //PSLL2
createGreenSensor("sensor7", x + 943.5, y + 130); //PSHH2    
createRedSensor("sensor8", x-70, y+286); // PSLL1




}