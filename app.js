import { renderField } from "./field.js";

let app = document.getElementById('app');
let globalState = {}


let textField = renderField( {
  state: globalState,
  id: "text-input",
  type: "text",  
  placeholder: "text",
});
app.appendChild(textField);

let numberField = renderField ({
  state: globalState,
  id: "number-input",
  type: "number",
  placeholder: "number",
});
app.appendChild(numberField);

let emailField = renderField ({
  state: globalState,
  id: "email-input",
  type: "email",
  placeholder: "email",
});
app.appendChild(emailField);

let defaultField = renderField({
  state: globalState,
  id: "default",
  type: "default",
})
app.appendChild(defaultField);
