// var show = function(whichGame) {
//     var id = "\"#" + whichGame + "\"";
//     console.log(id);
//     $(id).show();
// }

$(document).ready(function() {
    // $("#begin").show();
    $("#wheelchair").show();
    $("#vision").hide();
    $("#original").hide();
});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
		// $("#begin").hide();
	    $("#wheelchair").show();
	    $("#vision").hide();
	    $("#original").hide();
	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
		// $("#begin").hide();
	    $("#vision").show();
	    $("#wheelchair").hide();
	    $("#original").hide();
	});
});

$(document).ready(function(){
	$("#originalButton").click(function() {
		// $("#begin").hide();
	    $("#vision").hide();
	    $("#wheelchair").hide();
	    $("#original").show();
	});
});