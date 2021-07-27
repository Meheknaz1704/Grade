function marks(g){
     
    switch(true){
        case g<35:
        console.log("Fail");
        break;

        case g>=35 && g<60:
        console.log("Second class"); 
        break;

        case g>=60 && g<85:
        console.log("First class"); 
        break;
        
        case g>85:
        console.log("Distinction");
        break;
        
        default:
        console.log("Invalid");    
    }
}
marks(90);
