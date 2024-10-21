import DomainPricingTable from "../DomainPricingTable"
import PricingGrid from "../FeatureList"

function Nomdedomaine() {
  return (
    <main className="bg-white">
      <PricingGrid/>
        <div className="bg-gray-300 text-white p-4 mt-4">
            <div className="container mx-auto">
                <h2 className="text-xl font-bold">Trouver et enregistrer un nom de domaine :</h2>
                <div className="flex items-center mt-2">
                    <span className="bg-white text-black px-4 py-2 rounded-l-lg">WWW.</span>
                    <input type="text" className="flex-grow px-4 py-2" placeholder="mon-nom-de-do" />
                    <span className="bg-white text-black px-4 py-2">.com</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-r-lg">Rechercher</button>
                </div>
            </div>
        </div>
        <DomainPricingTable/>
    </main>
  )
}

export default Nomdedomaine