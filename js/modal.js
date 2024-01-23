const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-button-open");
const modalBtnClose = document.querySelector(".modal-button-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
