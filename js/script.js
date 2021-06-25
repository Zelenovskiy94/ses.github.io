$('.btn_to_download').click(function(event) {
    $('.modal_form').modal({
        showClose: false
      });
});
$('.btn_download').click(function(event) {
    $('.modal_success').modal({
        showClose: false
      });
});
$('.btn_play_video').click(function(event) {
    $('.modal_video').html(`
    <iframe src="https://player.vimeo.com/video/566610997?autoplay=1&byline=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <a href="#" class="btn_modal_close close_grey close_video" rel="modal:close"></a>
    `)
    
    $('.modal_video').modal({
        showClose: false
      });
    $('.modal_video').addClass('active')  
});


let element = document.querySelector('.modal_video'), bubbles = false;


let observer = new MutationObserver(function (mutations) {
    if(element.classList.contains('active')) {
        mutations.forEach(attrModified);
    }
});
observer.observe(element, { attributes: true, subtree: bubbles });

function attrModified(mutation) {
    let name = mutation.attributeName,
    newValue = mutation.target.getAttribute(name);
    // oldValue = mutation.oldValue;
    if(name === 'style' && newValue === 'display: none;') {
        element.classList.remove('active')
        $('.modal_video').html(' ')
    }
}