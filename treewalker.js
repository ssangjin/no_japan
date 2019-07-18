var showAlways = false;

var nojNode = document.createElement("div");
var stringContainingXMLSource = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:se=\"http://svg-edit.googlecode.com\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" width=\"40.699252002066174\" height=\"26.443611363746157\" style=\"\">                                    <title>my vector image</title>                                    <!-- Created with Vector Paint - http://www.vectorpaint.yaks.com/ https://chrome.google.com/webstore/detail/hnbpdiengicdefcjecjbnjnoifekhgdo -->                                    <rect id=\"backgroundrect\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" fill=\"#FFFFFF\" stroke=\"none\"/>                                <g class=\"currentLayer\" style=\"\"><title>No Japan</title><foreignObject fill=\"#4a90d6\" stroke=\"#222222\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-dashoffset=\"\" fill-rule=\"nonzero\" font-size=\"25\" font-family=\"Arial, Helvetica, sans-serif\" letter-spacing=\"0\" word-spacing=\"0\" marker-start=\"\" marker-mid=\"\" marker-end=\"\" id=\"svg_2\" x=\"0.636174913415124\" y=\"1.6111021080296724\" width=\"35.71619886003289\" height=\"24.397168879087456\" style=\"color: rgb(0, 0, 0);\" class=\"\" font-weight=\"bold\"><p style=\"border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;\" xmlns=\"http://www.w3.org/1999/xhtml\"><p xmlns=\"http://www.w3.org/1999/xhtml\" style=\"border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;\">NO</p></p></foreignObject><path fill=\"#d50b0b\" fill-opacity=\"1\" stroke=\"#d50b0b\" stroke-opacity=\"1\" stroke-width=\"2\" stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\" fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\" d=\"M20.397791550650048,13.807156531908547 C20.397791550650048,8.85473178382083 24.138905548120736,4.843267737869773 28.75756480425739,4.843267737869773 C33.37622406039405,4.843267737869773 37.11733805786473,8.85473178382083 37.11733805786473,13.807156531908547 C37.11733805786473,18.759581279996265 33.37622406039405,22.771045325947323 28.75756480425739,22.771045325947323 C24.138905548120736,22.771045325947323 20.397791550650048,18.759581279996265 20.397791550650048,13.807156531908547 z\" id=\"svg_5\" class=\"\"/></g></svg>"
var parser = new DOMParser();

if (showAlways == false) {
	var imgDom = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
	nojNode.append(imgDom.documentElement);
	nojNode.style.display = "none";
	document.body.appendChild(nojNode);
} else {
	nojNode.style.top = '0px';
	nojNode.style.left = '0px';
	nojNode.style.position = "absolute";
	document.body.append(nojNode);
}

function ShowDiv(element) {
	var viewportOffset = element.getBoundingClientRect();
	var bodyRect = document.body.getBoundingClientRect()
	var offset = viewportOffset.top - bodyRect.top;

	// these are relative to the viewport, i.e. the window
	var top = offset;
	var left = viewportOffset.right;

	nojNode.style.top = top + 'px';
	nojNode.style.left = left + 'px';
	nojNode.style.width = 25 + 'px';
	nojNode.style.width = 25 + 'px';
	nojNode.style.position = "absolute"
	nojNode.style.display = "";
}

function HideDiv(element) {
	nojNode.style.display = "none";
}

function onLoad() {
	// Here starts the bit for your content script
	var list = [
		"ABC.*마트", "ABC.*MART‎",
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
	var re = new RegExp(`${list.join("|")}`, 'gmi');
	var regs;

	var links = document.body.getElementsByTagName("A");
	for (var i = 0; i < links.length; i++) {
		var node = links[i];
		if (node.href != null && node.href.indexOf("ilbe.com") != -1) {
			node.href = "#";
		}
		
		if ((regs = re.exec(node.textContent))) {
			var div = node;
			
			if (showAlways) {
				if (div != null && div.addedNoj != true) {
					var divNode = document.createElement("div");
					var imgDom = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
					var imgNode = imgDom.documentElement;
					var viewportOffset = div.getBoundingClientRect();
					divNode.style.top = viewportOffset.top + 'px';
					divNode.style.left = viewportOffset.left - 0 + 'px';
					divNode.style.top = 0 + 'px';
					divNode.style.left = 0 + 'px';
					divNode.style.position = "absolute"
					divNode.append(imgNode);
					divNode.text = "node	.textContent";
					div.append(divNode);
					div.addedNoj = true;
				}
			} else {
				node.parentElement.onmouseover = function () { ShowDiv(this); };
				node.parentElement.onmouseout = function () { HideDiv(this); };		
			}
		}
	}
}

onLoad();

