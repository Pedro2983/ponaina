function togglemode() {
    const html = document.documentElement
    html.classList.toggle ("light")
    const img = document.querySelector ("#profire img")
    if (html.classList.contains('light')) {
        img.setAttribute ('src', './assets/assets/avatar-light.png')
    }
    else {
img.setAttribute ('src', './assets/assets/avatar.png')

    }
    if (html.classList.contains('light')) {
        img.setAttribute ('alt', 'cara maneiro em um fundo azul')
    }
    else {
img.setAttribute ('alt', 'cara em um fundo amarelo')

    }
}


