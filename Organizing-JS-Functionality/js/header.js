var Header = (function() {
    var $modal;

    function headerLinkClicks (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var $target = $(e.target);
        var url = $target.attr('href');

        $.ajax(url, { dataType: 'text' })
        .then(function(contents) {
            $modal.html(contents).show();
        });
    }

    function init() {
        var $controls = $('[rel="js-controls"]');
        $modal = $('#modal');

        $controls.on('click', 'a', headerLinkClicks);
    }

    return {
        init
    };
})();

$(document).ready(Header.init);