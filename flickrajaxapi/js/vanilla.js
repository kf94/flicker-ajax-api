const submit = document.querySelector('#submit');

submit.addEventListener('submit', function (e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function displayPhotos(data) {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      let photoHTML = '<ul>';
      for (var i=0; i<data.items.length; i++) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }
      photoHTML += '</ul>';
      };
      let photoUl = document.querySelector('#photos');
      photoUl.textContent = photoHTML;
  };
  xhr.open('GET', 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?');
  xhr.setRequestHeader("Content-Type", "application/json");
  let searchTerm = document.querySelector('#search').value;
  xhr.send(JSON.stringify({
        tags: searchTerm,
        format: "json"
      }));
});