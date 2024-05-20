// idのボタン(btn)を取得し、定数に代入
const btn = document.getElementById("btn");

// クリックされた際のイベント処理
btn.addEventListener("click", () => {
  // html要素textを定数化
  const newText = document.getElementById("text");
  // 2秒後にtextに新たなテキストを生成
  setTimeout(() => {
    newText.textContent = "2秒後に新しいテキストができました";
  }, 2000);
});
