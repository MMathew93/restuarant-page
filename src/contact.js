import {clear, newHeader, loadFooter, navButtons} from './initialpage'

const loadContact = function () {
  clear()
  newHeader()
  navButtons()
  const content = document.getElementById('content')
  const contentWrapper = document.getElementById('content-wrapper')
  const formWrapper = document.createElement('div')
  formWrapper.id = "form-wrapper"
  const contactForm = document.createElement('form')
  //Name Attribute
  const inputName = document.createElement('input')
  inputName.id = 'name'
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("placeholder", "Name");
  inputName.setAttribute("maxlength", "30");
  //Email Attribute
  const inputEmail = document.createElement('input')
  inputEmail.id = 'email'
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("placeholder", "Email");
  inputEmail.setAttribute("maxlength", "40");
  //Phone Attribute
  const inputPhone = document.createElement('input')
  inputPhone.id = 'phone#'
  inputPhone.setAttribute("type", "text");
  inputPhone.setAttribute("name", "phone");
  inputPhone.setAttribute("placeholder", "Phone Number");
  inputPhone.setAttribute("maxlength", "12");
  //Select Options section
  const select = document.createElement('select')
  select.id = 'form-options'
  //All options
  let formOptions = ['What are you getting in touch about?', 'General Inquiry', 'Complaint', 'Investment Opportunities']
  formOptions.forEach((x) => {
    let option = document.createElement('option')
    option.setAttribute("value", `${x}`);
    option.innerHTML = `${x}`
    select.appendChild(option)
  });
  //text Area
  const textArea = document.createElement('textarea')
  textArea.setAttribute("name", "message");
  textArea.setAttribute("placeholder", "Your message...");
  //submit Button
  const submission = document.createElement('input')
  submission.id = 'submitButton'
  submission.setAttribute("type", "submit");
  submission.setAttribute("value", "submit");

  contactForm.appendChild(inputName)
  contactForm.appendChild(inputEmail)
  contactForm.appendChild(inputPhone)
  contactForm.appendChild(select)
  contactForm.appendChild(textArea)
  contactForm.appendChild(submission)
  formWrapper.appendChild(contactForm)
  contentWrapper.appendChild(formWrapper)
  content.appendChild(contentWrapper)
  loadFooter()
};

export {loadContact}