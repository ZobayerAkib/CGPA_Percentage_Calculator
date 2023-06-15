
window.onload=()=>
{
    // need to fetch dom(document object model) element that's why we need to use document,queryselector
    console.log(document.querySelector('#btn'));
    const btn=document.querySelector('#btn');
    btn.addEventListener('click',calculation);
    const btn2=document.querySelector('#btn2');
    btn2.addEventListener('click',ClearForm);
}

function calculation()
{
    const cgpa=document.querySelector('#cgpa').value;
    //const result=document.querySelector('#Result').value;
    console.log(cgpa);

    if(!cgpa || isNaN(cgpa) || cgpa < 0)
    {
        Result.innerText = 'Invalid CGPA. Please provide Collect CGPA.';
        Result.classList.add('error-message');
         return;
    }

    const mainResult= ((cgpa*100)/4).toFixed(3);

//    Result.innerText=`Your CGPA is :  ${mainResult}%`;

   if(mainResult>85.00 && mainResult<=90.00)
   {
    Result.innerText=`Your CGPA  => ${mainResult}% ,Which is Very Good.`;
   }
   else if(mainResult>90.00)
   {
    Result.innerText=`Your CGPA  =>  ${mainResult}% ,Which is Excellent.`;
   }
   else if(mainResult>=70.00 && mainResult<85.00)
   {
    
     Result.innerText=`Your CGPA  =>  ${mainResult}% ,Which is Good.`;
    
   }
   else
   {
    Result.innerText=`Your CGPA  => ${mainResult}% ,Which is Good.`;
   }

   
}
function ClearForm()
{
    //const cgpa=document.querySelector('#cgpa').value;
    //const result=document.querySelector('#Result').value;
    
    document.getElementById('cgpa').value = '';
   Result.innerText='Result will be display here.'

    
  
    // Resetting a form
    document.getElementById('myForm').reset();
}
