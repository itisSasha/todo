
const onClickAdd = () => {
    const addText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = "";
    
    toDoFunction(addText);

};





const toDoFunction = (text) => {
    
    // 新しいdivタグを生成
    const div = document.createElement("div");
    // CSSを適用するため、classNameを使う
    div.className = "list_row";
    // 新しいulタグを生成
    const ul = document.createElement("ul");
    // 新しいliタグを生成する
    const li = document.createElement("li");
    // liタグに入力内容を代入
    li.innerText = text;

    // liタグをulタグの下に設定
    ul.appendChild(li);
    // ulタグをdivタグの下に設定
    div.appendChild(ul);
     
    // divを未完了TODOの下に持っていく
    document.getElementById("incomplete").appendChild(div);

  　// 完了buttonタグを生成
  　const comButton = document.createElement("button");
  　comButton.innerText = "完了";
   
    comButton.addEventListener("click", () => {    
    // 完了TODOに追加するdiv要素
    const div = comButton.parentNode;
    // 押された完了ボタンのdivタグを未完了TODOから削除
    document.getElementById("incomplete").removeChild(div);
    // 親タグの子要素ulを取得する
    const ul = div.firstElementChild;
    // liタグのテキストを取得する
    const text = ul.firstElementChild.innerText;

     // div以下を初期化する
    div1.textContent = null;
    // 新しいulタグを生成
    const ul1 = document.createElement("ul");
    // 新しいliタグを生成する
    const li1 = document.createElement("li");
     // liタグに入力内容を代入
     li1.innerText = text;
   
    // 戻すボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
      // liタグをulタグの下に設定
      ul1.appendChild(li1);
      // ulタグをdivタグの下に設定
      div.appendChild(ul);
    div.appendChild(backButton);
    // div要素を完了したTODOに追加
    document.getElementById("complete").appendChild(div);
    
    
    // 戻すボタンが押された時に、そのタスクを削除
    backButton.addEventListener("click", ()=>{
        // ボタンのparentNodeを取得
        const target2 = backButton.parentNode;
        // 完了TODOからparentNodeを削除
        document.getElementById("complete").removeChild(target2);
       
        // テキスト取得
        const ul2 = target2.firstElementChild;
        const text2 = ul2.firstElementChild.innerText;
        toDoFunction(text2);
        
        });
　　// 削除buttonタグを生成
　　const delButton = document.createElement("button");
　　delButton.innerText = "削除";
　　delButton.addEventListener("click",()=>{
    // 親タグのdivを取得する
    const target = delButton.parentNode;
    // 親タグのdivを削除する
    document.getElementById("incomplete").removeChild(target);

     // buttonをdivタグの下に持っていく
     div.appendChild(comButton);
     div.appendChild(delButton);    

   
    });
    
});   

};

document.getElementById("add_button").addEventListener("click",()=>onClickAdd());


