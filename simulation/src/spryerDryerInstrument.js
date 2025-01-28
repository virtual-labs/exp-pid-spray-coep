var InstrMasterJson = {};
var StdCompInstruCount=15;
var StdFTCount=1;
var StdTTCount=2;
var StdVICount=1;
var StdTSHHCount=1;
var StdPICount=1;
var StdAFRCount=1;
var StdPSHHCount=2;
var StdPSLLCount=2;
var StdVFDCount=2;
var StdPLCCount=1;
var StdSCRCount=1;

var perFTCount;
var perTTCount;
var perVICount;
var perTSHHCount;
var perPICount;
var perAFRCount;
var perPSHHCount;
var perPSLLCount;
var perVFDCount;
var perPLCCount;
var perSCRCount=1;

var ft;
var tt;
var vi;
var tshh;
var pi;
var afr;
var pshh;
var psll;
var vfd;
var plc;
var scr;
var totalComp1;
var instrActualCount=0;
function spryerDryerInstrument()
{
	timerMasterJson.piping=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#Header").html("	<center><span >SPRAY DRYER - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Temperature  Switch High High (TSHH)</b></label>'
		+' <input class="form-select" id="tshh"  type="number" min="0" max="5" value="0" tabindex="1"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pressure Switch High High (PSHH)</b></label>'
		+' <input class="form-select" id="pshh" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pressure Switch Low Low (PSLL)</b></label>'
		+' <input class="form-select" id="psll" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'

		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Programmable Logic Controller (PLC)</b></label>'
		+' <input class="form-select" id="plc" type="number" min="0" max="5" value="0" tabindex="4"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Variable Frequency Drive (VFD)</b></label>'
		+' <input class="form-select" id="vfd" type="number" min="0" max="5" value="0" tabindex="5"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of  Air Filter Regulator (AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Vacuum Indicator (VI)</b></label>'
		+' <input class="form-select" id="vi"  type="number" min="0" max="5" value="0" tabindex="7"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pressure Indicator (PI)</b></label>'
		+' <input class="form-select" id="pi" type="number" min="0" max="5" value="0" tabindex="8"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Temperature Transmitter (TT)</b></label>'
		+' <input class="form-select" id="tt" type="number" min="0" max="5" value="0" tabindex="9"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Flow Transmitter (FT)</b></label>'
		+' <input class="form-select" id="ft" type="number" min="0" max="5" value="0" tabindex="10"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Silicon Controlled Rectifier (SCR)</b></label>'
		+' <input class="form-select" id="scr" type="number" min="0" max="5" value="0" tabindex="11"></input>'
		+'</div>'
		
		
		
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="12">Verify Instruments </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="13" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	   var percentage1=0;
	   var flag=0;
	$("#verifyInstr").click(function(){
		instrActualCount++;
		percentage1=0;
		 ft=parseInt($("#ft").val());
		 tt=parseInt($("#tt").val());
		 vi=parseInt($("#vi").val());
		 tshh=parseInt($("#tshh").val());
		 pi=parseInt($("#pi").val());
		afr=parseInt($("#afr").val());
		 pshh=parseInt($("#pshh").val());
		 psll=parseInt($("#psll").val());
		 vfd=parseInt($("#vfd").val());
		 plc=parseInt($("#plc").val());
		 scr=parseInt($("#scr").val());
		 CountComp1();
		 
		  console.log(" ft "+ft);
		  console.log(" tt "+tt);
		  console.log(" vi "+vi);
		  console.log(" tshh "+tshh);
		  console.log(" pi "+pi);
		  console.log(" afr "+afr);
		  console.log(" pshh "+pshh);
		  console.log(" vfd "+vfd);
		  console.log(" psll "+psll);
		  console.log(" plc "+plc);
		  console.log(" src "+scr);
		 
		  if(totalComp1==0){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
						+'<div class="row">'
						
						+'<div class="col-sm-8">'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="4"><center> REQUIRED INSTRUMENT</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>TSHH</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>PSHH</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>PSLL</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>PLC</center></td>'
						+'     <td><center>1</center></td>'
						
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>VFD</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>1</center></td>'
						
						+'   </tr>'
						
						+'    <tr>'
						+'     <td><center>VI</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>PI</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
						+'    <tr>'
						+'     <td><center>TT</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>FT</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
						+'    <tr>'
						+'     <td><center>SCR</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center></center></td>'
						+'     <td><center></center></td>'
						
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+'<div class="col-sm-4">'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>AIR</center></td>'
						+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>ELECTRICITY</center></td>'
						+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>COMMUNICATION NETWORK</center></td>'
						+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
						+'   </tr>'
						
						+'    <tr>'
						+'     <td><center>ACCESS CONTROL</center></td>'
						+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
						
						+'   </tr>'
						
						+'    <tr>'
						+'     <td><center>CCTV</center></td>'
						+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
						
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+'</div>'
						
						+"<img src='images/sprayDryerImg.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
						 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
	
		if((ft==StdFTCount) && (tt==StdTTCount) && (vi==StdVICount) && (tshh==StdTSHHCount) && (pi==StdPICount) && (afr==StdAFRCount)
				&& (pshh==StdPSHHCount) && (psll==StdPSLLCount) && (vfd==StdVFDCount) && (plc==StdPLCCount) && (scr==StdSCRCount) ){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#ft,#tshh,#pshh,#psll,#plc,#vfd,#vi,#pi,#tt,#afr,#scr,#verifyInstr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				
				+'<div class="col-sm-12" >'
				+"<img src='images/sprayDryerImg.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "83%",
			            height: "80%",
			            left: "+=50px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			 perFTCount=parseFloat((ft*100)/StdFTCount);
			 perTTCount=parseFloat((tt*100)/StdTTCount);
			 perVICount=parseFloat((vi*100)/StdVICount);
			 perTSHHCount=parseFloat((tshh*100)/StdTSHHCount);
			 perPICount=parseFloat((pi*100)/StdPICount);
			 perAFRCount=parseFloat((afr*100)/StdAFRCount);
			 perPSHHCount=parseFloat((pshh*100)/StdPSHHCount);
			 perPSLLCount=parseFloat((psll*100)/StdPSLLCount);
			 perVFDCount=parseFloat((vfd*100)/StdVFDCount);
			 perPLCCount=parseFloat((plc*100)/StdPLCCount);
			 perSCRCount=parseFloat((scr*100)/StdSCRCount);
			
			 console.log(" perFTCount "+perFTCount);
			 console.log(" perTTCount "+perTTCount);
			 console.log(" perVICount "+perVICount);
			 console.log(" perTSHHCount "+perTSHHCount);
			 console.log(" perPICount "+perPICount);
			 console.log(" perAFRCount "+perAFRCount);
			 console.log(" perPSHHCount "+perPSHHCount);
			 console.log(" perPSLLCount "+perPSLLCount);
			 console.log(" perVFDCount "+perVFDCount);
			 console.log(" perPLCCount "+perPLCCount);
			 console.log(" perSCRCount "+perSCRCount);
				totalComp1=perFTCount+perTTCount+perVICount+perTSHHCount+perPICount+perAFRCount+perPSHHCount+perPSLLCount+perVFDCount+perPLCCount+perSCRCount;
			  avg=parseInt(totalComp1/11);
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
				
				if((StdFTCount<ft)||(StdTTCount<tt)||(StdVICount<vi)||(StdTSHHCount<tshh)||(StdPICount<pi)||(StdAFRCount<afr)||(StdPSHHCount<pshh)||(StdPSLLCount<psll)||(StdVFDCount<vfd)||(StdPLCCount<plc)||(StdSCRCount<scr)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
			
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"TSHH":"1",
				"PSHH":"2",
				"PSLL":"2",
				"PLC":"1",
				"VFD":"2",
				"AFR":"1",
				"VI":"1",
				"PI":"1",
				"TT":"2",
				"FT":"1",
				"SCR":"1",
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
		resultJson.instrument=instrActualCount;
		console.log(resultJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			spryerDryerPreQuestion();
		}
	
	});
	
	
	
}

