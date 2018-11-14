let fs=require('fs');
var file =fs.readFileSync ('./flower.txt');
let lines=file.toString().split('\n');
console.log('Number of Rows in this file =  '+lines.length.toString());
var num_S=0;
console.log('List of Flowers start with S'); 
for(var line = 0; line < lines.length; line++)
{
   if(lines[line][0]=='S')
   {
    console.log(lines[line]);
    num_S++;
   } 
  }
  console.log('Number of flower in file without start s =  '+(lines.length-num_S).toString());
  console.log('List of Flowers start with my first letter'); 
  for(var line = 0; line < lines.length; line++)
{
   if(lines[line][0]=='H')
   {
    console.log(lines[line]);
    num_S++;
   } 
}
console.log('List of Flowers that the lengh of name is 5'); 
for(var line = 0; line < lines.length; line++)
{
   if(lines[line].length==5)
   {
    console.log(lines[line]);
    num_S++;
   } 
}


