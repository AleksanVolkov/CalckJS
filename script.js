'use strict'

       let sunRes=0;
       let sunResSum;
    
      
      let num =[];
      
      const result = document.querySelector('#res'),
            plus = document.querySelector('#plus'),
            sum = document.querySelector('#sum');


      function plusN(){
            let rest = +num.join('')
            result.textContent = '';
            num=[];
            
            plusB(rest)
            
      }
      function plusB(rest){
                  
            if(sunRes===0){
                  sunRes = +rest ;
                 
                  console.log(sunRes)
            }else{
                  sunResSum = sunRes + rest ;
                  console.log(sunResSum)

                  sum.addEventListener('click',()=>{
       
                        sumAll();
                     })
                  
            }
                 
                
                
                 
                  
            

      } 

      function sumAll(){

            const sumAll = sunResSum;
            console.log(sumAll)
            
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
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // input.addEventListener('input',()=>{
            //       switch(input.getAttribute('id')){
            //             case'usd':
            //             usdI=+input.value;
            //             break;
            //             case'byn':
            //             bynI=+input.value;
            //             break;
                      
            //       }
            //       calck(usdI,bynI);
                  
            // })

           
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
    


      function calck(one,two){

           
            let res =+ one + two;
            const result = document.querySelector('#res');
            res?result.textContent=res:result.textContent=one;
            

            console.log(res)
            
            

      }


 
  




