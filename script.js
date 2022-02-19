var billamt=document.getElementById("billant")
var serviceQ=document.getElementById("serviceQual")
// var peopleNo=document.getElementById("peopelamt")

// alert(billamt)
// alert(serviceQ)
// alert(peopleNo)

var tip=document.getElementById("totalTip")
// alert(tip)
tip.style.visibility="hidden"


function calculateTip(){
    var bill_amount=billamt.value;
    // alert(bill_amount)
    var service=serviceQ.value;
    // alert(service)
    var numOfPeople=document.getElementById("peopleamt").value
    
    // Validate input

    if(bill_amount===""||serviceQ==0){
        alert("Please Enter the values:")
        return
    }
    //  Check to see if this input is empty or less than or equal to 1
    if(numOfPeople===""||numOfPeople<=1){
        numOfPeople=1;
        document.getElementById("each").style.display="none"
    
    }else{
        document.getElementById('each').style.display="block"
    }
    //  calculate tip

    var total=(bill_amount*serviceQ)/numOfPeople

    total=Math.round(total*100)/100
    total=total.toFixed(2);
    // display the tip

    // document.getElementById('toatlTip').style.display="block"
    document.getElementById('tip').innerHTML=total;

}

// Hide the tip amount on load

document.getElementById("totalTip").style.display="none"
document.getElementById('each').style.display="none"

// click to call function
document.getElementById("calculate").onclick=function(){
    calculateTip();
}




























