// regola generale del documento per assicurami ulteriore check

// *************************** CREAZIONE DI UNA SLIDE *********************
$(document).ready(function(){
  // effettuo click sulla classe '.icon-prev' inserendo 'virgolette'
  $('.icon-prev').click(
    // inserisco funzione di Callback
      prevImage
  );
  // effettuo click sulla classe '.icon-next' inserendo 'virgolette'
    $('.icon-next').click(
      // inserisco funzione di Callback
      nextImage
    );

  // funzione nextImage
  function nextImage(){
    // creo variabile con riferimento alla classe .image img.active (1 img della slide)
    var imgActive = $('.image img.active');
    // creo variabile con riferimento alla classe .navigazione i:active (1 pallino sotto la slide)
    var pallinaActive = $('.navigazione i.active');
    // elimino la classe .active alla prima img
    imgActive.removeClass('active');
    // elimino la classe .active alla prima img
    pallinaActive.removeClass('active');

    // con la class .image img.first riparto alla prima img riattivado la classe precedente
    if (imgActive.hasClass('last')){
      $('.image img.first').addClass('active');
      $('.navigazione i.first').addClass('active');
    } else {
    // altrimenti se non è l'ultima applica active alla prox img
    imgActive.next().addClass('active');
    pallinaActive.next().addClass('active')
    }
  }

  // funzione prevImage
  function prevImage(){
    // creo variabile con riferimento alla classe .image img.active (1 img della slide)
    var imgActive = $('.image img.active');
    // creo variabile con riferimento alla classe .navigazione i:active (1 pallino sotto la slide)
    var pallinaActive = $('.navigazione i.active');
    // elimino la classe .active alla prima img
    imgActive.removeClass('active');
    // elimino la classe .active alla prima img
    pallinaActive.removeClass('active');

    // con la class .image img.first riparto alla prima img riattivado la classe precedente
    if (imgActive.hasClass('first')){
      $('.image img.last').addClass('active');
      $('.navigazione i.last').addClass('active');
    } else {
    // altrimenti se non è l'ultima applica active alla prox img
    imgActive.prev().addClass('active');
    pallinaActive.prev().addClass('active')
    }
  }
});
