import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card"
interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
    reserse: boolean;
}

function ServiceCard({image, title, reserse, description}: ServiceCardProps) {
  return (
    <div className='p-6 w-full flex flex-col items-center space-y-3'>
    <div className={`flex justify-center ${reserse ? 'flex-row-reverse' : ''}`}>
        <div className='w-[45%] p-4 px-12  flex flex-col space-y-5'>
        <h1 className='text-4xl font-bold text-center text-primary'>{title}</h1>
        <p className='w-full   text-start'>{description}</p>
        <Link to={"/"} className="py-3 px-6 bg-primary w-fit rounded-full">Visite la page</Link>
        </div>
        <Card className=' w-[45%] h-[400px] overflow-hidden'>
            <CardContent className='h-full p-0 relative'>
                <img src={image} alt="mission" className=' absolute object-cover h-full w-full' />
            </CardContent>
        </Card>
    </div>
</div>
  )
}

export default ServiceCard