var i=0
var txt
var fila
var siguiente
var total=0

var user=0
var pass=0
var validUsers= ['jose', 'dany', 'eduardo']
var validPass= ['1234', '4567', '5678']
var x
var y

var gastos =[
    {id:1, desc:"Gas", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:2, desc:"Colegiatura", cant:"20000", cat:"Colegiatura", rec:"Mensual"},
    {id:3, desc:"Super", cant:"2000", cat:"Consumos", rec:"Semanal"}
]

var ingresos =[
    {id:1, desc:"Sueldo", cant:"50000", cat:"Sueldos", rec:"Mensual"},
    {id:2, desc:"Comisiones", cant:"100000", cat:"Comisiones", rec:"Mensual"},
    {id:3, desc:"Asesoria", cant:"8000", cat:"Servicios", rec:"No recurrente"}
]

function extraGasto(){
    gastos.forEach(i => {
        console.log(i);
        var a = i.id
        var b = i.desc
        var neg = parseInt(i.cant*-1)
        var c = "$" + new Intl.NumberFormat("en-US").format(neg)
        var d = i.cat
        var e = i.rec
        console.log(a, b, c, d, e)
        fila = `<tr><th> ${a}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaGastos").appendChild(btn);
        total = total+neg
        txt = document.getElementById('totalGasto');
        txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(total);
    });
    total=0
}

function extraIngreso(){
    ingresos.forEach(i => {
        console.log(i);
        var a = i.id
        var b = i.desc
        var pos = parseInt(i.cant)
        var c = "$" + new Intl.NumberFormat("en-US").format(pos)
        var d = i.cat
        var e = i.rec
        console.log(a, b, c, d, e)
        fila = `<tr><th> ${a}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaIngresos").appendChild(btn);
        total = total+pos
        txt = document.getElementById('totalIngreso');
        txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(total);
    });
    total=0
}

function balance(){
    ingresos.forEach(i => {
        console.log(i);
        var a = i.id
        var b = i.desc
        var pos = parseInt(i.cant)
        var c = "$" + new Intl.NumberFormat("en-US").format(pos)
        var d = i.cat
        var e = i.rec
        console.log(a, b, c, d, e)
        fila = `<tr><th> ${a}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaBalance").appendChild(btn);
        total = total+pos
    });
    gastos.forEach(i => {
        console.log(i);
        var a = i.id
        var b = i.desc
        var neg = parseInt(i.cant*-1)
        var c = "$" + new Intl.NumberFormat("en-US").format(neg)
        var d = i.cat
        var e = i.rec
        console.log(a, b, c, d, e)
        fila = `<tr><th> ${a}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaBalance").appendChild(btn);
        total = total+neg
    });
    txt = document.getElementById('totalBalance');
    txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(total);
    total=0
}


function revisaUser(){
    user = document.getElementById('username').value;
    console.log(user)
    pass = document.getElementById('password').value;
    console.log(pass)
    if(user==0 || pass==0){
        alert("Ingresa tu User y Pass");
    } else if(validUsers.includes(user) && validPass.includes(pass)){
        x = document.getElementById("privado");
        x.style.display = "block";
        y = document.getElementById("principal");
        y.style.display = "none";
    } else alert("User o Password Invalido")
}