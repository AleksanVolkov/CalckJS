'use strict'


      let usdI,bynI;


      function getDynamicInfo(selector){
            const input = document.querySelector(selector);
            console.log(input)
            input.addEventListener('click', ()=>{
                  const result = document.querySelector('#res');
                  result.textContent= input.value;

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


 
  




