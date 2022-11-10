window.addEventListener("DOMContentLoaded",function(){
    const words =["Software Engineer..." ,"Sketch Artish...","Photographer...","Pianist...","Little Stupid..."];
    const Imges_url = [
        "url('Assets/img/3unsplash.jpg')",
        "url('Assets/img/1unsplash.jpg')",
        "url('Assets/img/4unsplash.jpg')", 
    ]
    const img_val = document.getElementById("profileBackground");
    const details = document.getElementById("Mydetails");
    let phraseIndex =0;
    let imageIndex=0;
    let iconindex =0;
    let indexEach = 0;
    const Tspeed=150;
    const Espeed =30;
    const iconsval = [
        [
            "/Png/codepen/c1.png",
            "/Png/codepen/c2.png"
        ],[
            "/Png/github/g1.png",
            "/Png/github/g3.png", 
            "/Png/github/g2.png"
        ],[
            "/Png/gmail/gm1.png",
            "/Png/gmail/gm2.png"
        ],[
            "Png/leetcode/l (1).png",
            "Png/leetcode/l (2).png",
            "Png/leetcode/l (3).png",
            "Png/leetcode/l (4).png"
        ],
        [
            "/Png/linked/l (1).png",
            "/Png/linked/l (2).png",
            "/Png/linked/l (3).png",
            "/Png/linked/l (4).png",
        ],[
            "/Png/twitter/tw (1).png",
            "/Png/twitter/tw (2).png",
            "/Png/twitter/tw (3).png"
        ]
    ]
    
    function updateicons(){
        document.getElementById("codepen").src = `${iconsval[0][(iconindex)%2]}`;
        document.getElementById("github").src = `${iconsval[1][(iconindex)%3]}`;
        document.getElementById("gmail").src = `${iconsval[2][(iconindex)%2]}`;
        document.getElementById("leetcode").src = `${iconsval[3][(iconindex)%4]}`;
        document.getElementById("linkedin").src = `${iconsval[4][(iconindex)%4]}`;
        document.getElementById("twitter").src = `${iconsval[5] [(iconindex)%3]}`;
    }
    function updatebackground(){
        img_val.style.backgroundImage = Imges_url[imageIndex];
    }
    function callall(){
        updatebackground();
        updateicons();
    }
    function printletter(phrase){
        if(indexEach == phrase.length){
            clearLetter();
        }
        else if(indexEach < phrase.length){
            details.textContent += phrase.charAt(indexEach); 
            indexEach += 1; 
            setTimeout(()=>{
                printletter(phrase);
            }, Tspeed)
        }
    } 

    function clearLetter(){
        if(indexEach === -1){
            phraseIndex = (phraseIndex+1)%(words.length);
            indexEach =0;
            printletter(words[phraseIndex]);
            if(phraseIndex == 0){
                imageIndex = (imageIndex+1)%(3);
                iconindex++;
                callall();
            }
        }
        else if(indexEach > -1){
            let updatedphrase = "";
            for(let ind =0; ind < indexEach; ind++){
                updatedphrase += words[phraseIndex].charAt(ind);
            }
            details.textContent = updatedphrase;
            indexEach -=1;
            setTimeout(()=>{
                clearLetter();
            },Espeed);
        } 
    }
    printletter(words[phraseIndex]);
    callall()
})

