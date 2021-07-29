// // // Khai báo và sử dụng biếnAssignment
// let width: number;
// let height: number;
//
// width = 10;
// height = 12;
//
// let area: number = width*height;
// // console.log(`Diện thích hình chữ nhật là : ${area}`);


// Câu lệnh điều kiện và vòng lặpAssignment
// let sum: number = 0;
// let count: number = 0;
// for (let i = 2; count < 30; i++) {
//     let isPrime: boolean = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(!isPrime){
//         continue;
//     }
//     sum += i;
//     count++;
// }

// // Kiểm tra số nguyên tốAssignment
// function isPrime(number: number): boolean {
//     let isPrime: boolean = true;
//     if (number < 2){
//         isPrime = false;
//     } else if (number > 2){
//         for (let i = 2; i <= Math.sqrt(number); i++){
//             if (number % i == 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime;
// }
//
// let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
// let sum = 0;
// for (let number of array) {
//     if (isPrime(number)) {
//         sum += number;
//     }
// }
// console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);

// Xây dựng các đối tượng hình họcAssignment
