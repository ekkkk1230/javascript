const $header = document.querySelector('header');
const $section = document.querySelector('section');

window.addEventListener('scroll',()=>{
    if(scrollY > 150){
        $topBanner.classList.add('none');
        $wrap.classList.add('none');
        $header.style.position = 'fixed';
        $header.style.zIndex = '5';
        $section.style.top = '300px';
    }else if(scrollY < 5){
        $topBanner.classList.remove('none');
        $wrap.classList.remove('none');
        $header.style.position = 'relative';
        $header.style.zIndex = '5';
        $section.style.top = '1px';
    }
})

window.addEventListener('scroll', ()=>{
     if(scrollY >= 570){
        document.querySelectorAll('.hot_item li').forEach(item => {
            item.classList.add('scale');
        })
    }
    if(scrollY >= 900){
        document.querySelector('.more_info > a > .img').classList.add('fadeIn');
        document.querySelectorAll('.products li').forEach(li => {
            li.firstChild.classList.add('fadeInUp')
        })
    }
    if(scrollY >= 1650){
        document.querySelector('.thema_main .img').classList.add('fadeIn');
    }
})

/* modal popup */

function setCookie(name, value, expiredays){ 

    let todayDate=new Date();

       todayDate.setDate(todayDate.getDate() + expiredays);

       document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toUTCString() + ";"
       
   }

   function closeWin(){
       if(document.notice_form.chkbox.checked){
           setCookie("popWrap","done",1);
       }
       document.all['popWrap'].style.visibility = "hidden";
   }

   cookiedata = document.cookie;
        if(cookiedata.indexOf("popWrap=done")<0){
            document.all['popWrap'].style.visibility = "visible";
        }else{
            document.all['popWrap'].style.visibility = "hidden";
        }

    document.querySelectorAll('.popup .close').forEach(select => {
        select.addEventListener('click', (e)=>{
            e.target.parentNode.style.display="none";
        })
    })

/* sns icon */
let fb = document.querySelector('.fb')
let insta = document.querySelector('.insta')
let snsOn = function(){
    fb.classList.add('snsOn');
}
let snsOn2 = function(){
    insta.classList.add('snsOn');
}

window.onload = snsOn();
window.onload = setTimeout(snsOn2, 500)

/* top_banner */
const topBanner_btn = document.querySelector('#top_banner .close');
const $topBanner = document.querySelector('#top_banner');
const $wrap = document.querySelector('#wrap');

topBanner_btn.addEventListener('click', ()=>{
    $topBanner.classList.add('none');
    $wrap.classList.add('none');
})

window.addEventListener('mousemove', e=>{
    let tg = e.target;
    if(tg.classList.contains('nav_bg')){
        photoUp()
    }
})

/* menu */
const $nav = document.querySelector('.nav');
const $nav_bg = document.querySelector('.nav_bg');
const menu = document.querySelector('.depth1');
const subMenu = document.querySelectorAll('.depth2');

const photoUp = function(){
    if($nav.classList.contains('on') == true){
        document.querySelector('.nav_inner_ph').classList.add('up');
        subMenu.forEach(sub => {
            sub.classList.add('up');
        })
    }else if($nav.classList.contains('on') == false){
        document.querySelector('.nav_inner_ph').classList.remove('up');
        subMenu.forEach(sub => {
            sub.classList.remove('up');
        })
    }
}

menu.addEventListener('mouseenter', ()=>{
    $nav.classList.add('on');
    photoUp();
})
menu.addEventListener('mouseleave', ()=>{
    $nav.classList.remove('on');
    photoUp();
})

menu.querySelectorAll('.depth1 > li > a').forEach(el => {
    el.addEventListener('mouseenter', (e)=>{
        el.classList.remove('hover');
        let on = e.target;
        on.classList.add('hover');
    })
    el.addEventListener('mouseleave', (e)=>{
        let on = e.target;
        on.classList.remove('hover');
    })
})

subMenu.forEach( sub => {
     sub.addEventListener('mouseenter', (e)=>{
        let hover = e.target;
        hover.querySelectorAll('li > a').forEach(el => {
            el.addEventListener('mouseenter', (e)=>{
                let hoverSub = e.target;
                hoverSub.classList.add('hover');
            })
        })
        hover.querySelectorAll('li > a').forEach(el => {
            el.addEventListener('mouseleave', (e)=>{
                let hoverSub = e.target;
                hoverSub.classList.remove('hover');
            })
        })
    })
})


$nav_bg.addEventListener('mouseenter', ()=>{
    $nav.classList.add('on');
})
$nav_bg.addEventListener('mouseleave', ()=>{
    $nav.classList.remove('on');
    photoUp();
})

/* m_nav */
let $m_nav_btn = document.querySelector('.mo_nav_btn');
let $menuBox = document.querySelector('.menuBox')
$m_nav_btn.addEventListener('click', function(){
    this.classList.toggle('open');
    $menuBox.classList.toggle('open')
    document.querySelector('.mo_nav').classList.toggle('on')
})

document.querySelectorAll('.mo_depth1 li').forEach(m_depth1 => {
    m_depth1.addEventListener('click', (e)=>{
            console.log(e.target)
            let depth1 = e.target.parentNode
            let depth2 = depth1.querySelector('ul')
        
            depth1.classList.toggle('on')
            depth2.classList.toggle('on')
    })
})

/* section - banner */
const $slider = document.querySelector('.slider');
let slideWidth = $slider.clientWidth;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $banner_pager = document.querySelector('.banner_pager');
let slideItem = document.querySelectorAll('.slider li');
const slideCount = slideItem.length;
let slideIdx = 1;

for(let i=0; i<slideCount; i++){
    if(i === 0) $banner_pager.innerHTML += `<li class="active"></li>`;
    else $banner_pager.innerHTML += `<li></li>`;
}

const pagerBtn = document.querySelectorAll('.banner_pager li');

const startSlide = slideItem[0];
const endSlide = slideItem[slideCount-1];
const start = document.createElement(startSlide.tagName);
const end = document.createElement(endSlide.tagName);

endSlide.classList.forEach(c => end.classList.add(c));
end.innerHTML = endSlide.innerHTML;
startSlide.classList.forEach(c => start.classList.add(c));
start.innerHTML = startSlide.innerHTML;

slideItem[0].before(end);
slideItem[slideCount-1].after(start);

slideItem = document.querySelectorAll('.slider li');
let offset = slideWidth*slideIdx;
slideItem.forEach(item => item.setAttribute('style', `left:${-offset}px`))

function nextSlide(){
    slideIdx++;
    if(slideIdx <= slideCount){
        const offset = slideWidth*slideIdx;
        slideItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[slideIdx-1].classList.add('active');
    }else{
        slideIdx = 0;
        let offset = slideWidth*slideIdx;
        slideItem.forEach(item => item.setAttribute('style', `transition:${0}s; left:${-offset}px`))
        slideIdx++;
        offset = slideWidth*slideIdx;
        setTimeout(()=>{
            slideItem.forEach(item => item.setAttribute('style', `transition:${.4}s; left:${-offset}px`))
        },0)
        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[slideIdx-1].classList.add('active')
    }
}

function prevSlide(){
    slideIdx--;
    if(slideIdx > 0){
        const offset = slideWidth*slideIdx;
        slideItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[slideIdx-1].classList.add('active');
    }else{
        slideIdx = slideCount+1;
        let offset = slideWidth*slideIdx;
        slideItem.forEach(item => item.setAttribute('style', `transition:${0}s; left:${-offset}px`))
        slideIdx--;
        offset = slideWidth*slideIdx;
        setTimeout(()=>{
            slideItem.forEach(item => item.setAttribute('style', `transition:${0.4}s; left:${-offset}px`))
        },0)
        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[slideIdx-1].classList.add('active');
    }
}

$prev.addEventListener('click', prevSlide);
$next.addEventListener('click', nextSlide);

window.addEventListener("resize", () => {
    slideWidth = $slider.clientWidth;
});

for(let i=0; i<slideCount; i++){
    pagerBtn[i].addEventListener('click',()=>{
        slideIdx = i+1;
        const offset = slideWidth*slideIdx;
        slideItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));
        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[slideIdx-1].classList.add('active')
    })
}

let Interval = setInterval(()=>{
    nextSlide();
}, 4000);

$slider.addEventListener('mouseover',()=>{
    clearInterval(Interval);
});
$slider.addEventListener('mouseleave',()=>{
    Interval = setInterval(()=>{
        nextSlide();
    }, 4000);    
})

/* Hot Item */
const hotSlider = document.querySelector('.hot');
let hotSliderWidth = hotSlider.querySelector('li').clientWidth + 30;
let hotSliderItem = document.querySelectorAll('.hot li');
const hotSliderCount = hotSliderItem.length;
let hotSliderIdx = 1;

const hotStart = hotSliderItem[0];
const hotEnd = hotSliderItem[hotSliderCount-1];
const hotStartEl = document.createElement(hotStart.tagName);
const hotEndEl = document.createElement(hotEnd.tagName);

hotEnd.classList.forEach(c => hotEndEl.classList.add(c));
hotEndEl.innerHTML = hotEnd.innerHTML;
hotStart.classList.forEach(c => hotStartEl.classList.add(c));
hotStartEl.innerHTML = hotStart.innerHTML;

hotSliderItem[0].before(hotEndEl);
hotSliderItem[hotSliderCount-1].after(hotStartEl);

hotSliderItem = document.querySelectorAll('.hot li');
let offsetHot = hotSliderWidth*hotSliderIdx;
hotSliderItem.forEach(item => item.setAttribute('style', `left:${-offsetHot}px`))


let width = document.querySelector('.hot').clientWidth;
window.addEventListener('resize', ()=>{
    width = document.querySelector('.hot').clientWidth;
})

function nextHot(){
    hotSliderIdx++
    if(width <410){
        if(hotSliderIdx <= hotSliderCount){
            const offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `left:${-offset}px`))
        }else{
            hotSliderIdx = 0;
            let offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${0}s; left:${-offset}px`))
            hotSliderIdx++;
            offset = hotSliderWidth*hotSliderIdx;
            setTimeout(() => {
                hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${.4}s; left:${-offset}px`))
            }, 0);
        }
    }else if(width < 490){
        if(hotSliderIdx <= hotSliderCount-1){
            const offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `left:${-offset}px`))
        }else{
            hotSliderIdx = 0;
            let offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${0}s; left:${-offset}px`))
            hotSliderIdx++;
            offset = hotSliderWidth*hotSliderIdx;
            setTimeout(() => {
                hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${.4}s; left:${-offset}px`))
            }, 0);
        }
    }else if(width > 490){
        if(hotSliderIdx <= hotSliderCount-2){
            const offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `left:${-offset}px`))
        }else{
            hotSliderIdx = 0;
            let offset = hotSliderWidth*hotSliderIdx;
            hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${0}s; left:${-offset}px`))
            hotSliderIdx++;
            offset = hotSliderWidth*hotSliderIdx;
            setTimeout(() => {
                hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${.4}s; left:${-offset}px`))
            }, 0);
        }
    }
}

function prevHot(){
    hotSliderIdx--;
    if(hotSliderIdx > 0){
        const offset = hotSliderWidth*hotSliderIdx;
        hotSliderItem.forEach(item => item.setAttribute('style', `left:${-offset}px`))
    }else{
        hotSliderIdx = hotSliderCount+1;
        let offset = hotSliderWidth*hotSliderIdx;
        hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${0}s; left:${-offset}px`))
        hotSliderIdx--;
        offset = hotSliderWidth*hotSliderIdx;
        setTimeout(() => {
            hotSliderItem.forEach(item => item.setAttribute('style', `transtion: ${.4}s; left:${-offset}px`))
        }, 0);
    }
}

let hotInterval = setInterval(()=>{
    nextHot();
}, 4000);
hotSlider.addEventListener('mouseover', ()=>{
    clearInterval(hotInterval);
});
hotSlider.addEventListener('mouseleave', ()=>{
    hotInterval = setInterval(()=>{
        nextHot();
    }, 4000);
});





/* eventBanner */
const eventSlider = document.querySelector('.eventBanner_slider');
let eventWidth = eventSlider.clientWidth;
const eventSlider_pager = document.querySelector('.eventBannerPager');
let eventSliderItem = document.querySelectorAll('.eventBanner_slider li');
const eventCount = eventSliderItem.length;
let eventIdx = 1;

for(let i=0; i<eventCount; i++){
    if(i === 0) eventSlider_pager.innerHTML += `<li class="active"></li>`;
    else eventSlider_pager.innerHTML += `<li></li>`;
}

const e_pagerBtn = document.querySelectorAll('.eventBannerPager li');

const startE = eventSliderItem[0];
const endE = eventSliderItem[eventCount-1];
const startE_el = document.createElement(startE.tagName);
const endE_el = document.createElement(endE.tagName);

endE.classList.forEach(c => endE_el.classList.add(c));
endE_el.innerHTML = endE.innerHTML;
startE.classList.forEach(c => startE_el.classList.add(c));
startE_el.innerHTML = startE.innerHTML;

eventSliderItem[0].before(endE_el);
eventSliderItem[eventCount-1].after(startE_el);

eventSliderItem = document.querySelectorAll('.eventBanner_slider li');
let e_offset = eventWidth*eventIdx;
eventSliderItem.forEach(item => item.setAttribute('style', `left:${-e_offset}px`));

function next(){
    eventIdx++;
    if(eventIdx <= eventCount){
        const e_offset = eventWidth*eventIdx;
        eventSliderItem.forEach(item => item.setAttribute('style', `left:${-e_offset}px`));

        e_pagerBtn.forEach(btn => btn.classList.remove('active'));
        e_pagerBtn[eventIdx-1].classList.add('active');
    }else{
        eventIdx = 0;
        let e_offset = eventWidth*eventIdx;
        eventSliderItem.forEach(item =>  item.setAttribute('style', `transition: ${0}s; left:${-e_offset}px`));

        eventIdx++;
        e_offset = eventWidth*eventIdx;
        setTimeout(()=>{
            eventSliderItem.forEach(item =>  item.setAttribute('style', `transition: ${.4}s; left:${-e_offset}px`));

            e_pagerBtn.forEach(btn => btn.classList.remove('active'));
            e_pagerBtn[eventIdx-1].classList.add('active');
        })
    }
}

/* function prev(){
    eventIdx--;
    if(eventIdx > 0){
        const e_offset = eventWidth*eventIdx;
        eventSliderItem.forEach(item => item.setAttribute('style', `left:${-e_offset}px`));

        e_pagerBtn.forEach(btn => btn.classList.remove('active'));
        e_pagerBtn[eventIdx-1].classList.add('active');
    }else{
        eventIdx = eventCount+1;
        let e_offset = eventWidth*eventIdx;
        eventSliderItem.forEach(item =>  item.setAttribute('style', `transition: ${0}s; left:${-e_offset}px`));

        eventIdx--;
        e_offset = eventWidth*eventIdx;
        setTimeout(()=>{
            eventSliderItem.forEach(item =>  item.setAttribute('style', `transition: ${.4}s; left:${-e_offset}px`));

            e_pagerBtn.forEach(btn => btn.classList.remove('active'));
            e_pagerBtn[eventIdx-1].classList.add('active');
        })
    }
} */


window.addEventListener('resize', ()=>{
    eventWidth = eventSlider.clientWidth;
})

for(let i=0; i<eventCount; i++){
    e_pagerBtn[i].addEventListener('click', ()=>{
        eventIdx = i + 1;
        const e_offset = eventWidth*eventIdx;
        eventSliderItem.forEach(item => item.setAttribute('style', `left:${-e_offset}px`));

        e_pagerBtn.forEach(btn => btn.classList.remove('active'));
        e_pagerBtn[eventIdx-1].classList.add('active');
    })
}


let e_Interval = setInterval(()=>{
    next();
}, 4000);
eventSlider.addEventListener('mouseover', ()=>{
    clearInterval(e_Interval);
});
eventSlider.addEventListener('mouseleave', ()=>{
    e_Interval = setInterval(()=>{
        next();
    }, 4000);
});



/* find store */
let cnt = new Array();
    cnt[0] = new Array('');
    cnt[1] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','????????????','?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','?????????','??????','?????????');
    cnt[2] = new Array('','?????????','?????????','??????','??????','?????????','????????????','??????','?????????','?????????','??????','?????????','?????????','?????????','??????','????????????','?????????');
    cnt[3] = new Array('','??????','?????????','??????','??????','??????','?????????','??????','?????????');
    cnt[4] = new Array('','?????????','??????','?????????','??????','?????????','??????','?????????','??????','?????????','?????????');
    cnt[5] = new Array('','?????????','??????','??????','??????','??????');
    cnt[6] = new Array('','?????????','??????','??????','?????????','??????');
    cnt[7] = new Array('','??????','??????','??????','??????','?????????');
    cnt[8] = new Array('','?????????','?????????','?????????','?????????','?????????','????????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[9] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[10] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[11] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[12] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[13] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[14] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[15] = new Array('','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
    cnt[16] = new Array('','????????????','?????????','????????????','????????????');
function change(add) {
sel=document.form.county
    for (i=sel.length-1; i>=0; i--){
    sel.options[i] = null
    }
    for (i=0; i < cnt[add].length;i++){                     
        sel.options[i] = new Option(cnt[add][i], cnt[add][i]);
    }         
}

/* SNS hover */
let $hover = document.querySelectorAll('.hover');
$hover.forEach((el, i) => {
    let item = el.parentNode;
    item.addEventListener('mouseenter', ()=>{
        let hover = item.lastChild.previousElementSibling;
        hover.style.display = "flex";
    })
    item.addEventListener('mouseleave', ()=>{
        let hover = item.lastChild.previousElementSibling;
        hover.style.display = "none";
    })
})

/* familySite */
let click = 0;
document.querySelector('.familySite a').addEventListener('click', () => {
    if(click == 0){
        document.querySelector('.familySite ul').classList.add('on');
        document.querySelector('.familySite i').classList.remove('fa-caret-down');
        document.querySelector('.familySite i').classList.add('fa-caret-up');
        click = 1;
    }else if(click == 1){
        document.querySelector('.familySite ul').classList.remove('on');
        document.querySelector('.familySite i').classList.remove('fa-caret-up');
        document.querySelector('.familySite i').classList.add('fa-caret-down');
        click = 0;
    }
    
})