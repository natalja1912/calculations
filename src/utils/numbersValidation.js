function validate(values) {
    const errors = {};

    for (let i = 0; i < 10; i++) {
        let name = `task${i}`
        if (values[name] && values[name].length > 3) {
            errors[name] = "Введите не более 3х цифр";
        }
    }

    return errors;
}

export default validate;