// // document と window
// console.log(document.title)
// console.log(document.doctype)

// window.alert('window.alert()')
// // windowは省略できる
// alert('アラートモーダル OKしか選べない')
// confirm('確認モーダル OKかキャンセルか選べる')

// 要素を見つける方法
// idの指定で取得
const intro = document.getElementById('intro')
console.log(intro)
// セレクタ名で一つ取得する方法 一番最初に見つかった物を取得
const intro2 = document.querySelector('#intro')
console.log(intro2)
// セレクタ名で複数名取得する方法　配列で取得できる
const listItems = document.querySelectorAll('.list li')
console.log(listItems[1])

const list = document.querySelector('.list')

// 要素の情報を操作する
// タグの中身のテキストの取得
console.log(intro.textContent)
// タグの中身のテキストを書き換える
intro.textContent = '書き換えたいテキスト'

// タグの中身のhtmlを取得
console.log(list.innerHTML)
// タグの中身のhtmlを書き換える
// list.innnerHTML = '<li>書き換えました</li>'

// 子要素へのアクセス　子要素を配列で取得
console.log(list.children)
// 特定の子要素の値を取得したいときは、配列と同様にindex番号で取得

// 一つ目の要素を取る
console.log(list.firstElementChild)
// 最後の子要素を取る
console.log(list.lastElementChild)

// 属性の値を取得　<a href="https://google.com">google</a> hrefが属性でURL
const img = document.querySelector('img')
console.log(img.getAttribute('src'))

// 属性の値を設定する
img.setAttribute('alt', 'jsでaltを書き換えます')



// 子要素の追加・削除
const newItem = document.createElement('li') // タグ名を指定してからの要素を生成する <li></li>
newItem.textContent = '新しいアイテム'
list.appendChild(newItem)
// 子要素を削除する方法
list.removeChild(list.firstElementChild)
// 自分自身を削除
list.lastElementChild.remove()


// イベント クリックした時などの動作
const removeButton = document.getElementById('remove')
removeButton.addEventListener('click', event => {
    list.removeChild(list.lastElementChild)
})