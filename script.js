let cursor = document.querySelector('#cursor');
let cursorBlur = document.querySelector('#cursor-blur');
document.addEventListener('mousemove', function (e) {
    // cursor.style.left=e.x+'px'
    // cursor.style.top=e.y+'px'
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: 'back.out'
    })
})
document.addEventListener('mousemove', function (e) {
    // cursor.style.left=e.x+'px'
    // cursor.style.top=e.y+'px'
    gsap.to(cursorBlur, {
        x: e.x-200,
        y: e.y-200,
        duration: 1,
        ease: 'back.out'
    })
})


gsap.to('#nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '110px',
    scrollTrigger: {
        trigger: '#nav',
        scroll: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
        
   }
})

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        // markers: true,
        start:'top -25%',
        end: 'top -70%',
        scrub:2
    }
})