# decoupled
Decoupled project with Drupal + React JS

Please follow the steps below for site setup:
1. In terminal type in : git clone git@github.com:bala-fed/decoupled.git
2. Move to the backend Drupal folder by : cd decoupled/backend
3. ddev config
4. site name: backend; website type: Drupal10
5. ddev start 
6. ddev import-db --target-db=dbname
7. Attach the db from the repo named decoupled.sql
8. ddev start 
9. Now navigate to frontend folder by: cd ../frontend
10. In terminal type in: npm install
11. npm run dev
12. Now copy the localhost url from the terminal and run the same in the browser