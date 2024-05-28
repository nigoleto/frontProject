// -------- 버튼
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const btnOpenModal=document.querySelector('.btn-subscribe');
const btnOpenModal2=document.querySelector('.btn-download');
const btnOpenModal3=document.querySelector('.btn-download2');
const btnCloseModal=document.querySelector('.btn-closeModal')
const btnCloseModal2=document.querySelector('.btn-cancel')
const btnHome=document.querySelector('#btn-home')
const btnShowMore=document.querySelector('.btn-showMore');
const addEmail = document.querySelector('.input-value')

btnOpenModal.addEventListener("click", ()=>{
    if(inputEmail.value.length < 3 || inputEmail.value.indexOf("@") === -1 ) {
        window.alert('이메일을 입력해주세요');
        return;
    }
    addEmail.append(inputEmail.value);
    modal.style.display="flex";
})
btnOpenModal2.addEventListener("click", ()=>{
    modal2.style.display="flex";
})
btnOpenModal3.addEventListener("click", ()=>{
    modal2.style.display="flex";
})

btnCloseModal.addEventListener("click", ()=>{
    modal.style.display="none";
    addEmail.innerHTML= "";
})

btnCloseModal2.addEventListener("click", ()=>{
    modal2.style.display="none";
})

btnHome.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})


// -------------------------- show more ---------------------------
//페이지 증가시킬 pageNum, 랜덤숫자를 만드는 함수로 pageRandom 배열에 하나씩 밀어넣음
let pageNum = 1;
let pageRandom = [];
function createRandom(){ //랜덤숫자가 중복되지 않게 생성해주는 함수
    const randNum = ~~(Math.random() * 200) + 1;
    if(pageRandom.indexOf(randNum) === -1){
        pageRandom.push(randNum);
    }
}

// 위치 선택용  => 여기 Selector > div > img * 3 순서로 생성
const myImgContainer = document.querySelector('.img-container');


//이미지 생성하는 함수  => 이미지 생성 후 div에 담아주는 함수 div > img * 3 로 생성됨
async function makeImg() {
    // div 생성
    const addDiv = document.createElement('div');

    // img 생성
    for(let i = 0; i<3; i++){
        const addImg = document.createElement('img');
        createRandom();

        if(pageNum < 13){ // 처음 12장은 그냥 저장된 img 소스에서 가져오기
            addImg.setAttribute("src", `img/cat${pageNum++}.png`);
        } else if(pageNum < 22) { // 다음 9장은 fetch를 이용해서 이미지 가져오기
            await makeFetchImg(pageRandom[pageNum-13], addImg);
            pageNum++
        } else { // 그다음 랜덤으로 이미지 가져오기
            addImg.setAttribute("src", `https://picsum.photos/id/${pageRandom[pageNum-22]}/600/600`);
            pageNum++;
        }
        // 3번 반복시켜서 생성된 img를 바로 div에 append 해버리기
        addDiv.append(addImg);
    }

    //div > img *3 이 생성되엇고 이미지를 3개씩 미리 만들어놓기 위해 클래스가 img-none으로 설정됨
    addDiv.classList.add("img-none");
    myImgContainer.append(addDiv);
}

// 미리 class="img-none" 인 div 만들어 놓기
makeImg();

//img-container 의 라스트차일드의 class를 img-cat3으로 바꾸고 나서 img-none div 생성.
btnShowMore.addEventListener("click", ()=>{
    myImgContainer.lastElementChild.setAttribute("class", "img-cat3");
    makeImg();
})



//Ajax 사용해서 불러오기

async function makeFetchImg(page, addImg) {
    // 이 함수를 실행할 때 page를 받아와서 실행해야 다른 이미지가 생성됨

    try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=1`);

        if(!response.ok){
            throw new Error('통신실패');
        }

        // response는 json 형태라서 js의 객체로 변환 시켜줘야함.
        const datas = await response.json();

        // 객체라서 객체의 key값 하나만 빼와야 이미지src가 됨.
        // console.log(datas)
        addImg.setAttribute("src", datas[0].download_url);

    }catch(error){
        console.log(error);
    }
}





//---------------- form 제출시 새로고침 방지 ----------------

const noForm = document.querySelector('form')
noForm.addEventListener('click', (e) => {
    e.preventDefault();
})

const inputEmail = document.querySelector("#email");


