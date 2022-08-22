function setup(){
    createCanvas(2000, 2000, WEBGL);
    frameRate(60);
  }
  
  function draw(){
    background('gray');
    orbitControl();
    //setar eixos
    strokeWeight(2);
    stroke('red');
    line(-600,0,0,600,0,0); //eixo x vermelho
    stroke('green');
    line(0,-600,0,0,600,0); // eixo y verde
    stroke('blue');
    line(0, 0, -800, 0, 0, 800); //eixo z azul
    //marca os pontos A, B, C D, E, respectivamente
    strokeWeight(10)
    stroke('blue');
    point(400,100,0);
    stroke('red');
    point(-100, 50/3, 500);
    stroke('black');
    point(0,0,600);
    stroke('yellow');
    point(100,-50/3,500);
    stroke('green');
    point(-400,-100,0);
    
    const rotX = -PI/2;
    const rotY = -atan(1/6);
    const w1 = PI/6; //velocidade ang em AB e DE
    const w2 = PI/2; //vel ang em BD
    const r1 = 500; //raio AB e DE
    const r2 = 100; // raio BD
    const t = millis() / 1000;
    
    /*
    //circulo que passa pelo arco AB
    push()
    translate(400, 100 , 500);
    rotateX(rotX)
    rotateY(rotY)
    stroke('purple')
    strokeWeight(2)
    circle(0,0,1000)
    pop()
    */
  
    // rotacaoAB
     push();
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          400,100,500,1
      );
    applyMatrix(1,0,0,0,
               0,cos(rotX) ,sin(rotX) ,0,
               0, -sin(rotX), cos(rotX),0,
              0,0,0,1
      ); // rot em X
    applyMatrix(cos(rotY),0,-sin(rotY),0,
               0,1 ,0 ,0,
               sin(rotY), 0, cos(rotY),0,
              0,0,0,1
      ); // rot Y
     applyMatrix(cos(t),sin(t),0,0,
                 -sin(t),  cos(t),0,0,
                 0,0 ,1 ,0,  
              0,0,0,1
      );// rot Z
    stroke('brown')
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          0,500,0,1
      );
    sphere(20)
    pop();
    
    /*
    //circulo que passa pelo arco BD
    push()
    translate(0, 0 , 500);
    rotateX(PI/2)
    rotateY(-atan(1/6))
    stroke('green')
    strokeWeight(2)
    circle(0,0,200)
    pop()
    */
  
    //rotacao BD
     push();
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          0,0,500,1
      );
    applyMatrix(1,0,0,0,
               0,cos(rotX) ,sin(rotX) ,0,
               0, -sin(rotX), cos(rotX),0,
              0,0,0,1
      ); // rot em X
    applyMatrix(cos(rotY),0,sin(rotY),0,
               0,1 ,0 ,0,
               -sin(rotY), 0, cos(rotY),0,
              0,0,0,1
      ); // rot Y
     applyMatrix(cos(t),sin(t),0,0,
                 -sin(t),  cos(t),0,0,
                 0,0 ,1 ,0,  
              0,0,0,1
      );// rot Z
     
    //esfera 
    stroke('brown')
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          -100,0,0,1
      );
    sphere(20)
    pop();
    
    /*
     // circulo que passa pelo arco DE
    push()
    translate(-400, -100 , 500);
    rotateX(-PI/2)
    rotateY(atan(-1/6))
    stroke('rgb(209,86,107)')
    strokeWeight(2)
    circle(0,0,1000)
    pop()
    */
    //rotaçao DE
    push();
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          -400,-100,500,1
      );
    applyMatrix(1,0,0,0,
               0,cos(rotX) ,sin(rotX) ,0,
               0, -sin(rotX), cos(rotX),0,
              0,0,0,1
      ); // rot em X
    
    applyMatrix(cos(rotY),0,-sin(rotY),0,
               0,1 ,0 ,0,
               sin(rotY), 0, cos(rotY),0,
              0,0,0,1
      ); // rot Y
    
     applyMatrix(cos(t),sin(t),0,0,
                 -sin(t),  cos(t),0,0,
                 0,0 ,1 ,0,  
              0,0,0,1
      );// rot Z
    
    //esfera 
    stroke('brown')
    applyMatrix(
           1,0,0,0,
          0,1,0,0,
          0,0,1,0,
          500,0,0,1
      );
    sphere(20)
    pop();
    
  }