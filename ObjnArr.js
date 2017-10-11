var Lis={};
var stdin=process.openStdin();
var flag=0;
var count=5;
stdin.addListener("data",function(d){
    //console.log("entered word:"+d.toString().trim()); //to string b'coz the returned data is an object and has linfeed embedded at the end of it.
    // keep dding ht ewords to the list
    var addData=d.toString().trim();
    console.log('entered data is:',addData);
    
    if(flag==0){
        Lis.data=new Array(7);
        Lis.data.push(addData);
    }
    Lis.data.push(addData);
    count++;
    
    /*
    Lis.addData=d.toString(); //here addData becomes a property!!
    */
    
    var i=0;
    //display the list
    for(var v in Lis){
        
       console.log('items are :',v);
        i++;
        
    }
    i=0;
    
});
