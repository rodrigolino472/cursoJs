function recursiva(n){
  if(n > 20) return;
  console.log(n)
  n++
  recursiva(n)
}
recursiva(0)