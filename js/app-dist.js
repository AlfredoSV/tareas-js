"use strict";(()=>{const e=document.querySelector("#listaTareas"),t=document.querySelector("#tareaNombre"),a=document.querySelector("#desTarea"),n=()=>{e.innerHTML="",c.forEach(e=>{r(e)});document.querySelectorAll(".btn-danger").forEach((function(t){t.addEventListener("click",(function(t){if(c.splice(c.indexOf(t.target.id)),localStorage.setItem("tareas",JSON.stringify(c)),n(),!(localStorage.getItem("tareas")&&JSON.parse(localStorage.getItem("tareas")).length>0)){const t=document.createElement("img");t.src="../img/vacio.png",t.width=100,t.height=100,t.classList="img-fluid",e.appendChild(t)}t.preventDefault()}))}))},r=t=>{const a=document.createElement("div");a.id=t.id,a.classList="card mb-5";const n=document.createElement("div");n.classList="card-header",n.innerText=t.nombre,a.appendChild(n);const r=document.createElement("div");r.classList="card-body",a.appendChild(r);const c=document.createElement("p");c.classList="card-text",c.innerText=t.descrip,r.appendChild(c);const l=document.createElement("button");l.classList="btn btn-danger",l.innerText="Eliminar",l.id=t.id,r.appendChild(l),e.appendChild(a)};document.querySelector("#guardar").addEventListener("click",(function(e){""!=t.value&&""!=a.value?(c.push({id:uuid.v4(),nombre:t.value,descrip:a.value}),n(),localStorage.setItem("tareas",JSON.stringify(c)),t.value="",a.value=""):alert("Favor de llenar todos lo campos"),e.preventDefault()}));let c=[];if(localStorage.getItem("tareas")&&JSON.parse(localStorage.getItem("tareas")).length>0)c=JSON.parse(localStorage.getItem("tareas")),n();else{const t=document.createElement("img");t.src="../img/vacio.png",t.width=100,t.height=100,t.classList="img-fluid",e.appendChild(t)}})();