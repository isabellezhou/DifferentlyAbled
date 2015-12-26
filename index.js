var show = function(whichGame) {
    $("\"#" + whichGame + "\"").show();
}

$(document).ready(function() {
    console.log("trying to hide");
    $("#wheelchair").hide();
    $("#vision").hide();
    $("#original").hide();
});