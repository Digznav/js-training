var Details = (function details() {
    var $items;
    var $content;

    function loadPerson(id) {
        $.ajax(`details/${id}.html`, { dataType: 'text' })
            .then(function response(contents) {
                $content.html(contents);
            });
    }

    function selectPerson(event) {
        event.preventDefault();
        var id = event.target.dataset.person;

        EVENT.emit('person-selected', id);
    }

    function init() {
        $content = $('[rel=js-details]');

        $content.on('click', '[rel="js-select-person"]', selectPerson);

        EVENT.on('person-selected', loadPerson);
    }

    EVENT.on('init', init);

    // var publicAPI = {
    //     init
    // };

    // return publicAPI;
})();
