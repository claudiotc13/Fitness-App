import { IUser } from '../interfaces/IUser';

class User implements IUser{
    id: number;
    name: string;
    email: string;
    password: string;
    
    constructor(id:number, name:string, email:string, password:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    set_password(password:string) {
        this.password = password;
    }

    set_name(name:string) {
        this.name = name;
    }

    set_email(email:string) {
        this.email = email;
    }

    get_id() {
        return this.id;
    }

    get_name() {
        return this.name;
    }

    get_email() {
        return this.email;
    }
}