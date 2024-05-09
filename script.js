let Foxcoin = 0
let kits = 0
let islands = 0
reloadvalues()
setInterval(kitloop, 5000)
setInterval(islandloop, 3000)

function kitloop() {
    Foxcoin += kits
    reloadvalues()
}
function islandloop() {
    Foxcoin += islands * 2
    reloadvalues()
}
function reloadvalues() {
    document.getElementById("foxtext").innerHTML = "Foxcoin: " + Foxcoin
    document.getElementById("kittext").innerHTML = "Kit Foxes: " + kits
    document.getElementById("islandtext").innerHTML = "Island Foxes: " + islands
}
function gainfoxcoin() {
    Foxcoin += 1
    reloadvalues()
}
function addkit() {
    if (Foxcoin > 19) {
        kits++
        Foxcoin -= 20
    }
    reloadvalues()
}
function addisland() {
    if (Foxcoin > 39) {
        islands++
        Foxcoin -= 40
    }
    reloadvalues()
}
