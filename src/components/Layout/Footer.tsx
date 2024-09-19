import { Card, CardContent } from '../ui/card'

function Footer() {
    const date = new Date()
  return (
    
    <Card>
        <CardContent className='flex items-center justify-start p-2 gap-3 text-xl'>
            <p className='text-sm'>Copyright &copy; {date.getFullYear()} Burundi en Temps Reel. All Right Reserved </p>
        </CardContent>
    </Card>
  )
}

export default Footer