export class EmployeeModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public companyName: string,
        public contactNum: number,
        public designation: string,
        public avatar: string
    ) {
        this.id = id,
            this.name = name,
            this.email = email,
            this.companyName = companyName,
            this.contactNum = contactNum,
            this.designation = designation,
            this.avatar = avatar
    }
}