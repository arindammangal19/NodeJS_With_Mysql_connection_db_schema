


   var mysql = require("mysql");

   var con = mysql.createConnection({
                                      host:"localhost", user:"root", password:"root", database:"node_dB89"

                                    });


       con.connect(function(error)
                   {
                        if(error)
                        {
                           throw error;
                        }

                         console.log("Connected!");

                         //con.query("CREATE DATABASE node_dB89", function(error, result)
                                                                //{
                                                                   // if(error)
                                                                   // {
                                                                     //  throw error;
                                                                    //}
                                                                      
                                                                   // console.log("Database Created!");

                                                                //});

                          //var sql = "CREATE TABLE employees(id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";

                          //  var sql = "CREATE TABLE employee2(id INT PRIMARY KEY, name VARCHAR(255), age INT(3), city VARCHAR(255))";

                           //var sql = "ALTER TABLE employee2 ADD COLUMN salary INT(10)";

                          //var sql = "INSERT into EMPLOYEES(id, name, age, city) values('1', 'Ajeet Kumar', '27', 'Allahabad')";

                        // var sql = "INSERT into EMPLOYEES(id, name, age, city) values ?";

                         // var values = [
                                         // ['2', 'Bharat Kumar', '25', 'Mumbai'],
                                         // ['3', 'John Cena', '35', 'Las Vegas'],
                                         // ['4', 'Ryan Cook', '15', 'CA']
                                       //];

                         /* con.query(sql, [values], function(error, result)
                                         {
                                              if(!!error)
                                              {
                                                throw error;
                                              }*/

                                              //console.log("Table Created!");

                                              // console.log("Table Altered!");
                                               
                                               //console.log("1 record inserted");

                                             // console.log("Number of records inserted: "+result.affectedRows);

                                         //});

                                  /*con.query("SELECT * from employees", function(error, result)
                                                                       {
                                                                          if(error)
                                                                          {
                                                                             throw error;
                                                                          }

                                                                           console.log(result);

                                                                       });*/



                            /*var sql = "UPDATE employees SET city='Delhi' where City='Allahabad'";


                             con.query(sql, function(error, result)
                                            {
                                                if(error)
                                                {
                                                   throw error;
                                                }

                                                console.log(result.affectedRows + "records updated");

                                            });*/


                              /* var sql = "DELETE FROM employees WHERE city = 'Delhi'";

                                con.query(sql, function(error, result)
                                               { 
                                                   if(error)
                                                   {
                                                      throw error;
                                                   }
                                                    
                                                    console.log("Number of records deleted: "+result.affectedRows);

                                               });*/


                               /* var sql = "INSERT into EMPLOYEES(id, name, age, city) values('1', 'Ajeet Kumar', '27', 'Allahabad')";

                               con.query(sql, function(error, result)
                                               { 
                                                   if(error)
                                                   {
                                                      throw error;
                                                   }
                                                    
                                                    console.log("1 record inserted");

                                               });*/

                                 /*con.query("SELECT * from employees", function(error, result)
                                                                       {
                                                                          if(error)
                                                                          {
                                                                             throw error;
                                                                          }

                                                                           console.log(result);

                                                                       });*/


                                 /*con.query("SELECT * from employees WHERE id = '1'", function(error, result)
                                                                       {
                                                                          if(error)
                                                                          {
                                                                             throw error;
                                                                          }

                                                                           console.log(result);

                                                                       });*/

                                  /*con.query("SELECT * from employees WHERE city LIKE 'L%'", function(error, result)
                                                                       {
                                                                          if(error)
                                                                          {
                                                                             throw error;
                                                                          }

                                                                           console.log(result);

                                                                       });*/

                                     var sql = "drop table employee2";

                                     con.query(sql, function(error, result)
                                                    {
                                                        if(error){throw err;}

                                                        console.log("Table deleted!");
                                                    });

                                           

                   });