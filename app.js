// import { renderField } from "./field.js";
import { renderForm } from "./field.js";

let app = document.getElementById('app');


let form = renderForm ({
  showState: false,
  labelOnTop: true,
  controls: {
    onSave: (state) => {
      console.log(`Implement save state ${JSON.stringify(state) }`)
    },
    onClear: (inputValue, formState, stateView) => {
      for (let i = 0; i < inputValue.length; i++) {
        inputValue[i].value = null;
      }
      formState = {};
      stateView.innerText = JSON.stringify(formState);
    }
  },
  fields: [
    { id: "text-input",   type: "text",     label: "Username:",      placeholder: "admin" },
    { id: "number-input", type: "number",   label: "Phone number:",  placeholder: "+36 01 234 5678" },
    { id: "email-input",  type: "email",    label: "Email:",         placeholder: "myemail" },
  ]
});

app.appendChild(form);