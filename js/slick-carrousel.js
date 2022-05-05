nArrow = `<button aria-label="next" type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" viewBox="0 0 9.697 18"><path id="Caminho_2210" data-name="Caminho 2210" d="M111.791,8.507,103.479.195a.693.693,0,0,0-.979.979L110.322,9,102.5,16.818a.693.693,0,0,0,.979.979l8.312-8.312A.693.693,0,0,0,111.791,8.507Z" transform="translate(-102.297 0)" fill="#000"/></svg></button>`;
pArrow = `<button aria-label="prev" type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" viewBox="0 0 9.697 18"><path id="Caminho_2211" data-name="Caminho 2211" d="M102.5,8.507,110.811.195a.693.693,0,0,1,.979.979L103.969,9l7.822,7.822a.693.693,0,1,1-.979.979L102.5,9.486A.693.693,0,0,1,102.5,8.507Z" transform="translate(-102.297 0)" fill="#000"/></svg>
</button>`;


$(document).on("DOMNodeInserted", function(e){
  if($(e.target).hasClass('carousel')){
    $('.carousel').slick({
      dots: true,
      arrows: true,
      prevArrow: pArrow,
      nextArrow: nArrow,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  if($(e.target).hasClass('carousel-showcase')){
    $('.carousel-showcase').slick({
      dots: false,
      arrows: true,
      prevArrow: pArrow,
      nextArrow: nArrow,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
  if($(e.target).hasClass('box-depoimentos')){
    $('.box-depoimentos').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    });
  }
});

