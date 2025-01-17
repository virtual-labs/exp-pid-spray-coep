$("#simDemo").click(function () {
	$("#modalTitle").html("PROBLEM STATEMENT");
	 $("#modelDialog").removeClass("modal-md");
	 $("#modelDialog").addClass("modal-xl");
	htm=''
		
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
		 $("#modelDialog").removeClass("modal-xl");
		 $("#modelDialog").addClass("modal-md");
		$("#modalTitle").html("PROCEDURE");
		htm=''
			+' '
		$("#proStrBody").html(htm);
	});
	