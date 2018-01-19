const apiURL = 'https://murmuring-reaches-79202.herokuapp.com/api/v1/postings';

fetch(apiURL).then(function(response) {
  return response.json();
}).then(function(response) {
  console.log(response);
  // response.data.map(listingToListItem).forEach(appendListItem);
});

// function appendListItem(characterItem) {
//   document.querySelector('#characters').appendChild(characterItem);
// }

// function listingToListItem(character) {
//   const $li = document.createElement('li');
//   const $img = document.createElement('img');
//   $img.src = character.imageURL;
//   $img.alt = character.name;
//   const $span = document.createElement('span');
//   let text = document.createTextNode(character.name + ' - ' + character.phone);
//   $span.appendChild(text);
//   const $p = document.createElement('p');
//   text = document.createTextNode(character.message);
//   $p.appendChild(text);
//   const $a = document.createElement('a');
//   $a.href = 'contact.html?character=' + character.name;
//   text = document.createTextNode('Leave ' + character.name + ' a message');
//   $a.appendChild(text);
//   $li.appendChild($img);
//   $li.appendChild($span);
//   $li.appendChild($p);
//   $li.appendChild($a);
//   return $li;
// }
