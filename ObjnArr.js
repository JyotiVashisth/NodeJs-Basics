var Lis={};
var arr=[];//created an array
var stdin=process.openStdin();
var flag=0;
var count=0;
stdin.addListener("data",function(d){
    //console.log("entered word:"+d.toString().trim()); //to string b'coz the returned data is an object and has linfeed embedded at the end of it.
    
    console.log('count is: ',count);
    
    var addData=d.toString().trim();
    
    console.log('entered data is:',addData);
    
    //add multiple properties to the list
    //create an array with the desired valuesa and then add it to the list
    //var obj={name:addData};
    //var eval(d.toString().trim();)=[];
    //eval(d.toString().trim();).push('xy');
    //Lis.push(eval(d.toString().trim();));
    //Lis[addData]='xyz';
    
    /*edit-2 
    var client='xyz';
    var subscriber='{'+client+'}';
    var ObjToAdd={};
    ObjToAdd[addData]='client';
    
    Lis[ObjToAdd]='';
    
    */
    
    //Add an object to the array
    
    var pat=/pub/;
    var Ob={};
    if(pat.test(addData)){ //if a publisher
        Ob[addData]='';    
    }
    else{
        //check which publisher to subscriber to 
        //var subs=findsubs(addData);
        var pa=/23/;
        var sub;
        if(pa.test(addData)){
            sub='subscriber1';
        }
        else{
           sub='subscriber2'; 
        }
        
        Ob[sub]=addData
    }
    
    
    arr.push(Ob);
    
    
    for(var v in arr){
        console.log(arr[v]);
    }
    
    
    /*edit-1
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
        for(var p in v){
        console.log(v[p]);
        }
    }
    */
});
