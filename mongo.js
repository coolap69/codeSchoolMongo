// Mongo db from terminal

db.monsters.find().pretty()
{
        "_id" : ObjectId("5a84a2d63a1f62ada33ee105"),
        "Name" : "LLamacito",
        "Health" : 100,
        "Last fought" : "01/08/2018",
        "Attacks" : [
                "Deathly poison spit",
                "Kicking combo",
                "Neck strecth combo hit"
        ],
        "Attack" : [
                10
        ],
        "Defense" : [
                9
        ]
}
{
        "_id" : ObjectId("5a849c783a1f62ada33ee104"),
        "Name" : "Sharky",
        "Health" : 100,
        "Last fought" : "01/27/2018",
        "Attacks" : [
                "Deathly tail",
                "Sharp fins",
                "Run and bite"
        ],
        "Stats" : [
                "Attack",
                "Defense"
        ],
        "Attack" : [
                10
        ],
        "Defense" : [
                6
        ]
}

// from homework 

// Create a function that accepts the 4 attributes plus a 5th variable called db. This variable would reference the mongodb like in the shell. 
function monsters (Name, Health, Last fought, Attacks, db)
// Write the javascript code that would insert the four attributes into the “monster” collection as a new document.
monsters.insert() or db.monsters.insert
// Write the code that would then console.log all the documents inside the collection.
console.log(monsters) or console.log(db.monsters.find())
// Write the command that will find your monster based on a name
monsters.find(Name) or db.monsters.find({"Name":"Sharky"})
// Write the command that will find a monster based on one of the attacks it has (if possible use a command that will return more than one monster with the same attack type)
monsters.find(Attacks:Run and bite) or db.monsters.find({"Attacks":"Run and bite"})
// Write the command that will find a monster based on their defense stat.
monsters.find(Stats:defense) or db.monsters.find({"Stats.defense": 10})

 