var _11=document.getElementById('11');
var _12=document.getElementById('12');
var _13=document.getElementById('13');
var _21=document.getElementById('21');
var _22=document.getElementById('22');
var _23=document.getElementById('23');
var _31=document.getElementById('31');
var _32=document.getElementById('32');
var _33=document.getElementById('33');
var row1,row2,row3,col1,col2,col3,diag;

function check()
{
    if(_11.value!=0 && _12.value!=0 && _13.value!=0 && _21.value!=0 && _22.value!=0 && _23.value!=0 && _31.value!=0 && _32.value!=0 && _33.value!=0)
    {

        row1=Number(_11.value)+Number(_12.value)+Number(_13.value);
        row2=Number(_21.value)+Number(_22.value)+Number(_23.value);
        row3=Number(_31.value)+Number(_32.value)+Number(_33.value);
        col1=Number(_11.value)+Number(_21.value)+Number(_31.value);
        col2=Number(_12.value)+Number(_22.value)+Number(_32.value);
        col3=Number(_13.value)+Number(_23.value)+Number(_33.value);
        diag=Number(_11.value)+Number(_22.value)+Number(_33.value);
        console.log(row1,row2,row3,col1,col2,col3,diag);
        if(row1==row2 && row2==row3 && row3==col1 && col1== col2 && col2==col3 && col3==diag)
        {
            document.getElementById('status').innerHTML="Magic Square";
        }
        else
        {
            document.getElementById('status').innerHTML="Not Magic Square";
        }
    }
    else
    {
        alert("Please enter all the values");
    }

}

function reset()
{
   location.reload();
}