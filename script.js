'use strict'

      let sunResP=0;
      let sunResSumP=0;
      let sunResM=0;
      let sunResSumM=0;
      let num =[''];
      
      const result = document.querySelector('#res'),
            plus = document.querySelector('#plus'),
            sum = document.querySelector('#sum'),
            multiply =  document.querySelector('#multiply'),
            clear = document.querySelector('#ce');

      function plusN(){
            let rest = +num.join('')
            result.textContent = '+';
            num=[];
            plusB(rest)
      }

      function plusB(rest){
            sunResP===0?sunResP = rest:sunResSumP = sunResP + rest;
            console.log(sunResSumP)
            console.log(sunResP)
      } 


      function multiplyN(){
            let rest = +num.join('')
            result.textContent = '*';
            num=[];
            multiplyB(rest)
      }

      function multiplyB(rest){
            sunResM===0?sunResM = rest:sunResSumM = sunResM * rest;
           
      } 
      

      sum.addEventListener('click',()=>{
            sunResP==0?(multiplyN(), sumAllM()):(plusN(),sumAllP());
          
            
           
      
         })

      multiply.addEventListener('click',()=>{
            
            multiplyN()
            
         })
      function sumAllP(){
            result.textContent = sunResSumP;
            
      } 
      function sumAllM(){
            result.textContent = sunResSumM;
            
      }

      plus.addEventListener('click',()=>{
            
            plusN();
      })

      function push(){
          let res = num.join('')
          result.textContent = res;
      }

      function getDynamicInfo(selector){
            const input = document.querySelector(selector);
            input.addEventListener('click', ()=>{
                  num.push(input.value);
                  push()
            })
      }

      getDynamicInfo('#btn_1');
      getDynamicInfo('#btn_2');
      getDynamicInfo('#btn_3');
      getDynamicInfo('#btn_4');
      getDynamicInfo('#btn_5');
      getDynamicInfo('#btn_6');
      getDynamicInfo('#btn_7');
      getDynamicInfo('#btn_8');
      getDynamicInfo('#btn_9');
      getDynamicInfo('#btn_0');
    
      function clearField (){
            clear.addEventListener('click',()=>{
                  result.textContent = 0;
                  sunResP=0;
                  sunResM=0;
                  num=[]
            })
      }

      clearField ()
 
  




