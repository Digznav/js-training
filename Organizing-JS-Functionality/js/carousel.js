var Carousel = (function() {
    var $content;
    var $items;

    var contentWidth;
    var itemsWidth;
    var position;
    var maxPosition;

    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0,position - 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    function scrollRight(evt){
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition,position + 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    function loadPerson(evt){
        var ID = $(evt.target).attr('rel').replace('js-item-', '');

        EVT.emit("person-selected",ID);
    }

    function init() {
        var $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
        var $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

        $content = $("[rel=js-carousel] > [rel=js-content]");
        $items = $content.children("[rel=js-items]");
        contentWidth = $content.width();
        itemsWidth = $items.width();
        position = 0;
        maxPosition = (itemsWidth - contentWidth);

        $left.on('click', scrollLeft);
        $right.on('click', scrollRight);

        $items.on('click', '[rel*="js-item-"]', loadPerson);
    }

    EVT.on("init",init);


    return {
        init: init,
        loadPerson: loadPerson
    };
})();



