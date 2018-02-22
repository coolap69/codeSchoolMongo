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
db.monsters.insert
// Write the code that would then console.log all the documents inside the collection.
console.log(db.monsters.find())
// Write the command that will find your monster based on a name
db.monsters.find({"Name":"Sharky"})
// Write the command that will find a monster based on one of the attacks it has (if possible use a command that will return more than one monster with the same attack type)
db.monsters.find({"Attacks":"Run and bite"})
// Write the command that will find a monster based on their defense stat.
db.monsters.find({"Stats.defense": 10})


var mongo = function(db) {
//Write the command that will find all monsters with an attack lower than 10
db.monsters.find({"Stats.Attack":{"$lt":10}})                
//Write the command that will find all monsters with a level above 5 but below 15 inclusive
db.monsters.find({"Level":{"$gt":5,"$lt":15}})
//Write the command to find monsters that do not have the “bite” attack. 
db.monsters.find({"Attacks":{"$ne":"Run and bite"}})
//Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
db.monsters.find({"Level":{"$lt":6}},
{"Name":true, "Level":true, "Health":true})
//Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
db.monsters.find({"Stats.Attack":{"$gt":10,"$lt":20}},
{"Health":false, "Style":false})
//Write the command to find out how many monsters are in the collection.
db.monsters.find().count()
//Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
db.monsters.sort({"Level":-1})

}

//Please complete the following syntax to group together our monsters by their type
db.monsters.aggregate([ {"$group":{"_id":"$type"}}])

//Please complete the following syntax to group the monsters together by their type, 
//then include a count of all the monsters for that type and that types average attack. 
//(the first three items are the answer to the prior question)
db.monsters.aggregate([ {"$group":{"_id":"$type", "total":{"$sum":1}, "averageAttack":{"$avg":1}}}])