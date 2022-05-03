window.onload= function(){
    let body = document.getElementById('body');
    let nombreFinal = document.querySelector('.pNombre');
    let imgSus = document.getElementById("imgSus");
    const audio = new Audio('./sus.mp3');
    let alumnos = ["Ricardo Sánchez", "Ana Karen", "Antonio Sebas", "Mia Constanza", "Andrés Rojas", "Andrea Barrios", "José Morales", "Edgar Jesús", "Christian Isaac", "Jenny Torres",
                    "Regina Lara", "Yadid Sebastián", "Zadig Alberto", "Mariana López", "Ana Martinez", "Santiago Pedro", "Gian Marco", "Frida Sofía", "José Antonio", "María José", "Gabriel Eduardo",
                    "Diego Castañón", "Erick Daniel", "Santiago Danda", "Valentina Castro", "Araceli Pueblita", "Gloria Aranza", "Fernando Samuel", "César Daniel", "Daniela Cárdenas", "Julieta Melina", "Bruno Eduardo",
                    "Crisopher Israel", "Rommel Karim", "Ilse Andrea", "Aurora Balseira"];

    console.log(alumnos);
    let boton = document.getElementById("buscar");
    let nombrePantalla = document.getElementById("p_nombre");


    boton.addEventListener("mouseover", ()=>{
        console.log("OVER");
        imgSus.style.opacity = '100';
    })
    boton.addEventListener("mouseleave", ()=>{
        console.log("LEAVE");
        imgSus.style.opacity = '0';
    });


    boton.addEventListener("click", ()=>{
        audio.play();
        
        let numOriginal = Math.floor(Math.random() * (37-1) );
        console.log(numOriginal);
        let contadorNombres=0;
        new Promise((resolve, reject)=>{
            function nombreRandom(){
                let num_random = Math.floor(Math.random() * (37-1) );
                // console.log(alumnos[num_random]);
                nombrePantalla.innerHTML=alumnos[num_random];
                if(contadorNombres<36){
                    contadorNombres++
                    // console.log(contadorNombres);
                }else{
                    clearInterval(idInterval);
                }          
            }   
            let idInterval = setInterval(nombreRandom, 150);

            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    nombrePantalla.innerHTML = alumnos[numOriginal];
                    console.log("Hola");
                    nombreFinal.classList.add('animate__animated', 'animate__tada');                    
                }, 6200);
            })
           
        })

                 
       
        console.log(numOriginal);
        console.log(alumnos[numOriginal]);
        nombrePantalla.innerHTML = alumnos[numOriginal];
        nombreFinal.classList.remove('animate__animated', 'animate__tada');


        // body.style = ;

        // console.log(alumnos[num_random]);
    })
}