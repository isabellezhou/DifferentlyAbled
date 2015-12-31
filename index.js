
$(document).ready(function() {
    $("#instructions").show();
    $("#wheelchair").hide();
    $("#wheelchair").show();
    $("#wheelchairCanvas").focus();
	$("#wheelchairCanvas").scrollTop(0);
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