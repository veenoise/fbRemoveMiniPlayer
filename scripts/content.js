(function(document,found) {
    window.addEventListener('DOMSubtreeModified', function() {
  
      var yourdiv = document.querySelector("div.xxsgkw5");

      if(yourdiv){
        yourdiv.parentElement.removeChild(yourdiv);
        found = true;
      }
    }, false);
})(document,false);
