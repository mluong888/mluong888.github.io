$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	$("#lightbox").hide();
	console.log("123");
	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		console.log(currentImageNumber)
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("#lightbox").show();
	});
	

	// Carousel section
	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 6;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 5 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});