$(document).ready(function() {

    'user strict';

    console.log('OrderJS');

    $("input[name='orderTypeOption']").on('click',function(ev){

        var optionSel = ev.toElement.value;

        if(optionSel == 'option1'){
            $('#payref').attr('href','https://test.payumoney.com/paybypayumoney/#/1966');
        }else if(optionSel == 'option2'){
            $('#payref').attr('href','https://test.payumoney.com/paybypayumoney/#/2');
        }else if(optionSel == 'option3'){
            $('#payref').attr('href','https://test.payumoney.com/paybypayumoney/#/3');
        }

        console.log('radio click', ev.toElement.value, $('#payref').attr('href'));

    })

});