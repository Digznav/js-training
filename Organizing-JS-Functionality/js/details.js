var Details = (function() {
	var $content;

	function loadPerson(e) {
		var ID = $(e.target).attr('rel').replace('js-item-', '');

		$.ajax('details/' + ID + ".html", {
			dataType: 'text'
		})
		.then(function (contents) {
			$content.html(contents);
		});
	}

	function init() {
		var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");

		$items.on('click', '[rel*="js-item-"]', loadPerson);
	}

	return {
		init
	};
})();

$(document).ready(Details.init);
