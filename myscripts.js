import data from "./data.json" assert {type: 'json'};

  
let comentsConteiner = document.querySelector(".comentsConteiner");
let deleteDiv = document.querySelector(".deleteDiv");
let backdrop = document.querySelector(".backdrop");
let deletButtons = document.querySelector(".deletButtons");
let deletButtonsred = document.querySelector(".deletButtonsred");
let replyId = 4;
let currentDivClick;

// deletButtonsred.addEventListener('click', function(event){
//   // deleteDiv.style.display = "none";
//   // backdrop.style.display = "none";
  
    
  
// });


deletButtons.addEventListener('click', function(event){
                deleteDiv.style.display = "none";
                backdrop.style.display = "none";
                
});




for(let i=0; i<data.comments.length; i++) {
    drawComment(data.comments[i]);
}

function addReplyNew(replyComment, comment) {

    console.log("Comment: ", comment);

    replyId += 1;
    let textAreaEmty = document.getElementById("textarea_"+ comment.id);
    textAreaEmty.value = "@" + comment.user.username;
    let replyObject = {
        "id": replyId,
        "content": replyComment,
        "createdAt": "2 days ago",
        "score": 2,
        "replyingTo": "Mixita",
        "user": {
          "image": { 
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        }
      };

      let repliesWrapper = document.getElementById('replies_wrapper_' + comment.id);


        let replyBigDiv = document.createElement('div');
        replyBigDiv.classList.add('replyBigDivAfter');
        replyBigDiv.id = "reply_" + replyId;
        
// deletButtonsred.addEventListener('click', function(event){
//   deleteDiv.style.display = "none";
//   backdrop.style.display = "none";
  
//   replyBigDiv.remove();
  
  
  
// });
        let headerOfConteiners = document.createElement("div");
        headerOfConteiners.classList.add("headerOfConteiner");
        replyBigDiv.append(headerOfConteiners);

        let headerImages = document.createElement("img");
        headerImages.classList.add("headerImage");
        headerImages.setAttribute("src", data.currentUser.image.png);
        headerOfConteiners.append(headerImages);

        let avatarNamess = document.createElement("p");
        avatarNamess.classList.add("avatarNames");
        avatarNamess.innerHTML = data.currentUser.username;
        headerOfConteiners.append(avatarNamess);

        
          let you = document.createElement("div");
          you.classList.add("you");
          you.innerText = "you";
          headerOfConteiners.append(you);
      

        let datesOfComments = document.createElement("p");
        datesOfComments.innerHTML = "1 minutes ago";
        datesOfComments.classList.add("datesOfComments");
        headerOfConteiners.append(datesOfComments);

        let contentText = document.createElement("p");
        contentText.innerHTML = replyComment;
        contentText.classList.add("contentText");
        replyBigDiv.append(contentText);

        let incrDecrementAndReply = document.createElement("div");
        incrDecrementAndReply.classList.add("incrDecrementAndReply");
        incrDecrementAndReply.classList.add("incrDecrementAndReplyAfter");
        replyBigDiv.append(incrDecrementAndReply);

        

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

        

       
        
          
          let deleteAndReply = document.createElement("div");
          deleteAndReply.classList.add("deleteAndReply");
          deleteAndReply.classList.add("deleteAndReplyAfter");
          replyBigDiv.append(deleteAndReply);

          let deleteF = document.createElement("div");
          deleteF.classList.add("deleteF");
          deleteAndReply.append(deleteF);
          deleteF.addEventListener('click', function(event){
              deleteDiv.style.display = "flex";
              deleteDiv.style.background = "rgba(255,255,255, 1)";
              backdrop.style.display = "block";
              backdrop.style.height = "1500px";
              currentDivClick = event.target.parentElement.parentElement.parentElement;
              
              
              // replyBigDiv.remove();
              
                
              
          });

          deletButtonsred.addEventListener('click', function(event){
              deleteDiv.style.display = "none";
              backdrop.style.display = "none";
              
              currentDivClick.remove();
              
              
              
            });

          let deleteimg = document.createElement("img");
          deleteimg.classList.add("deleteimg");
          deleteimg.setAttribute("src", "./images/icon-delete.svg");
          deleteF.append(deleteimg);

          let deleteText = document.createElement("p");
          deleteText.innerHTML = "Delete";
          deleteText.classList.add("deleteText");
          deleteF.append(deleteText);

          let repl = document.createElement("div");
          repl.classList.add("reply");
          deleteAndReply.append(repl);

          let replyimg = document.createElement("img");
          replyimg.classList.add("edit");
          replyimg.setAttribute("src", "./images/icon-edit.svg");
          repl.append(replyimg);

          let replyText = document.createElement("p");
          replyText.innerHTML = "Edit";
          replyText.classList.add("replyText");
          repl.append(replyText);
      
        // let deleteImg = document.createElement("img");
        // deleteImg.classList.add("deleteImg");
        // deleteImg.setAttribute("src", "./images/icon-delete.svg");
        // replyBigDiv.append(deleteImg);
        // deleteImg.addEventListener('click', function(event){
        //     replyBigDiv.remove();
        // });




  
        repliesWrapper.append(replyBigDiv);


        let forDivsAndreplyes = document.createElement("div");
        forDivsAndreplyes.classList.add("forDivsAndreplyes");
        
        

        let comentsSendDiv  = document.createElement("div");
        comentsSendDiv.classList.add("comentsSendDiv");
        comentsSendDiv.classList.add("sizeofreply");
        
        // 

        let textArea = document.createElement("textarea");
        textArea.classList.add("textArea");
        textArea.placeholder = "Add a comment…";
        textArea.value = "@"+comment.user.username;
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
        
        


        // let headerOfConteiner = document.createElement("div");
        // headerOfConteiner.classList.add("headerOfConteiner");
        // replyBigDiv.classList.add("mainConteinerReply");
        // replyBigDiv.append(headerOfConteiner);

        // let headerImage = document.createElement("img");
        // headerImage.classList.add("headerImage");
        // headerImage.setAttribute("src", data.currentUser.image.png);
        // headerOfConteiner.append(headerImage);

        // let avatarNames = document.createElement("p");
        // avatarNames.classList.add("avatarNames");
        // avatarNames.innerHTML = data.currentUser.username;
        // headerOfConteiner.append(avatarNames);

      

}


function appendReplies(replies, commentId) {

    let repliesWrapper = document.getElementById('replies_wrapper_' + commentId);

    for ( let i= 0; i < replies.length; i++) {
        let reply = document.createElement('div');
        reply.classList.add('replyies');
        reply.id = "reply_" + replies[i].id;
        repliesWrapper.append(reply);

        
        

        let headerOfConteiner = document.createElement("div");
        headerOfConteiner.classList.add("headerOfConteiner");
        reply.append(headerOfConteiner);

        let headerImage = document.createElement("img");
        headerImage.classList.add("headerImage");
        headerImage.setAttribute("src", replies[i].user.image.png);
        headerOfConteiner.append(headerImage);

        let avatarNames = document.createElement("p");
        avatarNames.classList.add("avatarNames");
        avatarNames.innerHTML = replies[i].user.username;
        headerOfConteiner.append(avatarNames);

        if(avatarNames.innerHTML === "juliusomo"){
          let you = document.createElement("div");
          you.classList.add("you");
          you.innerText = "you";
          headerOfConteiner.append(you);
      }

        let datesOfComments = document.createElement("p");
        datesOfComments.innerHTML = replies[i].createdAt;
        datesOfComments.classList.add("datesOfComments");
        headerOfConteiner.append(datesOfComments);

        let contentText = document.createElement("p");
        contentText.innerHTML = replies[i].content;
        contentText.classList.add("contentText");
        reply.append(contentText);

        let incrDecrementAndReply = document.createElement("div");
        incrDecrementAndReply.classList.add("incrDecrementAndReply");
        reply.append(incrDecrementAndReply);

        

        let incrDecrement = document.createElement("div");
        incrDecrement.classList.add("incrDecrement");
        incrDecrementAndReply.append(incrDecrement);

        let imgplus = document.createElement("img");
        imgplus.classList.add("imgplus");
        imgplus.setAttribute("src", "./images/icon-plus.svg");
        incrDecrement.append(imgplus);

        let incDecrText = document.createElement("p");
        incDecrText.innerHTML = replies[i].score;
        incDecrText.classList.add("incDecrText");
        incrDecrement.append(incDecrText);

        let imgminus = document.createElement("img");
        imgminus.classList.add("imgminus");
        imgminus.setAttribute("src", "./images/icon-minus.svg");
        incrDecrement.append(imgminus);

        

        if(avatarNames.innerHTML !== "juliusomo"){
          let repl = document.createElement("div");
          repl.classList.add("repl");
          incrDecrementAndReply.append(repl);
          let sendButtonAndImg = document.createElement("div");
            sendButtonAndImg.classList.add("sendButtonAndImg");
            repliesWrapper.append(sendButtonAndImg);

            let imgFOOter = document.createElement("img");
            imgFOOter.classList.add("imgMove");
            imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
            sendButtonAndImg.append(imgFOOter);
            
            let textArea = document.createElement("textarea");
            textArea.classList.add("textArea");
            textArea.placeholder = "Add a comment…";
            textArea.id = "textarea_" + replies[i].id;
            textArea.value = "@" + replies[i].user.username;
            sendButtonAndImg.append(textArea);
            

            let buttonSend = document.createElement("button");
            buttonSend.classList.add("buttonSend");
            buttonSend.id = "buttonSend_" + replies[i].id;
            buttonSend.innerText = "Reply";
            sendButtonAndImg.append(buttonSend);


            repl.addEventListener('click', function(event){
            if(sendButtonAndImg.style.display === "none"){
              sendButtonAndImg.style.display = "flex";
                
              }else{sendButtonAndImg.style.display = "none";
              }
            });

            document.getElementById('buttonSend_3').addEventListener('click', function(event) {
             let newCommentReply= document.getElementById("textarea_3")
              var misha =  {
                "id": replyId,
                "content":  newCommentReply.value,
                "createdAt": "1 month ago",
                "score": 12,
                "user": {
                  "image": { 
                    "png": "./images/avatars/image-juliusomo.png",
                    "webp": "./images/avatars/image-juliusomo.webp"
                  },
                  "username": data.currentUser.username
                },
                "replies": [
                  
                ]
              };
        
        
              drawCommentNew(misha);
              newCommentReply.value = "@" + replies[i].user.username;
            });

          let replyimg = document.createElement("img");
            replyimg.setAttribute("src", "./images/icon-reply.svg");
            replyimg.classList.add("replyimg");
            repl.append(replyimg);

            let replyText = document.createElement("p");
            replyText.innerHTML = "Reply";
            replyText.classList.add("replyText");
            repl.append(replyText);
        } 
        if(avatarNames.innerHTML === "juliusomo"){
          
          let deleteAndReply = document.createElement("div");
          deleteAndReply.classList.add("deleteAndReply");
          reply.append(deleteAndReply);

          let deleteF = document.createElement("div");
          deleteF.classList.add("deleteF");
          deleteAndReply.append(deleteF);
          deleteF.addEventListener('click', function(event){
              deleteDiv.style.display = "flex";
              deleteDiv.style.background = "rgba(255,255,255, 1)";
              backdrop.style.display = "block";
              backdrop.style.height = "1500px";
              currentDivClick = event.target.parentElement.parentElement.parentElement;
              console.log(currentDivClick);
          });

          deletButtonsred.addEventListener('click', function(event){
            deleteDiv.style.display = "none";
            backdrop.style.display = "none";
            currentDivClick.remove();
            
          });

          let deleteimg = document.createElement("img");
          deleteimg.classList.add("deleteimg");
          deleteimg.setAttribute("src", "./images/icon-delete.svg");
          deleteF.append(deleteimg);

          let deleteText = document.createElement("p");
          deleteText.innerHTML = "Delete";
          deleteText.classList.add("deleteText");
          deleteF.append(deleteText);

          let repl = document.createElement("div");
          repl.classList.add("reply");
          deleteAndReply.append(repl);

          let replyimg = document.createElement("img");
          replyimg.classList.add("edit");
          replyimg.setAttribute("src", "./images/icon-edit.svg");
          repl.append(replyimg);

          let replyText = document.createElement("p");
          replyText.innerHTML = "Edit";
          replyText.classList.add("replyText");
          repl.append(replyText);
      }

    } 
    
}


function drawCommentNew(comment){
        let commentWrapper = document.createElement('div');
    commentWrapper.classList.add("comment_wrapper");
    commentWrapper.id = "comment_wrapper_" + comment.id;

    let commentWrapperChild = document.createElement('div');
    commentWrapperChild.classList.add("commentWrapperChild");
    
    let hrline = document.createElement("hr");
    hrline.classList.add("hrline");
    commentWrapperChild.append(hrline);

    let commentWrapperChildForReply = document.createElement('div');
    commentWrapperChildForReply.classList.add("commentWrapperChildForReply");
    commentWrapperChild.append(commentWrapperChildForReply);

    


    
    let commentD = document.createElement('div');
    commentD.classList.add('comment');
    commentD.id = "comment_" + comment.id;

    let avatarImgAndNameDiv = document.createElement("div");
    avatarImgAndNameDiv.classList.add("avatarImgAndNameDiv");
    commentD.append(avatarImgAndNameDiv);

    let headerImage = document.createElement("img");
    headerImage.classList.add("headerImage");
    headerImage.setAttribute("src", comment.user.image.png);
    avatarImgAndNameDiv.append(headerImage);

    let avatarNames = document.createElement("p");
    avatarNames.classList.add("avatarNames");
    avatarNames.innerHTML = comment.user.username;
    avatarImgAndNameDiv.append(avatarNames);

    let datesOfComments = document.createElement("p");
    datesOfComments.innerHTML = comment.createdAt;
    datesOfComments.classList.add("datesOfComments");
    avatarImgAndNameDiv.append(datesOfComments);

    let contentText = document.createElement("p");
    contentText.innerHTML = comment.content;
    contentText.classList.add("contentText");
    commentD.append(contentText);

    let incrDecrementAndReply = document.createElement("div");
    incrDecrementAndReply.classList.add("incrDecrementAndReply");
    commentD.append(incrDecrementAndReply);

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
    incDecrText.classList.add("forrotate");
    incrDecrement.append(incDecrText);

    let imgminus = document.createElement("img");
    imgminus.classList.add("imgminus");
    imgminus.setAttribute("src", "./images/icon-minus.svg");
    incrDecrement.append(imgminus);
    if(avatarNames.innerHTML !== "juliusomo"){
    let reply = document.createElement("div");
    reply.classList.add("reply");
    incrDecrementAndReply.append(reply);
  reply.addEventListener('click', function(event){

    
    if(sendButtonAndImg.style.display === "none"){
      sendButtonAndImg.style.display = "flex";
        
}else{sendButtonAndImg.style.display = "none";
}

});

    let replyimg = document.createElement("img");
    replyimg.setAttribute("src", "./images/icon-reply.svg");
    replyimg.classList.add("replyimg");
    reply.append(replyimg);

    let replyText = document.createElement("p");
    replyText.innerHTML = "Reply";
    replyText.classList.add("replyText");
    reply.append(replyText);
  } 
  
    if(avatarNames.innerHTML === "juliusomo"){
      incrDecrement.classList.add("incrDecrementALastaa")

      let deleteAndReply = document.createElement("div");
      deleteAndReply.classList.add("deleteAndReply");
      commentWrapper.append(deleteAndReply);

      let deleteF = document.createElement("div");
      deleteF.classList.add("deleteF");
      deleteAndReply.append(deleteF);
      deleteF.addEventListener('click', function(event){
          deleteDiv.style.display = "flex";
          deleteDiv.style.background = "rgba(255,255,255, 1)";
          backdrop.style.display = "block";
          backdrop.style.height = "1500px";
          currentDivClick = event.target.parentElement.parentElement.parentElement;
          console.log(currentDivClick);
      });

      deletButtonsred.addEventListener('click', function(event){
        deleteDiv.style.display = "none";
        backdrop.style.display = "none";
        currentDivClick.remove();
        
      });

      let deleteimg = document.createElement("img");
      deleteimg.classList.add("deleteimg");
      deleteimg.setAttribute("src", "./images/icon-delete.svg");
      deleteF.append(deleteimg);

      let deleteText = document.createElement("p");
      deleteText.innerHTML = "Delete";
      deleteText.classList.add("deleteText");
      deleteF.append(deleteText);

      let repl = document.createElement("div");
          repl.classList.add("reply");
          deleteAndReply.append(repl);

          let replyimg = document.createElement("img");
          replyimg.classList.add("edit");
          replyimg.setAttribute("src", "./images/icon-edit.svg");
          repl.append(replyimg);

          let replyText = document.createElement("p");
          replyText.innerHTML = "Edit";
          replyText.classList.add("replyText");
          repl.append(replyText);
    }
    commentWrapper.append(commentD);
    commentWrapper.append(commentWrapperChild);

    let repliesWrapper = document.createElement('div');
    repliesWrapper.classList.add('replies_wrapper');
    repliesWrapper.id = "replies_wrapper_" + comment.id;



    commentWrapperChildForReply.append(repliesWrapper);
    comentsConteiner.append(commentWrapper);
    
    appendReplies(comment.replies, comment.id);



    let sendButtonAndImg  = document.createElement("div");
    sendButtonAndImg.classList.add("sendButtonAndImg");
    commentWrapperChildForReply.append(sendButtonAndImg);

    let imgFOOter = document.createElement("img");
    imgFOOter.classList.add("imgMove");
    imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
    sendButtonAndImg.append(imgFOOter);
    
    let textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.placeholder = "Add a comment…";
    textArea.id = "textarea_" + comment.id;
    textArea.value = "@" + comment.user.username;
    sendButtonAndImg.append(textArea);
    

    let buttonSend = document.createElement("button");
    buttonSend.classList.add("buttonSend");
    buttonSend.innerText = "Reply";
    sendButtonAndImg.append(buttonSend);

    buttonSend.addEventListener('click', function(event) {
        let replyTextArea = document.getElementById('textarea_' + comment.id);
        // console.log("First value: ", replyTextArea.value, comment.id, comment.user.username);
        addReplyNew(textArea.value, comment);
    });
}



function addCommentNew() {
    let newComment = document.getElementById('comment_textArea').value;
    // console.log("Current: ", data.currentUser);

    let commentsContainer = document.getElementById('comentsConteiner');

    // console.log("asd", commentsContainer);

    replyId += 1;

    var misha =  {
        "id": replyId,
        "content":  newComment,
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": data.currentUser.username
        },
        "replies": [
          
        ]
      };


      drawComment(misha);
}


document.getElementById('comment_send_btn').addEventListener('click', function(event) {
    addCommentNew();
    document.getElementById("comment_textArea").value = "";
});




function drawComment(comment) {
    // console.log("Comment: ", comment)
    let commentWrapper = document.createElement('div');
    commentWrapper.classList.add("comment_wrapper");
    commentWrapper.id = "comment_wrapper_" + comment.id;

    let commentWrapperChild = document.createElement('div');
    commentWrapperChild.classList.add("commentWrapperChild");
    
    let hrline = document.createElement("hr");
    hrline.classList.add("hrline");
    commentWrapperChild.append(hrline);

    let commentWrapperChildForReply = document.createElement('div');
    commentWrapperChildForReply.classList.add("commentWrapperChildForReply");
    commentWrapperChild.append(commentWrapperChildForReply);

    


    
    let commentD = document.createElement('div');
    commentD.classList.add('comment');
    commentD.id = "comment_" + comment.id;

    let avatarImgAndNameDiv = document.createElement("div");
    avatarImgAndNameDiv.classList.add("avatarImgAndNameDiv");
    commentD.append(avatarImgAndNameDiv);

    let headerImage = document.createElement("img");
    headerImage.classList.add("headerImage");
    headerImage.setAttribute("src", comment.user.image.png);
    avatarImgAndNameDiv.append(headerImage);

    let avatarNames = document.createElement("p");
    avatarNames.classList.add("avatarNames");
    avatarNames.innerHTML = comment.user.username;
    avatarImgAndNameDiv.append(avatarNames);

    let datesOfComments = document.createElement("p");
    datesOfComments.innerHTML = comment.createdAt;
    datesOfComments.classList.add("datesOfComments");
    avatarImgAndNameDiv.append(datesOfComments);

    let contentText = document.createElement("p");
    contentText.innerHTML = comment.content;
    contentText.classList.add("contentText");
    commentD.append(contentText);

    let incrDecrementAndReply = document.createElement("div");
    incrDecrementAndReply.classList.add("incrDecrementAndReply");
    commentD.append(incrDecrementAndReply);

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
    incDecrText.classList.add("forrotate");
    incrDecrement.append(incDecrText);

    let imgminus = document.createElement("img");
    imgminus.classList.add("imgminus");
    imgminus.setAttribute("src", "./images/icon-minus.svg");
    incrDecrement.append(imgminus);
    if(avatarNames.innerHTML !== "juliusomo"){
    let reply = document.createElement("div");
    reply.classList.add("reply");
    incrDecrementAndReply.append(reply);
  reply.addEventListener('click', function(event){

    
    if(sendButtonAndImg.style.display === "none"){
      sendButtonAndImg.style.display = "flex";
        
}else{sendButtonAndImg.style.display = "none";
}

});

    let replyimg = document.createElement("img");
    replyimg.setAttribute("src", "./images/icon-reply.svg");
    replyimg.classList.add("replyimg");
    reply.append(replyimg);

    let replyText = document.createElement("p");
    replyText.innerHTML = "Reply";
    replyText.classList.add("replyText");
    reply.append(replyText);
  } 
  
    if(avatarNames.innerHTML === "juliusomo"){
      incrDecrement.classList.add("incrDecrementALastaa")

      let deleteAndReply = document.createElement("div");
      deleteAndReply.classList.add("deleteAndReply");
      commentWrapper.append(deleteAndReply);

      let deleteF = document.createElement("div");
      deleteF.classList.add("deleteF");
      deleteAndReply.append(deleteF);
      deleteF.addEventListener('click', function(event){
          deleteDiv.style.display = "flex";
          deleteDiv.style.background = "rgba(255,255,255, 1)";
          backdrop.style.display = "block";
          backdrop.style.height = "1500px";
          currentDivClick = event.target.parentElement.parentElement.parentElement;
          console.log(currentDivClick);
      });

      deletButtonsred.addEventListener('click', function(event){
        deleteDiv.style.display = "none";
        backdrop.style.display = "none";
        currentDivClick.remove();
        
      });

      let deleteimg = document.createElement("img");
      deleteimg.classList.add("deleteimg");
      deleteimg.setAttribute("src", "./images/icon-delete.svg");
      deleteF.append(deleteimg);

      let deleteText = document.createElement("p");
      deleteText.innerHTML = "Delete";
      deleteText.classList.add("deleteText");
      deleteF.append(deleteText);

      let repl = document.createElement("div");
          repl.classList.add("reply");
          deleteAndReply.append(repl);

          let replyimg = document.createElement("img");
          replyimg.classList.add("edit");
          replyimg.setAttribute("src", "./images/icon-edit.svg");
          repl.append(replyimg);

          let replyText = document.createElement("p");
          replyText.innerHTML = "Edit";
          replyText.classList.add("replyText");
          repl.append(replyText);
    }
    commentWrapper.append(commentD);
    commentWrapper.append(commentWrapperChild);

    let repliesWrapper = document.createElement('div');
    repliesWrapper.classList.add('replies_wrapper');
    repliesWrapper.id = "replies_wrapper_" + comment.id;



    commentWrapperChildForReply.append(repliesWrapper);
    comentsConteiner.append(commentWrapper);
    appendReplies(comment.replies, comment.id);



    let sendButtonAndImg  = document.createElement("div");
    sendButtonAndImg.classList.add("sendButtonAndImg");
    commentWrapperChildForReply.append(sendButtonAndImg);

    let imgFOOter = document.createElement("img");
    imgFOOter.classList.add("imgMove");
    imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
    sendButtonAndImg.append(imgFOOter);
    
    let textArea = document.createElement("textarea");
    textArea.classList.add("textArea");
    textArea.placeholder = "Add a comment…";
    textArea.id = "textarea_" + comment.id;
    textArea.value = "@" + comment.user.username;
    sendButtonAndImg.append(textArea);
    

    let buttonSend = document.createElement("button");
    buttonSend.classList.add("buttonSend");
    buttonSend.innerText = "Reply";
    sendButtonAndImg.append(buttonSend);

    buttonSend.addEventListener('click', function(event) {
        let replyTextArea = document.getElementById('textarea_' + comment.id);
        // console.log("First value: ", replyTextArea.value, comment.id, comment.user.username);
        addReplyNew(textArea.value, comment);
    });
}

