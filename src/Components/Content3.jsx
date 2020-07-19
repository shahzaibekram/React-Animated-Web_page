import React from 'react'
import Content3img from '../Images/content3.svg'
import useWebAnimations, {wobble} from "@wellyshen/use-web-animations";


const Content3 = () => {

    const { keyframes, timing } = wobble;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 2000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 6, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    return (
        <section className='content3bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 order-2'>
                    <h2>Content Writing</h2>
                    <p className='my-3'>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
                </div>
                <div className='col-lg-6 pt-5 order-2 order-1'>
                    <img src={Content3img} ref={ref} />

                </div>
                </div>
            </div>
        </section>
    )
}
export default Content3;