import {toast} from 'react-toastify';


export function ErrorToast(e: any) {
    const errorMessages = e?.response?.data?.message ? e?.response?.data?.message : ["Something went wrong"];
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