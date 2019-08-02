var Details = (function() {
	var $content;

	function loadPerson(ID) {
		// var ID = $(e.target).attr('rel').replace('js-item-', '');

		$.ajax('details/' + ID + ".html", { dataType: 'text' })
		.then(function (contents) {
			$content.html(contents);
		});
	}

	function selectPerson(evt){

		evt.preventDefault();

		var ID = $(evt.target).attr("data-person");

		EVT.emmit("person-selected",ID);
	}

	function init() {
	//	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");

		$content.on("click", "[rel=js-select-person]",loadPerson);

	//	$items.on('click', '[rel*="js-item-"]', loadPerson);

		EVT.on("person-selected",loadPerson);
	}

	var $content;

	return {
		init: init,
		loadPerson: loadPerson
	};
})();

$(document).ready(Details.init);
