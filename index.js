
$(document).ready(function() {
    // $("#begin").show();
    $("#instructions").show();
    $("#wheelchair").hide();
    $("#wheelchairCanvas").focus();
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
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	    $("#memory").show();
	    $("#memoryCanvas").focus();
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
    	$("#instructions").hide();
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#original").show();
        $("#originalCanvas").focus();
        $("#memory").hide();

    });
});