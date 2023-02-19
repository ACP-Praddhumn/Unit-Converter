function tempCon(){

    var val = document.getElementById("input_value");
    var result = document.getElementById("result");
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    // val.addEventListener("keyup",tempCon);
    // input.addEventListener("change",tempCon);
    // output.addEventListener("change",tempCon);

    let inputVal = input.value;
    let outputVal = output.value;

    //meter to others
    if(inputVal === "meter" && outputVal === "meter"){
        result.value = val.value; 
    }else if(inputVal == "meter" && outputVal === "centimeter"){
        result.value =  (val.value)*100;
    }else if(inputVal == "meter" && outputVal === "kilometer"){
        result.value =   (val.value)*.001;
    }else if(inputVal == "meter" && outputVal === "yard"){
        result.value =   (val.value)*1.09361;
    }else if(inputVal == "meter" && outputVal === "mile"){
        result.value =   (val.value)*.000621;
    }else if(inputVal == "meter" && outputVal === "foot"){
        result.value =   (val.value)*3.28;
    }else if(inputVal == "meter" && outputVal === "inch"){
        result.value =   (val.value)*39.37;
    }else if(inputVal === "meter" && outputVal === "nautical mile"){
        result.value =   (val.value)*.0005399;
    }
    
    //kilometer to others
    if(inputVal === "kilometer" && outputVal === "meter"){
        result.value = (val.value)*1000; 
    }else if(inputVal == "kilometer" && outputVal === "centimeter"){
        result.value =  (val.value)*100000;
    }else if(inputVal == "kilometer" && outputVal === "kilometer"){
        result.value =   (val.value);
    }else if(inputVal == "kilometer" && outputVal === "yard"){
        result.value =   (val.value)*1093.61;
    }else if(inputVal == "kilometer" && outputVal === "mile"){
        result.value =   (val.value)*.621371;
    }else if(inputVal == "kilometer" && outputVal === "foot"){
        result.value =   (val.value)*3280.84;
    }else if(inputVal == "kilometer" && outputVal === "inch"){
        result.value =   (val.value)*39370.1;
    }else if(inputVal === "kilometer" && outputVal === "nautical mile"){
        result.value =   (val.value)/1.852;
    }

    //centimeter to others
    if(inputVal === "centimeter" && outputVal === "meter"){
        result.value = (val.value)/100; 
    }else if(inputVal == "centimeter" && outputVal === "centimeter"){
        result.value =  (val.value);
    }else if(inputVal == "centimeter" && outputVal === "kilometer"){
        result.value =   (val.value)/100000;
    }else if(inputVal == "centimeter" && outputVal === "yard"){
        result.value =   (val.value)/91.44;
    }else if(inputVal == "centimeter" && outputVal === "mile"){
        result.value =   (val.value)/160900;
    }else if(inputVal == "centimeter" && outputVal === "foot"){
        result.value =   (val.value)/30.48;
    }else if(inputVal == "centimeter" && outputVal === "inch"){
        result.value =   (val.value)/2.54;
    }else if(inputVal === "centimeter" && outputVal === "nautical mile"){
        result.value =   (val.value)/185200;
    }


    //mile to others
    if(inputVal === "mile" && outputVal === "meter"){
        result.value = (val.value)*1609; 
    }else if(inputVal == "mile" && outputVal === "centimeter"){
        result.value =  (val.value)*160900;
    }else if(inputVal == "mile" && outputVal === "kilometer"){
        result.value =   (val.value)*1.609;
    }else if(inputVal == "mile" && outputVal === "yard"){
        result.value =   (val.value)*1760;
    }else if(inputVal == "mile" && outputVal === "mile"){
        result.value =   (val.value);
    }else if(inputVal == "mile" && outputVal === "foot"){
        result.value =   (val.value)*5280;
    }else if(inputVal == "mile" && outputVal === "inch"){
        result.value =   (val.value)*63360;
    }else if(inputVal === "mile" && outputVal === "nautical mile"){
        result.value =   (val.value)/1.151;
    }

    //yard to others
    if(inputVal === "yard" && outputVal === "meter"){
        result.value = (val.value)/1.094; 
    }else if(inputVal == "yard" && outputVal === "centimeter"){
        result.value =  (val.value)*91.44;
    }else if(inputVal == "yard" && outputVal === "kilometer"){
        result.value =   (val.value)/1094;
    }else if(inputVal == "yard" && outputVal === "yard"){
        result.value =   (val.value);
    }else if(inputVal == "yard" && outputVal === "mile"){
        result.value =   (val.value)/1760;
    }else if(inputVal == "yard" && outputVal === "foot"){
        result.value =   (val.value)*3;
    }else if(inputVal == "yard" && outputVal === "inch"){
        result.value =   (val.value)*36;
    }else if(inputVal === "yard" && outputVal === "nautical mile"){
        result.value =   (val.value)/2025;
    }

    //foot to others
    if(inputVal === "foot" && outputVal === "meter"){
        result.value = (val.value)/3.281;; 
    }else if(inputVal == "foot" && outputVal === "centimeter"){
        result.value =  (val.value)*30.48;
    }else if(inputVal == "foot" && outputVal === "kilometer"){
        result.value =   (val.value)/3281;
    }else if(inputVal == "foot" && outputVal === "yard"){
        result.value =   (val.value)/3;
    }else if(inputVal == "foot" && outputVal === "mile"){
        result.value =   (val.value)/5280;
    }else if(inputVal == "foot" && outputVal === "foot"){
        result.value =   (val.value);
    }else if(inputVal == "foot" && outputVal === "inch"){
        result.value =   (val.value)*12;
    }else if(inputVal === "foot" && outputVal === "nautical mile"){
        result.value =   (val.value)/6076;
    }

    //inch to others
    if(inputVal === "inch" && outputVal === "meter"){
        result.value = (val.value)*.0254; 
    }else if(inputVal == "inch" && outputVal === "centimeter"){
        result.value =  (val.value)*2.54;
    }else if(inputVal == "inch" && outputVal === "kilometer"){
        result.value =   (val.value)/39370;
    }else if(inputVal == "inch" && outputVal === "yard"){
        result.value =   (val.value)/36;
    }else if(inputVal == "inch" && outputVal === "mile"){
        result.value =   (val.value)/63360;
    }else if(inputVal == "inch" && outputVal === "foot"){
        result.value =   (val.value)/12;
    }else if(inputVal == "inch" && outputVal === "inch"){
        result.value =   (val.value);
    }else if(inputVal === "inch" && outputVal === "nautical mile"){
        result.value =   (val.value)/72910;
    }

    //nautical mile to others
    if(inputVal === "nautical mile" && outputVal === "meter"){
        result.value = val.value*1852; 
    }else if(inputVal == "nautical mile" && outputVal === "centimeter"){
        result.value =  (val.value)*185200;
    }else if(inputVal == "nautical mile" && outputVal === "kilometer"){
        result.value =   (val.value)*1.852;
    }else if(inputVal == "nautical mile" && outputVal === "yard"){
        result.value =   (val.value)*2025.37;
    }else if(inputVal == "nautical mile" && outputVal === "mile"){
        result.value =   (val.value)*1.151;
    }else if(inputVal == "nautical mile" && outputVal === "foot"){
        result.value =   (val.value)*6076.12;
    }else if(inputVal == "nautical mile" && outputVal === "inch"){
        result.value =   (val.value)*72913.4;
    }else if(inputVal === "nautical mile" && outputVal === "nautical mile"){
        result.value =   (val.value);
    }
}

function reset(){
    tempCon();
}