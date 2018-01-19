const apiURL = 'https://murmuring-reaches-79202.herokuapp.com/api/v1/postings';

fetch(apiURL).then(function(response) {
  return response.json();
}).then(function(response) {
  response.map(listingToListItem).forEach(appendListItem);
});

function appendListItem(characterItem) {
  document.querySelector('#listings').appendChild(characterItem);
}

function listingToListItem(character) {
  const $li = document.createElement('li');
  const $img = document.createElement('img');

  $img.src = character.imageUrl;
  $img.alt = character.title;

  const $span = document.createElement('span');
  let text = document.createTextNode(character.title);

  $span.appendChild(text);

  const $p = document.createElement('p');
  text = document.createTextNode(`\$${character.price}`);
  $p.appendChild(text);

  const $p2= document.createElement('p');
  text = document.createTextNode(character.location);
  $p2.appendChild(text);

  const $p3 = document.createElement('p');
  text = document.createTextNode(character.description);
  $p3.appendChild(text);

  const $p4 = document.createElement('p');
  text = document.createTextNode(`SIZE: ${character.size} (1 - small corpse, 2 - medium corpse, 3 - large corpse)`);
  $p4.appendChild(text);

  const $p5 = document.createElement('p');
  text = document.createTextNode(character.email);
  $p5.appendChild(text);

  const $p6 = document.createElement('p');
  text = document.createTextNode(`SPITEFULNESS: ${character.spitefulness} (How much would you like your loved one's spirit to suffer, on a scale of 1-3?)`);
  $p6.appendChild(text);

  const $p7 = document.createElement('p');
  if (character.ghostProofing == 1) {
    text = document.createTextNode('GHOSTPROOF: Y')
  } else {
    text = document.createTextNode('GHOSTPROOF: N')
  }
  // text = document.createTextNode(character.ghostProofing);
  $p7.appendChild(text);

  $li.appendChild($img);
  $li.appendChild($span);
  $li.appendChild($p);
  $li.appendChild($p2);
  $li.appendChild($p3);
  $li.appendChild($p4);
  $li.appendChild($p5);
  $li.appendChild($p6);
  $li.appendChild($p7);
  return $li;
}
