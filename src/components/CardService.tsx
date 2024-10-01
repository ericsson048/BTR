import { Card, CardContent } from "./ui/card"

const service = [
    {
        name: "Site Web",
        image:"https://www.numacom.fr/assets/img/content/2022/10/creation-de-site-web-responsive-optimise-au-referencement-7c4eb40-778x403.png"
    },
    {
        name: "Application Web",
        image:"https://www.aquilapp.fr/wp-content/uploads/2024/01/application-web.webp"
    },
    {
        name: "Application Mobile",
        image:"https://cdn.futura-sciences.com/sources/images/aplication-mobile-smartphone.jpeg"
    },
    {
        name: "Application  Bureau",
        image:"https://i.ytimg.com/vi/5IanQIwhA4E/maxresdefault.jpg"
    },
    {
        name: "Hebergement",
        image:"https://le-site-francais.fr/wp-content/uploads/2019/05/hebergement-site-internet-image-1024x583.webp"
    },
    {
        name: "Nom du Domaine",
        image:"https://media.lesechos.com/api/v1/images/view/5f689b9bd286c23b5f6ae9f6/1280x720/333149-nom-de-domaine-fr-ou-com-qu-est-ce-que-ca-change-web-tete-0602056220602.jpg"
    }
]

export {service}

function CardService() {
    
  return (
    <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center items-center justify-items-center space-x-2 space-y-6 mb-6 px-6">
        {service.map((item, idx) => {
            return ( 
                <Card key={idx} className="w-[350px] max-sm:w-[90%] h-[200px] overflow-hidden ">
                    <CardContent className="w-full h-full p-0 relative ">
                        <img src={item.image} alt={item.name}  className="object-cover h-full w-full" /> 
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] w-fit translate-y-[-50%]  px-1 py-3 text-white  rounded-full bg-primary/50 hover:shadow-2xl hover:shadow-black/35">{item.name}</div>
                    </CardContent>
                </Card>
            );
        })}
    </div>
  )
}

export default CardService