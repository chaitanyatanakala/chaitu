num =+prompt("Enter the number: ")
a = 0; b = 1; nonfib = 0; z = 0;
res=""

while (nonfib != num) {
    let i = a + 1;
    while (i < b) {
        res+=i+" "
        
        i++;
        nonfib++;
        if (nonfib == num) 
        break;
    }
    c = a + b;
    a = b;
    b = c;
}
console.log(res)



num =+prompt("Enter the number: ")
a=0;b=1;nonfib=0; z=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
        z=i
        i++;
        nonfib++
        if(nonfib==num)
        
        break
    }
    c=a+b
    a=b
    b=c
}
console.log(z)


num =+prompt("Enter the number: ")
a=0;b=1;nonfib=0; res=""
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        // console.log(i)
        nonfib++
        if(nonfib==num){
            break
        }
        if(i<num){
            res+=i + " "
            
        }
    }
    c=a+b
    a=b
    b=c
}
console.log(res)