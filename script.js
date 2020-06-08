var i=0
var txt
var fila
var siguiente
var total=0
var totalIngresos=0
var totalGastos =0
var totalIng =0

var user=0
var pass=0
var validUsers= ['jose', 'dany', 'eduardo']
var validPass= ['1234', '4567', '5678']
var x
var y
var h=0

var descripcion=0
var cantidad=0
var recurrencia=0

var gastos =[
    {id:1, desc:"Gas", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:2, desc:"Colegiatura", cant:"20000", cat:"Colegiatura", rec:"Mensual"},
    {id:3, desc:"Super", cant:"15000", cat:"Consumos", rec:"Mensual"},
    {id:4, desc:"Luz", cant:"2000", cat:"Servicios", rec:"Mensual"},
    {id:5, desc:"Telefono", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:6, desc:"Celular", cant:"1000", cat:"Servicios", rec:"Mensual"},
    {id:7, desc:"Tarjeta Banamex", cant:"5000", cat:"Consumos", rec:"Mensual"},
    {id:8, desc:"Tarjeta Amex", cant:"7000", cat:"Consumos", rec:"Mensual"},
]


var graficaBalance =[
    {total:"52000", inGas:"Egresos"},
    {total:"68000", inGas:"Ingresos"},
]

var ingresos =[
    {id:1, desc:"Sueldo", cant:"50000", cat:"Sueldos", rec:"Mensual"},
    {id:2, desc:"Comisiones", cant:"10000", cat:"Comisiones", rec:"Mensual"},
    {id:3, desc:"Asesoria", cant:"8000", cat:"Servicios", rec:"No recurrente"}
]

var contador=0
function listaGasto(){
    console.log(contador)
    if (contador == 0) {
        gastos.forEach(i => {
        console.log(i);
        var a1 = i.id
        var b = i.desc
        var neg = parseInt(i.cant*-1)
        var c = "$" + new Intl.NumberFormat("en-US").format(neg)
        var d = i.cat
        var e = i.rec
        console.log(a1, b, c, d, e)
        fila = `<tr><th> ${a1}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaGastos").appendChild(btn);
        total = total+neg
        txt = document.getElementById('totalGasto');
        txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(total);
    })
        contador=contador+1
    }
}

var contadorIngresos=0

function listaIngreso(){
    if (contadorIngresos == 0) {
    ingresos.forEach(i => {
        console.log(i);
        var a2 = i.id
        var b = i.desc
        var pos = parseInt(i.cant)
        var c = "$" + new Intl.NumberFormat("en-US").format(pos)
        var d = i.cat
        var e = i.rec
        console.log(a2, b, c, d, e)
        fila = `<tr><th> ${a2}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaIngresos").appendChild(btn);
        totalIngresos = totalIngresos+pos
        txt = document.getElementById('totalIngreso');
        txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(totalIngresos);
    });
    contadorIngresos=contadorIngresos+1
}
}

var contadorBalance=0

function balance(){

    if(contadorBalance==0){
    ingresos.forEach(i => {
        console.log(i);
        var a3 = i.id
        var b = i.desc
        var pos = parseInt(i.cant)
        var c = "$" + new Intl.NumberFormat("en-US").format(pos)
        var d = i.cat
        var e = i.rec
        console.log(a3, b, c, d, e)
        fila = `<tr><th> ${a3}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaBalance").appendChild(btn);
        totalIng = totalIng+pos
        return totalIng
    });
    
    var a4 = ingresos.length+1

    gastos.forEach(i => {
        console.log(i);
        var b = i.desc
        var neg = parseInt(i.cant*-1)
        var c = "$" + new Intl.NumberFormat("en-US").format(neg)
        var d = i.cat
        var e = i.rec
        // console.log(a4, b, c, d, e)
        fila = `<tr><th> ${a4}</th><td> ${b}</td><td> ${c}</td><td> ${d}</td><td> ${e}</td></tr>`
        var btn = document.createElement("TR");
        btn.innerHTML=fila;        
        document.getElementById("tablaBalance").appendChild(btn);
        totalGastos = totalGastos+(i.cant*-1)
        a4=a4+1
        return totalGastos
    });
    console.log(totalIng,totalGastos);
    var totalFinal=totalIng+totalGastos
    console.log(totalFinal);
    txt = document.getElementById('totalBalance');
    txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(totalFinal);
    totalIng=0
    totalGastos=0
    totalFinal=0
    contadorBalance=contadorBalance+1
}
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
        user = document.getElementById('username').value;
        user.innerHTML="";
        pass = document.getElementById('password').value;
        pass.innerHTML="";
    } else alert("User o Password Invalido")
}

// var reg = 0
// var v = 0
// var desc = 0
// var cant = 0
// var cate = 0
// var recu = 0
// var a = 0




// function extraGasto(reg)    {

   
//         console.log(v);
//         if (reg == 0) {}
//         a = v + 1
//         var desc = document.getElementById("descGasto").value;
//         var cant = document.getElementById("cantGasto").value;
//         // var cate = document.getElementById("tipodegasto").value;
//         var recu = document.getElementById("inputGroupSelect01Gastos").value;
//         // var cant = document.getElementById("gridRadios").value;
//         // var cant = document.getElementById("recurrencia").value;
//         fila = `<tr><th> ${a}</th><td> ${desc}</td><td> ${cant}</td><td><td> ${cate}</td><td><td>${recu}</td><td> `
//         var btn = document.createElement("TR");
//         btn.innerHTML=fila; 
//             console.log(a)
//             console.log(desc)
//             console.log(cant)
//             console.log(cate)
//             console.log(recu)

//             document.getElementById("tablaGastos").appendChild(btn);    

        

//     }   


//     var regI = 0
//     var w = 0
//     var descI = 0
//     var cantI = 0
//     var cateI = 0
//     var recuI = 0
//     var b = 0    




//     function extraIngreso(regI)    {

   
//         console.log(v);
//         if (regI == 0) {}
//         b = w + 1;
//         var descI = document.getElementById("descGasto").value;
//         var cantI = document.getElementById("cantGasto").value;
//         // var cateI = document.getElementById("tipodeingreso").value;
//         var recuI = document.getElementById("inputGroupSelect01Ingresos").value;
//         // var cantI = document.getElementById("gridRadios").value;
//         // var cantI = document.getElementById("recurrencia").value;
//         fila = `<tr><th> ${a}</th><td> ${desc}</td><td> ${cant}</td><td><td> ${cate}</td><td><td>${recu}</td><td> `
//         var btn = document.createElement("TR");
//         btn.innerHTML=fila; 
//             console.log(a)
//             console.log(desc)
//             console.log(cant)
//             console.log(cate)
//             console.log(recu)

//             document.getElementById("tablaIngreso").appendChild(btn);    

        

//     }   


function extraGasto(){
    descripcion = document.getElementById("descGasto").value;
    cantidad = document.getElementById("cantGasto").value;
    recurrencia = document.getElementById("inputGroupSelect01Gastos").value;
    console.log(descripcion, cantidad, recurrencia)

    if(document.getElementById("gridRadios1Gastos").checked){
        var categoriaGastos="Consumos"
    }

    if(document.getElementById("gridRadios2Gastos").checked){
        var categoriaGastos="Servicios"
    }

    if(document.getElementById("gridRadios3Gastos").checked){
        var categoriaGastos="Colegiatura"
    }
    
    if(descripcion!=0 && cantidad!=0){
    var idGasto=gastos.length+1
    var data = {id:idGasto, desc:descripcion, cant:cantidad, cat:categoriaGastos, rec:recurrencia};
    gastos.push(data);
    console.log(data)
    var neg = parseInt(cantidad*-1)
    var c = "$" + new Intl.NumberFormat("en-US").format(neg)
    fila = `<tr><th> ${idGasto}</th><td> ${descripcion}</td><td> ${c}</td><td>${categoriaGastos}</td><td> ${recurrencia}</td></tr>`
    var btn = document.createElement("TR");
    btn.innerHTML=fila;        
    document.getElementById("tablaGastos").appendChild(btn);
    total = total+neg
    txt = document.getElementById('totalGasto');
    txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(total);
    generaGraficGastos()
    }else alert("Por favor ingresa los datos completos")
}

function extraIngreso(){
    descripcion = document.getElementById("descIngreso").value;
    cantidad = document.getElementById("cantIngreso").value;
    recurrencia = document.getElementById("inputGroupSelect01Ingresos").value;
    console.log(descripcion, cantidad, recurrencia)

    if(document.getElementById("gridRadios1Ingresos").checked){
        var categoriaIngresos="Sueldos"
    }

    if(document.getElementById("gridRadios2Ingresos").checked){
        var categoriaIngresos="Servicios"
    }

    if(document.getElementById("gridRadios3Ingresos").checked){
        var categoriaIngresos="Comisiones"
    }

    if(descripcion!=0 && cantidad!=0){
    var idIng=ingresos.length+1
    var data = {id:idIng, desc:descripcion, cant:cantidad, cat:categoriaIngresos, rec:recurrencia};
    ingresos.push(data);
    console.log(data)
    var pos = parseInt(cantidad)
    var cc = "$" + new Intl.NumberFormat("en-US").format(pos)
    fila = `<tr><th> ${idIng}</th><td> ${descripcion}</td><td> ${cc}</td><td> ${categoriaIngresos}</td><td> ${recurrencia}</td></tr>`
    var btn = document.createElement("TR");
    btn.innerHTML=fila;        
    document.getElementById("tablaIngresos").appendChild(btn);
    totalIngresos = totalIngresos+pos
    txt = document.getElementById('totalIngreso');
    txt.innerHTML = "$" + new Intl.NumberFormat("en-US").format(totalIngresos);
    generaGraficIngresos()
    }else alert("Por favor ingresa los datos completos")
}


function generaGraficGastos(){
    x = document.getElementById("chartdivGastos");
    x.style.display = "block";
    
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_frozen);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
        
        
        
        var chart = am4core.create("chartdivGastos", am4charts.SlicedChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        
        chart.data = gastos
        
        var series = chart.series.push(new am4charts.PictorialStackedSeries());
        series.dataFields.value = "cant";
        series.dataFields.category = "desc";
        series.alignLabels = true;
        
        series.maskSprite.path = iconPath;
        series.ticks.template.locationX = 1;
        series.ticks.template.locationY = 0.5;
        
        series.labelsContainer.width = 200;
        
        chart.legend = new am4charts.Legend();
        chart.legend.position = "left";
        chart.legend.valign = "bottom";
        
        }); // end am4core.ready()

        // // anychart
        // anychart.onDocumentReady(function () {
        //     // set chart theme
        // anychart.theme('lightTurquoise');
        //         // create pie chart with passed data
        //         var chart = anychart.pie3d(graficaGastos);
        
        //         // set chart title text settings
        //         chart
        //           .title('Gastos')
        //           // set chart radius
        //           .radius('43%')
        //           // create empty area in pie chart
        //           .innerRadius('30%');
        
        //         // set container id for the chart
        //         chart.container('containerAny');
        //         // initiate chart drawing
        //         chart.draw();
        //       });
}

function generaGraficIngresos(){
    x = document.getElementById("chartdivIngresos");
    x.style.display = "block";
    am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivIngresos", am4charts.PieChart);
    
    // Add data
    chart.data = ingresos
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cant";
    pieSeries.dataFields.category = "desc";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = false;
    
    var rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.strokeModifier = rgm;
    pieSeries.slices.template.strokeOpacity = 0.4;
    pieSeries.slices.template.strokeWidth = 0;
    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    
    }); // end am4core.ready()
}

function generaGraficBalance(){
    x = document.getElementById("chartdivBalance");
    x.style.display = "block";
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_frozen);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartdivBalance", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        
        chart.data = graficaBalance;

        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;  
        
        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "total";
        series.dataFields.category = "inGas";
        
        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = true;
        
        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        
        chart.legend = new am4charts.Legend();
        
        }); // end am4core.ready()
}