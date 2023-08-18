
    "use strict";

    const listaTareas = document.querySelector("#listaTareas");
    const nombreTarea = document.querySelector("#tareaNombre");
    const fechaTarea = document.querySelector("#tareafecha");
    const horaTarea = document.querySelector("#tareaHora");   
    const desTarea = document.querySelector("#desTarea");
    let btnBorr = document.querySelectorAll(".btn-danger");
    let tareas=[];

    const listaVacia = () =>{
        const img =document.createElement("img");
        img.src = './img/vacio.png';
        img.width = 100;
        img.height = 100;
        img.classList = 'img-fluid';
        listaTareas.appendChild(img);
    }

    const agregarAListaTareas = (tarea) => {
        
        const card = document.createElement("div");
        card.id = tarea.id;
        card.classList = "card mb-5";
        const cardH = document.createElement("div");
        cardH.classList = "card-header";
        cardH.innerText = `Nombre: ${tarea.nombre}`;
        card.appendChild(cardH);

        const cardB = document.createElement("div");
        cardB.classList = "card-body";
        card.appendChild(cardB);

        const pDes = document.createElement("p");
        pDes.classList = "card-text";
        pDes.innerText = `Descripción: ${tarea.descrip}`;
        cardB.appendChild(pDes);

        const pFech = document.createElement("p");
        pFech.classList = "card-text";
        pFech.innerText = `Fecha: ${tarea.fecha}`;
        cardB.appendChild(pFech);

        const pHor = document.createElement("p");
        pHor.classList = "card-text";
        pHor.innerText = `Hora: ${tarea.hora}`;
        cardB.appendChild(pHor);

        const estatus = document.createElement("p");
        estatus.classList = "card-text";
        estatus.innerText = `Estatus: ${tarea.estatus}`;
        cardB.appendChild(estatus);

        const bEli = document.createElement("button");
        bEli.classList = "btn btn-danger m-2";
        bEli.innerText = "Eliminar";
        bEli.id = tarea.id;
        cardB.appendChild(bEli);

        const bEdi = document.createElement("button");
        bEdi.classList = "btn btn-info m-2";
        bEdi.innerText = "Eliminar";
        bEdi.id = tarea.id;
        cardB.appendChild(bEdi);

        listaTareas.appendChild(card);
    }
    
    const actualizarTareas = () => {
        listaTareas.innerHTML = '';
        tareas.forEach((tarea) => {           
            agregarAListaTareas(tarea);
        });
        btnBorr = document.querySelectorAll(".btn-danger");
        btnBorr.forEach(function (elemento) {
            elemento.addEventListener("click", function (e) {
                tareas.splice(tareas.indexOf(e.target.id));
                localStorage.setItem('tareas', JSON.stringify(tareas));
                actualizarTareas();
                if(!(localStorage.getItem("tareas") && JSON.parse(localStorage.getItem("tareas")).length > 0)){
                    listaVacia();
                }
                e.preventDefault();
            });
        });

    }

    document.querySelector("#guardar").addEventListener("click", function (e) {
        
        e.preventDefault();

        if (nombreTarea.value !== '' && desTarea.value !== '' && fechaTarea.value !== ''
        && horaTarea.value !== '') {
            tareas.push({ id: uuid.v4(), nombre: nombreTarea.value, descrip: desTarea.value,
            fecha :  fechaTarea.value, hora : horaTarea.value, estatus : "Pendiente" })
            actualizarTareas();
            localStorage.setItem('tareas', JSON.stringify(tareas));
            nombreTarea.value = "";
            desTarea.value = "";
            return;
        }
        
        alert("Favor de llenar todos lo campos");
       
    });


    if(localStorage.getItem("tareas") && JSON.parse(localStorage.getItem("tareas")).length > 0){
        
        tareas = JSON.parse(localStorage.getItem("tareas")); 
        actualizarTareas();

    }else{   

        listaVacia();
    }


