

let hElement = document.createElement('h1');
hElement.innerHTML = "This is H tag from js file";
document.body.prepend(hElement);

let pElement = document.createElement('p');
pElement.innerHTML = "This is p tag from js file";

let bodyTag = document.querySelector('#bodyTag');
let anchorTag = document.querySelector('#anchorTag');
let pTagHtml =document.querySelector('#pTag');

bodyTag.insertBefore(pElement, anchorTag);

let spanTag = document.createElement('span');
spanTag.innerHTML = "This is apan tag fron js file";

// bodyTag.insertBefore(spanTag, pTagHtml);

bodyTag.appendChild(spanTag);
