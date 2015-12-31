
$(document).ready(function() {
    $("#wheelchair").show();
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
		$("#memory").show();
	    $("#memoryCanvas").focus();
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
    	$("#original").show();
        $("#originalCanvas").focus();
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#memory").hide();

    });
});