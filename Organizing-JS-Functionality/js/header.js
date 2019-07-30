$(document).ready(function ready() {
    var controls = document.querySelector('.controls');
    var modal = document.getElementById('modal');

    controls.addEventListener('click', function openPopup(event) {
        if (event.target && event.target.tagName.toLowerCase() == 'a') {
            event.preventDefault();
            // event.stopPropagation();
            // event.stopImmediatePropagation();

            var buttonLink = event.target;
            var url = buttonLink.getAttribute('href');

            console.log(url);

            $.ajax(url, { dataType: 'text' })
                .then(function response(contents) {
                    modal.innerHTML = contents;
                    $(modal).show();
                });
        }
    });
});
