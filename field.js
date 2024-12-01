//RENDER INPUT FROM APP
var field;

export function renderField(config) {
    console.log("RENDER INPUT");

    switch (config.type) {
        case "text":    field = renderText(config);     break;
        case "number":  field = renderNumber(config);   break;
        case "email":   field = renderEmail(config);    break;
        default:        field = renderDefault(config);  break;
    }
    return field;
}


// Render text
function renderText(values) {
    field = document.createElement('div');
    if (values.labelOnTop) {
        field.className = "topOn";
        var label = document.createElement("label");
        label.innerText = values.label;
        field.appendChild(label);
    }
    else {
        field.className = "topOff";
        var label = document.createElement("label");
        label.innerText = values.label;
        field.appendChild(label);
    }
    var input = document.createElement("input");
    input.id = values.id;
    input.type = values.type;
    input.placeholder = values.placeholder;
    field.appendChild(input);
    
    Spy(input, values);
    return field;
}


// Render number
function renderNumber(values) {    
    field = document.createElement('div');
    if (values.labelOnTop) {
        field.className = "topOn";
        var label = document.createElement("label");
        label.innerText = values.label;
        field.appendChild(label);
    }
    else {
        field.className = "topOff";
        var label = document.createElement("label");
        label.innerText = values.label;
        field.appendChild(label);
    }
    var input = document.createElement("input");
    input.id = values.id;
    input.type = values.type;
    input.placeholder = values.placeholder;
    field.appendChild(input);
    
    Spy(input, values);
    return field;
}


// Render email
function renderEmail(values) {
    field = document.createElement('div');
    

    if (values.labelOnTop) {
        var label = document.createElement("label");
        label.innerText = values.label;
        
        var emailDIV = document.createElement('div');
        field.appendChild(label);
        field.className = "topOn";
        emailDIV.className = "email";
    }
    else {
        var label = document.createElement("label");
        label.innerText = values.label;
        
        
        var emailDIV = document.createElement('div');
        field.appendChild(label);
        field.className = "topOff";
        emailDIV.className = "email";
    }
    
    
    let user = document.createElement('input');
    user.type = "text"
    user.placeholder = values.placeholder;
    user.id = values.id + "-user";
    
    let at = document.createElement('span');
    at.id = "at";
    at.innerHTML = "@";
    at.id = values.id + "-at";
    
    let domain = document.createElement('input');
    domain.type = "text";
    domain.placeholder = "domain.com";
    domain.id = values.id + "-domain";
    
    
    console.log("render... " + values.type)
    
    user.addEventListener('input', () => {
        values.state[values.id] = user.value + at.innerHTML + domain.value;
        console.log(values.state);
    })
    
    domain.addEventListener('input', () => {
        values.state[values.id] = user.value + at.innerHTML + domain.value;
        console.log(values.state);
    })
    
    
    emailDIV.appendChild(user);
    emailDIV.appendChild(at);
    emailDIV.appendChild(domain);
    field.appendChild(emailDIV);
    
    return field;
}


// Render empty div
function renderDefault(values) {
    field = document.createElement('div');
    field.id = values.id;

    console.log("render default")

    return field;
}

function Spy(field, config) {
    field.addEventListener('input', () => {
        config.state[config.id] = field.value;
        console.log(field.value);
    })
}