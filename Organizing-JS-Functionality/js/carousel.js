var Carousel = (function carousel() {
    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        
        if (position > 0) {
            position = Math.max(0, position - 250);
        }
        
        $items.css({ left: `${-position}px` });
    }

    function scrollRight(evt){
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        
        if (position < maxPosition) {
            position = Math.min(maxPosition,position + 250);
        }
        
        $items.css({ left: `${-position}px` });
    }

    function clickPerson(event) {
        var element = event.target;
        var id = element.dataset.id.replace(/^.*(\d+)$/, '$1');

        EVENT.emit('person-selected', id);
    }

    var $content = $('[rel=js-carousel] > [rel=js-content]');
    var $items = $content.children('[rel=js-items]');
    var $left;
    var $right;

    var contentWidth = $content.width();
    var itemsWidth = $items.width();
    var position = 0;
    var maxPosition = (itemsWidth - contentWidth);

    function init() {
        $left = $('[rel=js-carousel] > [rel=js-controls] > [rel=js-left]');
        $right = $('[rel=js-carousel] > [rel=js-controls] > [rel=js-right]');

        $left.on('click', scrollLeft);
        $right.on('click', scrollRight);

        $items.on('click', '.item', clickPerson);
    }

    EVENT.on('init', init);

    // var publicAPI = {
    //     init
    // };

    // return publicAPI;
})();
