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

$("#wheelchairButton").click(function() {
    $("#wheelchair").show();
    
});