let nav = document.getElementById('side_nav').classList
document.getElementById('nav_btn').addEventListener('click',function(){
    nav.add('active');
 });
document.getElementById('cancel_btn').addEventListener('click',function(){
   nav.remove('active');
});
let Search = document.getElementById('Search').classList
document.getElementById('search_btn').addEventListener('click',function(){
   Search.add('active');
});
document.getElementById('search_cancel_btn').addEventListener('click',function(){
   Search.remove('active');
});
let btns = document.getElementById('sidebtn').classList
let btn = document.getElementById('side_btn').classList
document.getElementById('sidebtn').addEventListener('click',function(){
   btns.add('active');
   btn.remove('active');
});
document.getElementById('side_btn').addEventListener('click',function(){
   btn.add('active');
   btns.remove('active');
});