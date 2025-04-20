'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    // Открытие модального окна
    const modalBtn = document.querySelector('[data-modal]');
    const modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    function hideModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    };
    modalBtn.addEventListener('click', ()=> {
        openModal();
    });
    modal.addEventListener('click', (e)=> {
        if(e.target == modal || e.target.classList.contains('modal__content-close')) {
            hideModal()
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' || modal.classList.contains('show')) {
            hideModal();
        }
    });
    //Закрытие модального окна

    // Открытие гамбургера
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu')
    hamburger.addEventListener('click', (e)=> {
        menu.classList.toggle('open');
        header.classList.toggle('open');
    });
    // Закрытие гамбургера

    //Отпрвака формы начало
        const form = document.querySelector('form');
        const postData = async (url, data)=> {
            const res  = await fetch(url, {
                method: 'POST',
                headers: 'type-content: application/json',
                body: data
            });
            if(!res.ok) {
                throw new Error(`the error in ${url}`)
            };
            return await res.json();
        };
        function bindPostData(form) {
            form.addEventListener('submit', (e)=> {
                e.preventDefault();
            })
        }
    //Отправка формы конец

})  