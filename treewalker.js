var node = document.createElement("div");
var img = document.createElement("img");
img.src="https://sjyun.hopto.org:8080/web_images/no_small.png"
node.appendChild(img);
document.body.appendChild(node);

function ShowDiv(element)
{
    var viewportOffset = element.getBoundingClientRect();
	var bodyRect = document.body.getBoundingClientRect()
    var offset   = viewportOffset.top - bodyRect.top;

    // these are relative to the viewport, i.e. the window
    var top = offset;
    var left = viewportOffset.right;

//    alert("show" + top + " " + left);
    //var div = document.getElementById("no_jap");
    node.style.top = top + 'px';
    node.style.left = left + 'px';
    node.style.width = 256 + 'px';
    node.style.width = 256 + 'px';
    node.style.position = "absolute"
    node.style.display = "";
}

function HideDiv(element)
{
    node.style.display = "none";
}


function onLoad() {
  // Here starts the bit for your content script
  var list = [
	"롯데", 
	"유니클로", "UNIQLO", 
	"소니", "SONY", 
	"JTI",
	"러시앤캐쉬", "rushncash",
	"산와머니", "sanwamoney",
	"소니",
	"히타치",
	"파나소닉",
	"도시바",
	"산요",
	"JVC",
	"TDK",
	"샤프",
	"린나이",
	"니콘",
	"캐논",
	"올림푸스",
	"후지",
	"소니",
	"도요타", "토요타",
	"렉서스",
	"혼다",
	"니산",
	"인피니티",
	"미쓰비시",
	"마쓰다",
	"마쓰시다",
	"스바루",
	"이스즈",
	"스즈키",
	"혼다",
	"야마하",
	"가와사키",
	"구와하라 가프",
	"브리지스톤",
	"씨포",
	"아라야",
	"앙카",
	"타이렐",
	"후지",
	"브리지스톤",
	"Dunlop",
	"Sumitomo",
	"Falken",
	"Yokohama",
	"Toyo",
	"켄우드",
	"파이오니어",
	"야마하",
	"KORG",
	"아식스",
	"미즈노",
	"데쌍트",
	"요넥스",
	"유니클로",
	"무인양품", "MUJI",
	"ABC 마트",
	"겐조",
	"요지 야마모토",
	"Y-3",
	"이세이 미야케",
	"준야 와타나베",
	"꼼데 가르송",
	"세이코",
	"카시오",
	"시티즌",
	"소니픽쳐스",
	"컬럼비아 픽쳐스",
	"트라이스타 픽쳐스",
	"닌텐도",
	"소니",
	"파이로트", "파이롯트", "PILOT",
	"제트스트림", 
	"지브라",
	"미쓰비시",
	"펜텔",
	"하이테크",
	"젤리롤",
	"헬로키티",
	"다이소",
	"세븐일레븐",
	"훼미리마트",
	"포카리스웨트",
	"조지아",
	"시세이도",
	"슈에무라",
	"SK-2",
	"DHC",
	"갸스비",
	"CJ라이온",
	"오츠카제약",
	"우르오스",
	"네이처메이드",
	"친애저축은행",
	"산와머니",
	"러시앤 캐시",
	"SBI저축은행",
	"아사히",
	"기린",
	"삿포로",
	"산토리",
	"오리온",
	"시마노",
	"다이와",
	"하마다",
	"가마가츠",
	"다이꼬",
	"고센",
	"썬라인",
	"레토피아",
	"듀엘내쇼날",
	"오카모토 콘돔",
	"사가미 콘돔"
  ]
  var re = new RegExp(`${list.join("|")}`, 'gi');
  var regs;

  var walker = document.createTreeWalker(
		document.body, NodeFilter.SHOW_TEXT, function(node) {	
	if((regs = re.exec(node.textContent))) {
		node.parentElement.onmouseover = function() { ShowDiv(this); };
		node.parentElement.onmouseout = function() { HideDiv(this); };
	}
	return NodeFilter.FILTER_SKIP;
  }, false);

  // Make the walker step through the nodes
  walker.nextNode();

  // and it ends here
  // document.write("<div id=\"no_jap\" style=\"display: none;\" width=100 height=100>NO JAP</div>")

}

onLoad();
