const el = document.getElementById('poster')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt

    const yRotation = (
        (layerY - width / 5) / width
    ) * 20
    const xRotation = (
        (layerX - height / 5) / height
    ) * 20

    const string = ` 
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`
    el.style.transform = string

})


el.addEventListener('mouseout', () => {
    el.style.transform = `
    perpective(0)
    scale(1)
    rotateX(0)
    rotateY(0)`;
    console.log('out')
})