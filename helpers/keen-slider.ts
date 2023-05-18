import { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions, SliderInstance, useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export const keenSliderOptions = {
    loop: true,
    defaultAnimation: {
        duration: 500,
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
            clearTimeout(timeout)
            if (mouseOver) return
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
            nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    },
];
