// regola generale del documento per assicurami ulteriore check

// *************************** CREAZIONE DI UNA SLIDE *********************
$(document).ready(function(){
  // effettuo click sulla classe '.icon-prev' inserendo 'virgolette'
  $('.icon-prev').click(
    // inserisco funzione di Callback

  );
// effettuo click sulla classe '.icon-next' inserendo 'virgolette'
  $('.icon-next').click(
    // inserisco funzione di Callback
    nextImage
  );

// funzione nextImage
function nextImage(){
  // creo variabile con riferimento alla classe .image img.active (1 img della slide)
  var imgActive = $('.image img.active ');
  // controllo in console quello che succede
  console.log('nextImage');
}








































});
