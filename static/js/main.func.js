var ft={};

ft.DateFormat=function(date){
  var dt = date.split('/');
  return dt[2]+'-'+dt[1]+'-'+dt[0];
};

ft.publishDateFormat=function(date){
  var dt = date.split(' ');
  var year = dt[2].split(',');
  var yearth = year[0]-543;
  return dt[0]+' '+dt[1]+' '+yearth+', '+dt[3]+' '+dt[4];
};