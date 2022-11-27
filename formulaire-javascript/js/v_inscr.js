function saisie(txt_defaut,nom_controle)
{
  if(document.getElementById(nom_controle).value == txt_defaut)
  document.getElementById(nom_controle).value='';
}

function retablir(txt_defaut,nom_controle)
{
  if(document.getElementById(nom_controle).value == '')
  document.getElementById(nom_controle).value = txt_defaut;
}

function mev(txt_defaut,nom_controle)
{
  var longueur = document.getElementById(nom_controle).value.length;

  if(longueur<4 || document.getElementById(nom_controle).value == txt_defaut)
  {
  document.getElementById(nom_controle).style.border='#CC3300 2px solid';
  
  switch(nom_controle)
  {
  case 'nom':
  b_nom=false;
  break;
  case 'prenom':
  b_prenom=false;
  break;
  case 'date_n':
  b_date = false;
  break;
  case 'mail_inscr':
  b_mail=false;
  break;
  case 'mp_inscr':
  b_mp=false;
  break;
  }
  }
  else
  {
  document.getElementById(nom_controle).style.border='#333 1px solid';
  
  switch(nom_controle)
  {
  case 'nom':
  b_nom=true;
  break;
  case 'prenom':
  b_prenom=true;
  break;
  }
  }
  
}

function isValidDate(dateStr, format) {
  if (format == null) { format = "MDY"; }
  format = format.toUpperCase();
  if (format.length != 3) { format = "MDY"; }
  if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1) ) { format = "MDY"; }
  if (format.substring(0, 1) == "Y") { 
	 var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
	 var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
  } else if (format.substring(1, 2) == "Y") { 
	 var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
	 var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
  } else { 
	 var reg1 = /^\d{1,2}(\/)\d{1,2}\1\d{2}$/
	 var reg2 = /^\d{1,2}(\/)\d{1,2}\1\d{4}$/
  }
  
  if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) { return false; }
  var parts = dateStr.split(RegExp.$1); 
  
  if (format.substring(0, 1) == "M") { var mm = parts[0]; } else
	 if (format.substring(1, 2) == "M") { var mm = parts[1]; } else { var mm = parts[2]; }
  if (format.substring(0, 1) == "D") { var dd = parts[0]; } else
	 if (format.substring(1, 2) == "D") { var dd = parts[1]; } else { var dd = parts[2]; }
  if (format.substring(0, 1) == "Y") { var yy = parts[0]; } else
	 if (format.substring(1, 2) == "Y") { var yy = parts[1]; } else { var yy = parts[2]; }
  if (parseFloat(yy) <= 50) { yy = (parseFloat(yy) + 2000).toString(); }
  if (parseFloat(yy) <= 99) { yy = (parseFloat(yy) + 1900).toString(); }
  var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
  if (parseFloat(dd) != dt.getDate()) { return false; }
  if (parseFloat(mm)-1 != dt.getMonth()) { return false; }
  return true;
}