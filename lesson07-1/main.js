// HTMLの特定の`<h1>`タグの中身のテキストを変える
const title = document.getElementById('title')
console.log(title)
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)

const list = document.querySelector('.list')
console.log(list)
// 子要素の取得の仕方
console.log(list.children[2].textContent)

// <li>もも</li> これをulの中に追加したい！
// まずは、追加する要素をjsで生成する
const newList = document.createElement('li')
console.log(newList) // => <li></li>
// 次に、liの中のテキストを設定する
newList.textContent = 'もも'
list.appendChild(newList) // => <li>もも</li>
// 最後に、listにnewListを追加する
list.appendChild(newList)

// クリックした時など、イベント発生時に処理をしたい場合は、addEventListenerを使用する
const button = document.getElementById('button')
button.addEventListener('click', event => {
    confirm("削除してよろしいですか？") // 実際は削除しない
})