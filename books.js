
const myShelf = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        read: true
    }, 
    {
        title: "Paper Towns",
        author: "John Green",
        pages: 305,
        read: true
    }, 
    {
        title: "Pride and Prejudice",
        author: "Jane Eyre",
        pages: 496,
        read: false
    },
    {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        pages: 528,
        read: true
    }
]

let titleVal = document.querySelector('#title')
let authorVal = document.querySelector('#author')
let pagesVal = document.querySelector('#pages')
let readVal = document.querySelector('#read')

let bookNum = myShelf.length

function changeReadStatus() {
    if (myShelf[i].read == true) {
        read.innerHTML = 'Read'
    } else {
        read.innerHTML = 'Not Read'
    }
}

function displayShelf () {
    for(i = 0; i < bookNum; i++) {
        let div = document.createElement("div")
        div.className = "book"
        div.id = 'book' + i
        console.log(div)
        document.getElementById("shelf").appendChild(div)

        let title = document.createElement("div")
        title.className = "title"
        title.innerHTML = myShelf[i].title 
        document.getElementById('book'+i).appendChild(title)

        let author = document.createElement("div")
        author.className = "author"
        author.innerHTML = myShelf[i].author 
        document.getElementById('book'+i).appendChild(author)

        let pages = document.createElement("div")
        pages.className = "pages"
        pages.innerHTML = myShelf[i].pages + " pages"
        document.getElementById('book'+i).appendChild(pages)

        let read = document.createElement("div")
        read.className = "read"
        if (myShelf[i].read == true) {
            read.innerHTML = 'Read'
        } else {
            read.innerHTML = 'Not Read'
        }
        document.getElementById('book'+i).appendChild(read)

        let btn = document.createElement("button")
        btn.className = "delete"
        btn.id = i
        btn.innerHTML = 'x'
        btn.addEventListener('click', () => {
            let x = Number(btn.id)
            myShelf.splice(x, 1)
            console.log(myShelf)
            bookNum = myShelf.length
            console.log(bookNum)
            displayNewShelf()
        })
        document.getElementById('book'+i).appendChild(btn)

        let change = document.createElement("button")
        change.className = "change"
        change.innerHTML = 'change status'
        change.addEventListener('click', () => {
            let x = Number(btn.id)
            console.log(myShelf[x].read)
            if (myShelf[x].read == true) {
                myShelf[x].read = false
                read.innerHTML = 'Not Read'
            } else if (myShelf[x].read == false) {
                myShelf[x].read = true
                read.innerHTML = 'Read'
            }
        })
        document.getElementById('book'+i).appendChild(change)
    }
}
displayShelf()

const shelf = document.getElementById('shelf')

function displayNewShelf() {
    while (shelf.hasChildNodes()) {
        shelf.removeChild(shelf.firstChild)
    }
    bookNum = myShelf.length
    for (i = 0; i < bookNum; i++) {
        let div = document.createElement("div")
        div.className = "book"
        div.id = 'book' + i
        console.log(div)
        document.getElementById("shelf").appendChild(div)

        let title = document.createElement("div")
        title.className = "title"
        title.innerHTML = myShelf[i].title 
        document.getElementById('book'+i).appendChild(title)

        let author = document.createElement("div")
        author.className = "author"
        author.innerHTML = myShelf[i].author 
        document.getElementById('book'+i).appendChild(author)

        let pages = document.createElement("div")
        pages.className = "pages"
        pages.innerHTML = myShelf[i].pages + " pages"
        document.getElementById('book'+i).appendChild(pages)

        let read = document.createElement("div")
        read.className = "read"
        if (myShelf[i].read == true) {
            read.innerHTML = 'Read'
        } else {
            read.innerHTML = 'Not Read'
        }
        document.getElementById('book'+i).appendChild(read)

        let btn = document.createElement("button")
        btn.className = "delete"
        btn.innerHTML = 'x'
        btn.addEventListener('click', () => {
            let x = Number(btn.id)
            myShelf.splice(x, 1)
            console.log(myShelf)
            bookNum = myShelf.length
            console.log(bookNum)
            displayNewShelf()
        })
        document.getElementById('book'+i).appendChild(btn)

        let change = document.createElement("button")
        change.className = "change"
        change.innerHTML = 'change status'
        change.addEventListener('click', () => {
            let x = Number(btn.id)
            console.log(myShelf[x].read)
            if (myShelf[x].read == true) {
                myShelf[x].read = false
                read.innerHTML = 'Not Read'
            } else if (myShelf[x].read == false) {
                myShelf[x].read = true
                read.innerHTML = 'Read'
            }
        })
        document.getElementById('book'+i).appendChild(change)
    }
}

function clearForm() {
    titleVal.value = ''
    authorVal.value = ''
    pagesVal.value = ''

}

function verifyForm() {
    if (titleVal.value == '') {
        alert("Please add title!")
    } else if (authorVal.value == '') {
        alert("Please add author!")
    } else if (pagesVal.value <= 0) {
        alert("Please add page count!")
    } else {
        addBook()
    }
}
function addBook() {
    console.log(bookNum)
    let newBook = new Object()
    newBook.title = titleVal.value
    newBook.author = authorVal.value
    newBook.pages = pagesVal.value
    newBook.read = readVal.checked
    myShelf.push(newBook)
    displayNewShelf()
    clearForm()
}

document.getElementById("add-book").addEventListener("click",(event)=>{
    event.preventDefault();
})
