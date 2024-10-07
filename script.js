
// Toggle Navigation Menu
function toggleMenu() {  
    const navLinks = document.querySelector('.nav-links');  
    navLinks.classList.toggle('active');  
}


// Toggle FAQs button
function toggleFAQs() {  
    const faqList = document.getElementById('faq-list');  
    if (faqList.style.display === 'none' || faqList.style.display === '') {  
        faqList.style.display = 'block';  
    } else {  
        faqList.style.display = 'none';  
    }  
}  