// form input type="button" の取得
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function() {
    let name =document.getElementById('name');
    console.log(name.value);
  }, false);
}, false);
