// var show = function(whichGame) {
//     var id = "\"#" + whichGame + "\"";
//     console.log(id);
//     $(id).show();
// }

$(document).ready(function() {
    console.log("trying to hide");
    $("#wheelchair").hide();
    $("#vision").hide();
    $("#original").hide();
});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
	    $("#wheelchair").show();
	    $("#vision").hide();
	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
	    $("#vision").show();
	    $("#wheelchair").hide();
	});
});