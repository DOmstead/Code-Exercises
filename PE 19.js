/* eslint-disable eqeqeq */
//PE 19 - Made modular so it can accept multiple parameters. 

function dayCounter(startDate,endDate,desiredDayNum){
  let dayCounter = 0;
  let startFinished = false;
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  
  //First while loop runs until we hit the first instance of the desired day
  while(startFinished != true && startDate.getDay() != desiredDayNum){
    startDate.setDate(startDate.getDate() + 1);
    if( startDate.getDate() == desiredDayNum ){
      startFinished = true;
    }
  }

  //This while loop then runs, adding 7 days each time so that we do not have to check each day. 
  while(startDate <= endDate){
    if(startDate.getDate() == 1){
      dayCounter++;
    }
    startDate.setDate(startDate.getDate() + 7);
  }
  return dayCounter;
}

console.log(dayCounter('1901-1-01','2000-12-31',0));

