import {Col, Form} from "react-bootstrap";


interface IForm {
    name: string,
    label: string,
    input: {
        name: string,
        options: [{
            id: string,
            label: string,
            value: string
        }],
        type: string
    }
}

interface IUserActionForm {
    description: string;
    input: {
        type: string;
        placeholder: string;
        required: boolean;
    }
    label: {
        className: string;
        name: string;
    }
    name: string;
}


export const DynamicForm = ({changeHandler, initialValue, inputArrays}: any) => {
    return inputArrays.map((input: any) => {
        return renderFormTypes(input, changeHandler, initialValue);
    })
}

const renderFormTypes = (formInput: IForm, changeHandler: React.ChangeEvent<HTMLInputElement>, initialValue: any) => { // prepraviti u interface
    const {input, name} = formInput;
    switch (input.type) {
        case "text":
        case "email":
        case "password":
            return <InputText {...formInput} value={initialValue[name]} onChange={changeHandler} key={name}/>;
        case "radio":
            return <InputRadio {...formInput} onChange={changeHandler}/>
        default:
            return null;
    }
}

const InputText = ({input, name, onChange, label, description}: any) => {
    return (
        <Col md={6}>
            <Form.Group className="mb-3">
                <Form.Label {...label}>{label.name}</Form.Label>
                <Form.Control name={name} onChange={onChange} {...input}/>
                {!!description?.text.length && <Form.Text className="text-muted">
                    {description.text}
                </Form.Text>}
            </Form.Group>
        </Col>
    )
}
const InputRadio = ({name, input, onChange}: any) => {
    return input.options.map((option: any) => {
        return (
            <Form.Check
                type="radio"
                onChange={onChange}
                key={option.id}
                name={name}
                {...option}
            />
        )
    })
}