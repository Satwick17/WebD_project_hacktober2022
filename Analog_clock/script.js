setInterval(() => {
    d = new Date();
    hrt = d.getHours();
    mint = d.getMinutes();
    sect = d.getSeconds();
    hrot = 30*hrt + mint/2;
    mrot = 6*mint;
    srot = 6*sect;

    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}, 1000);
