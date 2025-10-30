/** Problem 04 - (Delete / Store) */
// var fileName= "pdfData.jpg";
var fileName= "data.docx";
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