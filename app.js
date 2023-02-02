console.log('getelementById');
const bn = document.getElementById('banner'); //id 取得
console.dir(bn);

// html の要素（tag）をとる
const allImg = document.getElementsByTagName('img') // 大文字でもいい
console.dir(allImg) 
for (let img of allImg) {
  img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'; // img を取得して src を全て同じものに変更している 
   console.log(img.src) 
} //全イメージ要素を取得できる

// classをとる
const otherImg = document.getElementsByClassName('square'); // html内のclass='square'を取得する
console.dir(otherImg);
console.log(document.getElementsByClassName('p')); 
// class名がない時は null ではなく空のHTMLcollectionが返ってくる

console.log('querySelector');