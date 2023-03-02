// form input type="button" の取得

// HTMLが完全に読み込まれた後にscriptを読む、headにタグをいれるときはこちらにしないとerrorになる
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('btn').addEventListener('click', function() {
//     let name =document.getElementById('name');
//     console.log(name.value);
//   }, false);
// }, false);

// bodyの最後にscript要素をいれるなら、読み込んだ後に動くのでこちらで言い
  // document.getElementById('btn').addEventListener('click', function() {
  //   let name =document.getElementById('name');
  //   console.log(name.value);
  // }, false);

  const btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    if (!name) {
      alert('名前を入力してください。');
      return false;
    }
    console.log(name);
  });