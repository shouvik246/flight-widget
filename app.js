const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "PRG",
        flight: "OX 204",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "21:51",
        destination: "LONDON",
        flight: "OP 809",
        gate: "AZ 01",
        remarks: "DELAYED"
    }
]

destinations = ["BERLIN", "UAE", "GERMANY","BANGLADESH","NEPAL"];
remarks = ["DELAYED", "ON TIME", "CANCELED"];
let hour = 15;


function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable();

function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber){
    const numbers = '0123456789'
    if(maxNumber){

        const newNumber = numbers.slice(0,maxNumber+1)
        return newNumber.charAt(Math.floor(Math.random() * newNumber.length))

    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime(){
    let displayHour = hour

    if(hour < 24){
        hour ++
    }
    if(hour >= 24){
        hour = 1
        displayHour = hour
    }
    if(hour <10){
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRandomNumber(5)+generateRandomNumber() 
}

function shuffleUp() {

    flights.shift();
    flights.push({
        time : generateTime(),
        destination : destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + " " + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]    
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp,7000)