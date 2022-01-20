![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Mongoose Lab

Your task is to write a `dbTest.js` driver file that:
- Opens a connection to MongoDB with `mongoose`
- Imports the `Company.js` model
- Fires off queries to MongoDB **_in order_** 

There is no express, so the app should run once, perform the actions described, in the order in which they're described, and then exit.

## Asynchronous code
As you write multiple queries, you may notice that things aren't happening in the same order that you think they should.  
This is because database access is an asynchronous operation.  Where do you put code that you want to execute _after_ you've done your database read/write?  

If you want one database operation to happen after another one, you'll have to start it inside the callback that happens after the first one is done. 

## Setup

### Models
1. Create a schema for a `Company`
    - name (string, required, unique)
    - founded (Date)
    - employees (Number)
    - products (array of Strings)
    - CEO (object with below properties)
        - name (String)
        - age (Number)

### Queries
1. Delete all data from the `Company` collection
1. Create Apple
    - name: Apple Computer Company
    - founded: April 1, 1976
    - employees: 6658
    - products: ['computers']
    - CEO:
        - name: Steve Jobs
        - age: 43
1. Create Google
    - name: Google
    - founded: September 4, 1998
    - employees: 3000
    - products: ['search']
    - CEO:
        - name: Larry Page
        - age: 28
1. Update Apple
    - name: Apple Inc
    - employees: 147000
    - products: ['computers', 'phones']
    - CEO:
        - name: Tim Cook
        - age: 61
1. Update Google
    - name: Alphabet Inc
    - employees: 135301
    - products: ['search', 'maps', 'email']
    - CEO:
        - name: Sundar Pichai
        - age: 49
1. Find Google
    - log its employees
1. Find Apple
    - log its employees

## Hungry for More?
See if you can rewrite this file using one of the other JavaScript syntaxes for asynchronous code.

You may have gotten used to one syntax in class, but out in the wild you may see multiple different ways to perform the same task!

Compare and contrast the three methods and their benefits and downsides!

### 1. Callbacks
```js
Company.find({}, (err, allCompanies) => {
    if(err) {
        console.log(err)
    } else {
        console.log(allCompanies)
    }
})
```


### 2. `Promise` chaining with `.then()` + `.catch()`
```js
Company.find({})
    .then((allCompanies) => {
        console.log(allCompanies)
    })
    .catch((err) => {
        console.log(err)
    })
```


### 3. `async` / `await`
```js
async function findAllTweets() {
    try {
        const allCompanies = await Company.find({})
        console.log(allCompanies)
    } catch(err) {
        console.log(err)
    }
}
```