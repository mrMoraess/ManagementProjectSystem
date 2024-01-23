
function Header () {
    return (
        <header className="bg-white w-screen p-2">
            <div className="flex flex-row justify-start align-middle gap-4">
                <div className="flex flex-row gap-2">
                    <a href="/">
                        <img src="../../public/vite.svg" alt="website logo" />
                    </a>
                    <h1 className="text-4xl">
                        M.P.S.</h1>
                </div>
                {/* <div className="flex flex-col justify-center ali">
                    <nav>
                        <ul className="flex flex-row align-middle gap-2">
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </nav>
                </div> */}
            </div>
        </header>
    )
}

export default Header