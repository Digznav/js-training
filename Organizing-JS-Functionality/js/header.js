var Header = (function header(params) {
    var modal;

    function openPopup(event) {
        if (event.target && event.target.tagName.toLowerCase() == 'a') {
            event.preventDefault();

            var buttonLink = event.target;
            var url = buttonLink.getAttribute('href');

            $.ajax(url, { dataType: 'text' })
                .then(function response(contents) {
                    modal.innerHTML = contents;
                    $(modal).show();
                });
        }
    }

    function init() {
        var controls = document.querySelector('.controls');
        modal = document.getElementById('modal');

        controls.addEventListener('click', openPopup);
    }

    var publicAPI = {
        init
    };

    return publicAPI;
})();
