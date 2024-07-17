const display = document.querySelector(`#display`);
const stops = document.querySelector(`#stop`);
const start = document.querySelector(`#start`);
const reset = document.querySelector(`#reset`);

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer;

start.addEventListener(`click`, watchStart);
stops.addEventListener(`click`, watchStop);
reset.addEventListener(`click`, watchReset);

function stoptWatch(){
    ms++;
    if(ms == 100){
        s++;
        ms = 0;
        if(s == 60){
            m++;
            s = 0;
            if(m == 60){
                h++;
                m = 0;
            }
        }
    }

    let hrs = h < 10 ? `0` + h : h;
    let min = m < 10 ? `0` + m : m;
    let sec = s < 10 ? `0` + s : s;
    let mls = ms < 10 ? `0` + ms : ms;

    display.innerHTML = hrs + `:` + min + `:` + sec + `:` + mls;

}

function watchStart(){
    timer = setInterval(stoptWatch,10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    display.innerHTML = `00:00:00:00`;
}
