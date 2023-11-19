import { Application } from '@splinetool/runtime';

export function run() {
    const phoneSpaces = [
        document.getElementById('phone-space-1').getBoundingClientRect(),
        document.getElementById('phone-space-2').getBoundingClientRect(),
        document.getElementById('phone-space-3').getBoundingClientRect(),
        document.getElementById('phone-space-4').getBoundingClientRect(),
        document.getElementById('phone-space-5').getBoundingClientRect(),
    ]


    const canvas = document.getElementById('canvas3d');


    function getCanvasPosition(){
        const { x, y } = canvas.getBoundingClientRect()
        return { x: x + window.scrollX, y: y + window.scrollY }
    }

    console.log(getCanvasPosition(), 'debug')

    function moveCanvasToElementGsapToValues(elementId){
        const newPosition = document.getElementById(elementId).getBoundingClientRect()
        const { x: offSetX, y: offSetY } = getCanvasPosition()
        return { 
            y: newPosition.y + window.scrollY - offSetY,
            x: newPosition.x + window.scrollX - offSetX,
        }
    }

    const app = new Application(canvas);
    console.log(window.matchMedia('(min-width: 1260px)').matches)
    if(window.matchMedia('(min-width: 1260px)').matches){

        canvas.style.top = `${phoneSpaces[0].y + window.scrollY}px`
        canvas.style.left = `${phoneSpaces[0].x + window.scrollX}px`



        app.load('https://prod.spline.design/Rtz0eyKcgVORYn-Y/scene.splinecode')
            .then(()=>{
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#hero-section", start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
                    .to(canvas, moveCanvasToElementGsapToValues('phone-space-2'), 0)

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
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
                    .to(canvas, moveCanvasToElementGsapToValues('phone-space-3'), 0)

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
                        trigger: "#solution-1",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
                    .to(canvas, moveCanvasToElementGsapToValues('phone-space-4'), 0)

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-1",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseDown", "phone")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseUp", "phone")
                        },
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-2",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
                    .to(canvas, moveCanvasToElementGsapToValues('phone-space-5'), 0)

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-2",
                        start: "center top",
                        end: "bottom top",
                        onEnter: ()=>{
                            app.emitEvent("mouseUp", "phone")
                        },
                        onLeaveBack: ()=>{
                            app.emitEvent("mouseDown", "phone")
                        },
                    }
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#solution-3",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
                    .to(canvas, moveCanvasToElementGsapToValues('phone-space-6'), 0)

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

