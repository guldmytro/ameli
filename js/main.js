// accordeon
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

// sliders
$('.related-slider').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
});
