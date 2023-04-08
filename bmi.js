let checkResult = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if (a % b === 0) {
        document.getElementById("result").innerHTML = "a chia het cho b";
    } else {
        document.getElementById("result").innerHTML = "a khong chia het cho b";
    }
}

let checkAge = () => {
    let age = document.getElementById("age").value;

    if (age >= 15) {
        document.getElementById("checkage").innerHTML = "Du tuoi vao lop 10"
    } else {
        document.getElementById("checkage").innerHTML = "Khong du tuoi vao lop 10"
    }
}

let checkNumber = () => {
    let number = document.getElementById("number").value;
    if (number > 0) {
        document.getElementById("checknumber").innerHTML = "So nay lon hon 0"
    } else if (number < 0) {
        document.getElementById("checknumber").innerHTML = "So nay be hon 0"
    } else {
        document.getElementById("checknumber").innerHTML = "So nay la so 0"
    }
}

let checkMax = () => {
    let a = document.getElementById("So a").value;
    let b = document.getElementById("So b").value;
    let c = document.getElementById("So c").value;
    if (a > b && a > c) {
        document.getElementById("checkmax").innerHTML = `${a} la so lon nhat`
    } else if (b > c) {
        document.getElementById("checkmax").innerHTML = `${b} la so lon nhat`
    } else {
        document.getElementById("checkmax").innerHTML = `${c} la so lon nhat`
    }
}

let checkMaxInput = () => {
    let inputNumber = prompt("Nhap vao so luong can so sanh")
    let max = 0;
    for (let i = 0; i < inputNumber; i++) {
        a[i] = Number(prompt(`Nhap vao gia tri cua so thu ${i}`));
        if (a[i] > max) {

            max = a[i];

        }
        document.getElementById("checkmaxinput").innerHTML = `${max} la so lon nhat`
    }

}

let xepLoai = () => {
    let diemMieng = Number(document.getElementById("mieng").value);
    let diemGiuaKi = Number(document.getElementById("giuaki").value);
    let diemCuoiKi = Number(document.getElementById("cuoiki").value);

    let diemTB = (diemMieng + diemGiuaKi * 2 + diemCuoiKi * 3) / 6;
    if (diemTB > 8.0) {
        document.getElementById("xeploai").innerHTML = "Gioi";
    } else if (diemTB > 6.5) {
        document.getElementById("xeploai").innerHTML = "Kha";
    } else if (diemTB > 5.0) {
        document.getElementById("xeploai").innerHTML = "Trung binh";
    } else {
        document.getElementById("xeploai").innerHTML = "Kem";
    }
}





