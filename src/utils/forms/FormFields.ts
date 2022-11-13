import {IFormField} from "../../shared/model/Form";


const UserFormFields: IFormField[] = [
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
        name: "permission",
        input: {
            type: "radio",
            name: "permission",
            options: [
                {
                    id: "",
                    label: "",
                    value: ""
                },
            ]
        },
    },
    {
        name: "isActive",
        label: {
            name: "Is user active",
            className: "required-input"
        },
        input: {
            type: "checkbox",
            name: "isActive",
        },
    },
]

const FilterFormFields: IFormField[] = [

    {
        name: "isActive",
        label: {
            name: "Filter by status",
        },
        input: {
            type: "select",
            className: "form-select",
            options: [
                {
                    label: "Active",
                    value: "true"
                },
                {
                    label: "Inactive",
                    value: "false"
                }
            ]
        },
    },
    {
        name: "permission",
        label: {
            name: "Filter by permission",
        },
        input: {
            type: "select",
            className: "form-select",
            options: [
                {
                    label: "",
                    value: ""
                },
            ]
        },
    },

    {
        name: "order",
        label: {
            name: "Sort by created date",
        },
        input: {
            type: "select",
            className: "form-select",
            options: [
                {
                    label: "Ascending",
                    value: "ASC"
                },
                {
                    label: "Descending",
                    value: "DESC"
                }
            ]
        },
    },
    {
        name: "email",
        label: {
            name: "Email address",
        },
        input: {
            className: "form-control",
            type: "email",
            placeholder: "Enter Email address",
        }
    },

]


const generateInputFields = (arr: string[], fieldsArray: IFormField[]) => {
    return fieldsArray?.filter(input => arr.indexOf(input.name) > -1);
}
export const userPermissionForm = generateInputFields(["permission"], UserFormFields);
export const userCreateForm = generateInputFields(["firstName", "lastName", "password", "permission", "email", "userName", "isActive"], UserFormFields);
export const userUpdateForm = generateInputFields(["firstName", "lastName", "email", "userName", "isActive"], UserFormFields);
export const userFilterForm = generateInputFields(["isActive", "permission", "order", "email"], FilterFormFields)