const list = document.getElementById('list')
const newItem = document.createElement('li')
newItem.textContent = 'アイテム1'
list.appendChild(newItem)

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')

addButton.addEventListener('click', (event) => {
    // createElement でliタグを生成
    const newItem = document.createElement("li")
    // listの子要素の個数を所得
    const childno = list.children.length
    // そのchildnoは最初0からスタートするので、childno+1をtextContentに追加
    newItem.textContent = `アイテム${childno + 1}`
    // listにliタグを追加
    list.appendChild(newItem)
})

removeButton.addEventListener('click', (event) => {
    console.log(list.lastElementChild)
    list.removeChild(list.lastElementChild)
})