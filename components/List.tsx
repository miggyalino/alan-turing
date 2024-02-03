import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ACHIEVEMENTS } from "@/constants"

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-xs"
        orientation="vertical"
        opts={{ loop: true }}
      >
      <CarouselContent>
        {ACHIEVEMENTS.slice(0,5).map((achievement, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-center gap-2 aspect-square p-6">
                  <h2 className="bold-16">{achievement.title}</h2>
                  <p className="text-gray">{achievement.narrative}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        orientation="vertical"
      >
      <CarouselContent>
        {ACHIEVEMENTS.slice(5,9).map((achievement, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-center gap-2 aspect-square p-6">
                  <h2 className="bold-16">{achievement.title}</h2>
                  <p className="text-gray">{achievement.narrative}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </>
    
    
  )
}
