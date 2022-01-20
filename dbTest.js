const mongoose = require('mongoose')
const Company = require('./models/Company')

const mongoURI = "mongodb://127.0.0.1:27017/companyDB"

mongoose.connect(mongoURI, () => {
    console.log('Mongoose has connected to MongoDB')
})

const apple = {
    name: 'Apple Computer Company',
    founded: new Date('April 1, 1976'),
    employees: 6658,
    products: ['computers'],
    CEO: {
        name: 'Steve Jobs',
        age: 43
    }
}

const google = {
    name: 'Google',
    founded: new Date('September 4, 1998'),
    employees: 3000,
    products: ['search'],
    CEO: {
        name: 'Larry Page',
        age: 28
    }
}

function main() {
    // Your code here!
    Company.deleteMany({}, (err, deleted) => {
        if(err) return console.log(err)
        console.log(`${deleted.deletedCount} documents have been deleted`)


        Company.create(apple, (err, createdCompany) => {
            if(err) return console.log(err)
            console.log(`Created ${createdCompany.name}`)
            
            Company.create(google, (err, createdCompany) => {
                if(err) return console.log(err)
                console.log(`Created ${createdCompany.name}`)
                
                Company.findOneAndUpdate(
                    { name: "Apple Computer Company" },
                    {
                        name: "Apple Inc",
                        employees: 147000,
                        products: ['computers', 'phones'],
                        CEO: {
                            name: "Tim Cook",
                            age: 61,
                        }
                    },
                    { new: true },
                    (err, updatedCompany) => {
                    if(err) return console.log(err)
                    console.log(`Updated ${updatedCompany.name}`)

                    Company.findOneAndUpdate(
                        { name: 'Google' },
                        {
                            name: "Alphabet Inc",
                            employees: 135301,
                            products: ['search', 'maps', 'email'],
                            CEO: {
                                name: 'Sundar Pichai',
                                age: 49
                            }
                        },
                        { new: true },
                        (err, updatedCompany) => {
                            if(err) return console.log(err)
                            console.log(`Updated ${updatedCompany.name}`)
                        }
                    )
                })
            })
        })
    })
}

main()