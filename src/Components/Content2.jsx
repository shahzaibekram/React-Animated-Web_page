import React from 'react'
import Content2img from '../Images/content2.svg'
import useWebAnimations, {swing} from "@wellyshen/use-web-animations";


const Content2 = () => {

    const { keyframes, timing } = swing;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 1000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 5, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    return (
        <section className='content2bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className= 'col-lg-6 pt-5 order-2 order-1'>
                <img src={Content2img} ref={ref} />
                </div>
                <div className= 'col-md-6 pt-5 order-2'>
                <h2>Website Copywriting</h2>
                <p className='my-3'>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>

                </div>
                </div>
            </div>
        </section>
    )
}
export default Content2;