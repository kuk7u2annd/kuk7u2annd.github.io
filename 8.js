window.onload=function(){
  var header = document.getElementById('header');
  var section = document.getElementById('section');
  var footer = document.getElementById('footer');
  var div1 = document.getElementById('div1')
  var div2 = document.getElementById('div2')
  var div3 = document.getElementById('div3')

  var count1 = 0;
  var count2 = 0;
  var count3 = 0;


  header.addEventListener("click", function(){
    div1.style.display='block';
    div2.style.display='none';
    div3.style.display='none';
  });

  section.addEventListener("click", function(){
    div1.style.display='none';
    div2.style.display='block';
    div3.style.display='none';
  });

  footer.addEventListener("click", function(){
    div1.style.display='none';
    div2.style.display='none';
    div3.style.display='block';
  });


}
