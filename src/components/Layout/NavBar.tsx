import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import logo from "../../../public/WhatsApp Image 2024-09-18 at 22.58.28_13989f03.jpg"
import { buttonVariants } from "../ui/button";

function NavBar() {
    return (
        <Card className="rounded-none" >
            <CardContent className="flex flex-col items-center justify-center p-1  text-xl">
            <div className="flex justify-between items-center  w-full px-3">
            <div className="flex items-center justify-center gap-2 ">
                <img src={logo} alt="logo" className="w-10 h-10 " />
                <p>Burundi En Temps reel</p>
                </div>
                <Link to ="/" className={buttonVariants({variant:"outline"})+"border border-black"}>Login</Link>
            </div>
                <nav className="flex items-center justify-center p-6 gap-3 text-xl">                
                <Link to="/" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Acceuil</Link>
                <Link to="/about" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">About</Link>
                <Link to="/hebergement-web" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Hebergement</Link>
                <Link to="/nom-de-domaine" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Domaine</Link>
                <Link to="/services" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Services</Link>
                <Link to="/notre-equipe" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Notre Equipe</Link>
                <Link to="/publication" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Publications</Link>
                <Link to="/portfolio" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Portfolio</Link>
                <Link to="/contact" className="hover:bg-primary p-1 rounded-lg hover:text-white duration-300">Contacts</Link>
                </nav>
            </CardContent>
        </Card>
    );
}

export default NavBar;

