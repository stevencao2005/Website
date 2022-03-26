function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(function (res) {
        console.log(res.message);
        document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
    })
}

function getSpecificImage() {
    const name = document.querySelector('#dog-name').value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((res) => res.json())
    .then(function (res) {
        if (res.status === "error") {
            alert("woof woof ! no dog found : (");
        } else {
            console.log(res.message);
            document.querySelector("#dog-image").style.backgroundImage = `url("${res.message}")`;
        }
    })
}