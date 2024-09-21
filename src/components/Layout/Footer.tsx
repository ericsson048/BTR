import { Card, CardContent, CardDescription } from '../ui/card'
import logo from "../../../public/WhatsApp Image 2024-09-18 at 22.58.28_13989f03.jpg"
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    const date = new Date()
  return (
    
    <Card className='rounded-none'>
      <CardContent className='flex justify-between items-center shadow p-3'>
        <div className="flex w-[25%] flex-col items-center justify-center gap-4">
          <img src={logo} alt="BTR" className='w-[100px] h-[100px]' />
          <div className="flex gap-3">
            <Link to={"/"} className='text-black border p-3 rounded-full hover:bg-primary hover:text-white duration-700'><FaGithub/></Link>
            <Link to={"/"} className='text-black border p-3 rounded-full hover:bg-primary hover:text-white duration-700'><FaYoutube/></Link>
            <Link to={"/"} className='text-black border p-3 rounded-full hover:bg-primary hover:text-white duration-700'><FaInstagram/></Link>
            <Link to={"/"} className='text-black border p-3 rounded-full hover:bg-primary hover:text-white duration-700'><FaTwitter/></Link>
          </div>
          <Link to={"/contact"} className={"rounded-full w-[65%] border text-center p-2 hover:bg-primary hover:text-white duration-700"}>Contactez-Nous</Link>
        </div>
        <div className=" w-[75%] flex justify-center items-center gap-5">
          <div className="flex flex-col h-52 w-[350px] p-3">
            <h1 className='text-foreground'>Autres Liens</h1>
            <div className='flex flex-col items-start'>
              <Link to={"/"} className={"text-foreground text-center p-2 hover:bg-slate-500/10"}>Qui sommes-nous</Link>
              <Link to={"/"} className={"text-foreground text-center p-2 hover:bg-slate-500/10"}>Comment ça marche ?</Link>
              <Link to={"/"} className={"text-foreground text-center p-2 hover:bg-slate-500/10"}>Conditions d'utilisation</Link>
              <Link to={"/"} className={"text-foreground text-center p-2 hover:bg-slate-500/10"}>Trouver mes tickets</Link>
            </div>
          </div>
          <div className="flex flex-col h-52 w-[350px] p-3">
            <h1 className='text-foreground'>Contact</h1>
            <div className='flex flex-col items-start'>
              <Link to={"/"} className={"text-foreground flex gap-3 justify-center items-center text-center p-2 hover:bg-slate-500/10"}><FaSearchLocation/> Kiriri</Link>
              <Link to={"/"} className={"text-foreground flex gap-3 justify-center items-center text-center p-2 hover:bg-slate-500/10"}><FaPhone/> +(257) 77686800|68685800</Link>
              <Link to={"/"} className={"text-foreground flex gap-3 justify-center items-center text-center p-2 hover:bg-slate-500/10"}><FaMailBulk/> contact@btr.com</Link>
            </div>
          </div>
        </div>
      </CardContent>
        <CardDescription className='flex items-center justify-center p-2 gap-3 text-xl bg-current'>
            <p className='text-sm text-accent'>Copyright &copy; {date.getFullYear()} Burundi en Temps Reel. All Right Reserved </p>
        </CardDescription>
    </Card>
  )
}

export default Footer