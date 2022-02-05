'use strict';

/**
 *
 * @menuBurger - открывает и закрывает меню в адаптивной верстке (с max-width: 776px.).
 * Работает при нажатии кнопки на кнопку меню (три полоски) и на кнопку закрытие (крестик).
 *
 */

const menuBurger = () => {
    const menuHamburger = document.querySelector(".menu__burger");
    const bodyContainer = document.querySelector("body");

    const screenContainer = menuHamburger.querySelector(".menu__screen");
    const menuInterface = menuHamburger.querySelector(".menu__interface");

    const buttonOpen = document.querySelector(".header__burger");
    const buttonClose = menuHamburger.querySelector(".menu__close");
    const menuElement = document.querySelectorAll(".menu__element");

    /**
     * @menuActive - функция проверяет есть модификатор у элемента или нет
     * @overflowYParam - параметр который включает или отключает прокрутку страниц
     * @menuBurgerParam - параметр проверяет, есть ли menu__burger__active (добавить/удаляет его)
     * @menuInterfaceParam - параметр проверяет, есть ли menu__interface__active (добавить/удаляет его)
     * @displayParam - параметр, который включает или выключает экран
     **/
    const menuActive = (overflowYParam = "visible", menuBurgerParam = "menu__burger__active", menuInterfaceParam = "menu__interface__active", displayParam = "none")=>{
        bodyContainer.style.overflowY = overflowYParam;
        menuHamburger.classList.toggle(menuBurgerParam);
        menuInterface.classList.toggle(menuInterfaceParam);
        screenContainer.style.display = displayParam;
    }

    buttonOpen.addEventListener("click", ()=>{
        menuActive("hidden","menu__burger__active","menu__interface__active","inline");
    });

    buttonClose.addEventListener("click", ()=>{
        menuActive();
    });

    screenContainer.addEventListener("click", ()=>{
        menuActive();
    });

    menuElement.forEach(item =>{
       item.addEventListener("click",()=>{
           menuActive();
       })
    })
}

menuBurger();
