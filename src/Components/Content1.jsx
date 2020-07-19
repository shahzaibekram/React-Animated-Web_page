import React, { useEffect } from "react";
import Content1img from '../Images/content1.svg'
import useWebAnimations, {pulse} from "@wellyshen/use-web-animations";


const Content1 = () => {

    const { keyframes, timing } = pulse;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 1000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 2, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    

    return (
        <section className='content1bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 order-2'>
                    <h2>UX Writing</h2>
                    <p className='my-3'>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                </div>
                <div className='col-lg-6 pt-5 order-2 order-1'>
                    <img src={Content1img} ref={ref}  className='target' />

                </div>
                </div>
            </div>
        </section>
    )
}
export default Content1;