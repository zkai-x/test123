document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('#sidebar ul li a').forEach(item => {
                item.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - document.getElementById('content').offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
var listItems = document.querySelectorAll('.yingyong_nav li');

listItems.forEach(function(item) {
item.addEventListener('click', function() {
    listItems.forEach(function(listItem) {
        listItem.classList.remove('active');
    });

    this.classList.add('active');
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