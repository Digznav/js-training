window.EVENT = new EventEmitter2();

$(document).ready(function ready() {
    // Header.init();
    // Carousel.init();
    // Details.init();


    EVENT.emit('init');
});