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
    $("#memory").hide();

});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
	    $("#wheelchair").show();
	    $("#vision").hide();
	    $("#original").hide();
        $("#memory").hide();

	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
	    $("#vision").show();
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
	});
});


$(document).ready(function(){
    $("#originalButton").click(function() {
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#original").show();
        $("#memory").hide();

    });
});