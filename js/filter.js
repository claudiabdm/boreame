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

// ADD CLASS TO SELECTED FILTER
// -----------------------------------------------------

function selectedFilter(filter) {
  const prevFilter = document.querySelector('.sidebar__elem--selected');
  const currFilter = filter ? document.getElementById(filter) : document.getElementById('allContacts');
  if (!prevFilter) {
    currFilter.classList.add('sidebar__elem--selected');
  } else {
    prevFilter.classList.remove('sidebar__elem--selected');
    currFilter.classList.add('sidebar__elem--selected');
  }
}


// FILTER  CONTACTS BY GROUP
// -----------------------------------------------------
function filterContacts(contactListElem, contactInfoElem, contacts, filter) {
  selectedFilter(filter);
  if (filter === 'allContacts' || !filter) {
    contacts.forEach((elem) => elem.visible = true);
    paintContactList(contactListElem, contactInfoElem, contacts);
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
function searchContact(contactListElem, contactInfoElem, contacts, e) {
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

  paintContactList(contactListElem, contactInfoElem, contacts);
}