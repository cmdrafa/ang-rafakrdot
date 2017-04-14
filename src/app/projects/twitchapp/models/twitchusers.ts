export class Users {
    game: string;
    status: string;
    display_name: string;
    viewers: string;
    logo: string;
    url: string;

    constructor(obj?:any){
        this.game = obj.game;
        this.status = obj.status;
        this.display_name = obj.display_name;
        this.viewers = obj.viewers;
        this.logo = obj.logo;
        this.url = obj.url;
    }
}