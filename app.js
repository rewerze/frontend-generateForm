import { renderField } from "./field.js";

let app = document.getElementById('app');

let globalState = {}

let field1 = renderField( {
  state: globalState,
  id: "text1",
  type: "text",  
});

let field2 = renderField( {
    state: globalState,
    id: "text2",
    type: "text",  
  });

app.appendChild(field1);
app.appendChild(field2);
