'use strict';

$(function () {

	// $('.fullscreen')
	TweenLite.to('.fullscreen', 2, { 'opacity': 1 });

	var green = 'rgb(197, 214, 123)';
	var blue = 'rgb(127, 168, 248)';
	var red = 'rgb(240, 150, 126)';
	var yellow = 'rgb(234, 217, 121)';

	var duration = 2;
	var align_g = $('.title_g').offset().left + $('.title_g').width() / 2;
	var align_b = $('.title_b').offset().left + $('.title_b').width() / 2;
	var align_r = $('.title_r').offset().left + $('.title_r').width() / 2;
	var align_y = $('.title_y').offset().left + $('.title_y').width() / 2;

	var progressTl = new TimelineMax({ repeat: -1 });
	var progress = $('.progress');
	TweenLite.set(progress, { backgroundColor: green });

	var slides = document.querySelectorAll('.section');
	var tl = new TimelineLite({ paused: true });
	tl.set(progress, { backgroundColor: green }).to(slides[0], duration, { xPercent: -120 }, 'L0').from(slides[1], duration, { xPercent: 120 }, 'L0').to("#circle", duration, { morphSVG: '#donut' }, 'L0').to("#circle", duration, { fill: blue }, 'L0').to('.title', duration, { x: -(align_b - align_g) }, 'L0').to('.title_g', duration, { color: '#fff' }, 'L0').to('.title_b', duration, { color: blue }, 'L0').to('.green_pat', duration, { rotation: '30deg' }, 'L0').to('.green_bottle', duration, { rotation: '-20deg' }, 'L0').from('.blue_box2', duration, { rotation: '20deg' }, 'L0').fromTo('.button .bgc', duration, { width: 0 }, { width: '100%' }, 'L0').set('.button', { backgroundColor: blue }).set('.button .bgc', { width: 0 }).set(progress, { backgroundColor: blue }).addPause('Dot1').to(slides[1], duration, { xPercent: -120 }, 'L1').from(slides[2], duration, { xPercent: 120 }, 'L1').to("#circle", duration, { morphSVG: '#hex' }, 'L1').to("#circle", duration, { fill: red }, 'L1').to('.title', duration, { x: -(align_r - align_g) }, 'L1').to('.title_b', duration, { color: '#fff' }, 'L1').to('.title_r', duration, { color: red }, 'L1').to('.blue_box1', duration, { rotation: '-10deg', xPercent: -10 }, 'L1').to('.blue_coconut', duration, { rotation: '10deg', xPercent: -10 }, 'L1').to('.blue_coconut', duration, { rotation: '10deg', xPercent: -10 }, 'L1').from('.red_stick1', duration, { rotation: '40deg', xPercent: -10 }, 'L1').set('.button .bgc', { backgroundColor: red }, 'L1').fromTo('.button .bgc', duration, { width: 0 }, { width: '100%' }, 'L1').set('.button', { backgroundColor: red }).set('.button .bgc', { width: 0 }).set(progress, { backgroundColor: red }).addPause('Dot2').to(slides[2], duration, { xPercent: -120 }, 'L2').from(slides[3], duration, { xPercent: 120 }, 'L2').to("#circle", duration, { morphSVG: '#circle' }, 'L2').to("#circle", duration, { fill: yellow }, 'L2').to('.title', duration, { x: -(align_y - align_g) }, 'L2').to('.title_r', duration, { color: '#fff' }, 'L2').to('.title_y', duration, { color: yellow }, 'L2').to('.red_stick2', duration, { rotation: '120deg', xPercent: -10 }, 'L2').to('.red_box', duration, { rotation: '60deg' }, 'L2').from('.yellow_flower', duration, { rotation: '-60deg' }, 'L2').from('.yellow_box', duration, { rotation: '40deg' }, 'L2').set('.button .bgc', { backgroundColor: yellow }, 'L2').fromTo('.button .bgc', duration, { width: 0 }, { width: '100%' }, 'L2').set('.button', { backgroundColor: yellow }).set('.button .bgc', { width: 0 }).set(progress, { backgroundColor: yellow });

	progressTl.to('.null', 2, {}).fromTo(progress, 4, { width: 0 }, { width: '100%', ease: Power0.easeNone }).call(function () {
		tl.play();
	}).to(progress, 0.5, { autoAlpha: 0 });

	function GO(e) {
		var SD = isNaN(e) ? e.wheelDelta || -e.detail : e;
		if (SD < 0) {
			tl.play();
		} else {
			tl.reverse();
		};
		progressTl.restart();
	};

	document.addEventListener("mousewheel", GO);
	document.addEventListener("DOMMouseScroll", GO);
	MorphSVGPlugin.convertToPath("circle");

	TweenMax.set("#circle", { morphSVG: '#drop' });
});
//# sourceMappingURL=ui.js.map
