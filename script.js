let links = document.getElementsByClassName('box21proba');

for (let i = 0; i < links.length; i++) {
  links[i].onmouseover = function () {
    var a123 = document.getElementsByClassName('a1234');
    var too = a123[i];
    too.style.opacity = '1';
    too.style.visibility = 'visible';
  };
  links[i].onmouseout = function () {
    var a123 = document.getElementsByClassName('a1234');
    var too = a123[i];
    too.style.opacity = '0';
    too.style.visibility = 'hidden';
  };
}
