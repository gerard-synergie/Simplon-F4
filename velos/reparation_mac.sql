CREATE USER 'toto'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'pwdtoto';
GRANT ALL PRIVILEGES ON * . * TO 'toto'@'localhost';
FLUSH PRIVILEGES;



const db = mysql.createConnection({   host: "localhost",   user: "toto",  
 password: "pwdtoto" , database:"exo_velos"});