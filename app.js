import { renderField } from "./field.js";

let app = document.getElementById('app');
let globalState = {}


let textField = renderField( {
  state: globalState,
  id: "text-input",
  type: "text",
  label: "Username:",
  labelOnTop: false,
  placeholder: "admin",
});

let numberField = renderField ({
  state: globalState,
  id: "number-input",
  type: "number",
  label: "Phone number:",
  labelOnTop: true,
  placeholder: "+36 01 234 5678",
});

let emailField = renderField ({
  state: globalState,
  id: "email-input",
  type: "email",
  label: "Email:",
  labelOnTop: false,
  placeholder: "myemail",
});

app.appendChild(emailField);
app.appendChild(textField);
app.appendChild(numberField);
app.appendChild(fasz);
