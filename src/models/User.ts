export class User {
    public avatar: string = "";
    public email: string = "";
    public firstName: string = "";
    public fullName: string = "";
    public lastName: string = "";
    public introduction: string = "";
    public value: number = 0;
    public location: string = "";
    public keywords: string[] = [];

    constructor(data: any) {
        if (!data) return;
        this.avatar = data['avatar'];
        this.email = data['email'];
        this.firstName = data['first_name'];
        this.lastName = data['last_name'];
        this.fullName = data['first_name'] + ' ' + data['last_name'];
        this.introduction = data['introduction'];
        this.value = data['value'];
        this.location = data['location'];
        this.keywords = data['keywords'];

        console.log(this);
    }
}
