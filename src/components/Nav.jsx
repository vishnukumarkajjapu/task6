const Nav = () => {
    return (
        <nav className=" h-fit w-full text-white px-6 py-4 flex justify-between items-baseline">
            <p>vishnu kumar k</p>
            <>
                <div className="hidden md:flex gap-8">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="group md:hidden">
                    Menu
                    <div className="absolute  py-4 right-6 text-black hidden group-hover:flex flex-col">
                        <div className="px-5 py-3 items-center flex flex-col rounded mt-1 gap-1 w-fit bg-black text-white">
                            <a href="#about">Home</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </>
        </nav >
    );
};
export default Nav;
