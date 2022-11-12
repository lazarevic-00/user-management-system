export interface IUserActionProps {
    handleSubmit: (event: React.FormEvent) => void;
}

export interface IUserHeaderProps {
    handleClick: () => void;
    title: string;
    buttonName: string;
}
