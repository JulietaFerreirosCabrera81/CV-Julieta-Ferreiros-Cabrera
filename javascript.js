const datos = {
   "nombre": "Julieta Ferreiros Cabrera",
   "nacimiento": "15 de Marzo de 1981",
   "Nacionalidad": "Argentina",
   "email": "julietafc81@gmail.com",
   "celular":"11-6049-7293",
   "github": "JulietaFerreirosCabrera81",
   "curso1": "REACT  JS  FRONT  END, Codo a codo 4.0 || Agosto - Diciembre 2022",
   "curso2": "REACT  DE  CERO  A  EXPERTO (Hooks y MERN), Udemy - Fernando Herrera || Agosto - Diciembre 2022",
   "curso3": "PRIMERA  ETAPA  SE  PROGRAMAR, Argentina Programa || Septiembre - Octubre 2022",
   "curso4": "FULL  STACK  DESARROLLO  WEB JAVASCRIPT / NODE JS , Codo a Codo 4.0 || Marzo - Julio 2022",
   "curso5": "LICENCIADA  EN  INSTRUMNETACION  QUIRURGICA , Universidad de Morón facultad de Medicina || 2009", 
   "curso6": "TECNICO  SUPERIOR  EN  INSTRUMNETACION  QUIRURGICA, Escuela Central de Especialidades Paramédicas De Cruz Roja Argentina || 2005",
   "experiencia1":"INSTRUMENTADORA  QUIRÚRGICA (Independiente) || 2019 - 2022",
   "experiencia2":"INSTITUTO  DE  ONCOLOGÍA  ÁNGEL  H.  ROFFO UBA  || 2016 - 2019 ",
   "experiencia3":"INSTRUMENTADORA  QUIRÚRGICA (Independiente) || 2014 - 2016",
   "experiencia4":"ALEXANDER  FLEMING  S.A - Primer Instituto Privado de Oncología  || 2006 - 2014 ",
};

document.getElementById('boton1').addEventListener('click', function(){
    document.getElementById('data1').innerHTML = (
        "NOMBRE: " + datos.nombre + "<br>" + "<br>" +
        "FECHA DE NACIMIENTO: " + datos.nacimiento + "<br>" + "<br>" +
        "NACIONALIDAD: " + datos.Nacionalidad + "<br>" + "<br>" +
        "CELULAR: " + datos.celular + "<br>" + "<br>" +
        "E-MAIL: " + datos.email + "<br>" + "<br>" +
        "GITHUB: " + datos.github 
        )
});
    
document.getElementById('boton2').addEventListener('click', function(){
    document.getElementById('data2').innerHTML = (
        datos.curso1 + "<br>" +"<br>" + 
        datos.curso2 + "<br>" +"<br>" + 
        datos.curso3 + "<br>" +"<br>" + 
        datos.curso4 + "<br>" +"<br>" + 
        datos.curso5 + "<br>" +"<br>" + 
        datos.curso6 
        )
});

document.getElementById('boton3').addEventListener('click', function(){
    document.getElementById('data3').innerHTML = (
        datos.experiencia1 + "<br>" +"<br>" + 
        datos.experiencia2 + "<br>" +"<br>" + 
        datos.experiencia3 + "<br>" +"<br>" + 
        datos.experiencia4  
        )
});
    
   

    
   