$(document).ready(function () {

    $('.test-outer').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });
	  var current_progress = 0;
        var interval = setInterval(function () {
            current_progress += 5;
            $("#dynamic")
                .css("width", current_progress + "%")
                .attr("aria-valuenow", current_progress)
                .text(current_progress + "% Complete");
				
            if (current_progress >= 100)
			{
				$("#dynamic")
                .text("download failed...");
			$(".progress-bar")
                .css("background-color", "#ff2f00");
				$(".error, #chat-button").show();
				$("#download-text").hide();
				clearInterval(interval);
			}
                
        }, 800);
   $(".download-btn").click(function(){
	var btn =$(this).attr("data-id");
	 $.ajax({
				url: base_url+"welcome/progress", 
				type: "POST",             
				data: {btn:btn},            
				dataType:'json',
			    async: false,			
				success: function(data) {
				if(data.type=='success')
				{
				window.location.href= base_url+"download";
				
				}
				else{
			    toastr.error(data.message, 'Error!', {timeOut: 5000});
				}
				}
				

			}); 
   });

});
// window.addEventListener("load", function() {
//     window.__lc = window.__lc || {};
//     window.__lc.license = 9279150;
//     (function () {
//         var lc = document.createElement('script');
//         lc.type = 'text/javascript';
//         lc.async = true;
//         lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(lc, s);
//     })();
// });