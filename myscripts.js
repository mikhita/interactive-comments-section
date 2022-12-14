import data from "./data.json" assert {type: 'json'};

  
let comentsConteiner = document.querySelector(".comentsConteiner");
let deleteDiv = document.querySelector(".deleteDiv");
let backdrop = document.querySelector(".backdrop");
let deletButtons = document.querySelector(".deletButtons");
let deletButtonsred = document.querySelector(".deletButtonsred");
let replyId = 4;
let currentDivClick;



deletButtons.addEventListener('click', function(event){
                deleteDiv.style.display = "none";
                backdrop.style.display = "none";
                
});





for(let i=0; i<data.comments.length; i++) {
    drawComment(data.comments[i]);
}

function addReplyNew(area, comment) {
console.log(area)
    

    replyId += 1;
    let textAreaEmty = area;
    let replyObject = {
        "id": replyId,
        "content": area.value,
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
        contentText.innerHTML = area.value;
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

        let clickedButtonplus;
        let clickedButtonminus;
        imgplus.addEventListener('click', function(event){
          clickedButtonplus=true;
          imgminus.classList.remove("noHover");
          if(clickedButtonminus===true){
            incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+2;
            imgplus.classList.add("noHover");
          }else{
            incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+1;
            imgplus.classList.add("noHover");
          }
          
          
        })
        
          imgminus.addEventListener('click', function(event){
            clickedButtonminus=true;
            imgplus.classList.remove("noHover");
            if(clickedButtonplus===true){
              incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-2;
              imgminus.classList.add("noHover");
    
            }else{
              incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-1;
              imgminus.classList.add("noHover");
    
            }
            
            
          })
        
       
  
          let deleteAndReply = document.createElement("div");
          deleteAndReply.classList.add("deleteAndReply");
          deleteAndReply.classList.add("deleteAndReplyAfter");
          replyBigDiv.append(deleteAndReply);

          let deleteF = document.createElement("div");
          deleteF.classList.add("deleteF");
          deleteAndReply.append(deleteF);
          deleteF.addEventListener('click', function(event){
            document.body.scrollTop = document.documentElement.scrollTop = 0;

              deleteDiv.style.display = "flex";
              deleteDiv.style.background = "rgba(255,255,255, 1)";
              backdrop.style.display = "block";
              backdrop.style.height = "1500px";
              currentDivClick = event.target.parentElement.parentElement.parentElement;
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
          repl.addEventListener('click', function(event){
            let editButtonClick;
            if(event.target === repl){
              editButtonClick = event.target.parentElement.previousElementSibling.previousElementSibling;
            }else{
              editButtonClick = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling;
            }
            editButtonClick.replaceWith(textAreaEmty);
            textAreaEmty.value = area.value;


            let update = document.createElement("button");
            update.classList.add("buttonSend");
            update.id = "update";
            update.innerText = "Update";
            replyBigDiv.append(update);
            update.addEventListener('click', function(event){
            let contentText = document.createElement("p");
            contentText.innerHTML = textAreaEmty.value;
            contentText.classList.add("contentText");
            textAreaEmty.replaceWith(contentText);
            update.remove();
          
        });
            
          });
      
        repliesWrapper.append(replyBigDiv);


        let forDivsAndreplyes = document.createElement("div");
        forDivsAndreplyes.classList.add("forDivsAndreplyes");
        
        

        let comentsSendDiv  = document.createElement("div");
        comentsSendDiv.classList.add("comentsSendDiv");
        comentsSendDiv.classList.add("sizeofreply");
        

        let textArea = document.createElement("textarea");
        textArea.classList.add("textArea");
        textArea.placeholder = "Add a comment???";
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
        
        document.querySelector(".buttonSend").addEventListener('click', function(event){
                  let replyTextArea = document.getElementById('textarea_' + replies[i].id);
                  addReplyNew(textArea, comment);
                  sendButtonAndImg.remove();
                  repl.disabled = false;
        })
        

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

        let clickedButtonplus;
    let clickedButtonminus;
    imgplus.addEventListener('click', function(event){
      clickedButtonplus=true;
      imgminus.classList.remove("noHover");
      if(clickedButtonminus===true){
        incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+2;
        imgplus.classList.add("noHover");
      }else{
        incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+1;
        imgplus.classList.add("noHover");
      }
      
      
    })
    
      imgminus.addEventListener('click', function(event){
        clickedButtonminus=true;
        imgplus.classList.remove("noHover");
        if(clickedButtonplus===true){
          incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-2;
          imgminus.classList.add("noHover");

        }else{
          incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-1;
          imgminus.classList.add("noHover");

        }
        
        
      })
        
       

        

        if(avatarNames.innerHTML !== "juliusomo"){
          let repl = document.createElement("button");
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
            textArea.placeholder = "Add a comment???";
            textArea.id = "textarea_" + replies[i].id;
            textArea.value = "@" + replies[i].user.username;
            sendButtonAndImg.append(textArea);
            

            let buttonSend = document.createElement("button");
            buttonSend.classList.add("buttonSend");
            buttonSend.id = "buttonSend_" + replies[i].id;
            buttonSend.innerText = "Reply";
            sendButtonAndImg.append(buttonSend);


            repl.addEventListener('click', function(event){
              let sendButtonAndImg  = document.createElement("div");
              sendButtonAndImg.classList.add("sendButtonAndImg");
              repliesWrapper.append(sendButtonAndImg);
      
              let imgFOOter = document.createElement("img");
              imgFOOter.classList.add("imgMove");
              imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
              sendButtonAndImg.append(imgFOOter);
              
              let textArea = document.createElement("textarea");
              textArea.classList.add("textArea");
              textArea.placeholder = "Add a comment???";
              textArea.id = "textarea_" + replies[i].id;
              textArea.value = "@" + replies[i].user.username;
              sendButtonAndImg.append(textArea);
              
      
              let buttonSend = document.createElement("button");
              buttonSend.classList.add("buttonSend");
              buttonSend.innerText = "Reply";
              sendButtonAndImg.append(buttonSend);
      
              buttonSend.addEventListener('click', function(event) {
                let commentInput = data.comments.find((element)=>element.replies.find((reply)=>reply.id===replies[i].id))
                
                  let replyTextArea = document.getElementById('textarea_' + replies[i].id);
                  addReplyNew(event.target.previousElementSibling, commentInput);
                  sendButtonAndImg.remove();
                  repl.disabled = false;
              });
              repl.disabled = true;
          if(sendButtonAndImg.style.display === "flex"){
      
            sendButtonAndImg.style.display = "none";
            
          }else{sendButtonAndImg.style.display = "flex";
          
          
          }
            });

            document.getElementById('buttonSend_3').addEventListener('click', function(event) { 
              appendRepliesNew(data.comments[1].replies);
              document.getElementById("replies_wrapper_2").innerHTML = "";
              appendReplies(data.comments[1].replies, data.comments[1].id);

              document.getElementById("textarea_3").value = "@" + replies[i].user.username;
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
          deleteF.id = replies[i].id;
          deleteAndReply.append(deleteF);
          deleteF.addEventListener('click', function(event){
            
              document.body.scrollTop = document.documentElement.scrollTop = 0;
         
              deleteDiv.style.display = "flex";
              deleteDiv.style.background = "rgba(255,255,255, 1)";
              backdrop.style.display = "block";
              backdrop.style.height = "1500px";
              currentDivClick = event.target.parentElement.parentElement.parentElement;
              
          });

          deletButtonsred.addEventListener('click', function(event){
            deleteDiv.style.display = "none";
            backdrop.style.display = "none";
            currentDivClick.remove();

            let id = event.target.id;
            let index = data.comments[1].replies.findIndex((element)=>element.id == id)
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
          let textAreaEmty = document.getElementById("textarea_3");
          
          repl.addEventListener('click', function(event){
            let editButtonClick;
            if(event.target === repl){
              editButtonClick = event.target.parentElement.previousElementSibling.previousElementSibling;
            }else{
              editButtonClick = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling;
            }
            
            textAreaEmty.value = replies[i].content;
            editButtonClick.replaceWith(textAreaEmty);


            let update = document.createElement("button");
            update.classList.add("buttonSend");
            update.id = "update";
            update.innerText = "Update";
            reply.append(update);
            update.addEventListener('click', function(event){
            let contentText = document.createElement("p");
            contentText.innerHTML = textAreaEmty.value;
            contentText.classList.add("contentText");
            textAreaEmty.replaceWith(contentText);
            update.remove()
          
          });
      })
          
        
    }

  } 
    
}


function appendRepliesNew(misha, textContent){
  let repliesWrapper = document.getElementById('replies_wrapper_2');
  let textarea3 = document.getElementById("textarea_3").value;
  let replies = {
    "id": misha[misha.length-1].id+1,
    "content": textarea3,
    "createdAt": "2 days ago",
    "score": 2,
    "replyingTo": "ramsesmiron",
    "user": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    }
  }
  misha.push(replies);
      
}



function addCommentNew() {
    let newComment = document.getElementById('comment_textArea').value;
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

    let clickedButtonplus;
    let clickedButtonminus;
    imgplus.addEventListener('click', function(event){
      clickedButtonplus=true;
      imgminus.classList.remove("noHover");
      if(clickedButtonminus===true){
        incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+2;
        imgplus.classList.add("noHover");
      }else{
        incDecrText.innerHTML = parseInt(incDecrText.innerHTML)+1;
        imgplus.classList.add("noHover");
      }
      
      
    })
    
      imgminus.addEventListener('click', function(event){
        clickedButtonminus=true;
        imgplus.classList.remove("noHover");
        if(clickedButtonplus===true){
          incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-2;
          imgminus.classList.add("noHover");

        }else{
          incDecrText.innerHTML = parseInt(incDecrText.innerHTML)-1;
          imgminus.classList.add("noHover");

        }
        
        
      })
    if(avatarNames.innerHTML !== "juliusomo"){
    let reply = document.createElement("button");
    reply.classList.add("reply");
    incrDecrementAndReply.append(reply);
    reply.addEventListener('click', function(event){
        let sendButtonAndImg  = document.createElement("div");
        sendButtonAndImg.classList.add("sendButtonAndImg");
        commentWrapperChildForReply.append(sendButtonAndImg);

        let imgFOOter = document.createElement("img");
        imgFOOter.classList.add("imgMove");
        imgFOOter.setAttribute("src", "./images/avatars/image-juliusomo.webp");
        sendButtonAndImg.append(imgFOOter);
        
        let textArea = document.createElement("textarea");
        textArea.classList.add("textArea");
        textArea.placeholder = "Add a comment???";
        textArea.id = "textarea_" + comment.id;
        textArea.value = "@" + comment.user.username;
        sendButtonAndImg.append(textArea);
        

        let buttonSend = document.createElement("button");
        buttonSend.classList.add("buttonSend");
        buttonSend.innerText = "Reply";
        sendButtonAndImg.append(buttonSend);

        buttonSend.addEventListener('click', function(event) {
            let replyTextArea = document.getElementById('textarea_' + comment.id);
            addReplyNew(textArea, comment);
            sendButtonAndImg.remove();
            reply.disabled = false;
        });
        reply.disabled = true;
    if(sendButtonAndImg.style.display === "flex"){

      sendButtonAndImg.style.display = "none";
      
    }else{sendButtonAndImg.style.display = "flex";
    
    
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
        document.body.scrollTop = document.documentElement.scrollTop = 0;

            deleteDiv.style.display = "flex";
            deleteDiv.style.background = "rgba(255,255,255, 1)";
            backdrop.style.display = "block";
            backdrop.style.height = "1500px";
            currentDivClick = event.target.parentElement.parentElement.parentElement;
            
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

      let repl = document.createElement("button");
          repl.classList.add("reply");
          deleteAndReply.append(repl);
          repl.addEventListener('click',function(event){
            
            let textArea = document.createElement("textarea");
            textArea.classList.add("textArea");
            textArea.placeholder = "Add a comment???";
            textArea.id = "textarea_" + comment.id;
            commentD.prepend(textArea);
            let editButtonClick;
                    if(event.target === repl){
                      editButtonClick = event.target.parentElement.nextElementSibling.childNodes[2]; 
                    }else{
                      editButtonClick = event.target.parentElement.parentElement.nextElementSibling.childNodes[2];
                    }
                        textArea.value = editButtonClick.innerText;
                        editButtonClick.replaceWith(textArea);
                        repl.disabled = true;
                        let update = document.createElement("button");
                        update.classList.add("buttonSend");
                        update.innerText = "Update";
                        commentD.append(update);
                        update.addEventListener('click', function(event){
                        let contentText = document.createElement("p");
                        contentText.innerHTML = textArea.value;
                        contentText.classList.add("contentText");
                        textArea.replaceWith(contentText);
                        update.remove();
                        repl.disabled = false;
                      })
          })
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
    textArea.placeholder = "Add a comment???";
    textArea.id = "textarea_" + comment.id;
    textArea.value = "@" + comment.user.username;
    sendButtonAndImg.append(textArea);
    

    let buttonSend = document.createElement("button");
    buttonSend.classList.add("buttonSend");
    buttonSend.innerText = "Reply";
    sendButtonAndImg.append(buttonSend);
    document.querySelector(".buttonSend").addEventListener('click', function(event) {
    });
}





