function getSleepHours(day){
  day=day.toLowerCase();
  if (day==='monday') {
    return 8;
  }else if(day==='tuesday') {
    return 7;
  } else if(day==='wednesday') {
    return 7;
  } else if(day==='thursday') {
    return 7;
  } else if (day==='friday') {
    return 6;
  } else if(day==='saturday') {
    return 6;
  } else if(day==='sunday') {
    return 7;
  }
}