window.addEventListener('scroll', function() {
    var bannerHeight = document.querySelector('.banner').offsetHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.querySelector('.nav');
    var cent = document.querySelector('.container');
    var indicator = document.querySelector('.indicator');
    var dw = document.querySelector('.dw');
    var bts = document.querySelectorAll('.bt');
    var navHeight = 60;
      var btPositions = [];
      bts.forEach(function(bt, index) {
          var btTop = bt.offsetTop - navHeight;
          btPositions.push(btTop);
      });

      for (var i = 0; i < btPositions.length; i++) {
          if (scrollPosition >= btPositions[i] && (i === btPositions.length - 1 || scrollPosition < btPositions[i + 1])) {
              var liHeight = dw.children[i].offsetHeight;
              var liTop = dw.children[i].offsetTop;
              indicator.style.height = liHeight + 'px';
              indicator.style.top = liTop + 'px';
              break;
          }
      }

      if (scrollPosition > bannerHeight) {
          nav.classList.add('nav-fixed');
          cent.classList.add('ll');
      } else {

          nav.classList.remove('nav-fixed');
          cent.classList.remove('ll');
      }
});


var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
btn2.addEventListener('mouseover', function() {

    btn2.style.display = 'none';
    btn3.style.display = 'flex';
});
btn3.addEventListener('mouseleave', function() {

    btn2.style.display = 'flex';
    btn3.style.display = 'none';
});       


document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll('.dw li');
    
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {

            var targetText = item.textContent.trim();
            
            var btElements = document.querySelectorAll('.bt');

            for (var i = 0; i < btElements.length; i++) {
                if (btElements[i].textContent.trim() === targetText) {
                    window.scrollTo({
                        top: btElements[i].offsetTop,
                        behavior: 'smooth'
                    });
                    break;
                }
            }
        });
    });
});