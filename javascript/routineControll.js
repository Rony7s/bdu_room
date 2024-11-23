let department = 0;
let session = 1;
let group = 1;
let runningRoutine = "";

//select department
document.getElementById("call_EdTE").onclick = function () {
    document.getElementById("nowDepartment").innerText = "Department of Educational Technology and Engineering";
    department = 0;
    routineShow(department, session, group);
}

document.getElementById("call_IRE").onclick = function () {
    document.getElementById("nowDepartment").innerText = "Internet of Things and Robotics Engineering";
    department = 1;
    routineShow(department, session, group);

}

// Select SE department
document.getElementById("call_SE").onclick = function () {
    document.getElementById("nowDepartment").innerText = "Software Engineering";
    department = 2; // Assign a unique number for SE
    routineShow(department, session, group);
}

// Select DSE department
document.getElementById("call_DSE").onclick = function () {
    document.getElementById("nowDepartment").innerText = "Data Science and Engineering";
    department = 3; // Assign a unique number for DSE
    routineShow(department, session, group);
}

// Select CySE department
document.getElementById("call_CySE").onclick = function () {
    document.getElementById("nowDepartment").innerText = "Cyber Security Engineering";
    department = 4; // Assign a unique number for CySE
    routineShow(department, session, group);
}


//select session


document.getElementById("call_s2019").onclick = function () {
    document.getElementById("nowSession").innerText = "2019-20";
    session = 0;
    routineShow(department, session, group);

}

document.getElementById("call_s2020").onclick = function () {
    document.getElementById("nowSession").innerText = "2020-21";
    session = 1;
    routineShow(department, session, group);

}

document.getElementById("call_s2021").onclick = function () {
    document.getElementById("nowSession").innerText = "2021-22";
    session = 2;
    routineShow(department, session, group);

}

document.getElementById("call_s2022").onclick = function () {
    document.getElementById("nowSession").innerText = "2022-23";
    session = 3;
    routineShow(department, session, group);

}

document.getElementById("call_s2023").onclick = function () {
    document.getElementById("nowSession").innerText = "2023-24";
    session = 4;
    routineShow(department, session, group);

}

//select Group
document.getElementById("call_G_1").onclick = function () {
    document.getElementById("nowGroup").innerText = "G-1";
    group = 0;
    routineShow(department, session, group);

}

document.getElementById("call_G_2").onclick = function () {
    document.getElementById("nowGroup").innerText = "G-2";
    group = 1;
    routineShow(department, session, group);

} 
  



function routineShow(department, session, group) {

    selectShowButtonRoutine(department, session, group);
    EdTE19g1.style.display = "none";
    EdTE19g2.style.display = "none";
    EdTE20g1.style.display = "none";
    EdTE20g2.style.display = "none";
    EdTE21g1.style.display = "none";
    EdTE21g2.style.display = "none";
    EdTE22g1.style.display = "none";
    EdTE22g2.style.display = "none";
    EdTE23g1.style.display = "none";
    EdTE23g2.style.display = "none";

    // Map session and group to corresponding IDs
    const groupMap = {
        0: "g1",
        1: "g2"
    };

    // Dynamically construct the element ID based on department, session, and group
    if (department === 0 && groupMap[group] !== undefined) {
        const elementId = `EdTE${19 + session}${groupMap[group]}`;
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = "block";
        }
    }


    if(department>0){
        document.getElementById('tableNotification').innerHTML="Comming Soon!"
    }else{
        document.getElementById('tableNotification').innerHTML=""
    }

}

 


//select but it will be red if next another button it will be green (ok)
function selectShowButtonRoutine(department, session, group) {
    // Reset all department buttons to green
    call_EdTE.style.backgroundColor = "green";
    call_IRE.style.backgroundColor = "green";
    call_SE.style.backgroundColor = "green";
    call_DSE.style.backgroundColor = "green";
    call_CySE.style.backgroundColor = "green";

    // Reset all session buttons to green

    call_s2019.style.backgroundColor = "green";
    call_s2020.style.backgroundColor = "green";
    call_s2021.style.backgroundColor = "green";
    call_s2022.style.backgroundColor = "green";
    call_s2023.style.backgroundColor = "green";

    // Reset all group buttons to green
    call_G_1.style.backgroundColor = "green";
    call_G_2.style.backgroundColor = "green";

    // Highlight the selected department in red
    if (department == 0) call_EdTE.style.backgroundColor = "red";
    if (department == 1) call_IRE.style.backgroundColor = "red";
    if (department == 2) call_SE.style.backgroundColor = "red";
    if (department == 3) call_DSE.style.backgroundColor = "red";
    if (department == 4) call_CySE.style.backgroundColor = "red";

    // Highlight the selected session in red
    if (session == 0) call_s2019.style.backgroundColor = "red";
    if (session == 1) call_s2020.style.backgroundColor = "red";
    if (session == 2) call_s2021.style.backgroundColor = "red";
    if (session == 3) call_s2022.style.backgroundColor = "red";
    if (session == 4) call_s2023.style.backgroundColor = "red";

    // Highlight the selected group in red
    if (group == 0) call_G_1.style.backgroundColor = "red";
    if (group == 1) call_G_2.style.backgroundColor = "red";
}



routineShow(department, session, group);