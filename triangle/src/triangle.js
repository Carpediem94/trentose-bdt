TryAngle = 
         {
          SIDE_EQUILATERAL:"equilateral",
          SIDE_ISOSCELES:"isosceles",
          SIDE_SCALENE:"scalene",
          ANGLE_ACUTE:"acute",
          ANGLE_OBTUSE:"obtuse",
          ANGLE_RIGHT:"right",
          isTriangle:function(e,t,n) {
            return e+t>n && e+n>t && t+n>e
          },
          getTypeBySidesLength:function(e,t,n) {
            if(e==t||t==n) {
              return"equilateral"
            } else if(e==t||t==n||e==n) {
              return"isosceles"
            } else {
              return"scalene"
            }
          },
          getTypeByAngles:function(e,t,n) {
            var r=[e,t,n];r.sort();
            if(Math.pow(r[0],2)+Math.pow(r[1],2)>Math.pow(r[2],2)) {
              return"acute"
            } else if(Math.pow(r[0],2)+Math.pow(r[1],2)<Math.pow(r[2],2)) {
              return"obtuse"
            } else {
              return"right"
            }
          }
         }