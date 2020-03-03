// -----------------------------------------------------
// CONTACT LIST VARIABLES
// -----------------------------------------------------

const contactListElem = document.getElementById('contactList');
const contactInfoElem = document.getElementById('contactInfo');

// -----------------------------------------------------
// FILTERING VARIABLES
// -----------------------------------------------------

// --- Filters by group --- //
const menuFilter = document.getElementById('menuFilter');

menuFilter.addEventListener('click', (e) => {
  const classArr = Array.from(e.target.classList);
  if (classArr.indexOf('sidebar__elem') > -1) {
    filterContacts(contactListElem, contactInfoElem, contacts, e.target.id);
    paintContactList(contactListElem, contactInfoElem, contacts);
  }
});

// --- Filter by text --- //
const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', (e) => {
  searchContact(contactListElem, contactInfoElem, contacts, e);
});


// -----------------------------------------------------
// MODAL VARIABLES
// -----------------------------------------------------

// --- Modals --- //

const editModal = new Modal(
  'Editar contacto',
  {
    class: 'btn--default',
    text: 'Actualizar',
    id: 'updateContact',
  },
  false,
);

const addModal = new Modal(
  'Nuevo contacto',
  {
    class: 'btn--success',
    text: 'Añadir',
    id: 'addContact',
  },
  true,
);

const contactModal = document.getElementById('contactModal');

// --- Modal btn toggle --- //

const newContactModalBtn = document.getElementById('newContactModalBtn');
newContactModalBtn.addEventListener('click', openModal.bind(newContactModalBtn, contacts));

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', closeModal);


// -----------------------------------------------------
// LOAD
// -----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  contacts.sort(sortAZ);
  contacts.forEach((elem, idx) => {
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    elem.visible = true;
    elem.color = randomColor;
  });
  paintContactList(contactListElem, contactInfoElem, contacts);
}, false);
