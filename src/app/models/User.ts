export class User {
    public userName: string;
    public password: string;
    public token: string;
    public secret: string;
    public score: number;
    public avatar: string;
    public gender: number;
    public creditShowList: Array<Credit>;
}
class Credit {
    public title: string;
    public data: string;
}