import { Card, CardContent } from "../ui/card"
import logo from "../../../public/WhatsApp Image 2024-09-18 at 22.58.28_13989f03.jpg"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
// import { FaPhone } from "react-icons/fa"
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"
import login from "../../../public/login.png"
import { ExternalLinkIcon, GearIcon, HomeIcon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Contacts, Hebergement, MyIcon } from "./NavBar"
import { FaPhone } from "react-icons/fa"
  


function MobileNav() {
  return (
    <Card className="rounded-none  hidden max-[929px]:block rounded-b-lg">
    <CardContent className="flex flex-col items-center justify-center text-xl p-0 px-6 pt-3 space-y-6 rounded-b-lg">
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="logo" className="w-24 h-24 max-sm:h-[3rem] max-sm:w-[3rem]"/>
            <p className="text-primary font-bold italic text-3xl max-sm:text-xl"><span className="text-red-400 italic">B</span> <span className="text-slate-400/80 italic">T</span>R</p>
        </div>

     
        <div className="w-fit py-3 px-6 flex gap-3">
        <Popover>
      <PopoverTrigger asChild>
        <img src={login} alt="login" className="max-sm:h-[2rem] max-sm:w-[2rem]" />
      </PopoverTrigger>
      <PopoverContent className="w-fit flex gap-3 bg-card">
        <Link to ="/" className={buttonVariants({variant:"outline"})+"border border-black transform hover:scale-105 duration-1000"}>Login</Link>
        <Link to ="/" className={buttonVariants({variant:"default"})+"border border-black transform hover:scale-105 duration-1000"}>Sign up</Link>
        </PopoverContent>
        </Popover>
        <Sheet>
            <SheetTrigger asChild><MenuNav width={45} height={45} className="max-sm:h-[2rem] max-sm:w-[2rem]"/></SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex items-center justify-center gap-2">
                            <img src={logo} alt="logo" className="w-24 h-24 max-sm:h-[2rem] max-sm:w-[2rem]"/>
                            <p className="text-primary font-bold italic text-3xl"><span className="text-red-400 italic">B</span> <span className="text-slate-400/80 italic">T</span>R</p>
                        </div>
                    </SheetTitle>
                    <SheetDescription>
                         <nav className=" relative flex flex-col items-center justify-between w-full p-0 gap-3 text-xl max-sm:text-sm text-black">                
                        <Link to="/" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  text-xl items-center gap-2">< HomeIcon width={34} height={34}/>Acceuil</Link>
                        <Link to="/hebergement-web" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><Hebergement width={34} height={34}/> Hebergement</Link>
                        <Link to="/nom-de-domaine" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><ExternalLinkIcon width={34} height={34} />Domaine</Link>
                        <Link to="/services" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><GearIcon width={34} height={34}/>Services</Link>
                        <Link to="/notre-equipe" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><PersonIcon width={34} height={34}/>Notre Equipe</Link>
                        <Link to="/publication" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><Pencil2Icon width={34} height={34}/>Publications</Link>
                        <Link to="/portfolio" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><MyIcon width={34} height={34} />Portfolio</Link>
                        <Link to="/contact" className="hover:bg-primary w-[80%]  py-3 px-6 justify-start rounded-lg  hover:text-white duration-500 flex  items-center gap-2"><Contacts width={34} height={34} />Contacts</Link>
                        </nav>
                </SheetDescription>
                <a href="tel:+25777576860" className="flex gap-3 text-2xl py-3 px-6 justify-center items-center hover:bg-slate-500/10 max-sm:text-xl">
                    +257 77576860 <FaPhone/>
                </a>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        </div>


    </div>
   
    </CardContent>
</Card>
  )
}

export default MobileNav



interface MenuNavProps {
    width?: number;
    height?: number;
    className?: string
  }



const MenuNav:React.FC<MenuNavProps>=({width=15,height=15,className, ...props}:MenuNavProps)=>{
    return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} {...props} className={className} viewBox="0 0 24 24">
    <path d="M20,14H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0	C22,13.105,21.105,14,20,14z" 
    opacity=".35"></path><path d="M20,7H4C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,6.105,21.105,7,20,7z"></path>
    <path d="M20,21H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,20.105,21.105,21,20,21z"></path>
    </svg>)
}


export { MenuNav};

