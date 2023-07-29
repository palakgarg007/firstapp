function Nav(){
    return(
        <nav className="main-nav px-4 py-4 bg-slate-400">
            <ul className="px-4 flex justify-end">
                <li className="mx-4 cursor-pointer">Home</li>
                <li className="mx-4 cursor-pointer">Articles</li>
                <li className="mx-4 cursor-pointer">About</li>
                <li className="mx-4 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;