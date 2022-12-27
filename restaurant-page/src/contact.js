const contact = (contentDiv) => {
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
        <form class="form">
            <h2>CONTACT US</h2>
            <p type="Name:"><input placeholder="Write your name here.."></input></p>
            <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
            <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
            <button>Send Message</button>
            <div class="form-div">
                <span class="fa fa-phone"></span>0013 0013
                <span class="fa fa-envelope-o"></span> contact@pizza&pasta.com
            </div>
        </form>
    `
    contentDiv.appendChild(pageContent)
}

export default contact