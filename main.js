var type = document.getElementById("type");
var transmission= document.getElementsByName("transmission");
var boite= document.getElementsByName("fuel");
var nbrDays= document.getElementById("days");
var Prix_total=0;
var fuel;
var total=document.querySelector("#prix");

function fuelID(E){
    fuel=E; 
    console.log(fuel);
}

function prix_feul(prix ,fuel){
    if(fuel === "Electrique"){
        Prix_total=prix+(prix*0.05);
    }
    if(fuel === "Hybride"){
        Prix_total=prix+(prix*0.09);
    }
    if(fuel === "Essence"){
        Prix_total=prix+(prix*0.14);
    }
    if(fuel === "Diesel"){
        Prix_total=prix+(prix*0.21);
    }
    return Prix_total
}

function calcule() {

                        document.querySelector("#Manual").disabled = false;
                        document.querySelector("#Automatique").disabled = false;
                        document.querySelector("#Hybride").disabled = false;
                        document.querySelector("#Diesel").disabled = false;
                        document.querySelector("#Essence").disabled = false;
                        document.querySelector("#Electrique").disabled = false;
                        
    switch(type.value){
        case "Moto":
                        Prix_total=prix_feul(10,fuel);
                        document.querySelector("#Manual").disabled = true;
                        document.querySelector("#Automatique").disabled = true;
                        document.querySelector("#Hybride").disabled = true;
                        document.querySelector("#Diesel").disabled = true;
                        console.log(fuel);
                        break;

        case "Citadine": Prix_total=prix_feul(12,fuel);
                        document.querySelector("#Automatique").disabled = true;
                        break;

        case "Compact": Prix_total=prix_feul(14,fuel);
                        document.querySelector("#Automatique").disabled = true;
                        document.querySelector("#Electrique").disabled = true;
                        break;  

        case "Berline":
                        Prix_total=(20*0.19)+prix_feul(20,fuel);
                        document.querySelector("#Manual").disabled = true;
                        document.querySelector("#Electrique").disabled = true;
                        break;

        case "Utilitaire": 
                        Prix_total=prix_feul(16,fuel);
                        document.querySelector("#Manual").disabled = true;
                        document.querySelector("#Electrique").disabled = true;
                        document.querySelector("#Hybride").disabled = true;
                        document.querySelector("#Essence").disabled = true;
                        break;

        case "Engin de Chantier": 
                        Prix_total=prix_feul(900,fuel);
                        document.querySelector("#Automatique").disabled = true;
                        document.querySelector("#Essence").disabled = true;
                        document.querySelector("#Hybride").disabled = true;
                        break;

        case "Camion": 
                        Prix_total=(250*0.19)+prix_feul(250,fuel);
                        document.querySelector("#Manual").disabled = true;
                        document.querySelector("#Electrique").disabled = true;
                        document.querySelector("#Hybride").disabled = true;
                        document.querySelector("#Essence").disabled = true;
                        break;

    } 
}
nbrDays.addEventListener("input",function(){
    calcule()
    var P=nbrDays.value*Prix_total;
    total.innerHTML=P;
});
