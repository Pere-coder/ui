import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  



export default function Slider() {

    return (
        <Carousel className="items-center flex justify-center">
        <CarouselContent className="items-center flex justify-center">
          <CarouselItem className="h-[200px] items-center flex bg-black text-white justify-center">First</CarouselItem>
          <CarouselItem className="h-[200px] items-center flex bg-blue-500 text-white justify-center">Second</CarouselItem>
          <CarouselItem className="h-[200px] items-center flex bg-green-500 text-white justify-center">Third</CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    )
  
}