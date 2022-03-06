# PhoneCatalog - Code Challenge

Develop of a APP from scratch that runs on the server (AWS - Ubuntu - Nginx) using React App and Node JS.

The service shows a catalog of phones given the user the option to delete and add new phones.

To access the app you can click here 📲 http://phonecatalog.heinznaumann.com/

Every phone has the following data:

- Name
- Manufacturer
- Description
- Photo from the phone. Each ad will have only one photo.
- Screen 
- Price
- Processor
- Ram

# WEB-API/Node.js/MongoDB 

## Starting PhoneCatalogNode/ 🚀

- Clone the repository:  

HTTPS:  
`git clone https://github.com/HeinzNaumann/PhoneCatalog.git`  

SSH:  
`git clone git@github.com:HeinzNaumann/PhoneCatalog.git`  

### Pre-Requirments 📋  

Need to have installed and running:

- MongoDB  
- Node  

### Installation API Node PhoneCatalogNode/ 🔧

You need to be inside the folder you want to run then:

Install dependency:  
`npm install`  

Initialize Database with 6 test adsfacilitate access.
`node installDb.js`

Start Aplication:
`npm start`  

The default port is 3001, to change it you only need to access the bin folder in the file www line 17.
`var port = normalizePort(process.env.PORT || '3001');`  

## Conection to the data base

Create a file at the root of the .env project by copying the contents of .env.example

En .env.example sustituir la ruta de ejemplo por la que deseas usar



### Schema article ⌨️

- Name
  - type: string
  - required: yes
- Manufacturer
  - type: string
  - required: yes
- Description
   - type: string
   - required: yes
- Photo 
  - type: number
  - required: yes
 - Price 
  - type: number
  - required: yes
- Screen 
   - type: string
   - required: yes
- Processor
   - type: string
   - required: yes
- Ram
   - type: number
   - required: yes


# WEB-APP/React App 

## Starting PhoneCatalogReact/ 🚀

### Installation SPA React PhoneCatalogNode/ 🔧

You need to be inside the folder PhoneCatalogNode/ then

Install dependency:  
`npm install`  

Start Aplication:
`npm start`  

The default port is App Base Url is http://node.heinznaumann.com, to change it you only need to access to file .env and change the route at your desire.


## Author ✒️

- **Heinz Naumann** - (<https://github.com/heinznaumann>)
