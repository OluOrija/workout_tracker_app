# workout_tracker_app
 Workout Tracker App based on a youtube tutotial @ https://www.youtube.com/watch?v=3cD5UFWsNOA

1. Setup and intialising the project
- ```Code 
npx create-expo-app@latest Workouts -t blank ```
- Uploaded dummy data to assets folder
- setup jsconfig.json file

2. Importing and Displaying data
- Imported data from json file
- Styled the display with Stylesheet css

3. FlatLists and Custom Components
- Changed App.js to consumer the ExerciseListItem custom component and passed in the exercises array and the data object

4. Use Expo Router to setup the Navigation 
- Setup - https://docs.expo.dev/router/installation/#install-dependencies

5. Exercise Details Implementation
- Setting up file based routing with the app/index.js file
- Getting to grips with the use of square brackets for dynamic paths

6. Exercises Graphql API
- Setup the IBM API Connect which has replaced stepzen - Read getting started guide after setup
- cd to /api folder, run stepzen start to start api. (Follow getting started to authenticate cli)
- Fixed graphql-request issue by downgrading
- Had issues using .env files (To be revisited at a later point)
- Updated the exercise details page to fetch data based on the exercise name passed, and this is cached using the exercise name as the api does not provide and $id field
