import { Application } from '@splinetool/runtime';


const mobileSplineScene = '/assets/spline-mobile/scene.splinecode'
const desktopScene = '/assets/spline-desktop/scene.splinecode'

//const desktopScene = 'https://prod.spline.design/xhMT7Nqv6-4WEUmf/scene.splinecode'

export function run() {

    if(window.matchMedia('(min-width: 1260px)').matches){

        const canvas = document.getElementById('canvas3d-mobile');
        const canvas_container = document.getElementById('canvas-container');
        canvas_container.style.opacity = '0';

        const app = new Application(canvas);



        app.load(desktopScene)
            .then(()=>{
                gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
                //app.emitEvent("mouseDown", "phone")

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#hero-section",
                        start: "top top",
                        end: "bottom top",
                        scrub: 0,
                        onEnter: ()=>{
                            //background.style.opacity='1'
                            //app.emitEvent("keyUp", "phone")
                        },
                        onLeaveBack: ()=>{
                            //background.style.opacity = '0';
                            //app.emitEvent("mouseDown", "phone")
                            //app.emitEvent("mouseDown", "Screen")
                        }
                    }
                }).to("#canvas-container", {
                    opacity: 1
                })


                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#problems",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseUp", "phone")
                            app.emitEvent("mouseUp", "Screen")
                            canvas?.click()
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("keyUp", "phone")
                            app.emitEvent("keyUp", "phone")
                        }
                    }
                })


                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-1",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("keyDown", "phone")
                            app.emitEvent("keyUp", "Screen")
                            canvas?.click()
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseUp", "phone")
                            app.emitEvent("mouseUp", "Screen")
                        },
                    }
                })


                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-2",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseUp", "phone")
                            app.emitEvent("keyDown", "Screen")
                            canvas?.click()
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("keyDown", "phone")
                            app.emitEvent("keyUp", "Screen")
                        },
                    }
                })


                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-3",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("keyUp", "phone")
                            canvas?.click()
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseUp", "phone")
                        }
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#cta",
                        //start: "top center",
                        //end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseDown", "Camera")
                            console.log('transition')
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("keyDown", "Camera-dating-app")
                            console.log('transition')
                        }
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#showcase-1",
                        start: "top center",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseUp", "Camera-dating-app")
                            console.log('showcase on')
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseDown", "Camera-dating-app")
                            console.log('showcase off')
                        }
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#showcase-2",
                        start: "top center",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseDown", "phone 2")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseUp", "phone 2")
                        }
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#cta-2",
                        //start: "top center",
                        //end: "bottom top",
                        onEnter: ()=>{
                            console.log('cta-2')
                            app.emitEvent("keyDown", "phone 2")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseDown", "phone 2")
                        }
                    }
                })
            })

    } else {
        const canvas = document.getElementById('canvas3d-mobile');
        const app = new Application(canvas);

        app.load(mobileSplineScene)
            .then(()=>{
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#hero-section",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("keyUp", "phone")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseDown", "phone")
                        }
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#problems",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseUp", "phone")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("keyUp", "phone")
                        }
                    }
                })


                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-3",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("keyUp", "phone")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseUp", "phone")
                        }
                    }
                })
            })
    }
}

