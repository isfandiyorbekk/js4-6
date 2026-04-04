// const products = [
//   { id: 1, name: "Phone", price: 500, category: "electronics" },
//   { id: 2, name: "Laptop", price: 1200, category: "electronics" },
//   { id: 3, name: "T-shirt", price: 25, category: "clothes" },
//   { id: 4, name: "Jeans", price: 60, category: "clothes" },
//   { id: 5, name: "Sneakers", price: 80, category: "shoes" },
//   { id: 6, name: "Watch", price: 150, category: "accessories" },
//   { id: 7, name: "Backpack", price: 40, category: "bags" },
//   { id: 8, name: "Tablet", price: 300, category: "electronics" },
//   { id: 9, name: "Jacket", price: 100, category: "clothes" },
//   { id: 10, name: "Headphones", price: 70, category: "electronics" },
// ];
// //vazifa //1-masala // yuqoridagi products arrayini eng qimmat productini
// toping ya'ni function yozing unda shu turdagi
// array berilsa eng qimatini bizga qaytarsin.
const products = [
  { id: 1, name: "Phone", price: 500, category: "electronics" },
  { id: 2, name: "Laptop", price: 1200, category: "electronics" },
  { id: 3, name: "T-shirt", price: 25, category: "clothes" },
  { id: 4, name: "Jeans", price: 60, category: "clothes" },
  { id: 5, name: "Sneakers", price: 80, category: "shoes" },
  { id: 6, name: "Watch", price: 150, category: "accessories" },
  { id: 7, name: "Backpack", price: 40, category: "bags" },
  { id: 8, name: "Tablet", price: 300, category: "electronics" },
  { id: 9, name: "Jacket", price: 100, category: "clothes" },
  { id: 10, name: "Headphones", price: 70, category: "electronics" },
];
function qimmat(a) {
  let max = a[0];
  for (let item of a) {
    if (item.price > max.price) {
      max = item;
    }
  }
  return max;
}
console.log(qimmat(products));
//2-masala
// Faqat  category ni filter qilish functuon tuzing u bizga shu turdagi arrayni berilgan kategory boyicha filter qilb
// bersin function argument sifatida array va qaysi kategory boyicha  filter qilinishi kerekligi aytiladi shu boyicha
// filterlangan yangi array qaytarsin.
function category(a, newC) {
  return a.filter((item) => item.category === newC);
}
console.log(category(products, "shoes"));
//3 masala
// function tuzing u yuqoridagi arrayni argument sifatida qabul qiladi va barcha pricelarni hisoblab berisin
function total(a) {
  let total = {
    allMoney: 0,
  };
  a.forEach((item) => (total.allMoney += item.price));
  return total;
}
console.log(total(products));
//4-masala yangi mahsulot qoshish
// function tuzing unga yuqoridagi kabi array va yangi mahsulot object korinishida beriladi uni arrayga qoshish bunda
// objectimizda id bolmaydi idni qolda qoshasz va id mantiqan togri bolsin id array ichidagi biror elementda takrorlanib
// qolmasligi kere har qanday holatda ham.
let new2 = {
  id: 11,
  name: "Iphone",
  price: 1000,
  category: "electronics",
};
function qoshish(a, push) {
  return a.push(push);
}
qoshish(products, new2);
console.log(products);
//6-masala
// function tuzing unda yuqoridagi array kabi arraylarni faqat nameni bitta array qilib beradigan function yozing
let name1 = [];
function name2(a, name1) {
  return a.forEach((item) => {
    name1.push(item.name);
  });
}
name2(products, name1);
console.log(name1);
// 7-masala
// functio yozing unda yuqoridagi arrayni argument sifatida bering va bizga active userlarni ajratib bersin
const users = [
  { id: 1, name: "Ali", age: 22, isActive: true, role: "user" },
  { id: 2, name: "Vali", age: 25, isActive: false, role: "admin" },
  { id: 3, name: "Sardor", age: 19, isActive: true, role: "user" },
  { id: 4, name: "Madina", age: 28, isActive: true, role: "manager" },
  { id: 5, name: "Aziza", age: 21, isActive: false, role: "user" },
  { id: 6, name: "Jasur", age: 30, isActive: true, role: "admin" },
  { id: 7, name: "Dilshod", age: 24, isActive: false, role: "user" },
  { id: 8, name: "Malika", age: 27, isActive: true, role: "manager" },
  { id: 9, name: "Bekzod", age: 23, isActive: true, role: "user" },
  { id: 10, name: "Shahnoza", age: 26, isActive: false, role: "user" },
];
function faol(a) {
  return a.filter((item) => item.isActive);
}
console.log(faol(users));
// 8-masala
// function yozing unda yuqoridagi arrayni argument sifatida bering  bizga eng yoshi katta userni topib bersin  bunda filter
//  va sortdan foydalaniladi
function katta(a) {
  return a.sort((a, b) => b.age - a.age)[0];
}
console.log(katta(users));
//9-masala
// function yozing unda yuqoridagi arrayni argument sifatida bering Barcha userlarni isActive: true qilish (map)
function true1(a) {
  return a.map((item) => (item.isActive = true));
}
true1(users);
console.log(users);
//10-masla function yozing u yangi user qoshib bersin
let newUser = {
  id: 11,
  name: "Isfandiyor",
  age: 14,
  isActive: true,
  role: "user",
};
function user(a, push) {
  return a.push(push);
}
user(users, newUser);
console.log(users);
