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
        errors.lastName = "Last name is required"
    } else {
        
    }
}