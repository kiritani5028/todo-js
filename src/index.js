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
    //押された完了ボタンの親タグ(li)を完了リストに追加
    const completeTarget = completeButton.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);

    //buttonタグを削除
    completeButton.remove();
    deleteButton.remove();

    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.textContent = "戻す";
    backButton.addEventListener("click", () => {
      alert("戻す");
    });

    //button(戻す)タグをliタグに追加
    li.appendChild(backButton);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteTarget.remove();
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
