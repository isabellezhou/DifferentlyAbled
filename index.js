
$(document).ready(function() {
    // $("#begin").show();
    $("#wheelchair").show();
    $("#wheelchairCanvas").focus();
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
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	    $("#memory").show();
	    $("#memoryCanvas").focus();
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#original").show();
        $("#originalCanvas").focus();
        $("#memory").hide();

    });
});