var Details = (function() {
	var $content;

	function loadPerson(ID) {
		$.ajax('details/' + ID + ".html", {
			dataType: 'text'
		})
		.then(function (contents) {
			$content.html(contents);
		});
	}

	function selectPerson(e) {
		e.preventDefault();

		var ID = $(e.target).attr('data-person');

		EVT.emit('person-selected', ID);
	}

	function init() {
		$content = $("[rel=js-details]");
		$content.on('click', '[rel=js-select-person]', selectPerson);
		EVT.on('person-selected', loadPerson);
	}

	EVT.on('init', init);
})();