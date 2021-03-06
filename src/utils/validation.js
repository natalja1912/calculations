function validate(values) {
    const errors = {};

    for (let i = 0; i < 10; i++) {
        let name = `task${i}`
        if (values[name] && values[name].length > 3) {
            errors[name] = "Введите не более 3х цифр";
        }
    }

    if (!values.name) {
        errors.name = 'Заполните поле';
    } else if (values.name.length < 3) {
        errors.name = 'Введите не менее 3х символов';
    }
    else if (values.name.length > 14) {
        errors.name = 'Введите не более 15 символов';
    }

    return errors;
}

export default validate;