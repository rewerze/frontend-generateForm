import { renderField } from "./field.js";

let app = document.getElementById('app');
let globalState = {}


let textField = renderField( {
  state: globalState,
  id: "text-input",
  type: "text",  
  placeholder: "text",
});

let numberField = renderField ({
  state: globalState,
  id: "number-input",
  type: "number",
  placeholder: "number",
});

let emailField = renderField ({
  state: globalState,
  id: "email-input",
  type: "email",
  placeholder: "email",
});

//Input tag hozzáadása
app.appendChild(textField);
app.appendChild(numberField);
app.appendChild(emailField);