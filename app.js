
// const cabin = document.getElementById("cabinato");
// const insertButton = document.getElementById("insertButton");
// const realSite = document.getElementById("realSite");
const discordButtons = document.getElementsByClassName("discordButton");
const telegramButtons = document.getElementsByClassName("telegramButton");
const twitterButtons = document.getElementsByClassName("twitterButton");
const instagramButtons = document.getElementsByClassName("instagramButton");
// const discordButtonsBig = document.getElementsByClassName("discordButtonBig");
// const telegramButtonsBig = document.getElementsByClassName("telegramButtonBig");
// const twitterButtonsBig = document.getElementsByClassName("twitterButtonBig");
// const copyButtons = document.getElementsByClassName("copyButton");
// const homeButton = document.getElementById("homeButton");
// const homeButtons = document.getElementsByClassName("homeButton");
const chartButtons = document.getElementsByClassName("openChartButton");
const getCoinButtons = document.getElementsByClassName("openGetCoinButton");
const getNFTButtons = document.getElementsByClassName("openGetNFT");
const etherescanButtons = document.getElementsByClassName("openEtherScan");
const interactFunctions = {
    zoomCabin: function () {
        // cabin.classList.add("arcade-machine-zoom");
        // insertButton.classList.add("insertButton-zoom");
        // setTimeout(function(){
        //     cabin.style.display = "none";
        //     realSite.style.display = "unset";
        //     realSite.classList.add("real-site-zoom");
        //     cabin.classList.remove("arcade-machine-zoom");
        //     insertButton.classList.remove("insertButton-zoom");
        // }, 1000);

    },
    homeButton: function () {
        // realSite.classList.add("dissolve-real-site");
        // setTimeout(function(){
        //     realSite.classList.remove("real-site-zoom");
        //     realSite.style.display = "none";
        //     realSite.classList.remove("dissolve-real-site");
        //     cabin.style.opacity = "0";
        //     cabin.style.display = "unset";
        //     cabin.classList.add("return-cabin");
        //     setTimeout(function(){
        //         cabin.style.opacity = "1";
        //         cabin.classList.remove("return-cabin");
        //     }, 1000);
        // }, 250);

    },
    discordButton: function () {
        window.open("https://discord.gg/nUSSPNMfZ2");
    },
    telegramButton: function () {
        window.open("https://t.me/InsertCoin25c");
    },
    twitterButton: function () {
        window.open("https://twitter.com/InsertCoin25C");
    },
    instagramButton: function () {
        window.open("https://www.instagram.com/insertcoin25c_official/");
    },
    copyButton: function () {
        alert("Non mangiare dove si copia!");
    },
    chartButton: function () {
        // window.open("https://www.dextools.io/app/uniswap/pair-explorer/0x465d676bc576eac77f3a69c5454a84294cea5092");
        // alert("Coming soon!");
    },
    getCoinButton: function () {
        // window.open("https://app.uniswap.org/#/swap?outputCurrency=0x76851a93977bea9264c32255b6457882035c7501&use=V2");
        // alert("Coming soon!");
    },
    getNFTButton: function () {
        window.open("https://opensea.io/");
    },
    etherescanButton: function () {
        window.open("https://etherscan.io/address/0xcB00ed46D3e84f144d067eaaFf36c3C064138EC3");
        // alert("Coming soon!");
    }
}
// insertButton.addEventListener("mousedown", interactFunctions.zoomCabin);
// homeButton.addEventListener("mousedown", interactFunctions.homeButton);
// copyButton.addEventListener("mousedown", interactFunctions.copyButton);
// for (const button in copyButtons) {
//     copyButtons.item(button).addEventListener("mousedown", interactFunctions.copyButton);
// }
// for (const button in homeButtons) {
//     homeButtons.item(button).addEventListener("mousedown", interactFunctions.homeButton);
// }
for (const button in discordButtons) {
    discordButtons.item(button).addEventListener("mousedown", interactFunctions.discordButton);
}
for (const button in telegramButtons) {
    telegramButtons.item(button).addEventListener("mousedown", interactFunctions.telegramButton);
}
for (const button in twitterButtons) {
    twitterButtons.item(button).addEventListener("mousedown", interactFunctions.twitterButton);
}
for (const button in instagramButtons) {
    instagramButtons.item(button).addEventListener("mousedown", interactFunctions.instagramButton);
}

for (const button in chartButtons) {
    chartButtons.item(button).addEventListener("mousedown", interactFunctions.chartButton);
}

for (const button in getCoinButtons) {
    getCoinButtons.item(button).addEventListener("mousedown", interactFunctions.getCoinButton);
}

// for (const button in getNFTButtons) {
//     getNFTButtons.item(button).addEventListener("mousedown", interactFunctions.getNFTButton);
// }

for (const button in etherescanButtons) {
    etherescanButtons.item(button).addEventListener("mousedown", interactFunctions.etherescanButton);
}

const clipboard = new ClipboardJS('.copyButton', {
    text: function () {
        return "0xcB00ed46D3e84f144d067eaaFf36c3C064138EC3";
    }
});

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

// for (const button in discordButtonsBig) {
//     discordButtonsBig.item(button).addEventListener("mousedown", interactFunctions.discordButton);
// }
// for (const button in telegramButtonsBig) {
//     telegramButtonsBig.item(button).addEventListener("mousedown", interactFunctions.telegramButton);
// }
// for (const button in twitterButtonsBig) {
//     twitterButtonsBig.item(button).addEventListener("mousedown", interactFunctions.twitterButton);
// }

try {
    let countdown = document.getElementById("dateCountdown");
    let availableElement = document.getElementById("availableForAlloween");

    let countDownDate = new Date("2021-10-31T21:00:00Z").getTime();
    let stopDate = new Date("2021-11-01T02:00:00Z").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let distanceForStop = stopDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        countdown.innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0 && distanceForStop >= 0) {
            // clearInterval(x);
            countdown.innerHTML = "Happy HALLOWEEN!";
            availableElement.remove();
        } else if (distanceForStop < 0) {
            clearInterval(x);
            countdown.innerHTML = "";
            // let rootElement = document.getElementById("root");
            // rootElement.classList.remove("hide");
            availableElement.remove();
            let buttonAnchor = document.getElementById("nft-section-button-anchor");
            let pButton = document.createElement("p");
            let getButton = document.createElement("button");
            pButton.classList.add("style3");
            pButton.classList.add("ic-section-nft-buttons");
            getButton.classList.add("simpleButton");
            getButton.innerText = "GET NFT";
            getButton.addEventListener("click", interactFunctions.getNFTButton);
            pButton.appendChild(getButton);
            buttonAnchor.appendChild(pButton);
        }
    }, 1000);
} catch (e) {
}