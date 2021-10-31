export default {
    methods: {
        validateInput(value) {
            if (value === null || value === "") {
                return this.constructValidationObj(true, "This field is required");
            }
            if (value < 20 || value > 100) {
                return this.constructValidationObj(true, "Value must be between 20 and 100")
            }

            return this.constructValidationObj(false, null);
        },

        constructValidationObj(show, message) {
            return { show, message };
        },
    },
};
