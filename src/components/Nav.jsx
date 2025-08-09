function Nav() {

    let nameNavStyle = "text-3xl font-semibold cursor-pointer";

    let navHoverStyle = "hover:text-sky-700 relative after:content-[''] after:absolute after:h-[3px] after:left-0 after:bottom-0 after:w-0 after:bg-sky-700 after:transition-width after:duration-500 hover:after:w-full";
    return(
        <>
        <header className="flex justify-between w-1/2 m-auto px-8 my-12">
            <h2 className={nameNavStyle + " " + navHoverStyle}><a href="">I<span className="text-sky-600 hover:text-black">Fallon</span></a></h2>
            <nav className="flex justify-around gap-6 text-l pt-1.5">
                <h3 className={navHoverStyle}><a href="#projects">projects</a></h3>
                <h3 className={navHoverStyle}><a href="#skills">skills</a></h3>
                <h3 className={navHoverStyle}><a href="#contact">contact</a></h3>
            </nav>
        </header>
        </>
    )
}

export default Nav;