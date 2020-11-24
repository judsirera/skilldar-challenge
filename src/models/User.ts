export class User {
    public avatar: string | undefined;
    public email: string | undefined;
    public firstName: string | undefined;
    public fullName: string | undefined;
    public lastName: string | undefined;
    public value: number | undefined;
    public location: string | undefined;
    public keywords: string[] | undefined;

    constructor(data: any) {
        if (!data) return;
        this.avatar = data['avatar'];
        this.email = data['email'];
        this.firstName = data['first_name'];
        this.lastName = data['last_name'];
        this.fullName = this.firstName + ' ' + this.lastName;
        this.value = data['value'];
        this.location = data['location'];
        this.keywords = data['keywords'];
    }
}
