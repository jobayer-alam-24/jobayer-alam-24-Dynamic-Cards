const makeRequest = async (config) => {
    try{
        const getLink = await axios(config);
        return getLink.data;
    }catch(err){
        throw Error("Couldn't find any data!");
    }
};
const cardsCon = document.querySelector('.cards');
const loadData = async () => {
    const dataGet = await makeRequest('https://jsonplaceholder.typicode.com/posts')
    dataGet.map((info) => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        cardDiv.innerHTML = `<h4>${info.title}</h4>
        <p>${info.body}</p>`;

        cardsCon.appendChild(cardDiv);
    });
    
};
loadData();