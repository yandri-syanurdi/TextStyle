var title=document.getElementsByClassName('title');
var para=document.getElementsByClassName('para');
// Complexity is 3 Everything is cool!
function myFunction(){
    for(var i=0;i<title.length;i++){
        var time=4;//this logic is to increase the speed
        var animationTime=i/time;
        var animationString=animationTime.toString()+'s';
        title[i].style.opacity='1';
        title[i].style.fontSize='50px';
        title[i].style.transitionDuration=animationString;
    };
    for(var i=0;i<para.length;i++){
        var time=3;//this logic is to increase the speed
        var animationTime=i/time;
        var animationString=animationTime.toString()+'s';
        para[i].style.opacity='1';
        para[i].style.fontSize='20px';
        para[i].style.transitionDuration=animationString;
    }
}