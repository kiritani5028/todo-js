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

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リスに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
