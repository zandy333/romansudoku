window.onload=function() {

  let container = document.getElementById("container");
  let menubtn = document.getElementById("menubtn");
  let content = document.getElementById("content");
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tbl_1 = document.getElementsByClassName("tbl_1");
  let tbl_2 = document.getElementsByClassName("tbl_2");
  let td_1 = document.getElementsByClassName("td_1");
  let td_2 = document.getElementsByClassName("td_2");
  let d = document.getElementsByClassName("d");
  let c11 = document.getElementById("c11");
  let c12 = document.getElementById("c12");
  let c13 = document.getElementById("c13");
  let c14 = document.getElementById("c14");
  let c21 = document.getElementById("c21");
  let c22 = document.getElementById("c22");
  let c23 = document.getElementById("c23");
  let c24 = document.getElementById("c24");
  let c31 = document.getElementById("c31");
  let c32 = document.getElementById("c32");
  let c33 = document.getElementById("c33");
  let c34 = document.getElementById("c34");
  let c41 = document.getElementById("c41");
  let c42 = document.getElementById("c42");
  let c43 = document.getElementById("c43");
  let c44 = document.getElementById("c44");
  let d11 = document.getElementById("d11");
  let d12 = document.getElementById("d12");
  let d13 = document.getElementById("d13");
  let d14 = document.getElementById("d14");
  let d21 = document.getElementById("d21");
  let d22 = document.getElementById("d22");
  let d23 = document.getElementById("d23");
  let d24 = document.getElementById("d24");
  let d31 = document.getElementById("d31");
  let d32 = document.getElementById("d32");
  let d33 = document.getElementById("d33");
  let d34 = document.getElementById("d34");
  let d41 = document.getElementById("d41");
  let d42 = document.getElementById("d42");
  let d43 = document.getElementById("d43");
  let d44 = document.getElementById("d44");


  let Aface1 = "url('../imgs/num1.png')";
  let Aface2 = "url('../imgs/num2.png')";
  let Aface3 = "url('../imgs/num3.png')";
  let Aface4 = "url('../imgs/num4.png')";
  let Bface1 = 'url("../imgs/num1.png")';
  let Bface2 = 'url("../imgs/num2.png")';
  let Bface3 = 'url("../imgs/num3.png")';
  let Bface4 = 'url("../imgs/num4.png")';

  let padlock11 = "";
  let padlock12 = "";
  let padlock13 = "";
  let padlock14 = "";
  let padlock21 = "";
  let padlock22 = "";
  let padlock23 = "";
  let padlock24 = "";
  let padlock31 = "";
  let padlock32 = "";
  let padlock33 = "";
  let padlock34 = "";
  let padlock41 = "";
  let padlock42 = "";
  let padlock43 = "";
  let padlock44 = "";
  let clicks11 = 0;
  let clicks12 = 0;
  let clicks13 = 0;
  let clicks14 = 0;
  let clicks21 = 0;
  let clicks22 = 0;
  let clicks23 = 0;
  let clicks24 = 0;
  let clicks31 = 0;
  let clicks32 = 0;
  let clicks33 = 0;
  let clicks34 = 0;
  let clicks41 = 0;
  let clicks42 = 0;
  let clicks43 = 0;
  let clicks44 = 0;
  let editable = true;

  let game_10_puzzle = "3200400200002400";
  let game_10_solution = "3241413213242413";
  //let game_10_solution_diff = "5541513513245513";
  let game_10_solution_diff = "";
  let game_10_solution_diff_array = [];
  
  const rows = 4;
  const cols = 4;
  
  function buildSolutionDiff() {

    for (let i = 0; i < game_10_puzzle.length; i++) {
        if (game_10_puzzle[i] == "0") {
            game_10_solution_diff = game_10_solution_diff + game_10_solution[i];
        } else {
            game_10_solution_diff = game_10_solution_diff + "5";
        }
    }
    //alert(game_10_solution_diff);
  }

  function buildSolutionDiffArray() {

    let charIndex = 0;
    for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 4; j++) {
            row.push(game_10_solution_diff[charIndex]);
            charIndex++;
        }
        game_10_solution_diff_array.push(row);
    }

    /*let array_contents = "";
    for (let m = 0; m < rows; m++) {
            for (let n = 0; n < cols; n++) {
                array_contents = array_contents + game_10_solution_diff_array[m][n];
            }
        } 
    alert(array_contents);*/
  }

  buildSolutionDiff();
  buildSolutionDiffArray();
  
  function displayPortrait() {

    for (let i = 0; i < tbl_1.length; i++) {
      tbl_1[i].style.border = "1.0vw solid #ffb380";
      //tbl_1[i].style.border = "1.0vw solid #ffffff";
      
    };

    for (let i = 0; i < td_1.length; i++) {
      td_1[i].style.border = "0.5vw solid #ffb380";
      //td_1[i].style.border = "0.5vw solid #ffffff";
    };

    for (let i = 0; i < td_2.length; i++) {
      td_2[i].style.border = "0.5vw solid #ffb380";
      //td_2[i].style.border = "0.5vw solid #ffffff";
      td_2[i].style.width = "20vw";
      td_2[i].style.height = "20vw";
    };

    for (let i = 0; i < d.length; i++) {
      d[i].style.width = "20vw"; 
      d[i].style.height = "20vw"; 
      //d[i].style.backgroundColor = "#ff0000"
    };
  }

  function displayLandscape() { 

    for (let i = 0; i < tbl_1.length; i++) {
      tbl_1[i].style.border = "1.0vh solid #ffb380";
      //tbl_1[i].style.border = "1.0vw solid #ffffff";
      //tbl_1[i].style.width = "86vh";
      //tbl_1[i].style.height = "86vh";
    };

    for (let i = 0; i < td_1.length; i++) {
      //td_1[i].style.border = "0.5vh solid #ffffff";
      td_1[i].style.border = "0.5vh solid #ffb380";
    };

    for (let i = 0; i < td_2.length; i++) {
      //td_2[i].style.border = "0.5vh solid #ffffff";
      td_2[i].style.border = "0.5vh solid #ffb380";
      td_2[i].style.width = "20vh";
      td_2[i].style.height = "20vh";
    };

    for (let i = 0; i < d.length; i++) {
      d[i].style.width = "20vh"; 
      d[i].style.height = "20vh"; 
      //d[i].style.backgroundColor = "#ff0000"
    };
  }

  let padlockMN = "";
  let dMN = "";
  let pMN = "";
  let timer4;

  function setPadlockPortrait() {

    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {

            if (game_10_solution_diff_array[m][n] == "5") {
                
                dMN = "d"+String(m+1)+String(n+1);
                pMN = "p"+String(m+1)+String(n+1);

                document.getElementById(pMN).style.width = "5vw";
                document.getElementById(pMN).style.height = "5vw";
            }
        }
    }     
  }

  function setPadlockLandscape() {

    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {

            if (game_10_solution_diff_array[m][n] == "5") {
                
                dMN = "d"+String(m+1)+String(n+1);
                pMN = "p"+String(m+1)+String(n+1);

                document.getElementById(pMN).style.width = "5vh";
                document.getElementById(pMN).style.height = "5vh";
            }
        }
    }     
  }

  function cycleThrough11() {
    if (c11.style.backgroundImage == "none" || c11.style.backgroundImage == 'none') {
        c11.style.backgroundImage = Aface1;
    
    } else if (c11.style.backgroundImage == Aface1 || c11.style.backgroundImage == Bface1) {
        c11.style.backgroundImage = Aface2;
    
    }  else if (c11.style.backgroundImage == Aface2 || c11.style.backgroundImage == Bface2) {
        c11.style.backgroundImage = Aface3;
        
    } else if (c11.style.backgroundImage == Aface3 || c11.style.backgroundImage == Bface3) {
        c11.style.backgroundImage = Aface4;
        
    } else if (c11.style.backgroundImage == Aface4 || c11.style.backgroundImage == Bface4) {
        c11.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough12() {
    if (c12.style.backgroundImage == "none" || c12.style.backgroundImage == 'none') {
        c12.style.backgroundImage = Aface1;
    
    } else if (c12.style.backgroundImage == Aface1 || c12.style.backgroundImage == Bface1) {
        c12.style.backgroundImage = Aface2;
    
    }  else if (c12.style.backgroundImage == Aface2 || c12.style.backgroundImage == Bface2) {
        c12.style.backgroundImage = Aface3;
        
    } else if (c12.style.backgroundImage == Aface3 || c12.style.backgroundImage == Bface3) {
        c12.style.backgroundImage = Aface4;
        
    } else if (c12.style.backgroundImage == Aface4 || c12.style.backgroundImage == Bface4) {
        c12.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough13() {
    if (c13.style.backgroundImage == "none" || c13.style.backgroundImage == 'none') {
        c13.style.backgroundImage = Aface1;
    
    } else if (c13.style.backgroundImage == Aface1 || c13.style.backgroundImage == Bface1) {
        c13.style.backgroundImage = Aface2;
    
    }  else if (c13.style.backgroundImage == Aface2 || c13.style.backgroundImage == Bface2) {
        c13.style.backgroundImage = Aface3;
        
    } else if (c13.style.backgroundImage == Aface3 || c13.style.backgroundImage == Bface3) {
        c13.style.backgroundImage = Aface4;
        
    } else if (c13.style.backgroundImage == Aface4 || c13.style.backgroundImage == Bface4) {
        c13.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough14() {
    if (c14.style.backgroundImage == "none" || c14.style.backgroundImage == 'none') {
        c14.style.backgroundImage = Aface1;
    
    } else if (c14.style.backgroundImage == Aface1 || c14.style.backgroundImage == Bface1) {
        c14.style.backgroundImage = Aface2;
    
    }  else if (c14.style.backgroundImage == Aface2 || c14.style.backgroundImage == Bface2) {
        c14.style.backgroundImage = Aface3;
        
    } else if (c14.style.backgroundImage == Aface3 || c14.style.backgroundImage == Bface3) {
        c14.style.backgroundImage = Aface4;
        
    } else if (c14.style.backgroundImage == Aface4 || c14.style.backgroundImage == Bface4) {
        c14.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough21() {
    if (c21.style.backgroundImage == "none" || c21.style.backgroundImage == 'none') {
        c21.style.backgroundImage = Aface1;
    
    } else if (c21.style.backgroundImage == Aface1 || c21.style.backgroundImage == Bface1) {
        c21.style.backgroundImage = Aface2;
    
    }  else if (c21.style.backgroundImage == Aface2 || c21.style.backgroundImage == Bface2) {
        c21.style.backgroundImage = Aface3;
        
    } else if (c21.style.backgroundImage == Aface3 || c21.style.backgroundImage == Bface3) {
        c21.style.backgroundImage = Aface4;
        
    } else if (c21.style.backgroundImage == Aface4 || c21.style.backgroundImage == Bface4) {
        c21.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough22() {
    if (c22.style.backgroundImage == "none" || c22.style.backgroundImage == 'none') {
        c22.style.backgroundImage = Aface1;
    
    } else if (c22.style.backgroundImage == Aface1 || c22.style.backgroundImage == Bface1) {
        c22.style.backgroundImage = Aface2;
    
    }  else if (c22.style.backgroundImage == Aface2 || c22.style.backgroundImage == Bface2) {
        c22.style.backgroundImage = Aface3;
        
    } else if (c22.style.backgroundImage == Aface3 || c22.style.backgroundImage == Bface3) {
        c22.style.backgroundImage = Aface4;
        
    } else if (c22.style.backgroundImage == Aface4 || c22.style.backgroundImage == Bface4) {
        c22.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough23() {
    if (c23.style.backgroundImage == "none" || c23.style.backgroundImage == 'none') {
        c23.style.backgroundImage = Aface1;
    
    } else if (c23.style.backgroundImage == Aface1 || c23.style.backgroundImage == Bface1) {
        c23.style.backgroundImage = Aface2;
    
    }  else if (c23.style.backgroundImage == Aface2 || c23.style.backgroundImage == Bface2) {
        c23.style.backgroundImage = Aface3;
        
    } else if (c23.style.backgroundImage == Aface3 || c23.style.backgroundImage == Bface3) {
        c23.style.backgroundImage = Aface4;
        
    } else if (c23.style.backgroundImage == Aface4 || c23.style.backgroundImage == Bface4) {
        c23.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough24() {
    if (c24.style.backgroundImage == "none" || c24.style.backgroundImage == 'none') {
        c24.style.backgroundImage = Aface1;
    
    } else if (c24.style.backgroundImage == Aface1 || c24.style.backgroundImage == Bface1) {
        c24.style.backgroundImage = Aface2;
    
    }  else if (c24.style.backgroundImage == Aface2 || c24.style.backgroundImage == Bface2) {
        c24.style.backgroundImage = Aface3;
        
    } else if (c24.style.backgroundImage == Aface3 || c24.style.backgroundImage == Bface3) {
        c24.style.backgroundImage = Aface4;
        
    } else if (c24.style.backgroundImage == Aface4 || c24.style.backgroundImage == Bface4) {
        c24.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough31() {
    if (c31.style.backgroundImage == "none" || c31.style.backgroundImage == 'none') {
        c31.style.backgroundImage = Aface1;
    
    } else if (c31.style.backgroundImage == Aface1 || c31.style.backgroundImage == Bface1) {
        c31.style.backgroundImage = Aface2;
    
    }  else if (c31.style.backgroundImage == Aface2 || c31.style.backgroundImage == Bface2) {
        c31.style.backgroundImage = Aface3;
        
    } else if (c31.style.backgroundImage == Aface3 || c31.style.backgroundImage == Bface3) {
        c31.style.backgroundImage = Aface4;
        
    } else if (c31.style.backgroundImage == Aface4 || c31.style.backgroundImage == Bface4) {
        c31.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough32() {
    if (c32.style.backgroundImage == "none" || c32.style.backgroundImage == 'none') {
        c32.style.backgroundImage = Aface1;
    
    } else if (c32.style.backgroundImage == Aface1 || c32.style.backgroundImage == Bface1) {
        c32.style.backgroundImage = Aface2;
    
    }  else if (c32.style.backgroundImage == Aface2 || c32.style.backgroundImage == Bface2) {
        c32.style.backgroundImage = Aface3;
        
    } else if (c32.style.backgroundImage == Aface3 || c32.style.backgroundImage == Bface3) {
        c32.style.backgroundImage = Aface4;
        
    } else if (c32.style.backgroundImage == Aface4 || c32.style.backgroundImage == Bface4) {
        c32.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough33() {
    if (c33.style.backgroundImage == "none" || c33.style.backgroundImage == 'none') {
        c33.style.backgroundImage = Aface1;
    
    } else if (c33.style.backgroundImage == Aface1 || c33.style.backgroundImage == Bface1) {
        c33.style.backgroundImage = Aface2;
    
    }  else if (c33.style.backgroundImage == Aface2 || c33.style.backgroundImage == Bface2) {
        c33.style.backgroundImage = Aface3;
        
    } else if (c33.style.backgroundImage == Aface3 || c33.style.backgroundImage == Bface3) {
        c33.style.backgroundImage = Aface4;
        
    } else if (c33.style.backgroundImage == Aface4 || c33.style.backgroundImage == Bface4) {
        c33.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough34() {
    if (c34.style.backgroundImage == "none" || c34.style.backgroundImage == 'none') {
        c34.style.backgroundImage = Aface1;
    
    } else if (c34.style.backgroundImage == Aface1 || c34.style.backgroundImage == Bface1) {
        c34.style.backgroundImage = Aface2;
    
    }  else if (c34.style.backgroundImage == Aface2 || c34.style.backgroundImage == Bface2) {
        c34.style.backgroundImage = Aface3;
        
    } else if (c34.style.backgroundImage == Aface3 || c34.style.backgroundImage == Bface3) {
        c34.style.backgroundImage = Aface4;
        
    } else if (c34.style.backgroundImage == Aface4 || c34.style.backgroundImage == Bface4) {
        c34.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough41() {
    if (c41.style.backgroundImage == "none" || c41.style.backgroundImage == 'none') {
        c41.style.backgroundImage = Aface1;
    
    } else if (c41.style.backgroundImage == Aface1 || c41.style.backgroundImage == Bface1) {
        c41.style.backgroundImage = Aface2;
    
    }  else if (c41.style.backgroundImage == Aface2 || c41.style.backgroundImage == Bface2) {
        c41.style.backgroundImage = Aface3;
        
    } else if (c41.style.backgroundImage == Aface3 || c41.style.backgroundImage == Bface3) {
        c41.style.backgroundImage = Aface4;
        
    } else if (c41.style.backgroundImage == Aface4 || c41.style.backgroundImage == Bface4) {
        c41.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough42() {
    if (c42.style.backgroundImage == "none" || c42.style.backgroundImage == 'none') {
        c42.style.backgroundImage = Aface1;
    
    } else if (c42.style.backgroundImage == Aface1 || c42.style.backgroundImage == Bface1) {
        c42.style.backgroundImage = Aface2;
    
    }  else if (c42.style.backgroundImage == Aface2 || c42.style.backgroundImage == Bface2) {
        c42.style.backgroundImage = Aface3;
        
    } else if (c42.style.backgroundImage == Aface3 || c42.style.backgroundImage == Bface3) {
        c42.style.backgroundImage = Aface4;
        
    } else if (c42.style.backgroundImage == Aface4 || c42.style.backgroundImage == Bface4) {
        c42.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough43() {
    if (c43.style.backgroundImage == "none" || c43.style.backgroundImage == 'none') {
        c43.style.backgroundImage = Aface1;
    
    } else if (c43.style.backgroundImage == Aface1 || c43.style.backgroundImage == Bface1) {
        c43.style.backgroundImage = Aface2;
    
    }  else if (c43.style.backgroundImage == Aface2 || c43.style.backgroundImage == Bface2) {
        c43.style.backgroundImage = Aface3;
        
    } else if (c43.style.backgroundImage == Aface3 || c43.style.backgroundImage == Bface3) {
        c43.style.backgroundImage = Aface4;
        
    } else if (c43.style.backgroundImage == Aface4 || c43.style.backgroundImage == Bface4) {
        c43.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function cycleThrough44() {
    if (c44.style.backgroundImage == "none" || c44.style.backgroundImage == 'none') {
        c44.style.backgroundImage = Aface1;
    
    } else if (c44.style.backgroundImage == Aface1 || c44.style.backgroundImage == Bface1) {
        c44.style.backgroundImage = Aface2;
    
    }  else if (c44.style.backgroundImage == Aface2 || c44.style.backgroundImage == Bface2) {
        c44.style.backgroundImage = Aface3;
        
    } else if (c44.style.backgroundImage == Aface3 || c44.style.backgroundImage == Bface3) {
        c44.style.backgroundImage = Aface4;
        
    } else if (c44.style.backgroundImage == Aface4 || c44.style.backgroundImage == Bface4) {
        c44.style.backgroundImage = Aface1;
        
    } else {
        null;
    }
  }

  function checkWin() {

    if ((c13.style.backgroundImage == Aface4 || c13.style.backgroundImage == Bface4) && 
      (c14.style.backgroundImage == Aface1 || c14.style.backgroundImage == Bface1) && 
      (c22.style.backgroundImage == Aface1 || c22.style.backgroundImage == Bface1) && 
      (c23.style.backgroundImage == Aface3 || c23.style.backgroundImage == Bface3) && 
      (c31.style.backgroundImage == Aface1 || c31.style.backgroundImage == Bface1) && 
      (c32.style.backgroundImage == Aface3 || c32.style.backgroundImage == Bface3) && 
      (c33.style.backgroundImage == Aface2 || c33.style.backgroundImage == Bface2) && 
      (c34.style.backgroundImage == Aface4 || c34.style.backgroundImage == Bface4) && 
      (c43.style.backgroundImage == Aface1 || c43.style.backgroundImage == Bface1) && 
      (c44.style.backgroundImage == Aface3 || c44.style.backgroundImage == Bface3))  { {
        editable = false;
        setTimeout(function() {
          alert("You Win!");
        }, 100);
      }
    }
  }

  
  function gameLogic() {

    w = window.innerWidth;
    h = window.innerHeight;

    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {

            
            if (game_10_solution_diff_array[m][n] == "5") {
                
                dMN = "d"+String(m+1)+String(n+1);
                pMN = "p"+String(m+1)+String(n+1);

                padlockMN = document.createElement("img");
                padlockMN.src = "../imgs/padlock.png";
                padlockMN.id = "p"+String(m+1)+String(n+1);
                document.getElementById(dMN).appendChild(padlockMN);
                
                if (w < h) {
                    document.getElementById(padlockMN.id).style.width = "5vw";
                    document.getElementById(padlockMN.id).style.height = "5vw";
                } else {
                    document.getElementById(padlockMN.id).style.width = "5vh";
                    document.getElementById(padlockMN.id).style.height = "5vh";
                }
            }
        }
    }
    
     
    c11.style.backgroundImage = Aface3;
    c12.style.backgroundImage = Aface2;
    c13.style.backgroundImage = "none"; 
    c14.style.backgroundImage = "none"; 
    c21.style.backgroundImage = Aface4;
    c22.style.backgroundImage = "none"; 
    c23.style.backgroundImage = "none"; 
    c24.style.backgroundImage = Aface2;
    c31.style.backgroundImage = "none"; 
    c32.style.backgroundImage = "none"; 
    c33.style.backgroundImage = "none"; 
    c34.style.backgroundImage = "none"; 
    c41.style.backgroundImage = Aface2;
    c42.style.backgroundImage = Aface4;
    c43.style.backgroundImage = "none"; 
    c44.style.backgroundImage = "none"; 

    d13.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough13();
          checkWin();
        }     
      }, 100);
    });

    d14.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough14();
          checkWin();
        }     
      }, 100);
    });

    d22.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough22();
          checkWin();
        }     
      }, 100);
    });

    d23.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough23();
          checkWin();
        }     
      }, 100);
    });

    d31.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough31();
          checkWin();
        }     
      }, 100);
    });

    d32.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough32();
          checkWin();
        }     
      }, 100);
    });

    d33.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough33();
          checkWin();
        }     
      }, 100);
    });

    d34.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough34();
          checkWin();
        }     
      }, 100);
    });

    d43.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough43();
          checkWin();
        }     
      }, 100);
    });

    d44.addEventListener("click", function(e) {
      setTimeout(function() {
        if (editable) {
          cycleThrough44();
          checkWin();
        }     
      }, 100);
    });

  }

  // Check for portrait orientation
  let timer1;
  let timer1a;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    

  if (isPortrait) {
    //clearTimeout(timer1); // Clear any existing timer
    //timer1 = setTimeout(() => {
      console.log("Device is in portrait mode at initial load.");
      // Perform actions specific to portrait mode
      gameLogic();
      displayPortrait();
      setPadlockPortrait();
      //alert("Portrait");

     // }, 300); 
    
  } else {
    //clearTimeout(timer1a); // Clear any existing timer
    //timer1a = setTimeout(() => {
      console.log("Device is in landscape mode at initial load.");
      // Perform actions specific to landscape mode
      gameLogic();
      displayLandscape();
      setPadlockLandscape();
      //alert("Landscape");
     // }, 300); 
  }
  

/*
  if (w < h) {
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    //setPadlockPortrait();
    
  } else {
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    //setPadlockLandscape();
  };
*/

  // Listen for orientation changes
  /*
  let timer2;
  window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    clearTimeout(timer2); // Clear any existing timer
    timer2 = setTimeout(() => {

    if (e.matches) {
    
        displayPortrait();
        setPadlockPortrait();
        alert("Portrait");

    } else {
 
      displayLandscape();
      setPadlockLandscape();
      alert("Landscape");
      
    } 
    }, 300); 
    
  });
  */

let resizeTimer;
let resizeTimer1;
let resizeTimer2;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer); // Clear any existing timer
    resizeTimer = setTimeout(() => {
      // This code will execute only after 200ms of no further resize events
      console.log("Window resize completed!");
      // Place your resize-dependent logic here
      // For example, update layout, recalculate positions, etc.
      w = window.innerWidth;
      h = window.innerHeight;

      if ((w < h)) {
      //clearTimeout(resizeTimer1); // Clear any existing timer
      //resizeTimer1 = setTimeout(() => {
      displayPortrait();
      setPadlockPortrait();
      //alert("Portrait");
      //}, 100);
          
      } else {
      //clearTimeout(resizeTimer2); // Clear any existing timer
      //resizeTimer2 = setTimeout(() => {
      displayLandscape();
      setPadlockLandscape();
      //alert("Landscape");
      //}, 100);
      }

    }, 200);
});
  

// Listen for viewport resize
/*let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer); // Clear any existing timer
    resizeTimer = setTimeout(() => {
      // This code will execute only after 200ms of no further resize events
      console.log("Window resize completed!");
      // Place your resize-dependent logic here
      // For example, update layout, recalculate positions, etc.
      w = window.innerWidth;
      h = window.innerHeight;

      if ((w < h)) {
      
      displayPortrait();
      updateCellSizePortrait();
      setCellBorders();
      //setPadlockPortrait(); 
          
      } else {
      
      displayLandscape();
      updateCellSizeLandscape();
      setCellBorders();
      //setPadlockLandscape();
      
    }
  }, 0); // Adjust the debounce delay (in milliseconds) as needed
});*/

}
