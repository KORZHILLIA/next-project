import { Element } from "react-scroll";
import Image from "next/image";
import hero from '../../public/images/hero/hero.webp';

export default function Hero() {
    return (
        <section>
        <Element name="hero">
            <h1 className="text-4xl mb-1 text-center">Знайди свій стиль!</h1>
            </Element>
            <div className="relative w-full h-80">
                <Image fill style={{ objectFit: "cover", zIndex: -2}} priority src={hero} alt="Girl is jumping" />
        </div>
        <p className="pl-1 indent-2.5">Sometimes, you need a little motivation to hit the gym or start a workout. A good outfit can do just that.
            No matter the workout or goal, there's a cute Nike outfit to help you crush whatever you've got planned.
            Activewear that doesn't hold up throughout a workout can be a dealbreaker and even get in the way of hitting optimal performance
            — ever been mid-run and have a sock slip into your shoe? Ideally, your activewear can make it through a tough workout
            while having you feeling your best. Check out these tips to find cute workout outfits for every type of workout.
        </p>
        <p className="pl-1 indent-2.5">Sometimes, you need a little motivation to hit the gym or start a workout. A good outfit can do just that.
            No matter the workout or goal, there's a cute Nike outfit to help you crush whatever you've got planned.
            Activewear that doesn't hold up throughout a workout can be a dealbreaker and even get in the way of hitting optimal performance
            — ever been mid-run and have a sock slip into your shoe? Ideally, your activewear can make it through a tough workout
            while having you feeling your best. Check out these tips to find cute workout outfits for every type of workout.
        </p>
        <p className="pl-1 indent-2.5">Sometimes, you need a little motivation to hit the gym or start a workout. A good outfit can do just that.
            No matter the workout or goal, there's a cute Nike outfit to help you crush whatever you've got planned.
            Activewear that doesn't hold up throughout a workout can be a dealbreaker and even get in the way of hitting optimal performance
            — ever been mid-run and have a sock slip into your shoe? Ideally, your activewear can make it through a tough workout
            while having you feeling your best. Check out these tips to find cute workout outfits for every type of workout.
</p>
        </section>)
 };