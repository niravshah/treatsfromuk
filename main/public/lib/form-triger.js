

$(document).ready(function() {
	

	$("input, textarea,  select").keyup(function() {
		$(this).css('border-color','');
		$('#contact_results').slideUp();
	});
	
	$("#submit_btn1").click(function() {
       
	    var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields		
		$("#contact_form4 input[required=required]").each(function(){
			$(this).css('border-color',''); 
			if(!$.trim($(this).val())){ //if this field is empty 
				$(this).css('border-color','red'); //change border color to red   
				proceed = false; //set do not proceed flag
			}
			//check invalid email
			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
			if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
				$(this).css('border-color','red'); //change border color to red   
				proceed = false; //set do not proceed flag				
			}	
		});		
		
       
        if(proceed) //everything looks good! proceed...
        {
			//get input field values data to be sent to server
            post_data = {
				'user_fname'	: $('input[name=fname]').val(),
				'user_lname'	: $('input[name=lname]').val(),
				'user_email'	: $('input[name=email]').val(),
				'user_phone'	: $('input[name=phone]').val(),
				'user_country'	: $('input[name=country]').val(),
				'user_package'	: $('input[name=package]').val(),
				'user_message'	: $('textarea[name=message]').val()
			};
            
            //Ajax post data to server
            $.post('/lists/5da04e856c/members', post_data, function(response){
				if(response.type == 'error'){ //load json data from server and output message     
					output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
				}else{
				    
					output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';
				
				}
				$("#contact_form4 #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

    $("#submit_btn2").click(function(e) {

        e.preventDefault();
        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields
        $("#contact_form2 input[required=true]").each(function(){
            $(this).css('border-color','');
            if(!$.trim($(this).val())){ //if this field is empty
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
        });


        if(proceed) //everything looks good! proceed...
        {
            //get input field values data to be sent to server
            post_data = {
                'user_name'	: $('input[name=name]').val(),
                'user_email'	: $('input[name=email]').val(),
                'user_description'	: $('textarea[name=message]').val()
            };

            //Ajax post data to server
            $.post('/mailgun/new', post_data, function(response){
                if(response.type == 'error'){ //load json data from server and output message
                    output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
                }else{

                    output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';

                }
                $("#contact_form2 #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

});