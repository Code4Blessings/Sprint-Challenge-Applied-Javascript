// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data.topics);
    const topicsArray = response.data.topics;
    topicsArray.map(subject => {
        const newTab = Tabs(subject);
        topics.append(newTab);
    })

})
.catch(error => {
    console.log("Found an error")
})

function Tabs(topic) {
    //Elements
    const tab = document.createElement('div');

    //Classes
    tab.classList.add('tab');

    //Text Content
    tab.textContent = topic;

    return tab;
}