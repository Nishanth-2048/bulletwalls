function hascolided(object1,object2){
    if(object1.x-object2.x < (object2.width+object1.width)/2){
  
      object2.velocityX=0;
      var deformation =0.5*weight*speed*speed/22509;
      if(deformation>180){
        object2.shapeColor= color(255,0,0);
      }
      if(deformation<180 && deformation > 140){
       object2.shapeColor=color(0,255,0);
      }
      if(deformation<140){
        object2.shapeColor=color(0,255,0);
      }
    }
    else 
    {
      object2.shapeColor = "white";
      object1.shapeColor = "white";
    }
  }
  
  