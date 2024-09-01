const ulist_firstEL = document.getElementById("ulist_first");
const barEL = document.getElementById("bar");
const iconbarEL = document.getElementById("iconbar");

const barControler = () => {

    if(ulist_firstEL.style.display=== "block"){
        ulist_firstEL.style.display= "none"
         barEL.style.backgroundColor="#0089b7"
        iconbarEL.style.fontSize ="17px"
    }else{
        ulist_firstEL.style.display="block"
        barEL.style.backgroundColor="#003251"
        iconbarEL.style.fontSize ="17px"
    }

    

}

iconbarEL.addEventListener("click",barControler)


