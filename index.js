
$(document).ready(function() {
    // $("#begin").show();
    $("#instructions").show();
    $("#wheelchair").hide();
    $("#vision").hide();
    $("#original").hide();
    $("#memory").hide();

});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
		$("#instructions").hide();
	    $("#wheelchair").show();
	    $("#wheelchairCanvas").focus();
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
	    $("#wheelchair").hide();
	    $("#original").hide();
        $("#memory").hide();
	});
});

$(document).ready(function(){
	$("#memoryButton").click(function() {
		$("#instructions").hide();
		$("#memory").show();
	    $("#memoryCanvas").focus();
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
    	$("#instructions").hide();
    	$("#original").show();
        $("#originalCanvas").focus();
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#memory").hide();

    });
});