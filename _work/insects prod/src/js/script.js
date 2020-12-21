$(document).ready(function () {
	$(".gallery").each(function () {
		// the containers for all your galleries
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "",
			gallery: {
				enabled: true,
			},
			removalDelay: 300,
		});
	});

	$("body").on("click", ".circle-plus, .questions__title", function (e) {
		e.preventDefault();
		$(this).parent().find(".circle-plus").toggleClass("opened");
		$(this).parent().find(".questions__txt").slideToggle();
		return false;
	});

	//Плавный скролл
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({ scrollTop: destination }, 800);
	});

	//Модальные окна
	$("[data-modal=consultation]").on("click", function () {
		$(".modal, .overlay").fadeIn();
	});

	$(".modal__close").on("click", function () {
		$(".overlay, #consultation, #thanks, #order, .modal-thanks").fadeOut();
	});

	$("body").on("click", ".article__full", function (e) {
		e.preventDefault();
		$(this).next("span").slideToggle();
		return false;
	});

	$(".form").each(function () {
		$(this).submit(function (event) {
			event.preventDefault();
			var $form = $(this);
			$.ajax({
				url: $form.attr("action"),
				type: $form.attr("method"),
				data: $form.serialize(),
				success: function () {
					$(".modal, .overlay").fadeOut();
					$(".modal-thanks").show();
					let t = setTimeout(function () {
						$(".modal-thanks").hide();
					}, 4000);
					console.log("success");
					$form[0].reset();
				},
				error: function () {
					console.log("Error");
				},
				complete: function () {
					console.log("complete");
				},
			});
		});
	});
	// $('form').submit(function(event) {
	// 	event.preventDefault();
	// 	var $form = $(this);
	// 	$.ajax({
	// 		url: $form.attr('action'),
	// 		type: $form.attr('method'),
	// 		data: $form.serialize(),
	// 	})
	// 	.done(function() {
	// 		// ym(51106481, 'reachGoal', 'zayavka');

	// 		$('.callback').hide();
	// 		$('.thnks').show();

	// 		var t = setTimeout(function(){
	// 			$('.thnks').hide("slow");
	// 		}, 4000);

	// 		var t2 = setTimeout(function() {
	// 			offOverlay();
	// 		},5000);

	// 		$form[0].reset();
	// 		console.log("Success");
	// 	})
	// 	.fail(function() {
	// 		console.log("Error");
	// 	})
	// 	.always(function() {
	// 		console.log("complete");
	// 	});
	// });
});
