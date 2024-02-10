export function save() {
    console.log("Added")
    localStorage.setItem("qty", 1)
}

export function resetQty() {
    localStorage.setItem("qty", 1)
}