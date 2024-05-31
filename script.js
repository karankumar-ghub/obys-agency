function loadingAnimation(){
var grow = 0;
var h5 = document.querySelector("#line1-part1 h5");
var tl = gsap.timeline();

tl.from(".line h1",{
    y : 150,
    stagger : 0.25,
    duration : 0.6,
    delay : 0.5
});



tl.from("#line1-part1, .line h2",{
    opacity : 0,
    onStart : function(){
        setInterval(function(){
            if(grow<=100)
                {
                    h5.innerHTML = grow++;         
                }
            else{
                return;
            }
        },35 )
    }

});

tl.to(".line h2",{
    animationName : "anime",
    opacity: 1,
    
});

tl.to("#loader",{
    opacity: 0,
    duration:0.5,
    delay: 4
});

tl.from("#page1",{
    opacity : 0,
    y : 1200,
    // duration : 0.3,
    delay : 0.2,
    ease : Power4
});

tl.to("#loader",{
    delay : 0.2,
    display : "none"
});
};
loadingAnimation();

