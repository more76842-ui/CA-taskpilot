function scrollToDemo(){
  document.getElementById("demo").scrollIntoView({behavior:"smooth"});
}
function submitDemo(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let msg=document.getElementById("msg");
  if(!name || !email){
    msg.style.color="red";
    msg.innerText="Please fill all fields";
    return;
  }
  msg.style.color="lightgreen";
  msg.innerText="Thank you! Our team will contact you soon.";
}
