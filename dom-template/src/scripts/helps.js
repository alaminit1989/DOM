export function getId(id) {
    try {
        return document.getElementById(id)
    } catch (error) {
        console.log(error)
    }
}

export function qryS(qs) {
    try {
        return document.querySelector(qs)
    } catch (error) {
        console.log(error)
    }
}

export function qrySAll(qsa) {
    try {
        return document.querySelectorAll(qsa)
    } catch (error) {
        console.log(error)
    }
}

export function crElement(ce) {
    try {
        return document.createElement(ce)
    } catch (error) {
        console.log(error)
    }
}
