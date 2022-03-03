// 追加ボタンが押された時、入力内容が未完了TODOに格納され、
// 完了ボタンと削除ボタンが生成される

document.getElementById("add_button").addEventListener("click",()=>onClickAdd());

const onClickAdd = () => {
    // 入力テキスト取得
    const inputText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = "";

    // 入力したテキストを未完了のTODOに格納する
    const div = document.createElement("div");
    div.className = "list_row";
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = inputText;
    ul.appendChild(li);
    div.appendChild(ul);
    
    // 完了ボタンと削除ボタンを生成
    const comButton = document.createElement("button");
    comButton.innerText = "完了";

    const delButton = document.createElement("button");
    delButton.innerText = "削除";

    // 完了ボタンが押された時に、タスクが完了したTODOに格納される
    comButton.addEventListener("click", () => {
        const parent = comButton.parentNode;
        document.getElementById("incomplete").removeChild(parent);
        const firstChild = parent.firstElementChild;
        const secondChild = firstChild.firstElementChild;
        const inputText = secondChild.innerText;
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.className = "list_row";
        li.innerText = inputText;
        ul.appendChild(li);
        div.appendChild(ul);
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        // 戻すボタンが押された時に、タスクを未完了のTODOに戻す
        backButton.addEventListener("click", () => {
            const parent = backButton.parentNode;
            document.getElementById("complete").removeChild(parent);
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const div = document.createElement("div");
            div.className = "list_row";
            li.innerText = inputText;
            ul.appendChild(li);
            div.appendChild(ul);
            document.getElementById("incomplete").appendChild(div);
               
            // 完了ボタンと削除ボタンを生成
            const comButton = document.createElement("button");
            comButton.innerText = "完了";

            const delButton = document.createElement("button");
            delButton.innerText = "削除";

            // 完了ボタンが押された時に、タスクが完了したTODOに格納される
            comButton.addEventListener("click", () => {
                const parent = comButton.parentNode;
                document.getElementById("incomplete").removeChild(parent);
                const firstChild = parent.firstElementChild;
                const secondChild = firstChild.firstElementChild;
                const inputText = secondChild.innerText;
                const ul = document.createElement("ul");
                const li = document.createElement("li");
                const div = document.createElement("div");
                div.className = "list_row";
                li.innerText = inputText;
                ul.appendChild(li);
                div.appendChild(ul);
                const backButton = document.createElement("button");
                backButton.innerText = "戻す";
                // 戻すボタンが押された時に、タスクを未完了のTODOに戻す
                backButton.addEventListener("click", () => {
                    const parent = backButton.parentNode;
                    document.getElementById("complete").removeChild(parent);
                    const ul = document.createElement("ul");
                    const li = document.createElement("li");
                    const div = document.createElement("div");
                    div.className = "list_row";
                    li.innerText = inputText;
                    ul.appendChild(li);
                    div.appendChild(ul);
                    document.getElementById("incomplete").appendChild(div);
                    // 完了ボタンと削除ボタンを生成
                    const comButton = document.createElement("button");
                    comButton.innerText = "完了";

                    const delButton = document.createElement("button");
                    delButton.innerText = "削除";

            // 完了ボタンが押された時に、タスクが完了したTODOに格納される
            comButton.addEventListener("click", () => {
                const parent = comButton.parentNode;
                document.getElementById("incomplete").removeChild(parent);
                const firstChild = parent.firstElementChild;
                const secondChild = firstChild.firstElementChild;
                const inputText = secondChild.innerText;
                const ul = document.createElement("ul");
                const li = document.createElement("li");
                const div = document.createElement("div");
                div.className = "list_row";
                li.innerText = inputText;
                ul.appendChild(li);
                div.appendChild(ul);
                const backButton = document.createElement("button");
                backButton.innerText = "戻す";
                // 戻すボタンが押された時に、タスクを未完了のTODOに戻す
                backButton.addEventListener("click", () => {
                    const parent = backButton.parentNode;
                    document.getElementById("complete").removeChild(parent);
                    const ul = document.createElement("ul");
                    const li = document.createElement("li");
                    const div = document.createElement("div");
                    div.className = "list_row";
                    li.innerText = inputText;
                    ul.appendChild(li);
                    div.appendChild(ul);
                    document.getElementById("incomplete").appendChild(div);
                    
                    // 完了ボタンと削除ボタンを生成
                    const comButton = document.createElement("button");
                    comButton.innerText = "完了";

                    const delButton = document.createElement("button");
                    delButton.innerText = "削除";

                    // 完了ボタンが押された時に、タスクが完了したTODOに格納される
                    comButton.addEventListener("click", () => {
                        const parent = comButton.parentNode;
                        document.getElementById("incomplete").removeChild(parent);
                        const firstChild = parent.firstElementChild;
                        const secondChild = firstChild.firstElementChild;
                        const inputText = secondChild.innerText;
                        const ul = document.createElement("ul");
                        const li = document.createElement("li");
                        const div = document.createElement("div");
                        div.className = "list_row";
                        li.innerText = inputText;
                        ul.appendChild(li);
                        div.appendChild(ul);
                        const backButton = document.createElement("button");
                        backButton.innerText = "戻す";
                        // 戻すボタンが押された時に、タスクを未完了のTODOに戻す
                        backButton.addEventListener("click", () => {
                            const parent = backButton.parentNode;
                            document.getElementById("complete").removeChild(parent);
                            const ul = document.createElement("ul");
                            const li = document.createElement("li");
                            const div = document.createElement("div");
                            div.className = "list_row";
                            li.innerText = inputText;
                            ul.appendChild(li);
                            div.appendChild(ul);
                            document.getElementById("incomplete").appendChild(div);
                        
                        });
                        div.appendChild(backButton);
                        document.getElementById("complete").appendChild(div);
                        
                    });

                    // 削除ボタンが押された時に、タスクを削除
                    delButton.addEventListener("click", () => {
                        const parent = delButton.parentNode;
                        document.getElementById("incomplete").removeChild(parent);
                    });

                    div.appendChild(comButton);
                    div.appendChild(delButton);

                    document.getElementById("incomplete").appendChild(div);
                        });
                        div.appendChild(backButton);
                        document.getElementById("complete").appendChild(div);
                        
                    });

                // 削除ボタンが押された時に、タスクを削除
                delButton.addEventListener("click", () => {
                const parent = delButton.parentNode;
                document.getElementById("incomplete").removeChild(parent);
            });

                    div.appendChild(comButton);
                    div.appendChild(delButton);
                        });
                        div.appendChild(backButton);
                        document.getElementById("complete").appendChild(div);
                        
                    });

                    // 削除ボタンが押された時に、タスクを削除
                    delButton.addEventListener("click", () => {
                        const parent = delButton.parentNode;
                        document.getElementById("incomplete").removeChild(parent);
                    });

                    div.appendChild(comButton);
                    div.appendChild(delButton);

            document.getElementById("incomplete").appendChild(div);
                });
                div.appendChild(backButton);
                document.getElementById("complete").appendChild(div);
                
            });

    // 削除ボタンが押された時に、タスクを削除
    delButton.addEventListener("click", () => {
        const parent = delButton.parentNode;
        document.getElementById("incomplete").removeChild(parent);
    });

    div.appendChild(comButton);
    div.appendChild(delButton);

    document.getElementById("incomplete").appendChild(div);

};


