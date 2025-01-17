function descendingorder(a){
let c =Array.from(a).sort((a,b)=>b.localeCompare(a))
console.log(c.join(''));

}

descendingorder("abcd")