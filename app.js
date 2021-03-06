$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Learn more") {
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      $("#toggle").text("Learn more");
      $("#text").slideUp();
    }
  });
});

const menuBtn = document.getElementById('open-side');
const menu_dropdown = document.querySelector('.menu');
menu_dropdown.style.display = 'none';
menuBtn.addEventListener('click', () => {
      if(menu_dropdown.style.display === 'none') {
        menu_dropdown.style.display = 'block';
      } else {
        menu_dropdown.style.display = 'none';
      }
})

// Play vid 
const videos = document.getElementById('whole-vid-wrap');
document.getElementById('vid-btns').addEventListener('click', () => {
  videos.style.display = 'block'
})
document.getElementById('exit').addEventListener('click', () => {
  videos.style.display = 'none'
})