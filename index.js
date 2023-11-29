let events = []

const list = document.querySelector(".list")

function render (){
    const html = events.map((event, index) => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return `
        <div class="grid-item">
        <h4>${event.name}</h4>
                <div class="description"><span style="font-weight: bold;">Description: </span> ${event.description}</div>
                <div class="date"><span style="font-weight: bold;">Date: </span>${formattedDate}</div>
                <div class="location"><span style="font-weight: bold;">Location: </span>${event.location}</p></div>
                <div class="button-container">
                <button type="button" onclick="deleteEvent(${index})">DELETE</button>
                </div>
            </div>
        `
    })
    list.innerHTML = html.join('')
}

function deleteEvent(index) {
 
    events.splice(index, 1);
  
    render();
}

async function fetchEvents(){
    const response = await fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    const data = await response.json()
    // console.log(data.data)
    events = data.data 
    // console.log(events)
    render()
}

fetchEvents()