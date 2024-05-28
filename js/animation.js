

    const btnDown = document.querySelector('#btn-download');
    const modalOverlay = document.querySelector('.modal2');
    const imgHodu = document.querySelector('.img-hodu');


    btnDown.addEventListener('click', function () {
        console.log("button");
        for (let i = 0; i < 10; i++) {
            const hodu = document.createElement('div');
            const createHodu = document.createElement("img")
            createHodu.setAttribute("src", "img/modal_cat%201.png")
            hodu.append(createHodu); // 하트 이모지
            hodu.classList.add('hodu');

            hodu.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            // 상단에서 시작하도록 설정
            hodu.style.top = '-250px'; // 상단에서 시작

            // 떨어지는 애니메이션을 적용
            hodu.style.animationDuration = Math.random() * 2 + 1 + 's'; // 애니메이션 지속 시간 (1초에서 3초 사이)
            hodu.style.animationDelay = Math.random() * 2 + 's'; // 애니메이션 시작 지연 시간 (0초에서 2초 사이)
            hodu.style.animationDirection = "alternate";

            modalOverlay.appendChild(hodu);

            hodu.addEventListener('animationend', function () {
                hodu.remove();
            });
        }

    })


