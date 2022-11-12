const FormFields = [
    {
        name: "firstName",
        label: {
            name: "First name",
            className: ""
        },
        input: {
            type: "text",
            placeholder: "Enter first name",
            required: false,
        },
        description: {
            text: ""
        }
    },
    {
        name: "lastName",
        label: {
            name: "Last name",
            className: ""
        },
        input: {
            type: "text",
            placeholder: "Enter Last name",
            required: false,
        },
        description: {
            text: ""
        }
    },
    {
        name: "userName",
        label: {
            name: "Username",
            className: "required-input"
        },
        input: {
            type: "text",
            placeholder: "Enter username",
            required: true,
        },
        description: {
            text: ""
        }
    },
    {
        name: "email",
        label: {
            name: "Email address",
            className: "required-input"
        },
        input: {
            type: "email",
            placeholder: "Enter Email address",
            required: true,
        },
        description: {
            text: " We'll never share your email with anyone else."
        }
    },
    {
        name: "password",
        label: {
            name: "Password",
            className: "required-input"
        },
        input: {
            type: "password",
            placeholder: "Enter password",
            required: true,
        },
        description: {
            text: ""
        }
    },

    {
        name: "role",
        label: null,
        input: {
            type: "radio",
            name: "role",
            options: [
                {
                    id: "user-radio",
                    label: "User",
                    value: "user"
                }, {
                    id: "admin-radio",
                    label: "Admin",
                    value: "admin"
                }
            ]
        },
    },
]

const generateInputFields = (arr: string[]) => {
    return FormFields.filter(input => arr.indexOf(input.name) > -1);
}
export const userPermissionForm = generateInputFields(["role"]);
export const userActionForm = generateInputFields(["firstName", "lastName", "password", "email", "username"])