const menu = (contentDiv) => {
    contentDiv.innerHTML = "";
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
    <header>
            <a class="logo" href="/"><img src="./extra/logo.png" alt="logo"></a>
            <nav id="navbar">
                <ul class="nav__links">
                   <li id="home" class="nav_btn"><a>Home</a></li Home</a></li>
                   <li id="menu" class="nav_btn"><a>Menu</a></li Menu</a></li>
                   <li id="contact" class="nav_btn"><a>Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div id="card-container" class="card-container">
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #1</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #2</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #3</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #4</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #5</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #6</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #7</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
                <div class="card"> 
                    <div class="text">
                        <span class="main"><b>Dish name:</b><p>DISH #8</p></span> 
                        <span class="main"><p>Made using this and that and this too and then a touch of that</p></span> 
                    </div> 
                </div>
            </div>
        </main>
        `
    contentDiv.appendChild(pageContent);
}

export default menu