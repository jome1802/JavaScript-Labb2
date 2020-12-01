const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

//Uppgift 1.
 document.querySelector('#ex01').textContent='done'

 //Uppgift 2.
 document.querySelector('.ex02').className ='red'

 //Uppgift 3.
 document.querySelector("blockquote").textContent='If we shouldn´t eat at night, why is there a light in the fridge?'

 //Uppgift 4.
 let ul = document.querySelector('#shopping-list')     
 let li = document.createElement("li")     
 li.appendChild(document.createTextNode("Milk"))    
 ul.appendChild(li)

 //Uppgift 5.
    for (let i = 0; i < news.length; i++) {
       let newsTemplate = document.querySelector('#news')
       let h1 = document.createElement("h1")
       h1.appendChild(document.createTextNode(news[i].headline))
       newsTemplate.appendChild(h1)     
       let p = document.createElement("p")
       p.appendChild(document.createTextNode(news[i].author))
       newsTemplate.appendChild(p)
       let a = document.createElement("a")
       a.appendChild(document.createTextNode(news[i].href))
       newsTemplate.appendChild(a)
       let text = document.createElement("p")
       text.appendChild(document.createTextNode(news[i].summary))
       newsTemplate.appendChild(text) 
    }

 //Uppgift 6. 
 document.querySelector('body').onclick = click
 
 function click() {
     document.querySelector('#click-counter').textContent++
 }
 
 //Uppgift 7.
 document.querySelector("button").onclick = oneClickOnly

 function oneClickOnly(){
     document.querySelector("button").disabled = true
 }

 //Uppgift 8.
 document.querySelector('#link-to-svt').href = "#"

 //Uppgift 9.
 document.querySelector('img').src = "https://images.unsplash.com/photo-1606145469859-bd36ede24638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

 console.log('js loaded!')