
//------------모바일 pc 구분
window.addEventListener("load", () => deviceCheck());

function deviceCheck() {

    const user = navigator.userAgent;
    if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
        console.log("mobile버젼");
        myMenu.append(navEle)
        btnMenu.style.display = 'flex'
    }else{
        console.log("pc버젼");
        btnMenu.style.display = 'none'
    }
}

const myMenu = document.querySelector('.menu-none');
const navEle = document.querySelector('.nav-right');
const navContaniner = document.querySelector('.nav');

const btnClear = document.querySelector('.btn-clearMenu');
const btnMenu = document.querySelector('.btn-menu');
btnMenu.addEventListener("click", () => {
    myMenu.style.display="flex";
})

btnClear.addEventListener("click", () => {
    myMenu.style.display="none";
})



const mql = window.matchMedia("screen and (max-width: 768px)");

mql.addListener(function(e) {
    if(e.matches) {
        console.log('모바일 화면 입니다.');
        myMenu.append(navEle)
        btnMenu.style.display = 'flex'
    } else {
        console.log('데스크탑 화면 입니다.');
        btnMenu.style.display = 'none'
        navContaniner.append(navEle)
    }
});
