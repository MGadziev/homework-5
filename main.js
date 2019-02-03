(function() {
  const test = document.querySelector(".dragElement");
  test.onmousedown = function(k) {
    test.style.position = "absolute";
    moveAt(k);
    document.body.appendChild(test);
    test.style.zIndex = 1000;
    function moveAt(k) {
      test.style.left = k.pageX - test.offsetWidth / 2 + "px";
      test.style.top = k.pageY - test.offsetHeight / 2 + "px";
    }
    document.onmousemove = function(k) {
      moveAt(k);
    };
    test.onmouseup = function() {
      document.onmousemove = null;
      test.onmouseup = null;
    };
    test.ondragstart = function() {
  return false;
};
  };
})();
