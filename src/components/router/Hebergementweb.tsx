import url from "../../../public/banniere_hebergement_rentree.webp"
import PriceDisplay from "../PriceDisplay"
function Hebergementweb() {
  return (
    <main className="flex flex-col justify-between">
<div
  className="h-[400px] w-full p-11"
  style={{
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }}
>
  <div className="flex flex-col justify-between w-[700px] gap-3 space-y-3">
    <h1 className="w-full font-bold text-2xl text-primary/45">Hébergement web au meilleur prix</h1>
    <p className="text-xl">Meilleur hébergeur web avec pack tout inclus !</p>
    <ul className="w-full flex flex-wrap gap-1 space-y-1">
      <li className="w-[45%] flex gap-1 items-center"> <img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" /> Nom de domaine <span className="text-primary/85">offert</span></li>
      <li className="w-[45%] flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" />Certificat SSL <span className="text-primary/85">gratuit</span></li>
      <li className="w-[45%] flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" /> <span className="text-primary/85">Emails</span>, bases MySQL, PHP</li>
      <li className="w-[45%] flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" />Stockage <span className="text-primary/85">100% SSD</span></li>
      <li className="w-[45%] flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" />Trafic mensuel <span className="text-primary/85">illimité</span></li>
      <li className="w-[45%] flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_clair.svg" className="custom-before" alt="" />Disponibilité <span className="text-primary/85">99,999%</span>garantie</li>

    </ul>
    <div className="flex gap-4 space-x-4 mt-4">
      <PriceDisplay/>
      <div className="flex flex-col">
      <button className="py-3 px-4 w-fit text-lg font-bold text-white bg-primary hover:bg-primary/80">Voir nos offres</button>
      <p className="text-lg flex gap-1 items-center"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_bleu_petit.svg" className="w-4 h-5" alt="" />Satisfait ou remboursé 30 jours</p>
        
      </div>
    </div>
  </div>
</div>

      Hebergementweb
      </main>
  )
}

export default Hebergementweb