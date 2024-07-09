# Converting curl requests to work in powershell
Tip : Triple quotes

stepzen import curl --request POST 'https://eu-west-2.aws.data.mongodb-api.com/app/data-mxdjpma/endpoint/data/v1/action/insertOne' -H 'Content-Type: application/json' -H 'Access-Control-Request-Headers: *' -H 'api-key: hoIsaLbFGdWLLdQc40pZ6wajnj9G60k5uHeG1e610UAkhSj6iQIJrZkAVB7qlrzj' --data '{"""collection""":"""sets""","""database""":"""workouts""","""dataSource""":"""Cluster1""", """document""": { """exercise""":"""push""","""weight""":"""4""","""reps""":"""2"""}}'