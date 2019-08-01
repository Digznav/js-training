var Details = (function details() {
    var $items;
    var $content;

    function loadPerson(event) {
        var element = event.target;
        var id = element.dataset.id.replace(/^.*(\d+)$/, '$1');

        $.ajax(`details/${id}.html`, { dataType: 'text' })
            .then(function response(contents) {
                $content.html(contents);
            });
    }

    function init() {
        $items = $('[rel=js-carousel] > [rel=js-content] > [rel=js-items]');
        $content = $('[rel=js-details]');

        $items.on('click', '.item', loadPerson);
    }

    var publicAPI = {
        init
    };

    return publicAPI;
})();

$(document).ready(Details.init);
