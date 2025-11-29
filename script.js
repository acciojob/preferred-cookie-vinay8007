function getCoockie(name){
    let decoded = decodeURIComponent(document.cookie);
    let parts = decoded.split(", ");
    for(let part of parts){
        let [key, value] = part.split("=");
        if (key === name) return value;
    }
    return null;
}

window.onload = function(){
    let savedSize = getCoockie("fontSize");
    let savedColor = getCoockie("fontColor");

    if(savedSize){
        document.documentElement.style.setProperty("--fontsize", savedSize + "px");
        document.getElementById("fontsize").value = savedSize;
    }

    
    if(savedColor){
        document.documentElement.style.setProperty("--fontsize", savedColor);
        document.getElementById("fontsize").value = savedColor;
    }
};

document.getElementById("settingsForm").addEventListener("submit", function(event){
    event.preventDefault();

    let size = document.getElementById("fontsize").value;
    let color = document.getElementById("fontcolor").value;

    document.cookie = "fontsize" + size + "; path=/";
    document.cookie = "fontcolor" + size + "; path=/";

    document.documentElement.style.setProperty("--fontsize", size + "px");
    document.documentElement.style.setProperty("--fontcolor", color);

    alert("preferences saved!");
});