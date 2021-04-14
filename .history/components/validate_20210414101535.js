//validation file 

const validate = (values) => {
    const errors = {};

    /**Validating the first name */
    if (!values.firstName) {
        errors.firstName = "First name is required";
    } else if(values.firstName.length < 1) {
        errors.firstName
    }
}