$(function(){

    $('.header__slider').slick({
        fade: true,
        speed: 500,
        nextArrow: '<img src="img/arrows-right.svg" class="arrows arrows-right">',
        prevArrow: '<img src="img/arrows-right.svg" class="arrows arrows-left">',
        asNavFor: '.slider__dots',
    });
    $('.slider__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider',
    })
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img src="img/arrows-right.svg" class="arrows arrows-right">',
        prevArrow: '<img src="img/arrows-right.svg" class="arrows arrows-left">',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
		slidesToShow: 8,
  		slidesToScroll: 1,
  		arrows: false,
  		asNavFor: '.surf-slider',
  		focusOnSelect: true,
	});
    $('.holder__slider').slick({
		infinite: true,
		fade: true,
    speed: 500,
		prevArrow: '<img class="holder-arrows holder-arrows__left"src="img/arrows-left.svg" alt="arrows">',
		nextArrow: '<img class="holder-arrows holder-arrows__right"src="img/arrows-right.svg" alt="arrows">',
	});
    $('.sleep-slider').slick({
		infinite: true,
		fade: true,
        speed: 500,
		prevArrow: '<img class="sleep-arrows sleep-arrows__left"src="img/arrows-left.svg" alt="arrows">',
		nextArrow: '<img class="sleep-arrows sleep-arrows__right"src="img/arrows-right.svg" alt="arrows">',
	})
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    
    $('.quantity-button').on('click', function() {
    	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    	$('.summ').html("$" + summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html("$" + summ);

    $('.surfboard-box__circle').on('click', function() {
      $(this).toggleClass('active')
    });

    $('.shop__slider').slick({
      infinite: true,
      fade: true,
      speed: 500,
      prevArrow: '<img class="holder-arrows shop-arrows__left"src="img/arrows-left.svg" alt="arrows">',
      nextArrow: '<img class="holder-arrows shop-arrows__right"src="img/arrows-right.svg" alt="arrows">',
    });
  
});