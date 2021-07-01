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

$('.btn_nav_menu').click(function(){
  $('.mobile_menu').toggleClass('active')
  $('body').addClass("fixed-position");
})
$('.btn_nav_close').click(function(){
  $('.mobile_menu').removeClass('active')
  $('body').removeClass("fixed-position");
})



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


let changeColorSelect = () => {
    country.onchange = () => {
        if(country.value) {
            country.style.color = '#191919'
        }
    }
}
changeColorSelect ()


var requestUrl = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';
var xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl, true);
xhr.responseType = 'json';
xhr.send()

xhr.onload = function() {
  var countryList = xhr.response;
  console.log(countryList)
  countryFunction(countryList);
}

function countryFunction(jsonObj) {
    let arr = []
  for (var key in jsonObj){
    arr.push(key)
  }
  for(let key of arr.sort()) {
    var countryName = document.createElement('option');
    let country = document.getElementById('country')
    countryName.innerHTML = key;
    if(country) {
        country.append(countryName);
    }
  }
}
if (window.innerWidth < 1280 && window.innerWidth >= 700) {
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 37,
});
}
if (window.innerWidth < 700) {
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 25,
});
}