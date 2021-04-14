//validation file 

const validate = (values) => {
    const errors = {};

    /**Validating the first name */
    if (!values.firstName) {
        errors.firstName = "First name is required";
    } else if(values.firstName.length < 1 && values.firstName.length > 15) {
        errors.firstName = "Invalid first name";
    } else {
        errors.firstName = "Nice first name 😃";
    }

    /**Validating the last name */
    if (!values.lastName) {
        errors.lastName = "Last name is required";
    } else if(values.lastName.length < 1) {
        errors.lastName = "Invalid last name";
    } else {
        errors.lastName = "Your last name is awesome 😃";
    }

    /**Validating the email  */
    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address!!";
    } 

    /**validating passwords */
    if (!values.password) {
        errors.password = "Password is required";
    } else if(values.password.length <= 8) {
        errors.password = "Password length is weak 😩";
    } else {
        errors.password = "Password strength is ok 💪";
    }

    /**validating password verification with the initial one */
    if (!) {
        
    } else {
        
    }
}