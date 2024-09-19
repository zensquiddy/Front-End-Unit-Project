$(document).ready(function(){

	$("#up").click(function() {
		$(".uparrow").toggle("slow");
	});
 
	$("#search").click(function() {
		$(".modalisimo").show("fast");
		$(".closino").show("fast");
	});	
	$("#garlic").click(function() {
		$(".modalisimo").hide("fast");
		$(".closino").hide("fast");
	});
});
