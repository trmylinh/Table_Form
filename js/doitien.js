function bam() {
    let nhapmoney = document.getElementById('nhapmoney').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 == select2){
        document.getElementById('xong').innerHTML = "result : " + nhapmoney;
    }
    if (select1 == "a" && select2 == "b"){
        document.getElementById('xong').innerHTML = "result : " + nhapmoney * 23000;
    }
    if (select1 == "b" && select2 == "a"){
        document.getElementById('xong').innerHTML = "result : " + nhapmoney / 23000;
    }
}