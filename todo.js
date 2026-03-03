 const addbtn = document.getElementById('addbtn')
 const inputtext = document.getElementById('input-text')
 const tasklist = document.getElementById('tasklist')

 const add = addbtn.addEventListener('click',()=>{
    const inputdata= inputtext.value.trim();
    if(inputdata!==''){
       const li= document.createElement('li')
       li.innerHTML=`${inputdata}
       
       <button class="deletebtn" >Delete</button>
       `
       
       li.querySelector('.deletebtn').addEventListener('click',()=>{
        li.remove();
       })

       tasklist.appendChild(li)
       inputdata.value="";

    }

   

})

 



   