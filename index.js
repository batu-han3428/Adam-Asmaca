var kelimeDiv = document.getElementById('kelimeDiv');
var kelimeler = ["JAVASCRIPT","CSS","HTML","REACT","ANGULAR","VUE","C#","PHP","JQUER","AJAX"];
var harfDiv;
var kelimeSirasi = 0;
var yazilanKelime = "";
var hataliHarfDiv = document.getElementById('hataliHarfDiv');
var hakSayisi = 6;
var modal = document.getElementById("myModal");
var modalBody = modal.querySelector('.modal-body');
var button = document.getElementById('button');



var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
    window.close();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.transition='500ms';
        modal.style.transform='scale(1.1)';
        setTimeout(() => {
            modal.style.transform='scale(1)';
        }, 500);
    }
}

kelimeYarat();


function kelimeYarat(){

    for (let index = 0; index < kelimeler[kelimeSirasi].length; index++) {
        var harfAnaDiv = document.createElement('div');
        var harfAltDiv = document.createElement('div');
        harfDiv = document.createElement('div');
    
        harfDiv.style.height='50%';
        harfDiv.className='harfDivleri';
        harfAltDiv.style.height='50%';
        harfAnaDiv.style.height='50px';
        harfAnaDiv.className='harfAnaDivleri';
    
        var harfAlt = document.createElement('div');
        harfAlt.style.borderBottom='2px rgb(250, 235, 49) solid';
        harfAlt.style.width='20px';
        var boyut = 33.3333333333 * kelimeler[kelimeSirasi].length+"px";
      
        kelimeDiv.style.width=boyut;
        kelimeDiv.appendChild(harfAnaDiv);
    
        harfAnaDiv.appendChild(harfDiv);
    
        harfAnaDiv.appendChild(harfAltDiv);
        harfAltDiv.appendChild(harfAlt);
    
    }

};



button.addEventListener('click',function(){
    var harfAnaDivleri = document.querySelectorAll('.harfAnaDivleri');
    harfAnaDivleri.forEach(element=>{
        element.remove();
    });
    let hataliHarfler = hataliHarfDiv.querySelectorAll("span");
    hataliHarfler.forEach(element=>{
        element.remove();
    });
    hakSayisi = 6;
    if(kelimeSirasi >= kelimeler.length-1){
        window.location.reload();
    }else{
        kelimeSirasi++;
        let adamSifirla = document.querySelectorAll('#adam div:not(#bacakAnaDiv)');
        adamSifirla.forEach(element=>{
            element.style.visibility='hidden';
        });
        modal.style.display = "none";
    }
       
    
    kelimeYarat();
});

window.addEventListener('keyup',function(event){
    let indexNo;
    

    if(event.keyCode == 191){
        yazilanKelime="Ö";
    }else if(event.keyCode == 219){
        yazilanKelime="Ğ";
    }else if(event.keyCode == 221){
        yazilanKelime="Ü";
    }else if(event.keyCode == 186){
        yazilanKelime="Ş";
    }else if(event.keyCode == 222){
        yazilanKelime="İ";
    }else if(event.keyCode == 220){
        yazilanKelime="Ç";
    }else{
        yazilanKelime= String.fromCodePoint(event.keyCode);
    } 
   

    if(kelimeler[kelimeSirasi].indexOf(yazilanKelime) > -1){
        
        indexNo = kelimeler[kelimeSirasi].indexOf(yazilanKelime);
     
        var span = this.document.createElement('span');
        span.style.color='white';
        span.innerText=yazilanKelime;

        var harfDivleri = this.document.querySelectorAll('.harfDivleri');

       
        if(harfDivleri[indexNo].innerHTML == ""){
            harfDivleri[indexNo].appendChild(span);
            kelimeler[kelimeSirasi] = kelimeler[kelimeSirasi].replace(yazilanKelime,".");    
                      
        }
        let sayac = 0;
        harfDivleri.forEach(element => {
            if(element.textContent != ""){
                sayac++;
            }
        });

        if(kelimeler[kelimeSirasi].length == sayac){
            this.document.getElementById('adamSagBacak').style.visibility='visible';               
            modalBody.textContent='Tebrikler. Kazandınız..';
            modal.style.display = "block";
        }
       
    }else{ 
        var span = this.document.createElement('span');
        span.style.color='white';
        span.className='hataliYazilmisHarfler';
        let varmi = false;
        let hataliHarfVarmi = this.document.querySelectorAll('.hataliYazilmisHarfler');
        hataliHarfVarmi.forEach(element=>{
           
            if(yazilanKelime == element.textContent.substring(1, -1)){
                varmi = true;
            }  
        });
        
        if(!varmi){
            span.innerText=yazilanKelime+", ";
            hataliHarfDiv.appendChild(span);

            hakSayisi--;

            if(hakSayisi == 5){
                this.document.getElementById('adamKafa').style.visibility='visible';
            }else if(hakSayisi == 4){
                this.document.getElementById('adamGovde').style.visibility='visible';
            }
            else if(hakSayisi == 3){
                this.document.getElementById('adamSolKol').style.visibility='visible';
            }
            else if(hakSayisi == 2){
                this.document.getElementById('adamSagKol').style.visibility='visible';
            }
            else if(hakSayisi == 1){
                this.document.getElementById('adamSolBacak').style.visibility='visible';
            }
            else if(hakSayisi == 0){
                this.document.getElementById('adamSagBacak').style.visibility='visible';               
                modalBody.textContent='Kaybettiniz..';
                modal.style.display = "block";
            }
        }          
    }

});