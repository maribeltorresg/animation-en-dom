window.addEventListener('load', function() {
  // Convierte a un array                      (array-like) 
  var tds = Array.prototype.slice.call(document.getElementsByTagName('td'));
  var index = 0;

  tds[index].style.backgroundColor = 'red';

  // event keydowm --> cuando  presiones todas las teclas
  window.addEventListener('keydown', function(event) {
    tds[index].style.backgroundColor = 'white';

    // codigo ASCII (arriba) up = 38
    if (event.keyCode === 38) {
      index = index - 4;
    }

    // down = 40
    if (event.keyCode === 40) {
      index = index + 4;
    }

    // left = 37
    if (event.keyCode === 37) {
      index = index - 1;
    }

    // right = 39
    if (event.keyCode === 39) {
      index = index + 1;
    }

    tds[index].style.backgroundColor = 'red';
  });
});