const userid = "Hollow"
const refertoas = "it/its/itself"
const description = "look where your desires have led you :("

const linksdata =["index.html","home",
                  "posts.html","hollow's posts"]

document.getElementById("userid").textContent=userid;
document.getElementById("refertoas").textContent=refertoas;
document.getElementById("description").textContent=description;

links = document.getElementById("links")
for (let i = 0; i < linksdata.length; i=i+2) {
  newdiv = document.createElement('div')
    newlink = document.createElement('a')
    newlink.href = linksdata[i]
    newlink.innerHTML = linksdata[i+1]
    newdiv.append(newlink)
    links.append(newdiv)
}
