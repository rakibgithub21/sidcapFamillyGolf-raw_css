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

// let h4all = document.querySelectorAll('#nav h4')
// h4all.forEach(h4 => {
//     h4.addEventListener('mouseenter', function () {
//         cursor.style.scale = 2,
//             cursor.style.border = '1px solid #fff',
//             cursor.style.backgroundColor = 'transparent'
//    })
//     h4.addEventListener('mouseleave', function () {
//         cursor.style.scale = 1,
//             cursor.style.border = '0px solid #95C11E',
//             cursor.style.backgroundColor = '#95C11E'
//    })
// })

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


gsap.from('#about-us img,#about-us-in', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: 'body',
        start:'top 50%',
        end: 'top 58%',
        scrub:3
    }
})


gsap.from('#colon1', {
    opacity: 0,
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 58%',
        scrub: 3
    }
})
gsap.from('#colon2', {
    opacity: 0,
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 58%',
        scrub: 3
    }
})