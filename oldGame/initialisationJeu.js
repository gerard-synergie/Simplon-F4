function init(btn){
    btn.style.display="none";
    i=1;
    nbr=0;
    choix=new Array();
    creerGrille();
 }
 function creerGrille(){
    t=setTimeout("creerGrille()",50);
    bouton=document.createElement("div");
    bouton.className="bouton";
    bouton.innerHTML=i;
    bouton.setAttribute("id",i);
    bouton.onclick=function(){
       ajouter(this);
    }
    document.getElementById("grille").appendChild(bouton);
    if(i%7==0){
       br=document.createElement("br");
       document.getElementById("grille").appendChild(br);
    }
    i+=1;
    if(i>49)
       clearTimeout(t);
 }

 function ajouter(ob){
    if(nbr<6){
       ob.style.visibility="hidden";
       nbouton=document.createElement("div");
       nbouton.className="nbouton";
       nbouton.setAttribute("id","ch"+nbr);
       nbouton.innerHTML=ob.textContent;
       document.getElementById("choix").appendChild(nbouton);
       choix[nbr]=ob.firstChild.nodeValue; 
       nbr+=1;
       if(nbr==6)
          ztirage();
    }
 } 
j=0;
 function ztirage(){
    ts = setTimeout("ztirage()",100);
    if(j<6){
       zbouton=document.createElement("div");
       zbouton.className="zbouton";
       zbouton.innerHTML=0;
       zbouton.setAttribute("id","res"+j);
       document.getElementById("res").appendChild(zbouton);
       j+=1;
       if(j==6){
          clearTimeout(ts);
          document.getElementById("bon").style.visibility="visible";
          tirage();
       }
    }
 }

 index=0;
 rep=0;
 tab=new Array();
 itr=50;

 function tirage(){

 }

 