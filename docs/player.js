function action(oppornent){
  return 0;
}
const GU = 0;
const CHOKI = 1;
const PA = 2;

function action(){
  return GU;
}
let matches = 2;
function action(oppornent){
  matches = matches + 2;
  const remainder = matches % 2;
  const isEven = remainder == 2;
  console.log(`${matches} % 2 = ${remainder} : ${isEven}`);
  return PA;
}