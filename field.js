var formField;
var stateView;
var formState = {};

export function renderForm (CONFIG) {
    formField = document.createElement('form');

    if(CONFIG.showState) {
        stateView = document.createElement('p');
        formField.appendChild(stateView);
    }
    for (let i = 0; i < CONFIG.fields.length; i++ ) {

        console.log("rendering " + (i+1) + ". field: " + CONFIG.fields[i].type)
        formField.appendChild(renderField(CONFIG.fields[i], CONFIG.labelOnTop, stateView, formState));
    }


    // Gomboknak div
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "controls"

    // Save button
    if(CONFIG.controls.onSave) {
        var saveButton = document.createElement("button");
        saveButton.innerText= "Save";
        saveButton.type = "button";
        saveButton.onclick = () => {CONFIG.controls.onSave(formState)};
        
        buttonDiv.appendChild(saveButton);
    }
    
    // Clear button
    if(CONFIG.controls.onClear) {
        var clearButton = document.createElement("button");
        clearButton.innerText= "Clear";
        clearButton.type = "button";
        clearButton.onclick = () => {CONFIG.controls.onClear(formField.getElementsByTagName("input"), formState, stateView)};
        
        buttonDiv.appendChild(clearButton);
    }
    formField.appendChild(buttonDiv);

    return formField;
}


var field;
function renderField(FIELD_PROPERTIES, LABEL, state, formState) {
    switch (FIELD_PROPERTIES.type) {
        case "text":    field = renderText      (FIELD_PROPERTIES, LABEL, state, formState);  break;
        case "number":  field = renderNumber    (FIELD_PROPERTIES, LABEL, state, formState);  break;
        case "email":   field = renderEmail     (FIELD_PROPERTIES, LABEL, state, formState);  break;
        default:        field = renderDefault   (FIELD_PROPERTIES, LABEL, state, formState);  break;
    }
    return field;
}


// Render text
function renderText(FIELD_VALUES, LABEL, state, formState) {
    field = document.createElement('div');
    if (LABEL) {
        field.className = "topOn";
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        field.appendChild(label);
    }
    else {
        field.className = "topOff";
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        field.appendChild(label);
    }
    var input = document.createElement("input");
    input.id = FIELD_VALUES.id;
    input.type = FIELD_VALUES.type;
    input.placeholder = FIELD_VALUES.placeholder;
    field.appendChild(input);
    
    Spy(input, FIELD_VALUES, state, formState);
    return field;
}


// Render number
function renderNumber(FIELD_VALUES, LABEL, state, formState) {    
    field = document.createElement('div');
    if (LABEL) {
        field.className = "topOn";
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        field.appendChild(label);
    }
    else {
        field.className = "topOff";
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        field.appendChild(label);
    }
    var input = document.createElement("input");
    input.id = FIELD_VALUES.id;
    input.type = FIELD_VALUES.type;
    input.placeholder = FIELD_VALUES.placeholder;
    field.appendChild(input);
    
    Spy(input, FIELD_VALUES, state, formState);
    return field;
}


// Render email
function renderEmail(FIELD_VALUES, LABEL, state, formState) {
    field = document.createElement('div');
    

    if (LABEL) {
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        
        var emailDIV = document.createElement('div');
        field.appendChild(label);
        field.className = "topOn";
        emailDIV.className = "email";
    }
    else {
        var label = document.createElement("label");
        label.innerText = FIELD_VALUES.label;
        
        
        var emailDIV = document.createElement('div');
        field.appendChild(label);
        field.className = "topOff";
        emailDIV.className = "email";
    }
    
    
    let user = document.createElement('input');
    user.type = "text"
    user.placeholder = FIELD_VALUES.placeholder;
    user.id = FIELD_VALUES.id + "-user";
    
    let at = document.createElement('span');
    at.id = "at";
    at.innerHTML = "@";
    at.id = FIELD_VALUES.id + "-at";
    
    let domain = document.createElement('input');
    domain.type = "text";
    domain.placeholder = "domain.com";
    domain.id = FIELD_VALUES.id + "-domain";
    
    user.addEventListener('input', () => {
        formState[FIELD_VALUES.id] = user.value + at.innerHTML + domain.value;
        state.innerText = JSON.stringify(formState);
    })
    
    domain.addEventListener('input', () => {
        formState[FIELD_VALUES.id] = user.value + at.innerHTML + domain.value;
        state.innerText = JSON.stringify(formState);
    })
    
    
    emailDIV.appendChild(user);
    emailDIV.appendChild(at);
    emailDIV.appendChild(domain);
    field.appendChild(emailDIV);
    
    return field;
}


// Render empty div
function renderDefault(FIELD_VALUES) {
    field = document.createElement('div');
    field.id = FIELD_VALUES.id;

    return field;
}

function Spy(field, config, state, formState) {
    field.addEventListener('input', () => {
    // console.log("test")
        if (state) {
            formState[config.id] = field.value;
            state.innerText = JSON.stringify(formState);
        }
    })
}