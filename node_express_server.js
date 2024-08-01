// #This is our pipeline, which connects node express server to our front end with the MYSQL Database.

var express = require("express");
var cors = require("cors");
var mysql = require("mysql");
var form_access = require("formidable");

var app = express();

// Add cors to the entire server
app.use(cors());

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"*********",
    database:"batch_4"
})

connection.connect((err) => {
    if(err){
        console.log("Error connecting to database - ", err);
    }
    else{
        console.log("Connected to database!")
    }
})

function insert_data_to_db(data){
    var insert_query = "INSERT INTO user_info VALUES (?,?,?,?)";
    var query_data = data

    connection.query(insert_query,query_data, (err, result) =>{
        if(err){
            console.log("Error writing to table ", err);
        }
        else{
            console.log("Content written to the table", result)
        }
    })
}

function get_data(res){
    var select_query = "SELECT *  FROM user_info";

    connection.query(select_query, (err, result) =>{
        if(err){
            console.log("Error writing to table ", err);
        }
        else{
            console.log("Content written to the table", result)
            res.send(result);
        }
    } )
}

app.get('/',cors(), function(req, res){ 
    res.send("Hello world!"); 
    });   
    
app.get('/get_data',cors(), function(req, res){ 
    get_data(res);
    
    });  

app.get('/store_data', cors(), function(req, res){
    var my_dummy_array = ["hakima_trial", 33, "Vancouver", "Flying"];
    insert_data_to_db(my_dummy_array);
    res.send("data inserted!")
})

app.post('/save_data',cors(), function(req, res){ 
    var my_form = new form_access.IncomingForm();
    my_form.parse(req, function(err,field,file){
        if (field.u_name != null){
            var user_name = field.u_name;
            var user_age = field.u_age;
            var user_city = field.u_city;
            var user_hobby = field.u_hobby;
            var my_db_array = [user_name, user_age, user_city, user_hobby]
            insert_data_to_db(my_db_array)
        }
        res.send("Data inserted!"); 
        })
    
    }); 

app.get('/age_filtered_data/:age',cors(), function(req, res){
    var age_data = req.params.age
    res.send("Filter data"); 
    });  

// only use in the end of the server after all endpoints have been created
app.get('*',cors(), function(req, res){ 
    res.send("You have used an incorrect URL, please check!")
    });  



app.listen(8082)