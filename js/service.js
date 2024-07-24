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

var yingyongbtn1 = document.querySelector('.yingyong_btn1');
var yingyongbtn2 = document.querySelector('.yingyong_btn2');
var yingyongbtn3 = document.querySelector('.yingyong_btn3');
var yingyongbtn4 = document.querySelector('.yingyong_btn4');
var yingyongbtn5 = document.querySelector('.yingyong_btn5');
var yingyongbtn6 = document.querySelector('.yingyong_btn6');
var yingyongbtn7 = document.querySelector('.yingyong_btn7');

yingyongbtn1.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'block';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn2.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'block';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn3.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'block';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn4.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'block';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn5.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'block';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn6.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'block';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'none';
});

yingyongbtn7.addEventListener('click', function() {
var yingyongitem1 = document.querySelector('.yingyong_item1').style.display = 'none';
var yingyongitem2 = document.querySelector('.yingyong_item2').style.display = 'none';
var yingyongitem3 = document.querySelector('.yingyong_item3').style.display = 'none';
var yingyongitem4 = document.querySelector('.yingyong_item4').style.display = 'none';
var yingyongitem5 = document.querySelector('.yingyong_item5').style.display = 'none';
var yingyongitem6 = document.querySelector('.yingyong_item6').style.display = 'none';
var yingyongitem7 = document.querySelector('.yingyong_item7').style.display = 'block';
});