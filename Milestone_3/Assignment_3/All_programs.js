/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
divide = area / 2
console.log(divide);

/** Problem -02 ( Cycle or Laptop ) */
var money = 25000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
}
else if(money >= 10000) {
    console.log("Cycle");
}
else {
    console.log("Chocolate ");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (var i = 1; i <= lastDay; i++) {
    console.log(i,"- rest");
    if (i%3 == 0) {
        console.log(i, "- medicine");
        continue
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
// var fileName= "data.docx";
// var fileName= "#exp.mp4";
// var fileName= "slipdf.txt";

var extension = fileName.slice(fileName.indexOf('.') + 1) 
//write your code here
if (extension.includes('pdf') || fileName[0].includes("#") || extension.includes("docx")) {
    console.log('Store');
}
else {
    console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
console.log(student['name']+student['roll']+"."+student['department']+"@ph.ac.bd")

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for (var i = 1; i <= experience; i++) {
    startingSalary = startingSalary + (startingSalary * 0.05)
}
console.log(startingSalary.toFixed(2));
