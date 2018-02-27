$(document).ready(function() {
  $('form').submit(function (e) {
    e.preventDefault();
    const flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let $submitButton = $('#submit');
    $('search').prop("disabled",true);
    $submitButton.attr("disabled",true).val("searching...");
    
    let searchTerm = $('#search').val();
    let flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    function displayPhotos(data) {
      let photoHTML = '<ul>';
      $.each(data.items , function (i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $('search').prop("disabled",false);
      $submitButton.attr("disabled",false).val("search");
      $('#search').val('');
    };
         
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
}); //end ready


