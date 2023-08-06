# polling_system_api

setup :

open vs code editor and then open its terminal and run below commands

npm install
node index.js

build a polling system api where user add a questions and each question have options so user add its option and votes. and user have functionality to delete particular options or questions

run following command on postman to use its feature
1. add question
   http://localhost:8000/questions/create
   and pass arguments that is name in the key field and value field put your question(example: who is the prime minister of india) inside body > x-www-form-encoded

2. add option to question
  http://localhost:8000/questions/{questions_id}/options/create
