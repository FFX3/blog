<script lang="ts">
	import { onMount } from "svelte"
    import { run } from './index.js'
    import './styles.css'

    onMount(()=>{
        run()
    })

    function attributeLead(e: MouseEvent){
        e.preventDefault()
        console.log("sup")
    }
    
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&amp;display=swap" rel="stylesheet">
</svelte:head>
<div id="background_wrap">
    <div id="canvas-container">
        <canvas id="canvas3d-mobile" data-engine="three.js r149"> </canvas>
    </div>
</div>
<main>
    <div id="hero-section">
        <div id="headline-section" class="glass-card left-3d">
            <h1 class="headline">Bring your vision to life. Solve your business problems</h1>
        </div>
        <div id="cta-hero" style=" align-items: center; justify-content: center;">
            <div>
                <a class="button-anon-pen" on:click={attributeLead} href="https://www.upwork.com/workwith/justinmcintyredev"><span>Contact us on UpWork</span></a>
            </div>
        </div>
    </div>
    <div id="problems">
        <div id="phone-space-2" class="phone-space"></div>
        <div class="glass-card" id="problems__banner">
            <h2 class="headline">It's Hard To Find Reliable Developers</h2>
            <div id="problem-list">
                <div>
                    <h2>Low Quality Work</h2>
                    <p>
                        Some developers cut corners to look good in the short-term but expose their clients to problems in the future
                    </p>
                </div>
                <div>
                    <h2>Bad Communicaton</h2>
                    <p>
                        Instructions have to be repeated. Details are forgotten, you keep getting blamed for not being clear enough. It shouldn’t be this hard.
                    </p>
                </div>
                <div>
                    <h2>Uncertain Process</h2>
                    <p>
                        Deadlines keep getting passed, and nothing changes. This leads to frustration and a failed project.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <h2 class="headline white-text">Getting Software built Should Be Simple</h2>
    <div id="solution-1">
        <div id="phone-space-3" class="phone-space"></div>
        <div class="solution right-3d">
            <div class="card-container right-3d-light">
                <h2>Clear Communication</h2>
                <p>
                    We understand that as the experts it's our job to help you explain your vision clearly. We do this by asking questions, taking notes and showing examples.
                </p>
            </div>
        </div>
    </div>
    <div id="solution-2">
        <div class="solution left-3d">
            <div class="card-container left-3d-light">
                <h2>No Details Skipped</h2>
                <p>
                    Corners are never cut without a very specific reason and deliberation with you. We'll inform your of the trade-offs and give your our expert opinion to maximize the impact our solution has on your goals.
                    <br />
                    <br />
                    We understand that as the experts our job is to make the process simple and protect you from the problems you don't even know about.
                </p>
            </div>
        </div>
        <div id="phone-space-4" class="phone-space"></div>
    </div>
    <div id="solution-3">
        <div id="phone-space-5" class="phone-space"></div>
        <div class="solution right-3d">
            <div class="card-container right-3d-light">
                <h2>Step-By-Step Process</h2>
                <p>
                    Running a business is already stressful enough, we don't want to add to this. That's why we make the process as straight forward and predictable as possible.
                    <br />
                    <br />
                    This makes it easy to budget and understand where your investment is going
                    <br />
                    <br />
                    Projects are broken up into stages allowing you to clearly understand how close the project is to completion.
                </p>
            </div>
        </div>
    </div>
    <div id="skill-sets">
        <div id="phone-space-6" class="phone-space"></div>
        <div>
            <h2 class="headline white-text">Our areas of expertise</h2>
            <div id="expertise-list">
                <div class="glass-card">
                    <h2>Wordpress/PHP</h2>
                    <p>
                        Wether you need a simple website or an enterprise ready CMS, we've got you covered.
                    </p>
                </div>
                <div class="glass-card">
                    <h2>React Native</h2>
                    <p>
                        We've built multiple mobile apps from the ground up using ReactJS, Yours could be the next one.
                    </p>
                </div>
                <div class="glass-card">
                    <h2>ReactJS/Svelte</h2>
                    <p>
                        Javascript based front-end applications is our bread and butter. Your imagination (and budget) is the limit.
                    </p>
                </div>
                <div class="glass-card">
                    <h2>Rust/WASM</h2>
                    <p>
                        Users are demanding more and more from our webapps. We can make websites function like desktop apps using web assembly.
                    </p>
                </div>
                <div class="glass-card">
                    <h2>Postgres/MySql</h2>
                    <p>
                        Rarely a project doesn't need a database. That's why we
                        keep our SQL skills sharp.
                    </p>
                </div>
                <div class="glass-card">
                    <h2>Rust &amp; JavaScript for Backend</h2>
                    <p>
                        This is the glue that ties most projects together. Where complex business logic is stored.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div style="height: 100vh; display: flex;">
        <div class="" style="max-width: 900px; margin: auto;">
            <h2 id="cta" class="headline white-text" style="margin: auto; margin-bottom: 100px;">Make your vision a reality</h2>
            <a class="button-anon-pen" href="https://www.upwork.com/workwith/justinmcintyredev"><span>Contact us on UpWork</span></a>
            <div></div>
        </div>
    </div>
        <div class="" style="max-width: 900px; margin: auto;">
        </div>
        <h2 class="headline white-text" style="margin: auto; margin-bottom: 100px;">Here's a few projects we built</h2>
    <div style="height: 100vh; display: flex;" id="showcase-1">
        <div class="glass-card left-3d" style="max-width: 400px;">
            <h3 class="" style="">Mobile Dating App</h3>
            <p>
                A dating app that plans dates based on the pair's intersest, so
                they can spend more time connecting and less time planning.
            </p>
        </div>
        <div class="phone-space">
        </div>
    </div>
    <img class="mobile" src="/assets/showcase/dating-app.png" style="max-width: 90vw;">
    <div style="height: 100vh; display: flex;" id="showcase-2">
        <div class="phone-space"></div>
        <div class="glass-card right-3d" style="max-width: 400px">
            <h3 class="" style="">
                Club website
            </h3>
            <p class="desktop">
                On the left you can see design docs we created for a local
                lifeguard club. 
            </p>
            <p class="mobile">
                Below you can see design docs we created for a local
                lifeguard club. 
            </p>
            <p>
                Our designs are mobile first because 56% of
                traffic is on mobile; that figure continues to grow every year
            </p>
        </div>
    </div>
    <img class="mobile" src="/assets/showcase/club-website.png" style="max-width: 90vw;">
    <!--
    <div style="height: 100vh; display: flex;" id="showcase-3">
        <div class="glass-card left-3d" style="margin: 50px">
            <h3 class="" style="">AI Notes Organizer</h3>
        </div>
        <div class="phone-space"></div>
    </div>
    -->
    <div style="height: 100vh; display: flex;">
        <div class="" style="max-width: 900px; margin: auto;">
            <h2 id="cta-2" class="headline white-text" style="margin: auto; margin-bottom: 100px;">Make your vision a reality</h2>
            <a class="button-anon-pen" href="https://www.upwork.com/workwith/justinmcintyredev"><span>Contact us on UpWork</span></a>
            <div></div>
        </div>
</main>
