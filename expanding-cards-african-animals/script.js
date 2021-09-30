const panels = document.querySelectorAll('.panel')
const removeActiveState = (nodes) => {
    nodes.forEach(node => {
        node.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveState(panels)
        panel.classList.add('active')
    })
})

