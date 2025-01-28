$("#simDemo").click(function () {
	
	var htm=''
		
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

		
	$("#proStrBody").html(htm);
});
	$("#procedure").click(function () {
		 
		var htm='Add procedure here'
			+' '
		$("#procedureBody").html(htm);
	});
	$("#tagDetail1").click(function () {
		 
		var htm=''
			+'  <table class="table table-hover table-bordered">'
			+'    <thead>'
			+' <tr class="table-info">'
			+'  <th>Tag Details</th>'
			+'  <th>Tags</th>'
			+' </tr>'
			+' </thead>'
			+' <tbody>'
			
			+' <tr>'
			+' <td>Hot Air Temperature  </td>'
			+'  <td>TT01</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Product Temperature  </td>'
			+'  <td>TT02</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Flow Transmitter </td>'
			+'  <td>FT</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Vacuum Transmitter  </td>'
			+'  <td>NT</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Heater Firing  </td>'
			+'  <td>HEATER</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Peristaltic Pump  </td>'
			+'  <td>PUMP</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>FD FAN</td>'
			+'  <td>FD</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>ID FAN</td>'
			+'  <td>ID</td>'
			+'  </tr>'
			
			+' </tbody>'
			+'  </table>'
		$("#tagBody").html(htm);
	});
	