
$(document).ready(function() {
    // $("#begin").show();
<<<<<<< Updated upstream
    $("#instructions").show();
    $("#wheelchair").hide();
=======
    $("#wheelchair").show();
    $("#wheelchairCanvas").focus();
	$("#wheelchairCanvas").scrollTop(0);
>>>>>>> Stashed changes
    $("#vision").hide();
    $("#original").hide();
    $("#memory").hide();

});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
	    $("#wheelchair").show();
	    $("#wheelchairCanvas").focus();
	    $("#vision").hide();
	    $("#original").hide();
        $("#memory").hide();

	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
	    $("#vision").show();
	    $("#visionCanvas").focus();
	    $("#wheelchair").hide();
	    $("#original").hide();
        $("#memory").hide();
	});
});

$(document).ready(function(){
	$("#memoryButton").click(function() {
<<<<<<< Updated upstream
		$("#instructions").hide();
		$("#memory").show();
	    $("#memoryCanvas").focus();
=======
>>>>>>> Stashed changes
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
<<<<<<< Updated upstream
    	$("#instructions").hide();
    	$("#original").show();
        $("#originalCanvas").focus();
=======
>>>>>>> Stashed changes
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#memory").hide();

    });
});