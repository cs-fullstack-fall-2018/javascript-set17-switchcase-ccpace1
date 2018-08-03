var binaryNumber = prompt("Please enter a 3 digit binary number: ");

switch (binaryNumber) {

    case '001':
        document.write(1);
        break;
    case '010':
        document.write(2);
        break;
    case '011':
        document.write(3);
        break;
    case '100':
        document.write(4);
        break;
    case '101':
        document.write(5);
        break;
    default:
        document.write("Try another number!")

}