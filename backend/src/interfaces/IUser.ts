export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    set_password(password: string): void;
    set_name(name: string): void;
    set_email(email: string): void;
    get_id(): number;
    get_name(): string;
    get_email(): string;
}