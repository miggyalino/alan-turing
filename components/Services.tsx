import { SERVICES } from '@/constants'
import Reveal from './Reveal'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Button from './Button'
import Image from 'next/image'


const Services = () => {
  return (
    <section id='services'>
      <Reveal>
      <div className='max-container padding-container h-screen'>
        <div className='flex flex-col items-center py-20'>
          <div>
            <h2 className='bold-64'>My Services</h2>
          </div>

          <div className='grid grid-cols-3 gap-12 mt-24'>
            {SERVICES.map((service, index) => (
              <Card className='py-10 px-4 flex flex-col justify-between items-center'>
                <Image 
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                />
                <CardHeader className='gap-4'>
                  <CardTitle className='bold-32 text-center'>{service.title}</CardTitle>
                  <CardDescription className='text-center'>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className=''>
                  <ul className='flex flex-col gap-6'>
                    {service.details.map((detail, index) => (
                      <li className='text-gray font-bold text-center'>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className='flexCenter'>
                  <Button 
                    label='Learn More'
                    variant='bg-darkGray'
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  )
}

export default Services