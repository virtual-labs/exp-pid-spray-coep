
	 $("#modelDialog").removeClass("modal-md");
	 $("#modelDialog").addClass("modal-xl");
	htm=''
		+'<div class="row statement" ><p>The spray drying process is a widely used technique for converting liquid feed into a dry powder form by rapidly drying with a hot gas.'
		+'This method is commonly used in industries such as food processing, pharmaceuticals, chemicals, and ceramics. The objective'
		+'of this task is to develop a comprehensive Piping and Instrumentation Diagram (P&ID) for a Spray Drying Process Plant that '
		+'outlines the necessary equipment, instrumentation, control loops, and piping systems.'
		+'<br><b> Problem Description</b><br>'
		+'The spray drying process involves several critical stages such as atomization, drying, powder collection, and gas handling.'
		+'A well-designed P&ID is required to ensure optimal control, safety, and efficient operation of the plant. The diagram should '
		+'incorporate the flow of materials, energy, and signals, highlighting all relevant equipment such as pumps, compressors,'
		+'heat exchangers, filters, and storage vessels, along with the associated instrumentation for monitoring and control.</p>'
		
		+'<br><b style="margin-bottom:10px;">The P&ID should include all major and minor process components and systems such as:</b><br>'

		+'<p><span class="subTitle">Feed Preparation System:</span><br> Where liquid feed is prepared and conditioned before entering the spray dryer.'
		+'<br><span class="subTitle">Atomization System:</span><br> Atomizers or nozzles that break the liquid feed into droplets for drying.'
		+'<br><span class="subTitle">Drying Chamber:</span><br> A chamber where hot air or gas dries the atomized liquid into fine powder.'
		+'<br><span class="subTitle">Air Handling System: </span><br>For controlling airflow and temperature inside the drying chamber.'
		+'<br><span class="subTitle">Powder Recovery and Collection System:</span><br> Cyclones, filters, and receivers used to capture dried particles from the exhaust gas.'
		+'<br><span class="subTitle">Exhaust Gas Handling System:</span><br> Includes fans, scrubbers, and filtration units to ensure environmental compliance.'
		+'<br><span class="subTitle">Cooling/Storage: </span><br>Systems for cooling, storing, and packaging the dried product</p></div>'
		
	$("#proStrBody").html(htm);
//	htm=''
//		+' Simulation Demo'
//	$("#SimulationDemoBody").html(htm);