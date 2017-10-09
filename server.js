var express = require('express');
var morgan = require('morgan');
// edited from shubham pandey........................................vanditi file
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles =
{
 'article-one':{
    title:'Article One',
    heading:'head',
    date:'Sep 5,2016',
    content:"    Hi"
    
},
 'article-two':{
    title:'Article Two',
    heading:'head',
    date:'Sep 5,2016',
    content:"    Hi"
    
},
 'article-three':{
    title:'Article Three',
    heading:'head',
    date:'Sep 5,2016',
    content:"    Hi"
    
}
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =`
<html>
    <head>
    <title>
        Article One
    </title>
    
   <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
      <div class= "container">
        <div>
        <a href= "/">Home</a>
       </div>
         <hr/>
         <h3>
             ${heading}
         </h3>
      <div>
         ${date}
      </div>
      <div>
          ${content}
      </div>
      </div>
    </body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
  res.send(createTemplate(article[articeName]));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
