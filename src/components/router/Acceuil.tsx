import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardItem from "../CardItem"

function Acceuil() {
  return (
    <Carousel>
      <CarouselContent>
       <CardItem keyprop="1"
        imageprop="https://www.cours-gratuit.com/images/thumb/167/id-3708.png"
        linkprop="/hebergement-web"
        descriptionprop="Transformez votre présence en ligne avec notre hébergement web fiable et performant !"
        />
         <CardItem keyprop="2"
        imageprop="https://kinsta.com/fr/wp-content/uploads/sites/4/2019/02/choisir-un-nom-de-domaine-1024x512.png"
        linkprop="/nom-de-domaine"
        descriptionprop="Transformez votre présence en ligne avec notre hébergement web fiable et performant !"
        />
         <CardItem keyprop="3"
        imageprop="https://img.freepik.com/free-vector/business-project-delivery-concept-project-development-presentation-idea-project-planning-promotion-management-marketing-flat-vector-illustration_613284-1927.jpg"
        linkprop="/publication"
        descriptionprop="Transformez votre présence en ligne avec notre hébergement web fiable et performant !"
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Acceuil

