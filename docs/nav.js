var navopen = false
function navtog() {

    var rainbar = document.getElementById("rainbar")
    const pages = [
        "index.html",
        "laughteryoga.html",
        "inkadot.html",
        "about.html",
        "treeative.html",
        "https://vibrantkate.sumupstore.com/",
        "media.html"
    ]
    const pagenames = [
        "Home",
        "Laughter yoga",
        "Inka dot and email sign up",
        "About me and support me",
        "Treative writing",
        "Shop",
        "Social media podcasts and radio"
    ]
    if (navopen) {
        navopen = false
        rainbar.removeChild(rainbar.children.item(1))
    } else {
        navopen = true
        var nav = document.createElement("ul")
        nav.style = "margin: 0; border:3px solid #0b0ed6; border-radius: 10px; width: fit-content; padding-right: 10px;"
        nav.id = "nav"
        for (let i = 0; i < pages.length; i++) {
            var item = document.createElement("li")
            var link = document.createElement("a")
            link.textContent = pagenames[i]
            link.href = pages[i]
            item.appendChild(link)
            nav.appendChild(item)
        }
        rainbar.appendChild(nav)
    }
}