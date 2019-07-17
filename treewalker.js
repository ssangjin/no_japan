var node = document.createElement("div");
var img = document.createElement("img");
img.src = "data:image/png;base64,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"
node.appendChild(img);
document.body.appendChild(node);

function ShowDiv(element) {
	var viewportOffset = element.getBoundingClientRect();
	var bodyRect = document.body.getBoundingClientRect()
	var offset = viewportOffset.top - bodyRect.top;

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

function HideDiv(element) {
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
		"사가미 콘돔",
    "갸스비",
    "우루오스"
	]
	var re = new RegExp(`${list.join("|")}`, 'gi');
	var regs;

	var walker = document.createTreeWalker(
		document.body, NodeFilter.SHOW_TEXT, function (node) {
			if ((regs = re.exec(node.textContent))) {
				node.parentElement.onmouseover = function () { ShowDiv(this); };
				node.parentElement.onmouseout = function () { HideDiv(this); };
			}
			return NodeFilter.FILTER_SKIP;
		}, false);

	// Make the walker step through the nodes
	walker.nextNode();

	// and it ends here
	// document.write("<div id=\"no_jap\" style=\"display: none;\" width=100 height=100>NO JAP</div>")

}

onLoad();

