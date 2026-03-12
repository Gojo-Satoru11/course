let count = 0;
let likes;
document.getElementById("like").onclick = function clickme()
{
    count++ 
    document.getElementById("lbl").textContent = "Likes: "+String(count)
} ;