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
    cnt[1] = new Array('','강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구');
    cnt[2] = new Array('','강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군');
    cnt[3] = new Array('','남구','달서구','동구','북구','서구','수성구','중구','달성군');
    cnt[4] = new Array('','계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군');
    cnt[5] = new Array('','광산구','남구','동구','북구','서구');
    cnt[6] = new Array('','대덕구','동구','서구','유성구','중구');
    cnt[7] = new Array('','남구','동구','북구','중구','울주군');
    cnt[8] = new Array('','고양시','과천시','광명시','구리시','군포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안양시','오산시','의왕시','의정부시','평택시','하남시','가평군','광주시','김포시','안성시','양주군','양평군','여주군','연천군','용인시','이천군','파주시','포천시','화성시');
    cnt[9] = new Array('','강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','황성군');
    cnt[10] = new Array('','제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군');
    cnt[11] = new Array('','공주시','보령시','서산시','아산시','천안시','금산군','논산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군');
    cnt[12] = new Array('','군산시','김제시','남원시','익산시','전주시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');
    cnt[13] = new Array('','광양시','나주시','목포시','순천시','여수시','여천시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','여천군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');
    cnt[14] = new Array('','경산시','경주시','구미시','김천시','문겅시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');
    cnt[15] = new Array('','거제시','김해시','마산시','밀양시','사천시','울산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','양산시','의령군','창녕군','하동군','함안군','함양군','합천군');
    cnt[16] = new Array('','서귀포시','제주시','남제주군','북제주군');
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