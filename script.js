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
    Foxcoin += islands
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
    if (Foxcoin > 4) {
        kits++
        Foxcoin -= 5
    }
    reloadvalues()
}
function addisland() {
    if (Foxcoin > 9) {
        islands++
        Foxcoin -= 10
    }
    reloadvalues()
}