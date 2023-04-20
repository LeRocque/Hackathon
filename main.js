document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  document.querySelector('body').appendChild(button);
  const thumbNail = document.createElement('img');
  thumbNail.setAttribute('src', 'thumbnail.png');
  thumbNail.setAttribute('id', 'thumbNail');
  document.querySelector('button').appendChild(thumbNail);
  
  button.addEventListener('click', handler);
  function handler () {
    alert('PIZZA PIZZA PIZZA PIZZA PIZZA');
    window.open('https://www.google.com/search?q=pizza+near+me&rlz=1C5CHFA_enUS911US911&oq=Pizza+near+me&aqs=chrome.0.0i433i457i512j0i402i650l2j0i512l7.1824j0j15&sourceid=chrome&ie=UTF-8')
  }


});