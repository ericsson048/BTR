import { Card, CardContent } from './ui/card'

function Mission({ reverse, title, description, image }: { reverse?: boolean; title: string; description: string; image: string }) {
  return (
    <div className='p-6 w-full flex flex-col items-center space-y-3'>
        <h1 className='text-4xl font-bold text-center text-primary'>{title}</h1>
        <div className={`flex justify-center ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className='w-[45%] p-4 px-12 text-start'>
            <p className='w-full  text-start'>{description}</p>
            </div>
            <Card className=' w-[45%] h-[400px] overflow-hidden'>
                <CardContent className='h-full p-6 relative'>
                    <img src={image} alt="mission" className=' absolute object-contain h-full w-full' />
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Mission