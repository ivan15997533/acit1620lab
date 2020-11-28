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
            return true;
        }
    }
}


function createCourseArray(){
    const courseList = [];
    const classes = document.querySelectorAll(".class > a");
    const date = document.querySelectorAll(".semester");
    let index = 0;
    for (let entry of classes){
        let newObj = {code: entry.innerHTML, date: date[index].innerHTML};
        console.log(index);
        courseList.push(newObj);
        index++;
    }
    index = 0
    for (let entry of courseList){
        console.log(courseList[index].code + courseList[index].date);
        index++;
    }
    findCourse(courseList)
}


function findCourse(courseList){
    input = getInput();
    if (scanArray(input, courseList)){
        console.log("This means input was in array")
        document.getElementById("ACIT" + input).style.backgroundColor = "green";
    }
    else {
        var tester = document.querySelector("#desc1").innerHTML
        console.log(tester)
        console.log("New object successfully logged");
        console.log(input)
        
        var newCourse = document.createElement("div");
        newCourse.classList.add("courses")
        var newCode = document.createElement("div");
        newCode.innerHTML = input;
        newCode.classList.add("class")
        var newDesc = document.createElement("div");
        newDesc.innerHTML = "N/A";
        newDesc.classList.add("desc")
        var newDate = document.createElement("div");
        newDate.innerHTML = "Fall 2020";
        newDate.classList.add("semester")

        newCourse.appendChild(newCode)
        newCourse.appendChild(newDesc)
        newCourse.appendChild(newDate)

        document.querySelector("#ACIT1515").after(newCourse)
    }
}

function main(){
    createCourseArray()
}

main()
