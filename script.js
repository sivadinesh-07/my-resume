var counting=0;
var boolean
const img=document.getElementById("img")
const theme=document.getElementById("theme")
const btn1=document.getElementById("hide")
const count=document.getElementById("count")
const btn=document.getElementById("btn")
const outer=document.getElementById("outer")
const main=document.getElementById("main")
btn.addEventListener('click',function()
{
counting++
count.innerText=counting
})
btn1.addEventListener('click',function()
{
boolean=!boolean
img.src=`${boolean?"images.png":"siva.png"}`
btn1.textContent=`${boolean?"Show":"Hide"}`

})
const dark=document.getElementById("dark")
dark.addEventListener('click',function()
{
boolean=!boolean
dark.textContent=`${boolean?"Light":"Dark"}`
theme.className=`${boolean?"dark":"light"}`
outer.className=`${boolean?"dark1":"light1"}`
main.className=`${boolean?"dark":"light"}`
})
