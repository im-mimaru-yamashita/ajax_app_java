function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    //eはイベントオブジェクトのこと。「投稿ボタンをクリックした」という情報を持つ。
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);