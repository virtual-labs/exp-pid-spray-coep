function spryerDryerPreQuestion()
{

	$("#Selection").html("");
	$("#Header").html("	<center><span>SEQUENCE OF ACTIVITIES</span></center>");
	htm=''
	+'<table>'
	+'<thead>'
	+'<tr>'
	+' <th>PRIOR KNOWLEGDE ASSESSMENT </th>'
	+' <th>ACTIVITY SEQNENCE NUMBER</th>'
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
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Track entered values
    var enteredValues = new Set();
    var attempts = 0;
    const maxAttempts = 4;

    $(document).ready(function() {
        // Shuffle the groups
        shuffleArray(jsonData.groups);

        var outputHtml = '';
        jsonData.groups.forEach(group => {
            group.statements.forEach(statement => {
                outputHtml += `
                    <tr>
                        <td style="color: #1c7c7c;font-weight: 700; font-size: 18px;">${statement.statement}</td>
                        <td>
                            <input type="text" class="input-box" data-min="${group.min}" data-max="${group.max}" placeholder="">
                        </td>
                    </tr>
                `;
            });
        });
        $('#output').html(outputHtml);

        // Add validation to text boxes
        $('.input-box').on('input', function() {
            this.value = this.value.replace(/[^0-9]/g, ''); // Allow only numeric input
        });

        // Modal box logic
        var modal = $('#resultModal');
        var span = $('.close');

        function showModal(message) {
            $('#modalMessage').html(message);
            modal.css('display', 'block');
        }

        span.click(function() {
            modal.css('display', 'none');
        });

        $(window).click(function(event) {
            if (event.target === modal[0]) {
                modal.css('display', 'none');
            }
        });

        // Verify button click event
        $('#verifyButton').click(function() {
            if (attempts < maxAttempts) {
                attempts++;
                enteredValues.clear(); // Clear previously entered values

                var totalCorrect = 0;
                var totalEntries = 0;

                $('.input-box').each(function() {
                    let enteredValue = $(this).val();
                    let minLimit = $(this).data('min');
                    let maxLimit = $(this).data('max');

                    if (!enteredValue || enteredValues.has(enteredValue) || enteredValue < minLimit || enteredValue > maxLimit) {
                        // Invalid response
                    } else {
                        enteredValues.add(enteredValue);
                        totalCorrect++;
                    }

                    totalEntries++;
                });

                var overallAccuracy = ((totalCorrect / totalEntries) * 100).toFixed(2);
                let attemptsRemaining = maxAttempts - attempts;

                if (attempts === maxAttempts) {
                    $('#diagram').html('');
//                    $('#verifyButton').prop('disabled', true);
                    showModal(`<strong>Correctness:</strong> ${overallAccuracy}%<br><strong>No attempts remaining.</strong>`);
                    spryerDryerMimic();
                } else {
                    showModal(`<strong>Correctness:</strong> ${overallAccuracy}%<br><strong>Attempts remaining:</strong> ${attemptsRemaining}`);
                }
            }
        });
    });

	
}
