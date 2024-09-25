import profile from "../../../public/programming-background-collage.jpg"
import CardService from "../CardService"
import Mission from "../Mission"
function Acceuil() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
       <div className="relative w-full h-[80vh] ">
          <img src={profile} alt="profile" className="object-cover w-full h-full"/>
          <p className="absolute top-28 left-[50%] right-[50%] translate-x-[-50%] w-[80%]  text-center text-outline text-white text-2xl font-extrabold">Burundi en Temps Réel est une entreprise offrant des solutions web personnalisées, incluant la création de sites, le développement d'applications, l'optimisation, et l'hébergement web.
             Elle se distingue par des services sur mesure adaptés aux besoins de ses clients.</p>
            <div className="absolute right-0 left-0 -bottom-1"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffff" fill-opacity="1" d="M0,96L17.1,106.7C34.3,117,69,139,103,170.7C137.1,203,171,245,206,250.7C240,256,274,224,309,192C342.9,
                  160,377,128,411,128C445.7,128,480,160,514,176C548.6,192,583,192,617,181.3C651.4,171,686,149,720,128C754.3,107,789,85,823,106.7C857.1,128,891,192,926,208C960,224,994,192,1029,197.3C1062.9,203,1097,245,1131,
                  245.3C1165.7,245,1200,203,1234,165.3C1268.6,128,1303,96,1337,85.3C1371.4,75,1406,85,1423,90.7L1440,96L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,
                  320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,
                  320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z">
                  </path>
                </svg> 
            </div>
       </div>
       <div className="w-full flex flex-col justify-center items-center space-y-6 pb-3">
        <p className="w-[65%] text-center text-primary text-4xl font-bold">C'est Quoi Burundi en Temps Reel ?</p>
        <p className="w-[65%] text-center font-mono">Burundi en temps réel est l'entreprise spécialisée dans le développement de
           solutions web personnalisées offre une gamme complète de services comprenant la création de sites web sur mesure avec des designs
            personnalisés, le développement d'applications web, mobiles et de bureau, ainsi que les services d'optimisation et de maintenance de sites existants
        </p>
       </div>
       <CardService/>
       <Mission 
       reverse={false} 
       title="Notre Mission"
        description="Chez Burundi en Temps Réel, notre mission est de propulser les entreprises vers l'ère numérique grâce à des solutions web personnalisées
         et complètes. Nous nous engageons à concevoir des sites web intuitifs, à développer des applications mobiles performantes et à optimiser les solutions
          existantes. Grâce à nos services d'hébergement fiables et à l'enregistrement de noms de domaine, nous garantissons une présence en ligne solide et durable. 
          Notre objectif est d'aider nos clients à se démarquer de la concurrence,
         à atteindre un public élargi et à développer leur activité en toute sérénité."
         image="https://www.burundientempsreel.com/image/Coursvideoetbibliotheque.png"
         />
       <Mission reverse={true}
       title="Notre Vision"
       description="Notre vision est de devenir le leader en matière de développement de solutions
        digitales sur mesure dans la région, en transformant la manière dont les entreprises interagissent avec le monde numérique.
         Nous aspirons à innover constamment, à enrichir l'expérience 
       utilisateur et à offrir des technologies qui favorisent la croissance et l'efficacité des entreprises."
       image="https://www.burundientempsreel.com/image/programming.png"
       />
    </main>
  )
}

export default Acceuil

