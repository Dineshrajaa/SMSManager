$(document).ready(function(){
	var platform;
	function sendSMS(){
		var sentSuccess = function () { alert('Message sent successfully'); };
		var sentError = function (e) { alert('Message Failed:' + e); };
		var choosedOption=$('input[type=radio][name="mtype"]').val();
		//alert(choosedOption);
		var contactNumber=$("#cnum").val();
		var messageContent=$("#cmessage").val();  
		var options={
            replaceLineBreaks: false, 
            android: {
                intent: 'INTENT' 
                
            }
        }
            sms.send(contactNumber, messageContent, options, sentSuccess, sentError);

	}
	document.addEventListener("deviceready",function(){
		platform=device.platform;
		
	},false);

	$("#sendbtn").tap(sendSMS);
	$(document).on("pageinit","#home",function(){
			if(platform=="iOS") $('input[type=radio][name="mtype"]').remove();
		});
	//DOM Ready
});