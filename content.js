const e = document.createElement("div");
e.style.position = "fixed";
e.style.top = "0";
e.style.left = "0";
e.style.width = "100%";
e.style.height = "100%";
e.style.backdropFilter = "blur(8px)";
e.style.zIndex = "9999";
const inner = document.createElement("div");
inner.style.position = "fixed";
inner.style.top = "50%";
inner.style.left = "50%";
inner.style.transform = "translate(-50%, -50%)";
inner.style.padding = "50px";
inner.style.borderRadius = "8px";
inner.style.backgroundColor = "#333333";
inner.style.display = "flex";
inner.style.alignItems = "center";
inner.style.verticalAlign = "middle";
inner.style.color = "white";
inner.style.fontSize = "x-large";
inner.innerHTML = `
    <div>
        <h1 style="margin-bottom:10px">Why are you on YouTube?! 😕</h1>
        <h2 style="margin-bottom:10px">You're supposed to be studying! 🙄</h2>
        <p>May I suggest <a style="color:white;text-decoration:underline" href="https://open.spotify.com/playlist/5nAAoDHXORjgEwtdpEse6m?si=3f9be2cded984b87">listening to some music</a> while you study instead?</p>
    </div>
`;
e.appendChild(inner);
document.body.appendChild(e);
