## Newton X Technical test - front end client.

This project is my submission for the Newton X Todo List Front End technical test.  I built this project with React JS, bootstrapped with create-react-app.  


### Setup
To get started, clone this repository, cd into directory, and run `$ npm start` or `$ yarn start`


### Project Structure
I created 3 Component for this project, 
  - `ListsContainer` - Stateful component responsible for creating, rendering and deleting Lists.
  - `List` - Stateful component responsible for creating, rendering and deleting Todos.
  - `Todo` - Stateless component that rendered a Todo item.
These components can be found in `./src/components`.  Styles can be found in `./src/App.css`.

### Design Decisions
  - State vs. Props - I wanted to keep any dependencies between ListsContainer, List and Todo at a minimum.  In theory ListsContainer should be able to holds a List of anything, not just Todos.
  
  - Scale - All data is stored in browser memory and lost on page refresh, so save data, it would have to be maintained in a DB.  If a user were to create hundreds of Lists and thousands of todos, it would likely not be wise to store everything in browser memory, instead you can store everything in a database and dispatch CRUD calls to the DB.

  - Immutable State - I do my best to clone data (specifically `state`) before doing most operations.  So that I know I have a fresh copy, as well as not inadvertently altering data/state.


### Example Todo List JSON data structures

```
ListsContainer
  {
    lists: [{
      id: 1,
      title: 'Grocery List'
    }, {
      id: 2,
      title: 'People to call'
    },{
      id: 4,
      title: 'Errands'
    }]
  }

List
  {
    todos: [{
      id: 1,
      task: 'Volunteer at SPCA'
    }, {
      id: 2,
      task: 'Pick up Cat and Dog treats'
    }, {
      id: 3,
      task: 'Adopt a pet'
    }]
  }
```
