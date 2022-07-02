document.addEventListener("DOMContentLoaded", () => {
    fetchMonster()
    createMonsterForm()
    document.querySelector("#monster-form").addEventListener('submit', (event) => {
        event.preventDefault()
        let name = document.querySelector('#monster-name')
        let age = document.querySelector('#monster-age')
        let description = document.querySelector('#monster-description')

        monsterObj = {
            name,
            age,
            description
        }
        console.log(monsterObj)
        postNewMonster()
    })
})


const createMonsterForm = () => {
    let container = document.querySelector("#monster-container")
    console.log(container)
fetch('http://localhost:3000/monsters/?_limit=20&_page=1')
.then(resp => resp.json())
.then(monsterData => {
   monsterData.forEach((monster) => {
       let card = document.createElement('div')
       let name = document.createElement('h4')
       let age = document.createElement('4')
       let description = document.createElement('p')
       name.innerText = monster.name
       age.innerText = `Age: ${monster.age}`
       description.innerText = `Bio: ${monster.description}`

       card.append(name, age, description)
       container.append(card)
   })
})
}