const passive = document.querySelector("#support-passive");
const q = document.querySelector("#support-q");
const w = document.querySelector("#support-w");
const e = document.querySelector("#support-e");
const r = document.querySelector("#support-r");

const abilities = document.querySelector("#support-abilities");


function information(evt){
    event.preventDefault();
    if(evt.target === passive){
        abilities.innerHTML = `<div id="support-abilities">
        <div class="fade-in-behind p4o centered">
            <h3 class="yellow shadow p2u">Abilities</h3>
        </div>
        <div class="support-video-wrapp yellow-border
        shadow-box">
            <video class="support-video" width="100" height="500" autoplay muted loop>
                <source src="./video/Senna - Passive.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="support-abilities-text centered p4o">
                <h4 class="blue p1u shadow"><span class=" yellow">Passive</span>  - Absolution</h4>
                <p><span class=" shadow-small">Senna’s Relic Cannon is slow to fire, but deals bonus damage. She can power up its range, Attack Damage, and Crit chance over time by absorbing Mist from enemy champions she’s attacking or from wraiths that spawn from dead enemies.</span></p>
        </div>
        <div id="support-grid" class="p4o">
            <img class=" xsmall-image yellow-border yellow-shadow" id="support-passive" src="img/senna-passive.jpeg">
            <img class=" xsmall-image  shadow-box" id="support-q" src="img/senna-q.jpeg">
            <img class="xsmall-image shadow-box" id="support-w" src="img/senna-w.jpeg">
            <img class="xsmall-image shadow-box" id="support-e" src="img/senna-e.jpeg">
            <img class="xsmall-image shadow-box" id="support-r"src="img/senna-r.jpeg">
        </div>
    </div>`;
    }else if(evt.target === q){
        abilities.innerHTML = `<div id="support-abilities">
        <div class="fade-in-behind p4o centered">
            <h3 class="yellow shadow p2u">Abilities</h3>
        </div>
        <div class="support-video-wrapp yellow-border
        shadow-box">
            <video class="support-video" width="100" height="500" autoplay muted loop>
                <source src="./video/Senna - Q.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="support-abilities-text centered p4o">
                <h4 class="blue p1u shadow"><span class=" yellow">Q</span>  - Piercing Darkness</h4>
                <p><span class=" shadow-small">Senna fires a bolt that heals her allies, and damages her foes. Senna can keep attacking to decrease Piercing Darkness’ cooldown.</span></p>
        </div>
        <div id="support-grid" class="p4o">
            <img class=" xsmall-image  yellow-shadow" id="support-passive" src="img/senna-passive.jpeg">
            <img class=" xsmall-image  yellow-border shadow-box" id="support-q" src="img/senna-q.jpeg">
            <img class="xsmall-image shadow-box" id="support-w" src="img/senna-w.jpeg">
            <img class="xsmall-image shadow-box" id="support-e" src="img/senna-e.jpeg">
            <img class="xsmall-image shadow-box" id="support-r"src="img/senna-r.jpeg">
        </div>
    </div>`;
    }else if(evt.target === w){
        abilities.innerHTML = `<div id="support-abilities">
        <div class="fade-in-behind p4o centered">
            <h3 class="yellow shadow p2u">Abilities</h3>
        </div>
        <div class="support-video-wrapp yellow-border
        shadow-box">
            <video class="support-video" width="100" height="500" autoplay muted loop>
                <source src="./video/Senna - W.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="support-abilities-text centered p4o">
                <h4 class="blue p1u shadow"><span class=" yellow">W</span>  - Last Embrace</h4>
                <p><span class=" shadow-small">Senna commands the Mist onto the first target hit, damaging them and then rooting that target and surrounding enemies after a brief delay.</span></p>
        </div>
        <div id="support-grid" class="p4o">
            <img class=" xsmall-image  yellow-shadow" id="support-passive" src="img/senna-passive.jpeg">
            <img class=" xsmall-image  shadow-box" id="support-q" src="img/senna-q.jpeg">
            <img class="xsmall-image yellow-border shadow-box" id="support-w" src="img/senna-w.jpeg">
            <img class="xsmall-image shadow-box" id="support-e" src="img/senna-e.jpeg">
            <img class="xsmall-image shadow-box" id="support-r"src="img/senna-r.jpeg">
        </div>
    </div>`;
    }else if(evt.target === e){
        abilities.innerHTML = `<div id="support-abilities">
        <div class="fade-in-behind p4o centered">
            <h3 class="yellow shadow p2u">Abilities</h3>
        </div>
        <div class="support-video-wrapp yellow-border
        shadow-box">
            <video class="support-video" width="100" height="500" autoplay muted loop>
                <source src="./video/Senna - E.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="support-abilities-text centered p4o">
                <h4 class="blue p1u shadow"><span class=" yellow">E</span>  -  Curse of the Black Mist</h4>
                <p><span class=" shadow-small">Senna dissolves into a cloud of mist, gaining movement speed and camouflaging her and her nearby allies. Teammates who emerge from the mist appear as unclickable wraiths to enemies until they either attack or get close.</span></p>
        </div>
        <div id="support-grid" class="p4o">
            <img class=" xsmall-image yellow-shadow" id="support-passive" src="img/senna-passive.jpeg">
            <img class=" xsmall-image  shadow-box" id="support-q" src="img/senna-q.jpeg">
            <img class="xsmall-image shadow-box" id="support-w" src="img/senna-w.jpeg">
            <img class="xsmall-image yellow-border shadow-box" id="support-e" src="img/senna-e.jpeg">
            <img class="xsmall-image shadow-box" id="support-r"src="img/senna-r.jpeg">
        </div>
    </div>`;
    }else if(evt.target === r){
        abilities.innerHTML = `<div id="support-abilities">
        <div class="fade-in-behind p4o centered">
            <h3 class="yellow shadow p2u">Abilities</h3>
        </div>
        <div class="support-video-wrapp yellow-border
        shadow-box">
            <video class="support-video" width="100" height="500" autoplay muted loop>
                <source src="./video/Senna - R.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="support-abilities-text centered p4o">
                <h4 class="blue p1u shadow"><span class=" yellow">R</span>  - Absolution</h4>
                <p><span class=" shadow-small">Senna fires a global beam. Allies in the beam are shielded and enemies caught in the center of it take damage.</span></p>
        </div>
        <div id="support-grid" class="p4o">
            <img class=" xsmall-image yellow-shadow" id="support-passive" src="img/senna-passive.jpeg">
            <img class=" xsmall-image  shadow-box" id="support-q" src="img/senna-q.jpeg">
            <img class="xsmall-image shadow-box" id="support-w" src="img/senna-w.jpeg">
            <img class="xsmall-image shadow-box" id="support-e" src="img/senna-e.jpeg">
            <img class="xsmall-image yellow-border shadow-box" id="support-r"src="img/senna-r.jpeg">
        </div>
    </div>`;
    }
    information();
}
// click evnt.
passive.addEventListener("click", information);
q.addEventListener("click", information);
w.addEventListener("click", information);
e.addEventListener("click", information);
r.addEventListener("click", information);
