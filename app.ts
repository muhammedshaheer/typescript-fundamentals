console.log("Hello ExecuteAutomation");

let a: number = 10;
let b: string = "String";
var k: Number = 101;

console.log(a);

//Enums
enum LanguageKnown { English, Hindi, Malayalam };

let student = {
    Name: "Karthik",
    Age: 30,
    PhoneNumber: 9847012345,
    Language: LanguageKnown[LanguageKnown.Hindi]
};

//Arrays
let studentsList = [
    { Name: "Prasanth", Age: 26, PhoneNumber: 9995012345, Language: LanguageKnown[LanguageKnown.English] }
];

studentsList.push(student);

// for (let index = 0; index < studentsList.length; index++) {
//     const element = studentsList[index];

//     console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.PhoneNumber + " speaks:" + element.Language);
// }

//Function
function GetStudentsList(students: any[]) {
    students.forEach(element => {
        console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.PhoneNumber + " speaks:" + element.Language);
    })
};

GetStudentsList(studentsList);

//Function Rest Parameters
function GetNumbers(...nums: Number[]) {
    nums.forEach(element => {
        console.log("Number: " + element);
    });
};

GetNumbers(1, 2, 3, 4, 5, 6);

//Default Parameters
function GetInfo(info: string = "Happy") {
    console.log(info);
};

GetInfo();
GetInfo("Very Happy");