**Creating a GraphQL API** 
-----------------------------------

Tools used:

 - Koa as web framework 
 - Knex as SQL query builder 
 - PostgreSQL for the database 
 - Dataloader for caching 

Make a POST request to localhost:3000/api where content-type is JSON(application/json) and Authorization Header is Bearer authorized

POST /api:   
   

     {
        "query": "{h1: hero(id:2) { id firstName lastName heroName enemy { heroName } } h2: hero(id:1) { id firstName lastName heroName enemy { heroName } }}"
    }


POST /api:   
   

    {
    "query": "{heroes { id firstName lastName heroName }}"
    }
