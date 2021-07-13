document.getElementById('timSoNN').addEventListener('click', timSoNguyenDuongNN)

document.getElementById('tinhTong').addEventListener('click', tinhTongXN)

document.getElementById('giaiThua').addEventListener('click', tinhGT)

document.getElementById('inTheDiv').addEventListener('click', inMuoiTheDiv)

function timSoNguyenDuongNN(){
    var s =0;
    var n=0;
    while(s<10000){
        n++;
        s+=n;
    }

    var divContent = document.getElementById('content');
    divContent.classList.remove('hide');
    var nnOutput = document.getElementById('nguyenDuongOutput');
    nnOutput.innerHTML = n;
}

function tinhTongXN(){
    var xInput = document.getElementById('txtX').value;
    var x = parseInt(xInput);

    var nInput = document.getElementById('txtN').value;
    var n = parseInt(nInput);

    var tong =0;

    for (let index = 1; index <= n; index++) {
        tong += Math.pow(x,index);
    }

    var divContent = document.getElementById('content2');
    divContent.classList.remove('hide');
    var resultOutput = document.getElementById('result2');
    resultOutput.innerHTML = tong;
}

function tinhGT(){
    var numInput = document.getElementById('txtNum').value;
    var n = parseInt(numInput);

    var gt =1;

    for (let i = 1; i <= n; i++) {
        gt*=i;       
    }

    var divContent = document.getElementById('content3');
    divContent.classList.remove('hide');
    var resultOutput = document.getElementById('result3');
    resultOutput.innerHTML = gt;
}

function inMuoiTheDiv(){
    var divContent = document.getElementById('content4');
    divContent.classList.remove('hide');

    for (let i = 1; i <= 10; i++) {
        var div = document.createElement('div');
        var pContent = document.createElement('p');

        if(i % 2 == 0){
            pContent.innerHTML = "div chẵn " + i;
            div.appendChild(pContent);
            div.style.cssText="background-color: red; width: 200px; height: 50px; margin: 5px; padding: 10px; text-align: left;"
            divContent.appendChild(div);
        }
        else{
            pContent.innerHTML = "div lẻ " + i;
            div.appendChild(pContent);
            div.style.cssText="background-color: blue; width: 200px; height: 50px; margin: 5px; padding: 10px; text-align: left;"
            divContent.appendChild(div);
        }
        
    }
}