

$(document).ready(function() {
	

	$("input, textarea,  select").keyup(function() {
		$(this).css('border-color','');
		$('#contact_results').slideUp();
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
                'user_message'	: $('textarea[name=message]').val()
            };

            //Ajax post data to server
            $.post('/mailgun/new', post_data, function(response){
                if(response.type == 'error'){ //load json data from server and output message
                    output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">Ooops</h4></div><div class="modal-body"><div class="error">'+response.text+'</div></div></div></div></div>';
                }else{

                    output = '<div class="modal tx-left" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a class="close" href="javascript:location.reload(true)">x</a><h4 class="modal-title">THANK YOU!</h4></div><div class="modal-body"><div id="overlay_form" class="success">'+response.text+'</div></div></div></div></div>';

                }
                $("#contact_form2").hide();
                $("#contact_results").text('THANK YOU').show();
            }, 'json');
        }
    });

});