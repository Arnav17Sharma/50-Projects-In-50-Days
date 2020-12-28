const faqs = document.querySelectorAll('.faq-toggle')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentNode.classList.toggle('active')
    })
})