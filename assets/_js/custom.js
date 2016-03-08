$( document ).ready(function() {	
	$('a[href^="#"]').each(function() {

	  // store values so it doesn't have to execute onclick
	  var $this = $(this),
	      value = $this.attr('href'),
	      element = $(value);

	  $this.click(function(e) {

	    // prevent default scrolling
	    e.preventDefault();
		history.pushState({}, "", this.href);

	    // scrollTo element
	    element.ScrollTo();
	  });
	});
	
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	
	$("a[href='/']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  history.pushState({}, "", this.href);
	  return false;
	});

});