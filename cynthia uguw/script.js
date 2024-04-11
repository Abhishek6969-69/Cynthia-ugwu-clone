
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function chaptakaro(){

    var xscale=1;
    var yscale=1;
    
    var prevx=0;
    var prevy=0;
    var timeout=0;
    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.8,1.2,dets.clientX-prevx);
        yscale=gsap.utils.clamp(0.8,1.2,dets.clientY-prevy);
        prevx=dets.clientX;
        prevy=dets.clientY;
        mousefollower(xscale,yscale);
        document.querySelector(".mini-circle").style.transform=`scale(${xscale},${yscale})`;
        timeout=setTimeout(()=>{
            document.querySelector(".mini-circle").style.transform="scale(1,1)";
        },100);
    });


}
chaptakaro();
function mousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
        });
}
var prev;
document.querySelectorAll(".elem").forEach((elem)=>{
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mousemove",(detail)=>{
        var diff=detail.clientY-elem.getBoundingClientRect().top;
         diffrot=detail.clientX-rotate;
        rotate=diffrot;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            top:diff,
            left:detail.clientX,
            rotate:gsap.utils.clamp(-15,15,diffrot),
            
        })
    })
   elem.addEventListener("mouseleave",(val)=>{
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        
    })
   })
})
mousefollower();
var tl=gsap.timeline();
tl.from(".nav",{
    opacity:0,
    y:20,
    duration:1,
})
.from(".heading #product",{
    opacity:0,
    y:20,
    scale:3,
    duration:1,
})
.from(".design h1",{
    opacity:0,
    y:20,
    duration:1,
    scale:3,
})
.from(".design h5",{
    opacity:0,
    y:20,
    duration:1,
    scale:0.5,
})
.from(".hero-footer",{
     opacity:0,
    y:20,
    duration:1,
})