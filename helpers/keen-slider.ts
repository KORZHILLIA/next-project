import { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions, SliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const keenSliderOptions = {
    loop: true,
    defaultAnimation: {
        duration: 500,
    },
    slides: { perView: 1 },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    selector: '.sliders',
};


export const handleSlides = [
    (slider: SliderInstance<KeenSliderOptions<{}, {}, KeenSliderHooks>, KeenSliderInstance<{}, {}, KeenSliderHooks>, KeenSliderHooks>) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
            clearTimeout(timeout)
        }
        function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
                slider.next()
            }, 2000)
        }
        slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })
            nextTimeout();
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    },
];
