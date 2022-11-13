import {toast} from 'react-toastify';

interface IErrorProps {
    response: {
        data: {
            error: {
                message: string[]
            }
        }
    }
}

export function ErrorToast(e: IErrorProps) {
    const errorMessages = e?.response?.data?.error?.message ? e?.response?.data?.error?.message : ["Something went wrong"];
    const isMessageArray = isErrorArray(errorMessages);
    if (isMessageArray) {
        errorMessages?.forEach((errorMessage: string) => {
            !!errorMessage?.length && toast.error(errorMessage)
        })
    } else {
        toast.error(errorMessages)
    }
}

export function SuccessToast(props: string) {
    toast.success(props);
}

export function WarningToast(props: string) {
    toast.warning(props);
}

const isErrorArray = (args: string[]) => {
    return Array.isArray(args);
}