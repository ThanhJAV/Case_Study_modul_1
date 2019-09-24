let Player = function (name, age, position, overall, number, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.overall = overall;
    this.number = number;
    this.salary = salary;

    this.setAct = (value) => {
        this.act = value;
    };
    this.getAct = () => {
        return this.act;
    };
    this.setAge = (value) => {
        this.age = value;
    };
    this.getAge = () => {
        return this.act;
    };
    this.setPosition = (value) => {
        this.position = value;
    };
    this.getPosition = () => {
        return this.position;
    };
    this.setOverall = (value) => {
        this.position = value;
    };
    this.getOverall = () => {
        return this.overall;
    };
    this.setNumber = (value) => {
        this.number = value;
    };
    this.getNumber = () => {
        return this.number;
    };
    this.setSalary = (value) => {
        this.salary = value;
    };
    this.getSalary = () => {
        return this.salary;
    };
    this.getDisplay = function () {
        let str = `<h2>Tên cầu thủ: ${this.name}<br>Tuổi cầu thủ: ${this.age}<br>Vị trí: ${this.position}<br>Chỉ số tổng quát: ${this.overall}<br>Số áo: ${this.number}<br>Lương: ${this.salary}</h2>`;
        return str;
    };
};


let Manager = function (club) {
    this.club = club;
    this.players = [];
    this.setShow = (value) => {
        this.show = value;
    };
    this.getShow = () => {
        return this.show;
    };
};
let vitri=0;
let paint = document.getElementById("display");
let manager = new Manager();
let arr = [{name: "Lương Xuân Trường", age: 24, position: "Tiền Vệ", overall: 85, number: 1, salary: 15,},
    {name: "Quế Ngọc Hải", age: 26, position: "Trung Vệ", overall: 86, number: 2, salary: 14,},
    {name: "Nguyễn Quang Hải", age: 22, position: "Tiền Vệ", overall: 85, number: 3, salary: 15,},
    {name: "Nguyễn Công Phượng", age: 24, position: "Tiền Đạo", overall: 85, number: 4, salary: 14,},
    {name: "Phan Văn Đức", age: 23, position: "Tiền Đạo", overall: 85, number: 5, salary: 15,},
    {name: "Nguyễn Văn Toàn", age: 23, position: "Tiền Đạo", overall: 85, number: 6, salary: 15,},
    {name: "Vũ Văn Thanh", age: 23, position: "Hậu Vệ", overall: 80, number: 7, salary: 11,},
    {name: "Đặng Văn Lâm", age: 26, position: "Thủ Môn", overall: 79, number: 8, salary: 8,},
];

addPlayerInArray();
displayListPlayer();


function addPlayerInArray() {
    for (let i = 0; i < arr.length; i++) {
        let player = new Player(arr[i].name, arr[i].age, arr[i].position, arr[i].overall, arr[i].number, arr[i].salary);
        manager.players.push(player);
    }
}

function displayListPlayer() {
    paint.innerHTML = "";
    for (let i = 0; i < manager.players.length; i++) {
        //document.getElementById("display").innerHTML += arr[i].name+"<br>";
        paint.innerHTML += `<h3 style="color: blue"><button onclick="display('${manager.players[i].getDisplay()}')">Detail</button>
                            <button onclick="edit(${i})">edit</button>
                            <button onclick="delPlayer(${i})">Delete</button>
                            <span>${manager.players[i].name}</span>
                            <br></h3>`;
    }
}

function display(value) {
    document.getElementById('displayDetail').innerHTML = value;
}

function addPlayer() {
    let namePlayer = document.getElementById("namePlayer").value;
    let agePlayer = document.getElementById("agePlayer").value;
    let positionPlayer = document.getElementById("positionPlayer").value;
    let overallPlayer = document.getElementById("overallPlayer").value;
    let numberPlayer = document.getElementById("numberPlayer").value;
    let salaryPlayer = document.getElementById("salaryPlayer").value;
    let newPlayer = new Player(namePlayer, agePlayer, positionPlayer, overallPlayer, numberPlayer, salaryPlayer);
    manager.players.push(newPlayer);
    displayListPlayer();
}

function edit(index) {
    document.getElementById("hiddenBtn").style.display="block";
    document.getElementById("namePlayer").value = manager.players[index].name;
    document.getElementById("agePlayer").value =manager.players[index].age;
    document.getElementById("positionPlayer").value=manager.players[index].position;
    document.getElementById("overallPlayer").value=manager.players[index].overall;
    document.getElementById("numberPlayer").value=manager.players[index].number;
    document.getElementById("salaryPlayer").value=manager.players[index].salary;
   vitri=index;
   return vitri;
}

function delPlayer(index) {
    manager.players.splice(index, 1);
    displayListPlayer();
}
function update() {
    let namePlayer = document.getElementById("namePlayer").value;
    let agePlayer = document.getElementById("agePlayer").value;
    let positionPlayer = document.getElementById("positionPlayer").value;
    let overallPlayer = document.getElementById("overallPlayer").value;
    let numberPlayer = document.getElementById("numberPlayer").value;
    let salaryPlayer = document.getElementById("salaryPlayer").value;
    let newPlayer = new Player(namePlayer, agePlayer, positionPlayer, overallPlayer, numberPlayer, salaryPlayer);
    manager.players.splice(vitri,1,newPlayer);
    displayListPlayer();
}
