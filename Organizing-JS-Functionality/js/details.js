var Details = (function details() {
    var $items;
    var $content;

    function loadPerson(id) {
        $.ajax(`details/${id}.html`, { dataType: 'text' })
            .then(function response(contents) {
                $content.html(contents);
            });
    }

    function init() {
        $content = $('[rel=js-details]');
    }

    var publicAPI = {
        init,
        loadPerson
    };

    return publicAPI;
})();
