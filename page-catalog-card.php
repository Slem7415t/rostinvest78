<?php include "templates/header.php"; ?>
    <main>
        <h1 class="h1-catalog container">СПЕЦОДЕЖДА</h1>
        <article class="container">
            <nav class="breadcrumbs">
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="./page-catalog.php">&nbsp;&raquo;&nbsp;Каталог</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Спецодежда</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Неутепленная</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Костюмы&nbsp;летние</a></li>
                <ul> 
            </nav>
        </article>
        <article class="container">
            <?php include "templates/header-product-card.php"; ?>
            <?php include "templates/product-card-description.php"; ?>
            <?php include "templates/similar-products.php"; ?>
        </article>  
    </main>
<?php include "templates/footer.php"; ?>