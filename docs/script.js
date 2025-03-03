function loadData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById('data-container');
            container.innerHTML = ""; // Clear old data

            data.items.forEach(item => {
                let div = document.createElement('div');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                div.style.padding = "10px";
                div.style.borderBottom = "1px solid #ddd";
                container.appendChild(div);
            });
        })
        .catch(error => console.log('Error loading data:', error));
}
