let nav = document.getElementById('side_nav').classList
document.getElementById('nav_btn').addEventListener('click',function(){
    nav.add('active');
 });
document.getElementById('cancel_btn').addEventListener('click',function(){
   nav.remove('active');
});
