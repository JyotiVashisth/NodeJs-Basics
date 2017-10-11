var Lis={};
var stdin=process.openStdin();
var flag=0;
var count=0;
stdin.addListener("data",function(d){
    //console.log("entered word:"+d.toString().trim()); //to string b'coz the returned data is an object and has linfeed embedded at the end of it.
    
    console.log('count is: ',count);
    
    var addData=d.toString().trim();
    console.log('entered data is:',addData);
    
    //add multiple properties to the list
    Lis[addData]='xy';
    
    var keys=Object.keys(Lis).length;
    console.log('length is: ',keys);
    count++;
    
    //view the properties added
    console.log('and the items are:');
    for(var v in Lis){ //this takes the property!!!!
        console.log(v);
    }
    
    //view the value of the properties
    for(var v in Lis){
        console.log(Lis[v]);
    }
    
});
