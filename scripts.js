window.addEventListener("DOMContentLoaded", function () {
    let libtn = document.getElementsByClassName("li-btn")[0];
    console.log(libtn)
    let counter = 1


    let container = document.createElement("div")
    container.className = "header-container"
    document.body.appendChild(container)

    let h1 = document.createElement("h1")
    let h1Text = document.createTextNode("This is an h1.")
    h1.appendChild(h1Text)
    h1.className = "h1"
    container.appendChild(h1)

    let h2 = document.createElement("h2")
    let h2Text = document.createTextNode("This is an h2.")
    h2.appendChild(h2Text)
    h2.className = "h2"
    container.appendChild(h2)

    let h3 = document.createElement("h3")
    let h3Text = document.createTextNode("This is an h3.")
    h3.appendChild(h3Text)
    h3.className = "h3"
    container.appendChild(h3)

    let h4 = document.createElement("h4")
    let h4Text = document.createTextNode("This is an h4.")
    h4.appendChild(h4Text)
    h4.className = "h4"
    container.appendChild(h4)

    let h5 = document.createElement("h5")
    let h5Text = document.createTextNode("This is an h5.")
    h5.appendChild(h5Text)
    h5.className = "h5"
    container.appendChild(h5)

    let h6 = document.createElement("h6")
    let h6Text = document.createTextNode("This is an h6.")
    h6.appendChild(h6Text)
    h6.className = "h6"
    container.appendChild(h6)

    let headerArr = [h1, h2, h3, h4, h5, h6]
    for (let t = 0; t < headerArr.length; t++) {
        headerArr[t].addEventListener('dblclick', function () {
            let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'teal', 'orange'];

            headerArr[t].style.color = colors[Math.floor(Math.random() * colors.length)];
        })
    }
    libtn.addEventListener("click", function () {
        let li = document.createElement("li");
        li.innerText = "this is list item " + counter;
        container.appendChild(li);

        counter++
    })
    li.addEventListener('click', function () {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'teal', 'orange'];

        headerArr[t].style.color = colors[Math.floor(Math.random() * colors.length)];

    })
})










