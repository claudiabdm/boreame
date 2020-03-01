// CLOSE MODAL
// -----------------------------------------------------

function closeModal(e) {
  const modal = e.target.closest('.modal--show');
  if (modal) {
    modal.classList.remove('modal--show');
    const modalButtons = document.querySelector('.modal__buttons');
    const btn = document.querySelector('.modal__button');
    modalButtons.removeChild(btn);
  }
}

// CREATE MODAL
// -----------------------------------------------------

function createModal(modalObj, contacts, contact) {
  const title = contactModal.querySelector('.modal__title');
  const buttons = document.querySelector('.modal__buttons');
  const button = document.createElement('button');
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const email = document.getElementById('email');
  const prefix = document.getElementById('prefix');
  const phone = document.getElementById('phone');
  const group = document.getElementById('group');

  title.textContent = modalObj.title;
  button.textContent = modalObj.button.text;
  button.className = `btn modal__button ${modalObj.button.class}`;
  button.setAttribute('type', 'button');
  button.setAttribute('id', modalObj.button.id);
  buttons.insertBefore(button, buttons.firstChild);

  if (modalObj.emptyInput) {
    name.value = '';
    surname.value = '';
    email.value = '';
    prefix.value = '';
    phone.value = '';
    group.value = '';
    const addContact = document.getElementById('addContact');
    addContact.addEventListener('click', (e) => {
      addContactToList(contactListElem, contactInfoElem, contacts);
      closeModal(e);
    }, { once: true });
  } else {
    name.value = contact.name;
    surname.value = contact.surname;
    email.value = contact.email;
    prefix.value = contact.country;
    phone.value = contact.phone;
    group.value = contact.group;
    const updateContact = document.getElementById('updateContact');
    updateContact.addEventListener('click', (e) => {
      updateContactInList(contactListElem, contactInfoElem, contacts);
      closeModal(e);
    }, { once: true });
  }
}

//  OPEN MODAL
// -----------------------------------------------------

function openModal(contacts, e) {
  const target = e.currentTarget;
  const contactId = parseInt(target.parentElement.parentElement.getAttribute('data-id'));
  const contact = contacts.find((elem) => elem.id === contactId);
  const modalObj = /edit/.test(target.id) ? editModal : addModal;
  createModal(modalObj, contacts, contact);
  contactModal.classList.add('modal--show');
}


// Class Modal
// -----------------------------------------------------
class Modal {
  constructor(title, button, emptyInput) {
    this.title = title;
    this.button = button;
    this.emptyInput = emptyInput;
  }
}
