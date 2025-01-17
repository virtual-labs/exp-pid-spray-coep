var seqCount=0;
function spryerDryerPreQuestion()
{

	
	  timerMasterJson.instr=$("#counter").text();
		console.log(timerMasterJson);
		seconds = 0;
		  updateCounter();
	var htm=''
		 +'<div class="row justify-content-center" style="margin:5px;background-color:#343a40;margin: 5px; padding: 10px;">'
//    <div class="col-sm-4">
//      +'  <h2 class="text-center mb-3">Project Initiation</h2>'
//      +'   <p class="text-center">Understanding the Requirements</p>'
//      +'    <p class="text-muted small" style="color:#fff;">'
//      +'      Before embarking on a project, it is essential to gather key information to ensure success. Below are the activities arranged by phases:'
//      +'  </p>'

//        <!-- Pre-Engineering Phase -->
      +'    <div class="phase-title"></div>'
      +'    <ul class="list-group activity-list" style="background-color: #848587;">'
      +'     <li class="list-group-item"><b>1.Prior Knowledge Assessment : </b>Identify which sensors are to be tested.</li>'
      +'      <li class="list-group-item"><b>2.Standard Identification : </b>Determine which standard is to be followed.</li>'
      +'       <li class="list-group-item"><b>3.Sensor Range Definition : </b>Define the range of the sensor.</li>'
     
      +'   </ul>'

//        <!-- Post-Engineering Phase -->
      +'  <div class="phase-title"></div>'
      +'  <ul class="list-group activity-list" style="background-color: #848587;">'
      +'       <li class="list-group-item"><b>4.Accuracy Testing : </b>Identify what accuracies are to be tested.</li>'
      +'       <li class="list-group-item"><b>5.Project Scope Definition : </b> Define the scope of the project.</li>'
      +'       <li class="list-group-item"><b>6.Project Type Definition : </b> Determine if the project is green field or modernization.</li>'
      +'       <li class="list-group-item"><b>7.Test Capacity Determination : </b>Determine the test capacity of the lab in one shift.</li>'
     
      +'   </ul>'

//        <!-- Maintenance Requirements Phase -->
      +'    <div class="phase-title"></div>'
      +'   <ul class="list-group activity-list" style="background-color: #848587;">'
      +'      <li class="list-group-item"><b>8.Constraint Identification : </b>Identify constraints (space, technology, automation, finances).</li>'
      +'      <li class="list-group-item"><b>9.Project Timeline Definition : </b>Determine the project timeline.</li>'
      +'      <li class="list-group-item"><b>10.Budget Allocation : </b>Establish the project budget.</li>'
      +'      <li class="list-group-item"><b>11.Resource Assessment : </b>Assess current workloads and team size.</li>'
      +'  </ul>'
//    </div>
+'</div>'

	$("#Selection").html(htm);
	$("#Header").html("	<center><span>SEQUENCE OF ACTIVITIES</span></center>");
	var htm=''
    +'<div class="col-sm-12 note" id="">'
	+'<b style="font-size:18px;color:#f6f685;">NOTE - </b><span>You are required to arrange these activities as per the phase of the project like pre-engineering, post- Engineering,'
	+'and Maintenance requirements of the project. These are 11 activities and you will have to number them in a chronological sequence. </span>'
	+'</div>'
	+'<table>'
	+'<thead>'
	+'<tr>'
	+' <th>PRIOR KNOWLEGDE ASSESSMENT </th>'
	+' <th>ACTIVITY SEQUENCE NUMBER</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody id="output"></tbody>'
	+'</table>'
	+'<button id="verifyButton" class="btn btn-danger btn1" data-toggle="modal" data-target="#preReq">SUBMIT</button>'
	+'<div ></div>'
+'	<!-- 			    The Modal  ProStr -->'
+'	  <div class="modal fade " id="preReq">'
+'	    <div class="modal-dialog modal-md" >'
+'		      <div class="modal-content">'
+'<!-- 		        Modal Header -->'
+'		        <div class="modal-header">'
+'	          <h4 class="modal-title"><center>Message Box</center></h4>'
+'		          <button type="button" class="close" data-dismiss="modal">&times;</button>'
+'		        </div>'
+'<!-- 		        Modal body -->'
+'		        <div class="modal-body" id="modalMessage" style="color:red">'

+'		        </div>'
+'<!-- 			        Modal footer -->'
+'		        <div class="modal-footer">'
+'	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
+'		        </div>'
+'		      </div>'
+'		    </div>'
+'		  </div>'
+'<!-- 			  End Modal ProStr -->'
	$("#diagram").html(htm);
// Shuffle function
	
	var attempts = 0;
	const maxAttempts = 4;
	var totalAccuracy = 0;

	$(document).ready(function () {
	    // Shuffle the groups
		
		function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
		
	    shuffleArray(jsonData.groups);

	    var outputHtml = '';
	    jsonData.groups.forEach(group => {
	        group.statements.forEach(statement => {
	            outputHtml += `
	                <tr>
	                    <td>${statement.statement}</td>
	                    <td>
	                        <input type="number" class="input-box" data-min="${group.min}" data-max="${group.max}" placeholder="">
	                    </td>
	                </tr>
	            `;
	        });
	    });
	    $('#output').html(outputHtml);

	    // Modal box logic
	    var modal = $('#resultModal');
	    var span = $('.close');

	    function showModal(message) {
	        $('#modalMessage').html(message);
	        modal.css('display', 'block');
	    }

	    span.click(function () {
	        modal.css('display', 'none');
	    });

	    $(window).click(function (event) {
	        if (event.target === modal[0]) {
	            modal.css('display', 'none');
	        }
	    });

	    // Blur event validation
	    $('.input-box').on('blur', function () {
	        let enteredValue = $(this).val();
	        let minLimit = 1;
	        let maxLimit = 11;

	        // Check if the input is a number
	        if (!/^\d+$/.test(enteredValue) || enteredValue.trim() === "") {
	            if (enteredValue.trim() === "") {
	                toastr.error("This field cannot be empty. Please enter a valid numerical value.");
	            } else {
	                toastr.error("Please enter a valid numerical value.");
	            }
	            $(this).val(''); // Clear invalid input
	            return;
	            
	        }
	        // Validate range
	        if (enteredValue < minLimit || enteredValue > maxLimit) {
	            toastr.warning(`Please enter a value between ${minLimit} and ${maxLimit}.`);
	            $(this).val(''); // Clear invalid input
	            return;
	        }

	        // Check for duplicate entries directly from inputs
	        let allValues = $('.input-box').map(function () {
	            return $(this).val();
	        }).get();

	        if (allValues.filter(value => value === enteredValue).length > 1) {
	            toastr.warning("Duplicate entry is not allowed.");
	            $(this).val(''); // Clear invalid input
	        }
	    });

	    // Verify button logic
	    $('#verifyButton').click(function () {
	    	seqCount++;
	        if (attempts >= maxAttempts) {
	            showModal("No attempts remaining.");
	            return;
	        }

	        attempts++;
	        var totalCorrect = 0;
	        var totalEntries = jsonData.groups.reduce((sum, group) => sum + group.statements.length, 0);

	        $('.input-box').each(function () {
	            let enteredValue = $(this).val();
	            let minLimit = $(this).data('min');
	            let maxLimit = $(this).data('max');

	            if (enteredValue >= minLimit && enteredValue <= maxLimit) {
	                totalCorrect++;
	            }
	        });

	        let currentAccuracy = ((totalCorrect / totalEntries) * 100).toFixed(2);
	        totalAccuracy += parseFloat(currentAccuracy);
	        let averageAccuracy = (totalAccuracy / attempts).toFixed(2);
	        let remainingAttempts = maxAttempts - attempts;

	        if (attempts === maxAttempts || averageAccuracy === '100.00') {
	        	$("#diagram").html("");
	        	spryerDryerMimic();
	            $('.input-box').prop('disabled', true);
	            resultJson.seqActivites=seqCount;
	            console.log(resultJson);
	        }

	        showModal(`
	        		<strong style="color:#153f68;font-size: large;">Extent of correct sequence : </strong> <b style="color:red">${averageAccuracy}% </b><br>
	            <strong style="color:#153f68;font-size: large;">You still have <b style="color:red;">${remainingAttempts}</b> attempts to identify correctly.</strong>
	        `);
	       
	    });
	});

}
