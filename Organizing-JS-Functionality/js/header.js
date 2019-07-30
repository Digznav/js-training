$(document).ready(function() {
    const $controls = $('[rel="js-controls"]');
    const $modal = $('#modal');

    $controls.on('click', 'a', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const $target = $(e.target);
        const url = $target.attr('href');

        $.ajax(url, { dataType: 'text' })
        .then(function(contents) {
            $modal.html(contents).show();
        });
    });
});