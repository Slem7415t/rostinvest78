<?php include "templates/header.php"; ?>
    <main>
        <h1 class="h1-catalog container">СПЕЦОДЕЖДА</h1>
        <article class="container">
            <nav class="breadcrumbs">
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Каталог</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Спецодежда</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Неутепленная</a></li>
                    <li><a href="">&nbsp;&raquo;&nbsp;Костюмы&nbsp;летние</a></li>
                <ul> 
            </nav>
        </article>
        <article class="catalog-box container">
            <aside class="catalog-aside">
            <?php include "templates/aside.php"; ?>
            </aside>
            <section>
                <?php include "templates/catalog-cards.php"; ?>
            </section>
        </article>    
    </main>
<?php include "templates/footer.php"; ?>