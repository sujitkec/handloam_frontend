const content = document.getElementById('content')

fetch("http://localhost:8089/getsamples")
    .then(res => res.json())
    .then(res => {
        for (r of res) {
            console.log(r)
            content.innerHTML += `
            <div class="sample">
                <img src="http://localhost:8089/${r.imageUrl}" class="img"/>
                <p>Name: ${r.title}</p>
                <a href="http://localhost:8089/select-img/${r._id}">onboard</a>
            </div>
            `
        }
    })
