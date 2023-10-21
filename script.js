// your code here
let arr = ['The Virupaksha Temple', 'A Victoria Memorial', 'An Tajmahal'];
let withoutArticles =  [] ;
let map = {} ;
for(let i = 0 ; i < arr.length; i++) {
    let str = arr[i];
    str = str.replace(/\ban\b|\bthe\b|\ba\b/gi, "")
    str = str.replace(/ +/gi, " ");
    str = str.trim();
    map[str] = arr[i];
    withoutArticles.push(str);
}
withoutArticles.sort();
let ul = document.getElementsByTagName("ul")[0];
for(let i = 0; i < withoutArticles.length; i++) {
	let li = document.createElement("li");
	li.innerHTML(map[ withoutArticles[i] ]);
    // console.log(map[ withoutArticles[i] ]);
}

