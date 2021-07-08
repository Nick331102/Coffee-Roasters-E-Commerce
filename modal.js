const modalShow = () => {
    const subscribeButton = document.querySelector('.subscribe__button')
    const checkoutButton = document.querySelector('.checkout__button')

    const modal = document.querySelector('.modal')

    subscribeButton.addEventListener('click', () => {
        modal.classList.add("modal__show")
    });

    checkoutButton.addEventListener('click', () => {
        modal.classList.remove("modal__show")
    });






}

modalShow();