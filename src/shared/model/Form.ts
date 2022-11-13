export interface IFormField {
    name: string;
    label?: {
        name: string;
        className?: string;
    }
    input: {
        required?: boolean;
        type: string;
        name?: string;
        placeholder?: string;
        className?: string;
        options?: IFormOption[]
    }
    description?: {
        text: string
    }
}

interface IFormOption {
    label: string;
    id?: string;
    value: string;
}