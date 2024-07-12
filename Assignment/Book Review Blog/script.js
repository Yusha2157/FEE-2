var anim1start = document.getElementById('bo');
var anim2start = document.getElementById('be');
var animtrig = document.getElementById('animimgid');

animtrig.addEventListner("mouseover",function(){
    anim1start.classList.add('bubbleanim1');
    anim2start.classList.add('bubbleanim2');
});