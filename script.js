function carregar(){
    let data = new Date()
    let dian = data.getDay;
    var hora = data.getHours;
    var minutos = data.getMinutes
    if(dian==0){
        var dia = 'Domingo'
    }
    else if(dian==1){
        var dia = 'Segunda'
    }
     else if(dian==2){
        var dia = 'Terça'
    }
    else if(dian==3){
        var dia = 'Quarta'
    }
    else if(dian==4){
        var dia = 'Quinta'
    }
    else if(dian==5){
        var dia = 'Sexta'
    }
    else if(dian==6){
        var dia = 'Sábado'
    }
    
    if(((dian == 1 || dian == 2 || dian == 3 || dian == 0 || dian == 4) && (hora>=12 && hora<23)) || ((dian==5 || dian==6) && (hora>=12 && hora<23 ))){
        let abrido = 'aberto'
    }
alert(abrido)
}
