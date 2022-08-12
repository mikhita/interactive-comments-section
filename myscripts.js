import data from "./data.json" assert {type: 'json'};
let comentsConteiner = document.querySelector(".comentsConteiner");
let hrlineAndReplyDivs = document.querySelector(".hrlineAndReplyDivs");
let forDivsAndreplyes = document.querySelector(".forDivsAndreplyes");
let deleteDiv = document.querySelector(".deleteDiv");
let backdrop = document.querySelector(".backdrop");
let deletButtons = document.querySelector(".deletButtons");
let deletButtonsred = document.querySelector(".deletButtonsred");




deletButtons.addEventListener('click', function(event){
                deleteDiv.style.display = "none";
                backdrop.style.display = "none";
                
});


for(let i=0; i<data.comments.length; i++){

    


    let comment = data.comments[i];
    let maindiv = document.createElement("div");
    
    let comentsSendDiv  = document.createElement("div");
    comentsSendDiv.classList.add("comentsSendDiv");
    comentsConteiner.append(comentsSendDiv);
    comentsSendDiv.style.display = "none";

    let textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.placeholder = "Add a comment…";
    textArea.value = "@"+comment.user.username;
    comentsSendDiv.append(textArea);

    let sendButtonAndImg  = document.createElement("div");
    sendButtonAndImg.classList.add("sendButtonAndImg");
    comentsSendDiv.append(sendButtonAndImg); 
    
    let imgFOOter = document.createElement("img");
    imgFOOter.classList.add("imgFOOter");
    imgFOOter.classList.add("headerImage");
    imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
    sendButtonAndImg.append(imgFOOter);

    let buttonSend = document.createElement("button");
    buttonSend.classList.add("buttonSend");
    buttonSend.innerText = "Reply";
    sendButtonAndImg.append(buttonSend);
    
    

    let headerOfConteiner = document.createElement("div");
    headerOfConteiner.classList.add("headerOfConteiner");
    maindiv.classList.add("mainConteiner");
    maindiv.append(headerOfConteiner);

    let headerImage = document.createElement("img");
    headerImage.classList.add("headerImage");
    headerImage.setAttribute("src", comment.user.image.png);
    headerOfConteiner.append(headerImage);

    let avatarNames = document.createElement("p");
    avatarNames.classList.add("avatarNames");
    avatarNames.innerHTML = comment.user.username;
    headerOfConteiner.append(avatarNames);

    let datesOfComments = document.createElement("p");
    datesOfComments.innerHTML = comment.createdAt;
    datesOfComments.classList.add("datesOfComments");
    headerOfConteiner.append(datesOfComments);

    let contentText = document.createElement("p");
    contentText.innerHTML = comment.content;
    contentText.classList.add("contentText");
    maindiv.append(contentText);

    let incrDecrementAndReply = document.createElement("div");
    incrDecrementAndReply.classList.add("incrDecrementAndReply");
    maindiv.append(incrDecrementAndReply);

    let incrDecrement = document.createElement("div");
    incrDecrement.classList.add("incrDecrement");
    incrDecrementAndReply.append(incrDecrement);

    let imgplus = document.createElement("img");
    imgplus.classList.add("imgplus");
    imgplus.setAttribute("src", "./images/icon-plus.svg");
    incrDecrement.append(imgplus);

    let incDecrText = document.createElement("p");
    incDecrText.innerHTML = comment.score;
    incDecrText.classList.add("incDecrText");
    incrDecrement.append(incDecrText);

    let imgminus = document.createElement("img");
    imgminus.classList.add("imgminus");
    imgminus.setAttribute("src", "./images/icon-minus.svg");
    incrDecrement.append(imgminus);

    let reply = document.createElement("div");
    reply.classList.add("reply");
    incrDecrementAndReply.append(reply);
    reply.addEventListener('click', function(event){
        if(comentsSendDiv.style.display === "none"){
            comentsSendDiv.style.display = "flex";
        }else {comentsSendDiv.style.display ="none"}
    })

    let replyimg = document.createElement("img");
    replyimg.setAttribute("src", "./images/icon-reply.svg");
    replyimg.classList.add("replyimg");
    reply.append(replyimg);

    let replyText = document.createElement("p");
    replyText.innerHTML = "Reply";
    replyText.classList.add("replyText");
    reply.append(replyText);
    
    comentsConteiner.appendChild(maindiv);
    comentsConteiner.append(comentsSendDiv);

    replyArray(comment.replies);
    
}

function replyArray(repleis){
    for(let i=0; i<repleis.length; i++){
        
        
        let replyBigDiv = document.createElement("div");
        replyBigDiv.classList.add("replyBigDiv");

        let replei = repleis[i];
        let maindiv = document.createElement("div");
        replyBigDiv.append(maindiv);

        
        let hrline = document.createElement("img");
        hrline.classList.add("hrline");
        hrline.setAttribute("src", "./images/line throu.png");
        hrlineAndReplyDivs.append(hrline);



        let comentsSendDiv  = document.createElement("div");
        comentsSendDiv.classList.add("comentsSendDiv");
        comentsSendDiv.classList.add("sizeofreply");
        
        comentsSendDiv.style.display = "none";

        let textArea = document.createElement("textarea");
        textArea.classList.add("textArea");
        textArea.placeholder = "Add a comment…";
        textArea.value = "@"+replei.user.username;
        comentsSendDiv.append(textArea);

        let sendButtonAndImg  = document.createElement("div");
        sendButtonAndImg.classList.add("sendButtonAndImg");
        comentsSendDiv.append(sendButtonAndImg); 
        
        let imgFOOter = document.createElement("img");
        imgFOOter.classList.add("imgMove");
        imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
        sendButtonAndImg.append(imgFOOter);

        let buttonSend = document.createElement("button");
        buttonSend.classList.add("buttonSend");
        buttonSend.innerText = "Reply";
        sendButtonAndImg.append(buttonSend);
        
        


        let headerOfConteiner = document.createElement("div");
        headerOfConteiner.classList.add("headerOfConteiner");
        maindiv.classList.add("mainConteinerReply");
        maindiv.append(headerOfConteiner);

        let headerImage = document.createElement("img");
        headerImage.classList.add("headerImage");
        headerImage.setAttribute("src", replei.user.image.png);
        headerOfConteiner.append(headerImage);

        let avatarNames = document.createElement("p");
        avatarNames.classList.add("avatarNames");
        avatarNames.innerHTML = replei.user.username;
        headerOfConteiner.append(avatarNames);

        if(repleis[i].id === 4){
            let you = document.createElement("div");
            you.classList.add("you");
            you.innerText = "you";
            headerOfConteiner.append(you);
        }

        let datesOfComments = document.createElement("p");
        datesOfComments.innerHTML = replei.createdAt;
        datesOfComments.classList.add("datesOfComments");
        headerOfConteiner.append(datesOfComments);

        let contentText = document.createElement("p");
        contentText.innerHTML = replei.content;
        contentText.classList.add("contentText");
        maindiv.append(contentText);

        let incrDecrementAndReply = document.createElement("div");
        incrDecrementAndReply.classList.add("incrDecrementAndReply");
        maindiv.append(incrDecrementAndReply);

        let incrDecrement = document.createElement("div");
        incrDecrement.classList.add("incrDecrement");
        incrDecrementAndReply.append(incrDecrement);

        let imgplus = document.createElement("img");
        imgplus.classList.add("imgplus");
        imgplus.setAttribute("src", "./images/icon-plus.svg");
        incrDecrement.append(imgplus);

        let incDecrText = document.createElement("p");
        incDecrText.innerHTML = replei.score;
        incDecrText.classList.add("incDecrText");
        incrDecrement.append(incDecrText);

        let imgminus = document.createElement("img");
        imgminus.classList.add("imgminus");
        imgminus.setAttribute("src", "./images/icon-minus.svg");
        incrDecrement.append(imgminus);
        if(repleis[i].id === 3){
            let reply = document.createElement("div");
            reply.classList.add("reply");
            incrDecrementAndReply.append(reply);
            reply.addEventListener('click', function(event){
                if(comentsSendDiv.style.display === "none"){
                    comentsSendDiv.style.display = "flex";
                    hrline.classList.add("height");
                }else {comentsSendDiv.style.display ="none";
                    hrline.classList.remove("height");
                }

            })

            let replyimg = document.createElement("img");
            replyimg.setAttribute("src", "./images/icon-reply.svg");
            replyimg.classList.add("replyimg");
            reply.append(replyimg);

            let replyText = document.createElement("p");
            replyText.innerHTML = "Reply";
            replyText.classList.add("replyText");
            reply.append(replyText);
        }
        if(repleis[i].id === 4){
            let deleteAndReply = document.createElement("div");
            deleteAndReply.classList.add("deleteAndReply");
            incrDecrementAndReply.append(deleteAndReply);

            let deleteF = document.createElement("div");
            deleteF.classList.add("deleteF");
            deleteAndReply.append(deleteF);
            deleteF.addEventListener('click', function(event){
                deleteDiv.style.display = "flex";
                deleteDiv.style.background = "rgba(255,255,255, 1)";
                backdrop.style.display = "block";
                backdrop.style.height = "1500px";
            });

            let deleteimg = document.createElement("img");
            deleteimg.classList.add("deleteimg");
            deleteimg.setAttribute("src", "./images/icon-delete.svg");
            deleteF.append(deleteimg);

            let deleteText = document.createElement("p");
            deleteText.innerHTML = "Delete";
            deleteText.classList.add("deleteText");
            deleteF.append(deleteText);

            let reply = document.createElement("div");
            reply.classList.add("reply");
            deleteAndReply.append(reply);

            let replyimg = document.createElement("img");
            replyimg.classList.add("edit");
            replyimg.setAttribute("src", "./images/icon-edit.svg");
            reply.append(replyimg);

            let replyText = document.createElement("p");
            replyText.innerHTML = "Edit";
            replyText.classList.add("replyText");
            reply.append(replyText);
        }

        
        forDivsAndreplyes.appendChild(replyBigDiv);
        forDivsAndreplyes.append(comentsSendDiv);
        if(repleis[i].id === 4){
            comentsSendDiv.style.display = "none";
            hrline.style.display = "none";
            deletButtonsred.addEventListener('click', function(event){
                replyBigDiv.style.display = "none";
                deleteDiv.style.display = "none";
                backdrop.style.display = "none";
            });
        }


        
    }
}