// Javascript for courses.html


function getInput(){
    let input = prompt("Please enter a 4-digit number: ");
    while ((!Number(input) && input != ("0000")) || (input.length != 4)){
        input = prompt("Invalid input. Please enter a 4-digit number: ");
    }
    return input;
}


function scanArray(input, array){
    for (let object of array){
        if (object.code.includes(input)){
            console.log(`Yes I am taking the course: ` + object.code + ` - `+ object.name);
            return true;
        }
    }
}


function main(){
    const courseList = [ 
        {code: "ACIT 1620",  name: "Web Fundamental Technologies"},
        {code: "ACIT 1630",  name: "Database Systems"},
        {code: "ACIT 1515",  name: "Scripting for IT"},
    ]
    input = getInput();
    if (!scanArray(input, courseList)){
        let newObj = {code: input, name: null};
        console.log("New object successfully logged");
        courseList.push(newObj);
    }
}


main()
