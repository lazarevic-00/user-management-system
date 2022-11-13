import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {IAllStates} from "../../../store/rootReducer";
import {SetStateAction, useEffect, useState} from "react";
import {IUserPagination} from "../../../shared/model/User";
import _debounce from "lodash/debounce";
import {DynamicForm} from "../../../shared/components/DynamicForm";
import {userFilterForm} from "../../../utils/forms/FormFields";
import {IFormField} from "../../../shared/model/Form";
import {getAdjustedEnums} from "../../../shared/functions/Functions";

interface IUserFiltersProps {
    pagination: IUserPagination,
    setPagination: React.Dispatch<SetStateAction<IUserPagination>>;
}

export const UserFilters = ({pagination, setPagination}: IUserFiltersProps) => {
    const [fields, setFields] = useState<IFormField[]>([])
    const {enums} = useSelector((state: IAllStates) => state);
    const handleFiltering = _debounce((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = event.target;
        setPagination((prev) => ({...prev, [name]: value}))
    }, 200);

    useEffect(() => {
        if (!!enums.length) {
            const adjustPermissionValues = userFilterForm.map((item) => {
                if (item.name === "permission") {
                    item.input.options = getAdjustedEnums(enums);
                }
                return item;
            })
            setFields(adjustPermissionValues);
        }
    }, [enums])


    return (
        <Row className="mb-3">
            <DynamicForm initialValue={pagination} changeHandler={handleFiltering} inputArrays={fields}/>
        </Row>
    )
}