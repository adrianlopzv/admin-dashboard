const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggle = document.querySelector(".theme-toggler")


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})


// change theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active')
})


// fill table with orders
Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shiping === 'Declined' ? 'danger' : 
                order.shiping === 'Pending' ? 'warning' : 'primary'}">
                ${order.shiping}</td>
                <td class="primary"><a href="#">Details<a></td>
    `
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})
