// import { renderField } from "./field.js";
import { renderForm } from "./field.js";

let app = document.getElementById('app');
let globalState = {};

let form = renderForm ({
  showState: true,
  labelOnTop: false,
  fields: [
    {
      id: "text-input",
      type: "text",
      label: "Username:",
      placeholder: "admin",
    },
    {
      id: "number-input",
      type: "number",
      label: "Phone number:",
      placeholder: "+36 01 234 5678",
    },
    {
      id: "email-input",
      type: "email",
      label: "Email:",
      placeholder: "myemail",
    },
  ]
});
app.appendChild(form);