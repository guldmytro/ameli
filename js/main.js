// accordeon
(function() {
    function toggleAccordion() {
        const $this = $(this);
        if ($this.hasClass('active')) {
            return false;
        }
        if ($this.is('.bestsellers-item__header')) {
            $('.bestsellers-item__header.active').removeClass('active').next('.bestsellers-item__content').slideUp(200);
            $this.addClass('active').next('.bestsellers-item__content').slideDown(200);
        } else {
            $('.accordeon-item__header.active').removeClass('active').next('.accordeon-item__description').slideUp(200);
            $this.addClass('active').next('.accordeon-item__description').slideDown(200);
        }
    }
    $('.bestsellers-item__header:not(.active) + .bestsellers-item__content, .accordeon-item__header:not(.active) + .accordeon-item__description').hide();
    const accordion = $(".bestsellers-item__header, .accordeon-item__header");
    accordion.on('click', toggleAccordion);
})();

// sliders
(function() {
    if (typeof Flickity === 'function') {
        $('.related-slider').flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true,
        });
    }
})();


// search bar
(function() {
    const openSearch = $('.header-link_search');
    const closeSearch = $('.header-search__btn');
    const searchBar = $('.header-search');
    const searchInput = $('.form-search__input');
    openSearch.on('click', function() {
        searchBar.slideDown(150);
        searchInput.focus();
    });
    closeSearch.on('click', function() {
        searchBar.slideUp(150);
    });
})();

// scrolldown
(function() {
    const buttonDown = $('.main-home__scroll');
    buttonDown.on('click', function(e) {
        e.preventDefault();
        const target = $(`#${$(this).attr('data-anchor')}`);
        const header = $('header.header');
        console.log( header.outerHeight());
        if (target.length && header) {
            $('html, body').animate({
                scrollTop: (target.offset().top - header.outerHeight())
            }, 1000)
        }
    });
})();

