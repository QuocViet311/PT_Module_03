let sum = () => {
    let sum = 0;//Tao ra mot bien cu the day la sum de gan gia tri tong vao bien(khoi can gia tri khoi tao)
    for (let i = 0; i < 100; i++) { //for{tham so 1: gia tri khoi tao; tham so 2: 1 cai dieu kien(duoc hieu la 1 gioi han de vong lap dung lai)}
        if (i % 2 == 0) {// kiem tra co phai so chan hay khong. Neu phai thi moi thuc hien cau lenh o duoi
            sum += i;//sum= i+sum => cong don cac so chan da kiem tra phia tren vao bien sum(cong don)
            //vi du: kiem tra so 0 => sum=sum+0=>sum=0 tiep tuc kiem tra so le thi loai so chan thi nhan
            //tiep tuc den so 2 la so chan=> sum=sum+2=>sum=2
            //tiep tuc tuong tu den so 4 la so chan=> sum=sum+4=>sum=6.....
        }


    }
    console.log(sum);//in ra ket qua cuoi cung cua sum sau khi vong lap ket thuc

}