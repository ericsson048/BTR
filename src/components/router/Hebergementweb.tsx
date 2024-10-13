import url from "../../../public/banniere_hebergement_rentree.webp"
import burundi from '../../../public/Burundi.png'
import PriceCard from "../PriceCard";
import PriceDisplay from "../PriceDisplay"
function Hebergementweb() {

  const offers = [
    {
      title: 'BTR Perso',
      subtitle: 'Idéal pour démarrer votre site rapidement et pour les débutants',
      oldPrice: '2,99 €',
      newPrice: '1,49',
      discount: '-50%',
      ttcPrice: '1,79 €',
      features: ['1 Site web', '100 Go de stockage SSD NVMe', '1 base de données MySQL','Trafic illimité',],
      featuresS:[  '1 nom de domaine', '10 adresses email pro', 'Certificat SSL (https)',],
      featuresT:[ 'Sauvegardes gratuites'],
    },
    {
      title: 'BTR Starter',
      subtitle: 'Tout ce dont vous avez besoin pour créer votre site web',
      oldPrice: '4,99 €',
      newPrice: '3,49',
      discount: '-30%',
      ttcPrice: '4,19 €',
      features: ['5 Sites web', '250 Go de stockage SSD NVMe', '25 bases de données MySQL', 'Trafic illimité', ],
      featuresS:[ '1 nom de domaine', '150 adresses email pro', 'Certificat SSL (https)',],
      featuresT:[ 'Sauvegardes gratuites'],
      isBestSeller: true,
    },
    {
      title: 'BTR Performance',
      subtitle: 'Ressources doublées, idéal site d\'entreprise, agences web, ecommerce',
      oldPrice: '10,99 €',
      newPrice: '9,99',
      discount: '-9%',
      ttcPrice: '11,99 €',
      features: ['Sites web illimités', 'Espace disque SSD NVMe illimité', 'Bases de données MySQL illimitées', 'Trafic illimité',],
      featuresS:[  '2 noms de domaine', 'Adresses email pro illimitées', 'Certificat SSL (https)'],
      featuresT:[ 'Sauvegardes gratuites', 'Assistance prioritaire'],
    }
  ];

  return (
    <main className="flex flex-col justify-between">
<div
  className="h-[400px] w-full p-11 flex"
  style={{
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }}
>
  <div className="flex flex-col justify-between w-fit gap-3 space-y-3 flex-1">
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
      <div className="flex flex-col gap-3">
      <button className="py-3 px-4 w-fit text-lg font-bold text-white bg-primary hover:bg-primary/80">Voir nos offres</button>
      <p className="text-lg flex gap-1 items-center bg-card py-3 px-5"><img src="https://www.lws.fr/_ui/images/theme2021/svg/check_bleu_petit.svg" className="w-4 h-5" alt="" />Satisfait ou remboursé 30 jours</p>
        
      </div>
    </div>
  </div>
  <div className=" flex-1 relative h-full">
    <div className="flex absolute bottom-0 left-0 right-0 bg-white/85 px-5 py-3">
      <div className="flex w-[50%]">
        <img src={burundi} className="w-16 h-16" alt="" />
        <p className="ml-2 text-xl text-gray-400 font-sans">Serveurs et support
        du Burundi 7J/7</p>
      </div>
      <div className="flex w-[50%] items-center">
        <img src="https://www.lws.fr/_ui/images/theme2021/svg/LWS_auto_installeur.svg" className="w-16 h-16" alt="" />
        <p className="ml-2 text-xl text-gray-400 font-sans">Logiciels de création
        de sites web inclus</p>
      </div>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {offers.map((offer, index) => (
        <PriceCard key={index} {...offer} />
      ))}
    </div>
</main>
  )
}

export default Hebergementweb