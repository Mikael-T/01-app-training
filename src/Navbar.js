const Navbar = () => {
    return ( 
        <nav className="navbar">
           <h1>Ooglas Blogg</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "White",
                    backgroundcolor:"#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;