var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yvonne18",
  database: "bamazontwoDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
   for(var i=0; i<res.length; i++) {
     console.log(res[i].id+' || '+res[i].productName+' || '+res[i].departmentName+' || '+res[i].price+' || '+res[i].stockQuanity+'');
   } 
  askQuestions(res);
  })
}
var askQuestions = function(res){
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: "What Would you like to buy today?"
  }]).then(function(answer){
    var correct = false;
    for(var i=0;i<res.length;i++){
      if(res[i].productName==answer.choice){
        correct=true;
        var product=answer.choice;
        var id=i;
        inquirer.prompt({
          type: 'input',
          name: 'quanity',
          message: "How many of this item?",
          validate: function(value){
            if(isNaN(value)==false){
              return true;
            }else {
              return false;
            }
          }
        }).then(function(answer){
          if((res[id].stockQuanity-answer.quanity)>0){
            connection.query("UPDATE products SET stockQuanity='"+(res[id].stockQuanity-answer.quanity)+"' WHERE productName='"+product
            +"'", function(err,res2){
              console.log("Product is all yours!");
              afterConnection();
            })
          }else {
            console.log("Not Valid!")
            askquestions(res);
          }
        })
        
      }
    }
  })
}






