import {Col, Form} from "react-bootstrap";

export const DynamicForm = ({changeHandler, initialValue, inputArrays}: any) => {
    return inputArrays?.map((input: any) => {
        return renderFormTypes(input, changeHandler, initialValue);
    })
}

const renderFormTypes = (formInput: any, changeHandler: React.ChangeEvent<HTMLInputElement>, initialValue: any = {}) => { // prepraviti u interface
    const {input, name} = formInput;
    switch (input.type) {
        case "text":
        case "email":
        case "password":
            return <InputText {...formInput} value={initialValue[name] ?? ""}
                              onChange={changeHandler} key={name}/>;
        case "radio":
            return <InputRadio {...formInput} value={initialValue[name] ?? ""} onChange={changeHandler} key={name}/>;
        case "checkbox":
            return <InputCheckbox {...formInput} value={initialValue[name] ?? ""} key={name} onChange={changeHandler}/>;
        case "select":
            return <InputSelect {...formInput} onChange={changeHandler} key={name}/>
        default:
            return null;
    }
}

const InputText = ({input, name, onChange, label, description, value}: any) => {
    return (
        <Col md={6}>
            <Form.Group className="mb-3">
                <Form.Label {...label}>{label?.name}</Form.Label>
                <Form.Control {...input} name={name} onChange={onChange} defaultValue={value}/>
                {!!description?.text.length && <Form.Text className="text-muted">
                    {description.text}
                </Form.Text>}
            </Form.Group>
        </Col>
    )
}

const InputSelect = ({input, name, onChange, label}: any) => {
    return (
        <Col md={4}>
            <label htmlFor={name} className="form-label">
                {label?.name}
            </label>
            <select name={name} onChange={onChange} className={input?.className}>
                <option value="">All</option>
                {input.options?.map((item: { value: string, label: string }) => (
                    <option value={item?.value} key={item?.value}>{item?.label}</option>
                ))}
            </select>
        </Col>
    )
}


const InputRadio = ({name, input, onChange, value}: any) => {
    return input?.options?.map((option: any) => {
        return (
            <Col md={2} key={option.id}>
                <Form.Check
                    type="radio"
                    onChange={onChange}
                    name={name}
                    checked={value === option.value}
                    {...option}
                />
            </Col>
        )
    })
}

const InputCheckbox = ({name, input, onChange, label, value}: any) => {
    return (
        <Col md={6} key={label.name}>
            <Form.Check
                type="radio"
                label={label.name}
                checked={value}
                id={label?.name}
                onChange={onChange}
                name={name}
                {...input}
            />
        </Col>
    )
}