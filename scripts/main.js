function changeTheme() {
    var body = document.querySelector("body")
    var className = body.className
    if (className == "theme-day") {
        body.className = "theme-night"
    }
    if (className == "theme-night") {
        body.className = "theme-day"
    }
}