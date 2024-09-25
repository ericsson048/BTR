import { Card, CardContent } from './ui/card'
// Ajout d'une prop pour contrôler l'ordre
function Mission({ reverse, title, description, image }: { reverse?: boolean; title: string; description: string; image: string }) {
  return (
    <div className='p-6 w-full flex flex-col items-center space-y-3'>
        <h1 className='text-4xl font-bold text-center text-primary'>{title}</h1>
        <div className={`flex justify-center ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className='w-[45%] p-4 px-12 text-xl text-start font-mono'>
            {description}
            </div>
            <Card className=' w-[45%]'>
                <CardContent>
                    <img src={image} alt="mission" className='object-cover' />
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Mission