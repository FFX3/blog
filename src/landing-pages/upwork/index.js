import { Application } from '@splinetool/runtime';

const mobileSplineScene = '/assets/spline-mobile/scene.splinecode'
const desktopScene = '/assets/spline-desktop/scene.splinecode'

export function run() {

    if(window.matchMedia('(min-width: 1260px)').matches){
        const phoneSpaces = [
            document.getElementById('phone-space-1').getBoundingClientRect(),
            document.getElementById('phone-space-2').getBoundingClientRect(),
            document.getElementById('phone-space-3').getBoundingClientRect(),
            document.getElementById('phone-space-4').getBoundingClientRect(),
            document.getElementById('phone-space-5').getBoundingClientRect(),
        ]

        const canvas = document.getElementById('canvas3d-mobile');

        function getCanvasPosition(){
            const { x, y } = canvas.getBoundingClientRect()
            return { x: x + window.scrollX, y: y + window.scrollY }
        }

        console.log(getCanvasPosition(), 'debug')

        function moveCanvasToElementGsapToValues(elementId){
            return
            const newPosition = document.getElementById(elementId).getBoundingClientRect()
            const { x: offSetX, y: offSetY } = getCanvasPosition()
            return { 
                y: newPosition.y + window.scrollY - offSetY,
                x: newPosition.x + window.scrollX - offSetX,
            }
        }
        const app = new Application(canvas);

        canvas.style.top = `${phoneSpaces[0].y + window.scrollY}px`
        canvas.style.left = `${phoneSpaces[0].x + window.scrollX}px`



        app.load(desktopScene)
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

