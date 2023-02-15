(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();





function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength) {
  result = message;
} else {
  message = message.slise(0, maxLength); 
  message = message + "...";
}
  /// Change code above this line
  return result;
}



