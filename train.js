// TASK-D

function checkContent(bir, ikki) {
    return bir.split('').sort().join('') === ikki.split('').sort().join('');
}

console.log(checkContent("mitgroup", "gmtiprou"));


//TASK-C

// const maxsulotlar = ["non", "lagmon", "cola"];
// const moment = require("moment");

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq() {
//         const time = moment().format("HH:mm");
//         return `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
//     }

//     sotish(maxsulot, raqam) {
//         const time = moment().format("HH:mm");
//         if (!maxsulotlar.includes(maxsulot)) {
//             return `Hozir ${time}da: ${maxsulot}  maxsulot mavjud emas!`;
//         }
//         if (maxsulot === "non" && this.non >= raqam) {
//             this.non -= raqam;
//             return `Hozir ${time}da: ${raqam}ta ${maxsulot} sotildi!`;
//         } else if (maxsulot === "lagmon" && this.lagmon >= raqam) {
//             this.lagmon -= raqam;
//             return `Hozir ${time}da: ${raqam}ta ${maxsulot} sotildi!`;
//         } else if (maxsulot === "cola" && this.cola >= raqam) {
//             this.cola -= raqam;
//             return `Hozir ${time}da: ${raqam}ta ${maxsulot} sotildi!`;
//         } else {
//             return `Hozir ${time}da: ${maxsulot}dan yetarli miqdor yo'q!`;
//         }
//     }

//     qabul(maxsulot, raqam) {
//         const time = moment().format("HH:mm");
//         if (!maxsulotlar.includes(maxsulot)) {
//             return `Hozir ${time}da: ${maxsulot} maxsulot mavjud emas!`;
//         }
//         if (maxsulot === "non") {
//             this.non += raqam;
//         } else if (maxsulot === "lagmon") {
//             this.lagmon += raqam;
//         } else if (maxsulot === "cola") {
//             this.cola += raqam;
//         }
//         return `Hozir ${time}da: ${raqam}ta ${maxsulot} qabul qilindi!`;
//     }
// }

// const shop = new Shop(4, 5, 2);

// console.log(shop.qoldiq());

// console.log(shop.sotish('non', 3));

// console.log(shop.qabul('cola', 4));

// console.log(shop.qoldiq());



// TASK-B
// const liste = ["ad2a54y79wet0sfgb9"];
// const newListe = liste[0].split('').filter(ele => ele === "7");

// console.log("newListe", newListe);


// TASK_A
// function countLetter(harf, soz) {
//     let count = 0;
//     for (let e = 0; e < soz.length; e++) {
//         if (soz[e] === harf) {
//             count++;
//         }
//     }
//     return count++;
// }

// console.log(countLetter("e", "engineer"));


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

// 22-21 Lesson
// async function maslahatBering(a,) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[4]);
//             }, 2000);
//         });
//         // setTimeout(function () {
//         //     return list[4];
//         // }, 2000);
//     }
// }

// // then/catch
// // console.log("passed here 0");
// // maslahatBering(20)
// // .then((data) => {
// //     console.log("javob:", data)
// // })
// // .catch((err) => {
// //     console.log("ERROR:", err);
// // });
// // console.log("passed here 1");

// // asyn/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(51);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


// 21-Lesson 

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[4]);
//         }, 2000);
//     }
// }


// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");