var Header = (function() {


    function headerLinkClicks (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var $target = $(evt.target);
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

    EVT.on("init",init);

    var $modal;

    return {
        init: init
    };
})();

