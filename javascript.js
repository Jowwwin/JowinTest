(function($){
	$.fn.galleryFadeXXX = function() {
		
		var gallery = {
			setup : function(d) {
				d.image = d.find('img');
				d.imagesrc = d.image.attr('src');
				d.infobox = d.find('div.info');
				d.infoboxHeight = 48;

				d.image.css({
					'opacity' : 1
				});

				d.css({
					'background' : 'url(' + d.imagesrc + ') right no-repeat'
				});

				d.infobox.css({
					'width' : (d.width() * 1.0) + 'px' ,
					'height' : d.infoboxHeight + 'px' ,
					'position' : 'relative' , 
					'top' : 0 
				});
			} ,
			activate : function(d) {
				d.image.animate({ 'opacity' : .01}, 200);
				d.infobox.animate({ 'top' : (-1 * d.infoboxHeight) + 'px' }, 250);
			} ,
			deactivate : function(d) {
				d.image.animate({'opacity' : 1}, 200);
				d.infobox.animate({ 'top' : 0 }, 250);
			}
		};

		this.each(function(){
			var that = $(this);
			gallery.setup(that);

			that.hover( function() {
				gallery.activate(that);
			}, function() {
				gallery.deactivate(that);
			});

		});
	};
})(jQuery);

$(document).ready(function(){

	$('#top_link a').hover( function(){
		$(this).animate({ 'color': '#8f8f8f' }, 300);
	}, function(){
		$(this).animate({ 'color': '#404040' }, 300);
	});
	
	$('a#link_home').hover( function(){
	$(this).animate({ 'color': '#dfdfdf' }, 300);
	}, function(){
	$(this).animate({ 'color': '#616161' }, 300);
	});

	
	$('a.menu_button').css({
		'opacity' : '.25'
	});
		

	$('body').append('<div id="menu_button_text"></div>');
	$('a.menu_button').hover( function(){
		$(this).stop().animate({ 'opacity' : '1'});
		var elem_offset = $(this).offset();
		$('body div#menu_button_text').text($(this).attr('id')).css({
		'width' : '155px',
		'text-align' : 'center',
		'color' : '#efefef',
		'font-family' : 'Conv_Quicksand Book',
		'-webkit-animation-duration' : '.5s',
		'animation-duration' : '.5s' ,
		'top' : (elem_offset.top + 36) + 'px', 
		'left' : elem_offset.left + 'px', 
		'position': 'absolute'}).removeClass('animated fadeOutDown').addClass('animated fadeInUp');

	}, function(){
		if (! $(this).hasClass('clicked_menu')) {
		$(this).stop().animate({ 'opacity' : '.25' });
		}
		$('body div#menu_button_text').stop().removeClass('animated fadeInUp').addClass('animated fadeOutDown');
	});		
	
	$('a.menu_button').click( function() {
		$('a.menu_button').removeClass('clicked_menu').css({ 'opacity' : '.25'});
		$(this).addClass('clicked_menu').css({ 'opacity' : '1' });
	});

	$('div.thumb').galleryFadeXXX();
	
	
	$('#container').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});







	
});




function isotopeAnimate () {
	
	alert('ssd');

	$('#container').isotope({
  animationOptions: {
     duration: 750,
     easing: 'linear',
     queue: false
   }
});


}