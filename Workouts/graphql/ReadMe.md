## GraphQL Exercises API ##
This project sets up a GraphQL API server to interact with an external Exercises API. It allows querying exercises based on various criteria such as name, type, muscle group, difficulty, and more.

### Prerequisites ###
Before you begin, ensure you have the following installed on your machine:

Node.js (version >= 12.20.0)
npm (Node Package Manager) or yarn

### Getting Started ###
Follow these instructions to get the project up and running on your local machine.

#### Installation #### 
Clone the repository:
```bash
git clone <repository-url>
cd graphql-exercises-api
```
Install dependencies:
``` bash
npm install
```

#### Configuration ####
Set up your environment variables:

Create a .env file in the root directory of the project and add the following environment variables:
``` makefile
API_KEY=your_api_key_here
PORT=4000
``` 
Replace your_api_key_here with your actual API key for the Exercises API.

#### Running the Server ####
To start the GraphQL server, run the following command:

``` bash
npm start
```
This will start the server at http://localhost:4000/graphql. You can access the GraphQL Playground (GraphiQL) to test and execute queries.

#### Example Query ####
Here's an example query you can run in the GraphQL Playground:

``` graphql
{
  exercises(name: "push-up", type: "strength", muscle: "chest", difficulty: "beginner", limit: 5) {
    name
    type
    muscle
    equipment
    difficulty
    instructions
  }
}
```

#### Project Structure ####
src/schema.mjs: Defines the GraphQL schema and queries.
src/server.mjs: Sets up an Express server to handle GraphQL requests.
.env: Stores environment variables such as API key and server port.

#### License ####
This project is licensed under the MIT License - see the LICENSE file for details.

#### Acknowledgments ####
GraphQL: GraphQL Documentation (https://graphql.org/learn/)
Express: Express.js Documentation (https://expressjs.com/)


