
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Mera Intkaam Dekhegi.mp3"
,"songs\\Brothers Anthem (Vishal Dadlani).mp3"
,"songs\\Challa (Main Lad Jaana).mp3"
,"songs\\Dekh Toofaan Aaya Hai.mp3"
,"songs\\Apna Time Aayega.mp3"
,"songs\\Chak Lein De.mp3"
,"songs\\Get Ready To Fight Again.mp3"
,"songs\\Angaar.mp3"
,"songs\\Shiv Tandav Stotram.mp3"
,"songs\\Yalgaar.mp3"
,"songs\\32 Bore.mp3"
,"songs\\Sulthan.mp3"
,"songs\\Lift Teri Bandh Hai.mp3"
,"songs\\Badri Ki Dulhania.mp3"
,"songs\\Daaru Party.mp3"
,"songs\\Halamithi Habibo.mp3"
,"songs\\U Antava Mava.mp3"
,"songs\\Sauda Khara Khara.mp3"
,"songs\\Rowdy Baby.mp3"
,"songs\\Aajkal Tere Mere Pyar Ke Charche.mp3"
,"songs\\Poster Lagwa Do.mp3"
,"songs\\Baarish Ki Jaaye.mp3"
,"songs\\Genda Phool.mp3"
,"songs\\Main Tera Boyfriend Tu Meri Girlfriend.mp3"
,"songs\\Aashiq Surrender Hua.mp3"
,"songs\\Ankhiyon Se Goli Mare.mp3"
,"songs\\3 peg serry.mp3"
,"songs\\Dil Tod Ke.mp3"
,"songs\\barish.mp3"
,"songs\\Tum Bewafa Ho.mp3"
,"songs\\Mera Yaar.mp3"
,"songs\\Meri Aashiqui.mp3"
,"songs\\phir bhi.mp3"
,"songs\\Hamari Adhuri Kahani.mp3"
,"songs\\Wafa Na Raas Aayee.mp3"
,"songs\\Bewafa.mp3"
,"songs\\Jo Bejhi Thi Dua.mp3"
,"songs\\Bewafa Tera Muskurana.mp3"
,"songs\\Mere Humsafar.mp3"
,"songs\\Itna Pyaar Karo.mp3"
,"songs\\Jiyo Re Bahubali.mp3"
,"songs\\Kalla Sohna Nai.mp3"
,"songs\\Khyaal Rakhya Kar.mp3"
,"songs\\Wakhra Swag.mp3"
,"songs\\O Aasman Wale.mp3"
,"songs\\Lut Gaye.mp3"
,"songs\\Mast Nazron Se.mp3"
,"songs\\Titliaan.mp3"
,"songs\\Taaron Ke Shehar.mp3"
,"songs\\Pasoori.mp3"
,"songs\\Paagal.mp3"
,"songs\\Tu Jo Mila.mp3"
,"songs\\Baarish Ban Jana.mp3"
,"songs\\Bijlee Bijlee.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\Hornn Blow.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\Tera Fitoor.mp3"
,"songs\\Love Dose.mp3"
,"songs\\Jay-Jaykara.mp3"
];

var sname=["Mera Intkaam Dekhegi",
"Brothers Anthem (Vishal Dadlani)",
"Challa (Main Lad Jaana)",
"Dekh Toofaan Aaya Hai ",
"Apna Time Aayega",
"Chak Lein De",
"Get Ready To Fight Again",
"Angaar",
"Shiv Tandav Stotram",
"Yalgaar",
"32 Bore",
"Sulthan",
"Lift Teri Bandh Hai",
"Badri Ki Dulhania",
"Daaru Party",
"Halamithi Habibo",
"U Antava Mava",
"Sauda Khara Khara",
"Rowdy Baby",
"Aajkal Tere Mere Pyar Ke Charche",
"Poster Lagwa Do",
"Baarish Ki Jaaye",
"Genda Phool",
"Main Tera Boyfriend Tu Meri Girlfriend",
"Aashiq Surrender Hua",
"Ankhiyon Se Goli Mare",
"3 peg serry",
"Dil Tod Ke",
"barish",
"Tum Bewafa Ho",
"Mera Yaar",
"Meri Aashiqui",
"phir bhi",
"Hamari Adhuri Kahani",
"Wafa Na Raas Aayee ",
"Bewafa",
"Jo Bejhi Thi Dua",
"Bewafa Tera Muskurana",
"Mere Humsafar",
"Itna Pyaar Karo",
"Jiyo Re Bahubali",
"Kalla Sohna Nai",
"Khyaal Rakhya Kar",
"Wakhra Swag",
"O Aasman Wale",
"Lut Gaye",
"Mast Nazron Se",
"Titliaan",
"Taaron Ke Shehar",
"Pasoori",
"Paagal",
"Tu Jo Mila",
"Baarish Ban Jana",
"Bijlee Bijlee",
"Banduk meri laila",
"Hornn Blow",
"haareya",
"ik vari aa",
"mercy",
"musafir",
"o sathi",
"Tera Fitoor",
"Love Dose",
"Jay-Jaykara",

];

var sd=["Artist: Krishna Beuraa<br>Movie: Shadi m Jarur Aana<br>Released: 2017",
"Artists: Vishal dadlani<br>Featured artists: Sidharth Malhotra, Akshay kumar<br>Movie: Brother<br>Released: 2015"
,"Artists: Romy, Shashwat Sachdev, and Vivek Hariharan<br>Movie: Uri the surgical strike<br>Released: 2019<br>Awards: Best film of the year"
,"Artist: Devil<br>Movie: Toofaan<br>Released: 2021<br>Featured artists:Farhan Akhater"
,"Artist: Divine Ankur Tiwari<br>Movie: Gully boy<br>Released: 2019"
,"Artist: Kailesh keir<br> Chandni chok to china movie<br> Released:2008<br>Featured artists:Akshay kumar"
,"Artist: Pranaay<br> Movie: Baaghi-2<br> Realeased:2018<br>Featured artists:Tiger shroff"
,"Artists: Raftaar, Ikka<br>Released: 2020<br>Genre: Anger music"
,"Artist: Sachet Tandon, Parampara Tandon<br>Released: 2020<br>Feature: Album song"
,"Artist: Carry Minati<br>Album song<br>Released: 2021"
,"Artist: Dilpreet Dhillon<br>Punjabi Album song<br>Released: 2017"
,"Artists: Ravi bsrur<br>Movie: KGF-2<br>Released: 2022"
,"Artist: Anu malik , Neha kakkar<br>Movie: Judwaa 2<br>Released: 2017"
,"Artist: Dev negi , Neha kakkar<br>Title song<br>Realeased:2016"
,"Artist: Millind Gaba<br>Album song <br> Released: 2015<br>Featured artists : Miliind gava"
,"Artist: Anirudh Ravichandaran<br>movie: Beast Raw<br> Released:2022<br>Featured artists: Pooja hegde, Vijay Joshef"
,"Artist: Indumati<br>movie: Pushpa <br> Released:2022<br>Featured artists: Allu Arjun , Samantha"
,"Artist: Dhvani Bhanushali, Diljit Dosanjh, and Sukhbir<br>movie: Good newz<br> Released:2020<br>Featured artists:Akhay,diljit,kiara"
,"Artist: Dhanush and Dhee<br>movie: Marri-2<br> Released:2018<br>Featured artists:Shanush, Sai Pallvi"
,"Artist: Snam Puri<br>movie:Brahmachari <br> Released:2019"
,"Artist: Mika singh, sunanada sharma<br>movie: Luka chhupi <br> Released: 2020<br>Featured artists:Kartik Aryan , Kriti sanon"
,"Artist: B Praak<br>Album song <br> Released:2021<br>Featured artists: Nawaj"
,"Artist: Bhadsah<br>Album song <br> Released:2021<br>Featured artists:Bhadshah , Jackline"
,"Artist: Arijit Singh, Meet Bros, and Neha Kakkar<br>movie: Raabta <br> Released:2017<br>Featured artists:Sushant singh, Kriti sanon"
,"Artist: Amaal Mallik<br>movie: Badri Ki dulhaniya <br> Released:2015<br>Featured artists:Varun Dawan, Alia "
,"Artist: Sonu Nigam, Jaspinder Narula<br>movie: Raja babu <br> Released:2004<br>Featured artists: Govinda , Ravina Tandon"
,"Artist: Sherry maan<br>Punjabi Album song<br> Released:2015<br>Featured artists:Sherry Maan"
,"Artist: B-Praak<br>Album song<br> Released:2020"
,"Artist: Ash King and Shashaa Tirupati<br>movie: Halfgirlfriend <br> Released:2017"
,"Artist: Stebin ben ,Payal dev<br>Album song <br> Released:2022<br>Featured artists:Nia sharma, gurmeet"
,"Artist: Gurnaam Bullar, B-praak<br>Punjabi Album song<br> Released:2022<br>Featured artists:Gurnaam Bulllar"
,"Artist: Arijit singh<br>movie: Ashiqi-2 <br> Released:2014<br>Featured artists:sharddha kapoor"
,"Artist: Arijit singh<br>movie: Halfgirlfriend <br> Released:2015<br>Featured artists:sharddha kapoor, arjun kappor"
,"Artist: Arijit singh<br>movie: Hamari Adhuri Kahani<br> Released:2015<br>Featured artists:Imran hashmi, Vidhya balan"
,"Artist: Jubin Nautiyal <br> Released:2021"
,"Artist: Imran Khan<br>Albu song <br> Released:2017"
,"Artist: Arijit singh, nandini srikar<br>movie: Shanghai<br> Released:2015"
,"Artist: Jubin Nautiyal<br>Album song <br> Released:2021"
,"Artist: Mithoon ,Tulsi kumar<br>movie: All is well<br> Released:2016<br>Featured artists:Abhishek bacchan, Asin"
,"Artist: Shreya goshal<br>movie: the body <br> Released:2020"
,"Artist: Daler Mahendi<br>movie: Bahubali 2 <br> Released:2017<br>Featured artists:Prabhas"
,"Artist: Neha kakkar<br>Album song <br> Released:2020<br>Featured artists:Asim"
,"Artist: Neha kakkar<br>Album song <br> Released:2020<br>Featured artists:Asim"
,"Artist: Bhadshah, Navv inder<br>Album <br> Released:2017<br>Featured artists:Bhadshah"
,"Artist: Jubin nautiyal<br>Album <br> Released:2021<br>Featured artists:Jubin Nautuyal"
,"Artist: Jubin nautiyal<br>Album <br> Released:2021<br>Featured artists:Imram hasmi"
,"Artist: Jubin nautiyal<br>Album <br> Released:2021<br>Featured artists:Jubin Nautuyal"
,"Artist: Afsana khan<br>Album <br> Released:2021<br>Featured artists:Hardy sandu"
,"Artist: Neha kakkar,jubin nautiyal<br>Album<br> Released:2021"
,"Artist: Shai Gill, ali sethi<br>Cock studio <br> Released:2022"
,"Artist: Bhadshah<br>Album <br> Released:2017<br>Featured artists:bhadshah"
,"Artist: KK<br>movie:Bhajrangi BHaijan <br> Released:2014<br>Featured artists:Salman khan"
,"Artist: Stebin ben ,Payal dev<br>Album song <br> Released:2021<br>Featured artists:Hina khan ,sheer shaikh"
,"Artist: Harrdu sandu<br>Album song <br> Released:2021<br>Featured artists:Hardu sandu, Palak tiwari"
,"Artist: Ash King and Sachin-Jigar<br>movie: A gentalman <br> Released:2017<br>Featured artists:Raftaar, Sidharth Malhotra"
,"Artist: Hardy sandhu<br>Album <br> Released:2015<br>Featured artists:Hardy sandu"
,"Artist: Arijit singh<br>movie:meri pyari bindu <br> Released:2014"
,"Artist: Arijit singh, Pritam<br>movie:Rabtta <br> Released:2017"
,"Artist: Bhadshah <br>DJ tejas <br> Released:2016<br>Featured artists:Bhadshah"
,"Artist: Arijit Singh<br>Album <br> Released:2017<br>Featured artists:Himansh Kohli, Zoya Afroz"
,"Artist: Arijit singh<br>movie:Baaghi-2 <br> Released:2017<br>Featured artists:Tiger shroof, Disha patani"
,"Artist: Arijit singh<br>movie:Genious <br> Released:2018<br>Featured artists:Utkarsh | Ishita"
,"Artist: Honey singh<br>Desi kalakar <br> Released:2014<br>Featured artists:Honey singh,urvashi"
,"Artist: Kailash kaeir<br>movie:Bhahubali-2 <br> Released:2017<br>Featured artists:Prabhash"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg",
"images\\\\21.jpg",
"images\\\\22.jpg",
"images\\\\23.jpg",
"images\\\\24.jpg",
"images\\\\25.png",
"images\\\\26.jpg",
"images\\\\27.jpg",
"images\\\\28.jpg",
"images\\\\29.jpg",
"images\\\\30.jpg",
"images\\\\31.jpg",
"images\\\\32.jpg",
"images\\\\33.jpg",
"images\\\\34.jpg",
"images\\\\35.jpg",
"images\\\\36.jpg",
"images\\\\37.jpg",
"images\\\\38.jpg",
"images\\\\39.jpg",
"images\\\\40.jpg",
"images\\\\41.jpg",
"images\\\\42.jpg",
"images\\\\43.jpg",
"images\\\\44.jpg",
"images\\\\45.jpg",
"images\\\\46.jpg",
"images\\\\47.jpg",
"images\\\\48.jpg",
"images\\\\49.jpg",
"images\\\\50.jpg",
"images\\\\51.jpg",
"images\\\\52.jpg",
"images\\\\53.jpg",
"images\\\\54.jpg",
"images\\\\55.jpg",
"images\\\\56.jpg",
"images\\\\57.jpg",
"images\\\\58.jpg",
"images\\\\59.jpg",
"images\\\\60.jpg",
"images\\\\61.jpg",
"images\\\\62.jpg",
"images\\\\63.jpg",
"images\\\\64.jpg",

];

var mood=[["1","2","3","4","5","6","7","8","9","10","11","12"],
["13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"],
["28","29","30","31","32","33","34","35","36","37","38","39"],
["40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56",
"57","58","59","60","61","62","63","64"]];
var mmm=["1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png",
"2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png","2.png",
"3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png",
"4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png"
,"4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png"];

console.log(icon.length);
var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	ins.onclick=function(){
	next(this);
  	};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x =0;
	for(var i=1;i<elem.id.length;i++)
	{
		x=x*10;
		x=x+(elem.id[i]- '0');
	}
	console.log(x);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x =0;
	for(var i=1;i<elem.id.length;i++)
	{
		x=x*10;
		x=x+(elem.id[i]- '0');
	}
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }