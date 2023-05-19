const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("input_image");
    const formData = new FormData();
    formData.append("title", name.value);
    formData.append("input_image", files.files[0]);
    fetch("https://handloam.onrender.com/image", {
        method: 'POST',
        body: formData,
    })
        .then((res) => res.json())
        .then(res => {
            location.replace("http://127.0.0.1:8080/")
        })
        .catch((err) => ("Error occured", err));
});
