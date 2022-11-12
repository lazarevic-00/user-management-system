export interface IUserActionProps {
    handleSubmit: (event: React.FormEvent) => void;
    isEditPermission?: boolean;
}

export interface IUserHeaderProps {
    handleClick: () => void;
    title: string;
    buttonName: string;
}
