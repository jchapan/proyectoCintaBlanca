var i=0
var txt
var fila
var siguiente

var gastos =[
    {id:1, desc:"Gas", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:2, desc:"Colegiatura", cant:"20000", cat:"Colegiatura", rec:"Mensual"},
    {id:3, desc:"Super", cant:"2000", cat:"Consumos", rec:"Semanal"}
]

function extra(){
    gastos.forEach(i => {
        console.log(i);
        var a = i.id
        var b = i.desc
        var c = "$" + new Intl.NumberFormat("en-US").format(i.cant)
        var d = i.cat
        var e = i.rec
        console.log(a, b, c, d, e)
        fila = `<tr><th> ${a}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaGastos").appendChild(btn);
    });
}

var reg = 0
var v = 0
var desc = 0
var cant = 0




function reggas(reg)    {

   
        console.log(v);
        if (reg == 0) {}
        a = v + 1
        var desc = document.getElementById("descripcion").value;
        var cant = document.getElementById("cantidad").value;
        fila = `<tr><th> ${a}</th><td> ${desc}</td><td> ${cant}</td><td> `
        var btn = document.createElement("TR");
        btn.innerHTML=fila; 
            console.log(a)
            console.log(desc)
            console.log(cant)
            document.getElementById("tablaGastos").appendChild(btn);    

        

    }   












  






// function reggas(reg)   {
//     if (reg == 1)   
//         var desc = document.getElementById("descripcion");
//         // desc.innerHTML = ;
//             console.log(desc);



//     }
//     }
    
