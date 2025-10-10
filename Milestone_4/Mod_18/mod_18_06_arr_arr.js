const numbers = [1,2,3,4,5]
const tournamentsRuns = [[], [], []]
const exam_marks = [
    [45, 56, 34, 87, 34],
    [56, 86, 90, 56, 76],
    [67, 78,47, 69, 88],
    [90, 89, 90, 97, 100]
]

exam_marks[1].pop()
exam_marks[1].push(65)
console.log(exam_marks);

console.log(exam_marks[0][0]);
console.log(exam_marks[2][4]);

const firstStudentMarks = exam_marks[0]
console.log(firstStudentMarks[0]);

const secondStudentMarks = exam_marks[1]
console.log(exam_marks[1][4]);

// const marks_not_here = exam_marks[1][4]
// console.log('this marks is not here anymore ', marks_not_here);

for (const marks of exam_marks) {
    console.log(marks);
    for (const mark of marks) {
        console.log(mark);
    }
}

