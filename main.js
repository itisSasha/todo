
const onClickAdd = () => {
    const addText = document.getElementById("add_text").value;
    // 入力が完了後、値を初期化します。
    document.getElementById("add_text").value = "";
    
    // 入力した値を未完了TODOに持っていくため、新しいdivタグとliタグとulタグを生成する
    // 新しいdivタグを生成
    const div = document.createElement("div");
    // CSSを適用するため、classNameを使う
    div.className = "list_row";

    // 新しいulタグを生成
    const ul = document.createElement("ul");

    // 新しいliタグを生成する
    const li = document.createElement("li");
    // liタグに入力内容を代入
    li.innerText = addText;

    // liタグをulタグの下に設定 appendChild()を使う
    ul.appendChild(li);

    // ulタグをdivタグの下に設定
    div.appendChild(ul);

    //  完了buttonタグを生成
    const comButton = document.createElement("button");
    comButton.innerText = "完了";
    comButton.addEventListener("click", () => {
     // 親タグのdivを取得する
    const target1 = comButton.parentNode;
    // 親タグの子要素liを取得する
    const text = target1.children.innerText;
        // 新しいliタグを生成する
    const li1 = document.createElement("li");
    li1.innerText = text;
    // liタグを完了したTODOの下に持っていく
    document.getElementById("complete").appendChild(li1);
    // divタグを削除する
    document.getElementById("complete").removeChild(target1);
    // 戻すbuttonタグを生成
    

    });




    // 削除buttonタグを生成
    const delButton = document.createElement("button");
    delButton.innerText = "削除";
    delButton.addEventListener("click",()=>{
        // 親タグのdivを取得する
        const target = delButton.parentNode;
        // 親タグのdivを削除する
        document.getElementById("incomplete").removeChild(target);
    });

    // buttonをdivタグの下に持っていく
    div.appendChild(comButton);
    div.appendChild(delButton);    

    // divを未完了TODOのul下に持っていく
    document.getElementById("incomplete").appendChild(div);

};

document.getElementById("add_button").addEventListener("click",()=>onClickAdd());


