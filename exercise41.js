var letterGrade = prompt("Please enter your grade: ");

switch (letterGrade) {

    case 'A':
        document.write("Your grade is between 90 and 100");
        break;
    case 'B':
        document.write("Your grade is between 80 and 89");
        break;
    case 'C':
        document.write("Your grade is between 70 and 79");
        break;
    case 'D':
        document.write("Your grade is between 60 and 69");
        break;
    case 'F':
        document.write("Your grade is below a 60");
        break;
    default:
        document.write("Try another grade!")
}