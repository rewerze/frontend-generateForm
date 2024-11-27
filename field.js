//RENDER INPUT FROM APP
var field;
export function renderField(config) {
    console.log("RENDER INPUT");

    switch (config.type) {
        case "text":
            renderText(config);
            break;
        case "number":
            renderNumber(config);
            break;
        case "email":
            renderEmail(config);
            break;
        case "default":
            renderDefault(config);
            break;
    }
    return field;
}

function renderText(values) {
    field = document.createElement('input');

    field.id = values.id;
    field.type = values.type;
    field.placeholder = values.placeholder;

    console.log("render... " + values.type)
    Spy(field, values);

    return field;
}

function renderNumber(values) {
    field = document.createElement('input');
    
    field.id = values.id;
    field.type = values.type;
    field.placeholder = values.placeholder;
    
    console.log("render... " + values.type)
    Spy(field, values);
    
    return field;
}

function renderEmail(values) {
    field = document.createElement('div');
    field.className = "email";

    let user = document.createElement('input');
    user.type = "text"
    user.placeholder = values.placeholder;
    
    let at = document.createElement('span');
    at.id = "at";
    at.innerHTML = "@";
    
    let domain = document.createElement('input');
    domain.type = "text";
    domain.placeholder = "gmail.com";


    console.log("render... " + values.type)

    user.addEventListener('input', () => {
        values.state[values.id] = user.value + at.innerHTML + domain.value;
        console.log(values.state);
    })

    domain.addEventListener('input', () => {
        values.state[values.id] = user.value + at.innerHTML + domain.value;
        console.log(values.state);
    })


    field.appendChild(user);
    field.appendChild(at);
    field.appendChild(domain);
    
    return field;
}

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