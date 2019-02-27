$("body").on("change", ".filter", function (e) {
	e.preventDefault();

	console.log("Hello, world!");
	//Making sure that java is working to this point//
	const $this_filter = $(this);
	const food_type = $this_filter.val();
	console.log("Food type " + food_type);
	$(".item.active").removeClass("active");
	$("." + food_type).addClass("active");
	console.log("We made it!");
});