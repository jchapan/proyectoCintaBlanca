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

var descripcion=0
var cantidad=0
var recurrencia=0

var gastos =[
    {id:1, desc:"Gas", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:2, desc:"Colegiatura", cant:"20000", cat:"Colegiatura", rec:"Mensual"},
    {id:3, desc:"Super", cant:"2000", cat:"Consumos", rec:"Semanal"},
    {id:3, desc:"Luz", cant:"2000", cat:"Servicios", rec:"Mensual"}
]

var graficaGastos =[
    {cant:"3000", cat:"Servicios"},
    {cant:"20000", cat:"Colegiatura"},
    {cant:"8000", cat:"Consumos"},
]

var graficaIngresos =[
    {cant:"8000", cat:"Servicios"},
    {cant:"50000", cat:"Sueldos"},
    {cant:"100000", cat:"Comisiones"},
]

var ingresos =[
    {id:1, desc:"Sueldo", cant:"50000", cat:"Sueldos", rec:"Mensual"},
    {id:2, desc:"Comisiones", cant:"100000", cat:"Comisiones", rec:"Mensual"},
    {id:3, desc:"Asesoria", cant:"8000", cat:"Servicios", rec:"No recurrente"}
]

function listaGasto(){
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

function listaIngreso(){
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

function extraGasto(){
    descripcion = document.getElementById("descGasto").value;
    cantidad = document.getElementById("cantGasto").value;
    recurrencia = document.getElementById("inputGroupSelect01Gastos").value;
    console.log(descripcion, cantidad, recurrencia)
    if(descripcion!=0 && cantidad!=0){
    var data = {id:gastos.length+1, desc:descripcion, cant:cantidad, cat:"Servicios", rec:recurrencia};
    gastos.push(data);
    console.log(data)
    listaGasto()
    }else alert("Por favor ingresa los datos completos")
}

  am4core.ready(function() {
  
  // Themes begin
  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdivGastos", am4charts.PieChart);
  
  // Add data
  chart.data = graficaGastos;
  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "cant";
  pieSeries.dataFields.category = "cat";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  
  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  
  }); // end am4core.ready()

  am4core.ready(function() {
  
    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivIngresos", am4charts.PieChart);
    
    // Add data
    chart.data = graficaIngresos;
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cant";
    pieSeries.dataFields.category = "cat";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()
