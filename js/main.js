$(document).ready(function() {

    // accordeon
    function toggleAccordeon() {
        const $this = $(this);
        if ($this.hasClass('active')) {
            return false;
        }
        $('.bestsellers-item__header.active').removeClass('active').next('.bestsellers-item__content').slideUp(200);
        $this.addClass('active').next('.bestsellers-item__content').slideDown(200);;
    }
    $('.bestsellers-item__content').hide();
    const bestsellersAccordeon = $('.bestsellers-item__header');
    bestsellersAccordeon.click(toggleAccordeon);
    
});
// end ready