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