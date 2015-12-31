
$(document).ready(function() {
    // $("#begin").show();
    $("#instructions").show();
    $("#wheelchair").hide();
    $("#wheelchairCanvas").focus();
	$("#wheelchairCanvas").scrollTop(0);
    $("#vision").hide();
    $("#original").hide();
    $("#memory").hide();

});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
		$("#instructions").hide();
	    $("#wheelchair").show();
	    $("#wheelchairCanvas").focus();
	    $("#wheelchairCanvas").scrollTop(0);
	    $("#vision").hide();
	    $("#original").hide();
        $("#memory").hide();

	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
		$("#instructions").hide();
	    $("#vision").show();
	    $("#visionCanvas").focus();
	    $("#visionCanvas").scrollTop(0);
	    $("#wheelchair").hide();
	    $("#original").hide();
        $("#memory").hide();
	});
});

$(document).ready(function(){
	$("#memoryButton").click(function() {
		$("#instructions").hide();
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	    $("#memory").show();
	    $("#memoryCanvas").focus();
	    $("#memoryCanvas").scrollTop(0);
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
    	$("#instructions").hide();
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#original").show();
        $("#originalCanvas").focus();
	    $("#originalCanvas").scrollTop(0);
        $("#memory").hide();

    });
});