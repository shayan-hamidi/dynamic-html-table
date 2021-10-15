const list = [
    {
        id : 1,
        name : "mohammad",
        lastname : "khani",
        phonenum : "0937"
    },
    {
        id : 2,
        name : "reza",
        lastname : "rezaiee",
        phonenum : "0940"
    },
    {
        id : 3,
        name : "ali",
        lastname : "sehat",
        phonenum : "0920"
    },
    {
        id : 4,
        name : "alireza",
        lastname : "hojjat",
        phonenum : "0912"
    },
    {
        id : 5,
        name : "mohammad",
        lastname : "dadgar",
        phonenum : "0910"
    },
    {
        id : 6,
        name : "shayan",
        lastname : "hamidi",
        phonenum : "0930"
    }
    ,
    {
        id : 7,
        name : "sara",
        lastname : "salimi",
        phonenum : "0930"
    }
    ,
    {
        id : 8,
        name : "zahra",
        lastname : "ghasemi",
        phonenum : "0916"
    }
    ,
    {
        id : 9,
        name : "tanaz",
        lastname : "ghadiri",
        phonenum : "0960"
    }
    ,
    {
        id : 10,
        name : "mahdi",
        lastname : "mojahed",
        phonenum : "0950"
    }
]
function searchBYName() {
    let name = document.getElementById("input").value;
    let result = [];
list.forEach(user => {
    if (user.name.includes(name)) {
        result.push(user)
    }
    if (user.lastname.includes(name)) {
        result.push(user)
        }
    if (user.phonenum.includes(name)) {
        result.push(user)
    }
});
let allData ="";
result.forEach(user => {
        let rowData ="";
        let rowId="<td>" + user.id + "</td>"
        let rowName="<td>" + user.name + "</td>"
        let rowLast="<td>" + user.lastname + "</td>"
        let rowNum="<td>" + user.phonenum + "</td>"
        rowData = rowId + rowName + rowLast + rowNum;
        let row = "<tr>" + rowData + "</tr>";
        allData = allData.concat(row)
});
document.getElementById("tableBody").innerHTML = allData;
}
