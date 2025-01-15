ComponentMasterJson = {};
resultJson={};
var StdCompPipingCount=10;
var StdVesselsCount=4;
var StdPumpCount=1;
var StdFansCount=2;
var StdHeaterCount=1;
var StdValvesCount=2;

var perVesselsCount;
var perPumpCount;
var perFansCount;
var perHeaterCount;
var perValvesCount;
var vessels;
var fans;
var pump;
var heater;
var valves;
var TotalComp;
var pipingActualCount=0;
function spryerDryerComponent()
{
	$("#Header").html("	<center><span>SPRAY DRYER - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Vessels</b></label>'
		+' <input class="form-select" id="vessels" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pumps</b></label>'
		+' <input class="form-select" id="pump" type="number" min="0" max="5" value="0" tabindex="2" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Fans</b></label>'
		+' <input class="form-select" id="fans"  type="number" min="0" max="5" value="0" tabindex="3" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Valves</b></label>'
		+' <input class="form-select" id="valves"  type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Heaters</b></label>'
		+' <input class="form-select" id="heater" type="number" min="0" max="5" value="0" tabindex="5" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="6">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="7">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	htm=''
//		+'<div class="row statement" ><p>The spray drying process is a widely used technique for converting liquid feed into a dry powder form by rapidly drying with a hot gas.'
//		+'This method is commonly used in industries such as food processing, pharmaceuticals, chemicals, and ceramics. The objective'
//		+'of this task is to develop a comprehensive Piping and Instrumentation Diagram (P&ID) for a Spray Drying Process Plant that '
//		+'outlines the necessary equipment, instrumentation, control loops, and piping systems.'
//		+'<br><b> Problem Description</b><br>'
//		+'The spray drying process involves several critical stages such as atomization, drying, powder collection, and gas handling.'
//		+'A well-designed P&ID is required to ensure optimal control, safety, and efficient operation of the plant. The diagram should '
//		+'incorporate the flow of materials, energy, and signals, highlighting all relevant equipment such as pumps, compressors,'
//		+'heat exchangers, filters, and storage vessels, along with the associated instrumentation for monitoring and control.</p>'
//		
//		+'<br><b style="margin-bottom:10px;">The P&ID should include all major and minor process components and systems such as:</b><br>'
//
//		+'<p><span class="subTitle">Feed Preparation System:</span><br> Where liquid feed is prepared and conditioned before entering the spray dryer.'
//		+'<br><span class="subTitle">Atomization System:</span><br> Atomizers or nozzles that break the liquid feed into droplets for drying.'
//		+'<br><span class="subTitle">Drying Chamber:</span><br> A chamber where hot air or gas dries the atomized liquid into fine powder.'
//		+'<br><span class="subTitle">Air Handling System: </span><br>For controlling airflow and temperature inside the drying chamber.'
//		+'<br><span class="subTitle">Powder Recovery and Collection System:</span><br> Cyclones, filters, and receivers used to capture dried particles from the exhaust gas.'
//		+'<br><span class="subTitle">Exhaust Gas Handling System:</span><br> Includes fans, scrubbers, and filtration units to ensure environmental compliance.'
//		+'<br><span class="subTitle">Cooling/Storage: </span><br>Systems for cooling, storing, and packaging the dried product</p></div>'
		+'<div class="row statement" ><p>A problem statement is a crucial element in designing and developing a pilot plant. '
		+'It defines the problem or opportunity that the pilot plant aims to address, and it serves as a guiding force throughout the project.'
		+'Heres a general outline to help you define a problem statement for designing and developing a pilot plant:'
		+'Problem Statement: You are given the responsibility as an Instrumentation and Control Engineer to design and commission a pilot '
		+'<br><b>Spray dryer of 5 Liter capacity.</b>'
		+'<br><p><b>Background :</b> <br>The pilot plant will be used to test the new “control and automation” technologies.'
		+'<br><b>Key Performance Indicators (KPIs) :</b><br> You will be judged based on the accuracy of design, proper'
		+'selection of field and panel instruments, and successful commissioning of the plant in a stipulated time frame.'
		+'<br><b>Constraints and Assumptions :</b><br> As you are an Instrumentation and Control Engineer process related details are'
		+'not expected from you. You will receive the same from a process expert.</b></div>'
		+'<div class="row"><img src="images/realplant.png" class="img img-responsive"></img></div>'
		$("#diagram").html(htm);
       var temp=0;
	   var percentage=0;
	   var totalComp;
	   var flag=0;
	   var  selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		pipingActualCount++;
		percentage=0;
		 vessels=parseInt($("#vessels").val());
		 fans=parseInt($("#fans").val());
		 pump=parseInt($("#pump").val());
		 heater=parseInt($("#heater").val());
		 valves=parseInt($("#valves").val());
		 const selectedValues = $("#Utilities").val();
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 
		 
		 CountComp();
		 
		  console.log(" vessels "+vessels);
		  console.log(" fans "+fans);
		  console.log(" pump "+	 pump);
		  console.log(" heater "+heater);
		  console.log(" valves "+valves);
		  console.log(" percentage "+percentage);
		  if(totalComp==0 ||(vessels === "" || fans === "" || pump === "" || heater=="" || valves=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>VESSELS</center></td>'
						+'     <td><center>4</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>PUMP</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>FANS</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'    <tr>'
						+'     <td><center>VALVES</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'     <td><center>HEATER</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
					    +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
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

						+"<img src='images/dryer12.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
						 
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
	
		 if(totalComp==0 ||(vessels === "" || fans === "" || pump === "" || heater=="" || valves=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		
		
		if((vessels==StdVesselsCount) && (pump==StdPumpCount) && (fans==StdFansCount) && (StdHeaterCount==heater) &&( StdValvesCount==valves)  ){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");
					  $("#modelBody").css("color","red");
					 
			}
			else
				{
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#vessels,#fans,#pump,#heater,#verifyComponents,#Utilities,#valves").prop("disabled",true);
					
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/dryer12.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "90%",
					            height: "80%",
					           left: "+=20px",
		//			            background-color:"red"
					         
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			 perVesselsCount=parseFloat((vessels*100)/StdVesselsCount);
			 perPumpCount=parseFloat((pump*100)/StdPumpCount);
			 perFansCount=parseFloat((fans*100)/StdFansCount);
			 perHeaterCount=parseFloat((heater*100)/StdHeaterCount);
			 perValvesCount=parseFloat((valves*100)/StdValvesCount);
//			 console.log(" perVesselsCount "+perVesselsCount);
//			 console.log(" perPumpCount "+perPumpCount);
//			 console.log(" perFansCount "+	 perFansCount);
//			 console.log(" perHeaterCount "+perHeaterCount);
			 console.log(" perHeaterCount "+perHeaterCount);
				totalComp=perVesselsCount+perPumpCount+perFansCount+perHeaterCount+perValvesCount;
			  avg=parseInt(totalComp/5);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				if((vessels>StdVesselsCount) || (pump>StdPumpCount) || (fans>StdFansCount) || (heater>StdHeaterCount) || (valves>StdValvesCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
				
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"10",
		"Vessels":"4",
		"pump":"1",
		"motor":"1",
		"fan":"2",
		"Valves":"2",
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		
		console.log(ComponentMasterJson);
		resultJson.piping=pipingActualCount;
		console.log(resultJson);
	}
	
	$("#nextLevel1").click(function(){
		spryerDryerInstrument();
	});
	
	
	
}

