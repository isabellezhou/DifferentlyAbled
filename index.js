$(document).ready(function() {
    $("#wheelchair").show();
    $("#vision").hide();
    $("#original").hide();
    $("#memory").hide();
});

$(document).ready(function(){
	$("#wheelchairButton").click(function() {
		$('html,body').animate({
			scrollTop: $(".title").offset().top},
			'slow');
	    $("#wheelchair").show();
	    $("#wheelchairCanvas").focus();
	    $("#vision").hide();
	    $("#original").hide();
        $("#memory").hide();
	});
});

$(document).ready(function(){
	$("#visionButton").click(function() {
		$('html,body').animate({
			scrollTop: $(".title").offset().top},
			'slow');
	    $("#vision").show();
	    $("#visionCanvas").focus();
	    $("#wheelchair").hide();
	    $("#original").hide();
        $("#memory").hide();
	});
});

$(document).ready(function(){
	$("#memoryButton").click(function() {
		$('html,body').animate({
			scrollTop: $(".title").offset().top},
			'slow');
		$("#memory").show();
	    $("#memoryCanvas").focus();
	    $("#vision").hide();
	    $("#wheelchair").hide();
        $("#original").hide();
	});
});

$(document).ready(function(){
    $("#originalButton").click(function() {
    	$('html,body').animate({
			scrollTop: $(".title").offset().top},
			'slow');
    	$("#original").show();
        $("#originalCanvas").focus();
        $("#vision").hide();
        $("#wheelchair").hide();
        $("#memory").hide();

    });
});