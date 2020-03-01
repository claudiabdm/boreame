// ADD CONTACT
// -----------------------------------------------------
function addContactToList(contactListElem, contactInfoElem, contacts) {
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const email = document.getElementById('email');
  const prefix = document.getElementById('prefix');
  const phone = document.getElementById('phone');
  const group = document.getElementById('group');
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  const contact = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    country: prefix.value,
    phone: phone.value,
    group: group.value,
    visible: true,
    color: randomColor,
    id: contacts.length,
  };

  contacts.push(contact);
  contacts.forEach((elem) => elem.visible = true);

  paintContactList(contactListElem, contacts);
  paintContactInfo(contactInfoElem, contacts, document.querySelector(`[data-id="${contact.id}"]`));
}

// MODIFY CONTACT
// -----------------------------------------------------

function updateContactInList(contactListElem, contactInfoElem, contacts) {
  const contactId = parseInt(document.getElementById('contactInfo').getAttribute('data-id'));
  const contact = contacts.find((elem) => elem.id === contactId);
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const email = document.getElementById('email');
  const prefix = document.getElementById('prefix');
  const phone = document.getElementById('phone');
  const group = document.getElementById('group');

  contact.name = name.value;
  contact.surname = surname.value;
  contact.email = email.value;
  contact.country = prefix.value;
  contact.phone = phone.value;
  contact.group = group.value;

  paintContactList(contactListElem, contacts);
  paintContactInfo(contactInfoElem, contacts, document.querySelector(`[data-id="${contact.id}"]`));
}


// DELETE CONTACT
// -----------------------------------------------------

function deleteContact(contactListElem, contactInfoElem, contacts, e) {
  const contactId = parseInt(e.target.parentElement.getAttribute('data-id'));
  const contactIdx = contacts.findIndex((elem) => elem.id === contactId);
  contacts.splice(contactIdx, 1);
  paintContactList(contactListElem, contacts);
  paintContactInfo(contactInfoElem, contacts, e);
}
