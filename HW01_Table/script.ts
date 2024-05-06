class Student
{
    private _name: string;
    private _surname: string;
    private _phoneNumber: string;
    private _city: string;
    private _country: string;
    private _institution: string;
    private _group: string;

    constructor(name: string, surname: string, phoneNumber: string, city: string, country: string, institution: string, group: string) {
        this._name = name;
        this._surname = surname;
        this._phoneNumber = phoneNumber;
        this._city = city;
        this._country = country;
        this._institution = institution;
        this._group = group;
    }

    get group(): string {
        return this._group;
    }
    set group(value: string){
        this._group = value;
    }
    get institution(): string {
        return this._institution;
    }
    set institution(value: string){
        this._institution = value;
    }
    get country(): string {
        return this._country;
    }
    set country(value: string){
        this._country = value;
    }
    get city(): string {
        return this._city;
    }
    set city(value: string){
        this._city = value;
    }
    get phoneNumber(): string {
        return this._phoneNumber;
    }
    set phoneNumber(value: string){
        this._phoneNumber = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string){
        this._name = value;
    }
    get surname(): string {
        return this._surname;
    }
    set surname(value: string){
        this._surname = value;
    }
    
    public inputStudent (name: string, surname: string, phoneNumber: string, city: string, country: string, institution: string, group: string) {
        this._name = name;
        this._surname = surname;
        this._phoneNumber = phoneNumber;
        this._city = city;
        this._country = country;
        this._institution = institution;
        this._group = group;
    }
    public outputStudentInfo() {
        console.log([
            this._name,
            this._surname,
            this._phoneNumber,
            this._city,
            this._country,
            this._institution,
            this._group
        ]);
    }
}

let students: Student[] = [];
students.push(new Student("John", "Doe", "123456789", "New York", "USA", "B University", "A-218"));
students.push(new Student("Jesse", "Reed", "987654321", "Night City", "NUSA", "X College", "J-431"));
students.push(new Student("Charles", "Moist", "187654321", "Berlin", "Germany", "L College", "L-131"));

let student = new Student("Charles", "Moist", "346654321", "Berlin", "Germany", "L College", "L-131");
student.inputStudent("Kurtis", "Conner", "123456789", "Toronto", "Canada", "H University", "P-231");
students.push(student);

students.forEach(student => {
    student.outputStudentInfo();
});

const studentTable = document.getElementById('studentTable');
if (studentTable) {
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.phoneNumber}</td>
            <td>${student.city}</td>
            <td>${student.country}</td>
            <td>${student.institution}</td>
            <td>${student.group}</td>`;
        studentTable.appendChild(row);
    }
)}
else {
    console.error("studentTable is null");
}