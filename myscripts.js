import data from "./data.json" assert {type: 'json'};


for(let i=0; i<data.comments.length; i++){
    let comment = data.comments[i];
    let maindiv = document.createElement("div");
    document.body.append(maindiv);

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
    imgminus.classList.add("imgplus");
    imgminus.setAttribute("src", "./images/icon-minus.svg");
    incrDecrement.append(imgminus);

    let reply = document.createElement("div");
    reply.classList.add("reply");
    incrDecrementAndReply.append(reply);

    let replyimg = document.createElement("img");
    replyimg.setAttribute("src", "./images/icon-reply.svg");
    reply.append(replyimg);

    let replyText = document.createElement("p");
    replyText.innerHTML = "Reply";
    replyText.classList.add("replyText");
    reply.append(replyText);

    let replyBigDiv = document.createElement("div");
    replyBigDiv.classList.add("replyBigDiv");
    document.body.append(replyBigDiv);

    if(comment.replies.length>0){
        let hrline = document.createElement("hr");
        hrline.classList.add("hrline");
        replyBigDiv.append(hrline);
    }
    replyArray(comment.replies);

}


function replyArray(repleis){
    for(let i=0; i<repleis.length; i++){
        
    }
}