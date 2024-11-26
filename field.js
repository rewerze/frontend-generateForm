export function renderField(config) {
    let field = document.createElement('input')

    field.id = config.id;
    field.type = config.type;

    field.addEventListener('input', () => {
        config.state[config.id] = field.value;
        console.log(field.value);
    })

    return field;
}