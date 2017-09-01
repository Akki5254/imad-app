// Counter Code 
var button = document.getElementById('counter');

button.onclick = function(){
    //Create request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
             //Capture a list of names and render it as a list
             var names = request.responseText;
             names = JSON.parse(names)
                
                var list = '';
                for(var i=0; i< names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                    
                }
                
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;   
            }
        }
        //Not Done Yet
    }; 
    
    //Make the Request
    request.open('GET', 'http://itsmetheviper26.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Create request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
             //Capture a list of names and render it as a list
             var names = request.responseText;
             names = JSON.parse(names);
                
                var list = '';
                for(var i=0; i< names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                    
                }
                
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;   
            }
        }
        //Not Done Yet
    }; 
    
    //Make the Request
    request.open('GET', 'http://itsmetheviper26.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
    
};