<template>

    <div class="reklamas">
        <div class="block_1">
            <div class="head_t">
                    <h1>ДАЙЫН САБАҚ ЖОСПАРЛАРЫ</h1>
            </div>
            <div class="second">
                Өз уақытыңызбен барлық күшіңізді оқушыға сапалы сабақ беруге жұмсаңыз. Барлық қағазбастылық жұмысты бізге тапсырыңыз. Дайын сабақ жоспарларын алып еліміздің білімінің дамуына үлес қосыңыз!
            </div>
            <div class="buiryq">
            <div class="content">
                <img src="@/assets/images/qmg/icon 9.png" alt="suret">
                <div class="info">ҚР Білім және Ғылым министірлігінің <br/> стандартымен жасалған</div>
            </div>
        </div>
        </div>
        <div v-if="skidka" class="first">
                <div class="pre">Ұстаз тілегінде жаңа бөлімнің ашылуына орай {{skidka.to_date.day}} - {{skidka.to_date.month}} дейін</div>
                <div class="skidka">{{skidka.skidka}}% - жеңілдік</div>
                <div class="timer">
                    <h4>Жеңілдіктің бітуіне қалды</h4>
                    <div v-if="!timerText" class="timer_time">
                        <div  class="time">
                            <h3 class="tm">
                                {{cT.days}}
                            </h3>
                            <p class="tm_p">Күн</p>
                        </div>
                        <div class="time">
                            <h3 class="tm">
                                {{ cT.hours }}
                            </h3>
                            <p class="tm_p">Сағат</p>
                        </div>
                        <div class="time">
                            <h3 class="tm">
                                {{ cT.minuts }}
                            </h3>
                            <p class="tm_p">Минут</p>
                        </div>
                        <div class="time">
                            <h3 class="tm">
                                {{ cT.seconds }}
                            </h3>
                            <p class="tm_p">Секунд</p>
                        </div>
                        
                    </div>
                </div>
                <div class="foot">Жеңілдік уақыты шектеулі, алып үлгеріңіз!</div>
        </div>
       
        
    </div>
</template>

<script>
export default {
    props: ['skidka', 'cT', 'startTimer', 'getQmg','asyncData'],
}
</script>
  

  
<style scoped lang="scss">
    .reklamas {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 60px;
        border-radius: 6px;
        

        .block_1{
            max-width: 100%;

        .head_t {
           
            h1 {
                text-transform: uppercase;
                font-family: Atyp Display;
                font-size: 36px ;
                font-weight: 600;
                line-height: 51.8px;
            }
        }
        
        }
        .buiryq {
            background: rgba(23, 40, 86, 1);
            border-radius: 20px;
            padding: 20px ;
            max-width: 100%;
            margin-top: 10px;

            .content {
                width: 100%;
                color: rgba(255, 255, 255, 1);
                display: flex;
                column-gap: 20px;
                

                .info {
                    font-family: Atyp Text;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28.2px;
                    text-align: left;

                }
            }
        }

            .first {
                max-width: 390px;
                border-radius: 10px;
                border: 1px;
                background: linear-gradient(140.25deg, #C8FFE5 0.93%, #F5FFDA 82.61%);
                padding: 25px;
                text-align: center; 
                
                

                .timer{
                    color: rgba(255, 255, 255, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #172856;
                    border-radius: 20px;
                    padding: 10px 40px;
                    max-width: 304px;
                    width: 100%;
                    margin: 0 auto;
                    
                    
                    h4{
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22.78px;
                        text-align: center;
                        margin-bottom: 10px;

                    }

                    .timer_time{
                        display: flex;
                        column-gap: 10px;
                        text-align: center;

                        .time{

                            .tm_p{
                                margin: 5px 0;
                                font-family: Atyp Text;
                                font-size: 12px;
                                font-weight: 400;
                                line-height: 16.92px;
                                color: rgba(133, 138, 151, 1);


                        }


                        .tm{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding: 4px 12px;
                            gap: 10px;
                            width: 49px;
                            background: #FF8B0D;
                            border-radius: 6px;
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 28.78px;
                         

                        }

                        }

                    }

                }


                .pre {
                    font-family: Atyp Text;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 108%;



                }

                .skidka {
                    font-family: Atyp Text;
                    font-size: 40px;
                    font-weight: 600;
                    line-height: 43.2px;
                    margin: 20px 0;
                    color: #FF8B0D;
                }

                .foot {
                    font-family: Atyp Text;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22.56px;
                    width: 310px;
                    margin: 0 auto;
                    padding: 10px 0 0 0;
    
                }
            }

            .second {
                
                font-family: Atyp Text;
                font-size: 18px;
                font-weight: 400;
                line-height: 25.38px;
                text-align: left;
                max-width: 550px;
                margin-top: 10px;

            }
        }


       
    @media all and (max-width: 1439px) {
        .reklamas{
            column-gap: 20px;
        }

        .buiryq {
            padding: 5px ;

            .content {
                align-items: center;
                column-gap: 20px;
                

                .info {

                    font-size: 16px;
                    line-height: 22.2px;

     

                }
            }

            .first{
                margin-top: 20px;
                
            }
            .second {
                width: 100%;
            }
        }

        @media all and (max-width: 1200px) {
        .reklamas {
            flex-direction: column;
            gap: 20px;
            .first{
                max-width: 100%;
                
            }

        }

        
    }
        

    @media all and (max-width: 1099px) {
        .reklamas  .first .skidka {
            font-size: 40px;
            line-height: 28px;
        }

        .reklamas  .first .pre {
            font-size: 17px;
            line-height: 21px;
        }

        .reklamas  .first .foot {
            margin-top: 10px;
            font-size: 17px;
            font-weight: 400;
        }

     

      

      
    }

    @media all and (max-width: 991px) {
        .reklamas  .first .skidka {
            font-size: 36px;
            line-height: 28px;
        }

        .reklamas  .first .pre {
            font-size: 16px;
            line-height: 19px;
        }

        .reklamas  .first .foot {
            font-size: 16px;
        }

        .reklamas  .second {
            font-size: 13px;
        }

        .reklamas  .comp {
            transform: translate(136px, 18px);
        }

        .reklamas  {
            max-width: 450px;
        }
        .reklamas .buiryq  {
            max-width: 100%;
            padding: 10px;
            border-radius: 10px;
        }
        .reklamas .buiryq .content {
            column-gap: 10px;
        }

        .reklamas .buiryq .content .info {
            font-size: 15px;
            line-height: 18px;

        }

   

        .reklamas .buiryq .content img {
            width: 34px;
        }
    }

    @media all and (max-width: 883px) {


        .reklamas .buiryq {
            position: relative;
            width: 100%;
            height: auto;


        }

        .reklamas .first {
 
            max-width: 100%;



        }

        .reklamas  {
            width: 100%;
            max-width: 100%;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

 
        .reklamas  .first .skidka {
            font-size: 33px;
            line-height: 27px;
            margin-top: 10px;
        }

   

    }

    @media all and (max-width: 575px) {
        .reklamas{
            padding: 0 10px;
        }
    }

    @media all and (max-width: 500px) {
        .reklamas  .first .skidka {
            font-size: 29px;
            line-height: 25px;
        }

        .reklamas  .first .pre {
            font-size: 15px;
            line-height: 17px;
        }

        .reklamas  .first .foot {
            font-size: 15px;
        }

        .reklamas  .second {
            font-size: 12px;
        }

        .reklamas  .comp {
            width: 231px;
            height: 144px;
        }
    }

    @media all and (max-width: 450px) {
        .reklamas  .first .foot {
            font-size: 14px;
            margin-top: 3px;
            max-width: 200px;
        
        }

        .reklamas  .first .pre {
            font-size: 14px;
            line-height: 16px;
        }

        .reklamas  .first .skidka {
            font-size: 25px;
            line-height: 22px;
            margin-top: 5px;
        }

   

        .reklamas .buiryq .content .info {
            font-size: 14px;
            line-height: 18px;
        }

        .reklamas  .second {
            line-height: 15px;
        }
    }

    @media all and (max-width: 416px) {
        .reklamas  .comp {
            width: 160px;
            height: 107px;
            transform: translate(0, 40px);
        }

   
    }

    @media all and (max-width: 382px) {
        .reklamas  .first {
            padding: 10px;
        }
    }
    }

    @media all and (max-width: 351px) {
        .reklamas  .first .timer{
           padding: 10px 0;
            margin: 0;
        }
   
            
    }
    
</style>
