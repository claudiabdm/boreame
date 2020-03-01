// PAINT CONTACT INFO
// -----------------------------------------------------
function paintContactInfoHeader(contact) {
  const headerElem = document.createElement('div');
  const img = document.createElement('div');
  const initial = document.createElement('span');
  const container = document.createElement('div');
  const name = document.createElement('h1');
  const group = document.createElement('span');

  headerElem.classList.add('contact__header');
  img.classList.add('contact__img');
  initial.classList.add('contact__initial');
  name.classList.add('contact__name');
  group.classList.add('contact__group');

  name.textContent = `${contact.name} ${contact.surname}`;
  group.textContent = !contact.group ? '' : contact.group[0].toUpperCase() + contact.group.slice(1);
  initial.textContent = contact.name[0];
  img.style.setProperty('--random-color', contact.color);

  img.appendChild(initial);
  container.appendChild(name);
  container.appendChild(group);
  headerElem.appendChild(img);
  headerElem.appendChild(container);
  return headerElem;
}

function paintContactInfoDetails(contact) {
  const address = document.createElement('address');
  const emailContainer = document.createElement('a');
  const emailIcon = document.createElement('span');
  const email = document.createElement('span');
  const phoneContainer = document.createElement('a');
  const phoneIcon = document.createElement('span');
  const phone = document.createElement('span');

  address.className = 'contact__details container';
  emailContainer.classList.add('contact__item');
  emailIcon.className = 'icon contact__icon';
  email.classList.add('contact__email');
  emailIcon.innerHTML = '<svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>message-closed-envelope</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Detalle---v2" transform="translate(-558.000000, -177.000000)" fill="#000" fill-rule="nonzero"><g id="message-closed-envelope" transform="translate(568.000000, 185.000000) scale(-1, 1) translate(-568.000000, -185.000000) translate(558.000000, 177.000000)"><path d="M17.6262244,1.15463195e-14 L2.37382791,1.15463195e-14 C1.06490944,1.15463195e-14 0,1.03574099 0,2.30880284 L0,13.0758125 C0,14.3488744 1.06490944,15.3846154 2.37382791,15.3846154 L17.6262244,15.3846154 C18.9351429,15.3846154 20,14.3488744 20,13.0758125 L20,2.30880284 C20,1.03574099 18.9351429,1.15463195e-14 17.6262244,1.15463195e-14 Z M17.6262244,13.346317 L2.37382791,13.346317 C2.18142611,13.346317 2.01268198,13.2199438 2.01268198,13.0758125 L2.01268198,3.73256902 L8.91093566,9.63086984 C9.05235831,9.75183616 9.23219852,9.81841535 9.4173774,9.81841535 L10.5824132,9.81846836 C10.7674874,9.81846836 10.9474323,9.75183616 11.0889073,9.63086984 L17.987475,3.73235698 L17.987475,13.0759186 C17.9873704,13.2199438 17.8185739,13.346317 17.6262244,13.346317 Z M10.0000262,7.79453537 L3.29061518,2.0382984 L16.7094372,2.0382984 L10.0000262,7.79453537 Z" id="envelope"></path></g></g></g></svg>';

  phoneContainer.classList.add('contact__item');
  phoneIcon.className = 'icon contact__icon';
  phone.classList.add('contact__phone');
  phoneIcon.innerHTML = '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --><title>call-answer</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Detalle---v2" transform="translate(-560.000000, -256.000000)" fill="#000" fill-rule="nonzero"><g id="call-answer" transform="translate(560.000000, 256.000000)"><path d="M15.6447356,12.6474943 L13.1732414,10.1757241 C12.6809655,9.68542529 11.8657471,9.70032184 11.3563218,10.209931 L10.1111724,11.4548046 C10.0325057,11.4114483 9.95108046,11.3661609 9.86547126,11.3181149 C9.07917241,10.8824368 8.00298851,10.2852874 6.87052874,9.152 C5.73471264,8.01632184 5.13701149,6.93848276 4.7,6.15167816 C4.65388506,6.06832184 4.60970115,5.98795402 4.56606897,5.91163218 L5.40174713,5.0771954 L5.8125977,4.66583908 C6.3228046,4.15549425 6.33687356,3.34050575 5.84574713,2.84878161 L3.37425287,0.376735632 C2.88312644,-0.114298851 2.06754023,-0.0994022989 1.55733333,0.410942529 L0.860781609,1.11149425 L0.879816092,1.1303908 C0.646252874,1.42841379 0.45108046,1.77213793 0.30583908,2.1428046 C0.171954023,2.49563218 0.0885977011,2.83232184 0.0504827586,3.16970115 C-0.275862069,5.87517241 0.96045977,8.34777011 4.31567816,11.7030345 C8.9536092,16.3406437 12.6911724,15.9902989 12.8524138,15.9731954 C13.2035862,15.9312184 13.5401379,15.8473103 13.8821609,15.7144828 C14.2496092,15.5709425 14.5931034,15.376046 14.8909425,15.1429885 L14.9061609,15.1565057 L15.6118161,14.4655172 C16.1209655,13.9552644 16.1356322,13.14 15.6447356,12.6474943 Z" id="phoneicon"></path></g></g></g></svg>';

  email.textContent = contact.email;
  emailContainer.setAttribute('href', `mailto:${contact.email}`);

  const prefix = contact.country === 'españa' ? '+34' : '+00';
  phone.textContent = `${prefix} ${contact.phone}`;
  phoneContainer.setAttribute('href', `tel:${prefix}${contact.phone.replace(/\s/g, '')}`);

  emailContainer.appendChild(emailIcon);
  emailContainer.appendChild(email);
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phone);
  address.appendChild(emailContainer);
  address.appendChild(phoneContainer);
  return address;
}

function paintContactInfoEditBtn(contacts) {
  const editContainer = document.createElement('div');
  const editBtn = document.createElement('button');
  editContainer.className = 'contact__actions container';
  editBtn.className = 'btn btn--sm';
  editBtn.textContent = 'Editar';
  editBtn.setAttribute('type', 'button');
  editBtn.setAttribute('id', 'editContactBtn');
  editContainer.appendChild(editBtn);
  editBtn.addEventListener('click', openModal.bind(editBtn, contacts));
  return editContainer;
}

function paintContactInfo(contactInfoElem, contacts, e) {
  while (contactInfoElem.firstChild) {
    contactInfoElem.removeChild(contactInfoElem.firstChild);
  }

  if (e.tagName === 'LI') {
    if (!document.querySelector('.contacts__name--selected')) {
      e.classList.add('contacts__name--selected');
    } else {
      document.querySelector('.contacts__name--selected').classList.remove('contacts__name--selected');
      e.classList.add('contacts__name--selected');
    }
    const contactId = parseInt(e.getAttribute('data-id'));
    const contact = contacts.find((elem) => elem.id === contactId);
    const contactHeader = paintContactInfoHeader(contact);
    const contactDetails = paintContactInfoDetails(contact);
    const contactEditBtn = paintContactInfoEditBtn(contacts);

    contactInfoElem.appendChild(contactHeader);
    contactInfoElem.appendChild(contactDetails);
    contactInfoElem.appendChild(contactEditBtn);
    contactInfoElem.setAttribute('data-id', contact.id);
  }
}


// PAINT CONTACT LIST
// -----------------------------------------------------

function paintContactListLiElem(contact) {
  const liElem = document.createElement('li');
  liElem.className = 'contacts__name';
  liElem.textContent = `${contact.name} ${contact.surname}`;
  liElem.setAttribute('data-id', contact.id);
  liElem.addEventListener('click', paintContactInfo.bind(liElem, contactInfoElem, contacts, liElem));
  return liElem;
}

function paintContactListDeleteBtn() {
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'contacts__delete';
  deleteBtn.textContent = '\u00D7';
  deleteBtn.setAttribute('id', 'deleteBtn');
  deleteBtn.addEventListener('click', deleteContact.bind(deleteBtn, contactListElem, contactInfoElem, contacts), { once: true });
  return deleteBtn;
}

function paintContactList(contactListElem, contacts) {
  while (contactListElem.firstChild) {
    contactListElem.removeChild(contactListElem.firstChild);
  }
  contacts.sort(sortAZ);
  contacts.forEach((contact, idx) => {
    contact.id = idx;
    if (contact.visible === true) {
      const liElem = paintContactListLiElem(contact);
      const deleteBtn = paintContactListDeleteBtn();
      liElem.appendChild(deleteBtn);
      contactListElem.appendChild(liElem);
    }
  });
}
