var Student = /** @class */ (function () {
    function Student(name, surname, phoneNumber, city, country, institution, group) {
        this._name = name;
        this._surname = surname;
        this._phoneNumber = phoneNumber;
        this._city = city;
        this._country = country;
        this._institution = institution;
        this._group = group;
    }
    Object.defineProperty(Student.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "institution", {
        get: function () {
            return this._institution;
        },
        set: function (value) {
            this._institution = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.inputStudent = function (name, surname, phoneNumber, city, country, institution, group) {
        this._name = name;
        this._surname = surname;
        this._phoneNumber = phoneNumber;
        this._city = city;
        this._country = country;
        this._institution = institution;
        this._group = group;
    };
    Student.prototype.outputStudentInfo = function () {
        console.log([
            this._name,
            this._surname,
            this._phoneNumber,
            this._city,
            this._country,
            this._institution,
            this._group
        ]);
    };
    return Student;
}());
var students = [];
students.push(new Student("John", "Doe", "123456789", "New York", "USA", "B University", "A-218"));
students.push(new Student("Jesse", "Reed", "987654321", "Night City", "NUSA", "X College", "J-431"));
students.push(new Student("Charles", "Moist", "187654321", "Berlin", "Germany", "L College", "L-131"));
var student = new Student("Charles", "Moist", "346654321", "Berlin", "Germany", "L College", "L-131");
student.inputStudent("Kurtis", "Conner", "123456789", "Toronto", "Canada", "H University", "P-231");
students.push(student);
students.forEach(function (student) {
    student.outputStudentInfo();
});
var studentTable = document.getElementById('studentTable');
if (studentTable) {
    students.forEach(function (student) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(student.name, "</td>\n            <td>").concat(student.surname, "</td>\n            <td>").concat(student.phoneNumber, "</td>\n            <td>").concat(student.city, "</td>\n            <td>").concat(student.country, "</td>\n            <td>").concat(student.institution, "</td>\n            <td>").concat(student.group, "</td>");
        studentTable.appendChild(row);
    });
}
else {
    console.error("studentTable is null");
}
