import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const text = document.getElementById("add-text");
  const inputText = text.value;
  text.value = "";
  text.focus();

  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.className = "todo-title";
  p.textContent = inputText;

  //divタグの子要素に各要素を設定
  li.appendChild(p);

  //未完了リスに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
