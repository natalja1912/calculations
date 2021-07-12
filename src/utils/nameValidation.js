function validateName (values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'Заполните поле';
    } else if (values.name.length < 3) {
        errors.name = 'Введите не менее 3х символов';
    }
    else if (values.name.length > 14) {
        errors.name = 'Введите не более 15 символов';
    }
    return errors;
};

export default validateName