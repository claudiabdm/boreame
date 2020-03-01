// SORT CONTACT LIST A-Z
// -----------------------------------------------------

function sortAZ(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    if (a.surname < b.surname) {
      return -1;
    } else {
      return 1;
    }
  }
}

// FILTER  CONTACTS BY GROUP
// -----------------------------------------------------
function filterContacts(contactListElem, contacts, filter) {
  if (filter === 'allContacts') {
    contacts.forEach((elem) => elem.visible = true);
    paintContactList(contactListElem, contacts);
  } else {
    contacts.forEach((elem) => {
      if (elem.group === filter) {
        elem.visible = true;
      } else {
        elem.visible = false;
      }
    });
  }
}

// FILTER CONTACTS BY TEXT INPUT
// -----------------------------------------------------
function searchContact(contactListElem, contacts, e) {
  const inputText = e.currentTarget.value;
  contacts.forEach((elem) => {
    const fullName = `${elem.name} ${elem.surname}`;
    const regex = new RegExp(`${inputText}`, 'gi');
    if (regex.test(fullName)) {
      elem.visible = true;
    } else {
      elem.visible = false;
    }
  });

  paintContactList(contactListElem, contacts);
}
