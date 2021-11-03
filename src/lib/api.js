const FIREBASE_DOMAIN = 'https://react-getting-started-855d9-default-rtdb.firebaseio.com/'


export async function getSinglePerson(personID){
    const personData = await fetch(`${FIREBASE_DOMAIN}/persons/${personID}.json`)
    .then(res=>res.json())
    .then(data=>data)
    return personData;
}

export async function getAllPerson() {
    // const dataDone = fetch(`${FIREBASE_DOMAIN}/persons.json`)
    //     .then((res) => res.json())
    //     .then((data) => data)
    //     return dataDone;

    const personData = await fetch(`${FIREBASE_DOMAIN}/persons.json`).then(res=>res.json())
    .then((data) =>{
        const personsToArr = [];

        for (const key in data) {
            const personObj = {
              
              ...data[key],
              id: key,
            };
        
            personsToArr.push(personObj);
          }
          return personsToArr;
    })

    return personData;
   
}

export async function addPerson(personData) {
    await fetch(`${FIREBASE_DOMAIN}/persons.json`, {
        method: 'POST',
        body: JSON.stringify(personData),
        headers: {
            'Content-Type': 'apllication/json',
        }
    })
    .then(res=>res.json())
    .then()
}

export async function removePerson(personID) {
    await fetch(`${FIREBASE_DOMAIN}/persons/${personID}.json`, {
        method: 'DELETE',
        body: JSON.stringify(personID),
        headers: {
            'Content-Type': 'apllication/json',
        }
    })
    .then(res=>res.json())
    .then( )
}

export async function updatePerson(personData) {
    console.log(personData);
    await fetch(`${FIREBASE_DOMAIN}/persons/${personData.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(personData),
        headers: {
            'Content-Type': 'apllication/json',
        }
    })
    .then(res=>res.json())
    .then()
}