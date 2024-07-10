document.addEventListener('DOMContentLoaded', () => {
     
    const articles = document.querySelectorAll('.News article');
    let Index = 0;

    function MostraArtigo() {
        articles[Index].style.display = 'none';
        Index = (Index + 1) % articles.length;
        articles[Index].style.display = 'block';
    }

    articles.forEach((article, index) => {
        if (index !== 0) article.style.display = 'none';
    });

    setInterval(MostraArtigo, 15000); //  
});
