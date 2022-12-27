const homepage = (contentDiv) => {
    contentDiv.innerHTML = ""
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
    <header>
            <a class="logo" href="/"><img src="./extra/logo.png" alt="logo"></a>
            <nav id="navbar">
                <ul class="nav__links">
                   <li id="home" class="nav_btn"><a>Home</a></li>
                   <li id="menu" class="nav_btn"><a>Menu</a></li>
                   <li id="contact" class="nav_btn"><a>Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="info">
                <div class="info-card">
                    <h1><span class="hero__font">SOME SHIT ABOUT HOW AMAZING THIS RESTUARANT IS.</h1>
                </div>
            </section>
        </main>
        `
    contentDiv.appendChild(pageContent);

}

export default homepage