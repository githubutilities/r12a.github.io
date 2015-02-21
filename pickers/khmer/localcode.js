var _showHuffmanTrans =  ''
var _showGilbertTrans = ''


function localInitialise () {

	}



var _h = {
'1780': ['1782', '178F', '1797', '17A5'],
'1781': ['178C', '17A7', '17A9', '17AA', '17B1', '17B3'],
'1782': ['1780', '178F', '1797', '17A5'],
'1783': ['1799'],
'1785': ['1790'],
'1784': ['1787', '1795', '178A', '1786', '1792'],
'1786': ['1792', '1784', '1787', '1795', '178A'],
'1788': ['1783', '1799'],
'1789': ['17E3'],
'178A': ['1787', '1795', '1784', '1786', '1792'],
'178B': ['1794', '17AB', '17AC'],
'178C': ['17A7', '1781'],
'178D': ['179B', '17A6', '17E7', '1788'],
'178F': ['1797', '1782', '1780', '17A5'],
'1790': ['1785', '178B'],
'1791': ['17A1'],
'1792': ['1786', '178A', '1787', '1795', '1784'],
'1793': ['17A7'],
'1794': ['178B', '17AB', '17AC'],
'1795': ['1787', '178A', '1784', '1792', '1786'],
'1796': ['17AD', '17AE', '17B0', '178D', '17E7'],
'1797': ['178F', '1782', '1780', '17A5'],
'1798': ['1794'],
'1799': ['1783'],
'179B': ['179F', '178D'],
'17A1': ['1791'],
'179A': ['179C', '17C1', '17DB'],
'179F': ['179B', '178D'],
'179C': ['179A', '17C1', '17DB'],
'17A5': ['1780'],
'17A6': ['1796'],
'17A7': ['178C', '1781', '17A9', '17AA', '17B1', '17B3'],
'17A9': ['17A7', '178C', '1781', '17AA', '17B1', '17B3'],
'17AA': ['17B1', '17B3', '17A7'],
'17B1': ['17B3', '17AA', '17A7'],
'17B3': ['17B1', '17AA', '17A7'],
'17B0': ['17AD', '17AE', '1796'],
'17AB': ['17AC', '1794', '178B'],
'17AC': ['17AB', '1794', '178B'],
'17AD': ['17AE', '1796', '17B0'],
'17AE': ['17AD', '1796', '17B0'],
'1784': ['17E5'],
'17E5': ['1784'],
'17B6': ['17B617C6', '17C4', '17C417C7'],
'17B617C6': ['17B6'],
'17BB17C6': ['17C6', '17BB'],
'17BB': ['17BB17C6', '17BB17C7'],
'17BB17C7': ['17BB', '17C7'],
'17C1': ['17C117C7', '17C2', '17C3', '17C4', '17C417C7', '17C5', '17BE', '17BF', '17C0', '179A', '179C', '17DB'],
'17C117C7': ['17C1', '17C7', '17C417C7'],
'17C2': ['17C3', '179A', '179C', '17DB'],
'17C3': ['17C2', '179A', '179C', '17DB'],
'17C4': ['17C1', '17B6', '179A', '179C', '17DB'],
'17C417C7': ['17C1', '17B6', '17C7', '179A', '179C', '17DB'],
'17C5': ['17C4', '17C417C7', '179A', '179C', '17DB'],
'17BE': ['17BF', '17C1', '179A', '179C', '17DB'],
'17BF': ['17BE', '17BA', '17C1', '179A', '179C', '17DB', '17C0'],
'17C0': ['17C1', '179A', '179C', '17DB', '17BF'],
'17C6': ['17BB17C6', '17B617C6'],
'17C7': ['17BB17C7', '17C117C7', '17D6'],
'17C8': ['17C7', '17D6'],
'17D0': ['178A'],
'17D7': ['17D4', '17D4179B17D4'],
'17D4179B17D4': ['17D7', '179B'],
'17D4': ['17D5', '17D7'],
'17D6': ['17C7'],
'17D9': ['17E0'],
'17E7': ['178D', '1796'],
'17E3': ['1789'],
'17DB': ['179A', '179C', '17C1'],
'1787': ['1790', '1785'],
'17A4': ['17A2', '17B6'],
'17A3': ['17A2'],
'17D3': ['17C6'],
'17A8': ['17AA', '17B1', '17B3'],
'179D': ['1782', '1780'],
'179E': ['1798', '1794'],
'17D2179E': ['17D21783', '17D21794'],
'17DC': ['1793'],
'17D8': ['17D4179B17D4'],

end: {}
}


/*
ក គ ត ភ ឥ
ខ ឌ ឧ ឩ ឪ ឱ ឳ
គ ក ត ភ ឥ
ឃ យ
ច ថ
ង ជ ផ ដ ឆ ធ
ឆ ធ ង ជ ផ ដ
ឈ ឃ យ
ញ ៣
ដ ជ ផ ង ឆ ធ
ឋ ប ឫ ឬ
ឌ ឧ ខ
ឍ ល ឦ ៧ ឈ
ត ភ គ ក ឥ
ថ ច ឋ
ទ ឡ
ធ ឆ ដ ជ ផ ង
ន ឧ
ប ឋ ឫ ឬ
ផ ជ ដ ង ធ ឆ
ព ឭ ឮ ឰ ឍ ៧
ភ ត គ ក ឥ
ម ប
យ ឃ
ល ស ឍ
ឡ ទ
រ វ េ ៛
ស ល ឍ
វ រ េ ៛
ឥ ក
ឦ ព
ឧ ឌ ខ ឩ ឪ ឱ ឳ
ឩ ឧ ឌ ខ ឪ ឱ ឳ
ឪ ឱ ឳ ឧ
ឱ ឳ ឪ ឧ
ឳ ឱ ឪ ឧ
ឰ ឭ ឮ ព
ឫ ឬ ប ឋ
ឬ ឫ ប ឋ
ឭ ឮ ព ឰ
ឮ ឭ ព ឰ
ង ៥
៥ ង
ា ាំ ោ ោះ
ាំ ា
ុំ ំ ុ
ុ ុំ ុះ
ុះ ុ ះ
េ េះ ែ ៃ ោ ោះ ៅ ើ ឿ ៀ រ វ ៛
េះ េ ះ ោះ
ែ ៃ រ វ ៛
ៃ ែ រ វ ៛
ោ េ ា រ វ ៛
ោះ េ ា ះ រ វ ៛
ៅ ោ ោះ រ វ ៛
ើ ឿ េ រ វ ៛
ឿ ើ ឺ េ រ វ ៛ ៀ
ៀ េ រ វ ៛ ឿ
ំ ុំ ាំ
ះ ុះ េះ ៖
ៈ ះ ៖
័ ដ
ៗ ។ ។ល។
។ល។ ៗ ល
។ ៕ ៗ
៖ ះ
៙ ០
៧ ឍ ព
៣ ញ
៛ រ វ េ
ជ ថ ច
ឤ អ ា
ឣ អ
៓ ំ
ឨ ឪ ឱ ឳ
ឝ គ ក
ឞ ម ប
្ឞ ្ឃ ្ប
ៜ ន
៘ ។ល។

*/

var keyboarddef = [
"१|ऍ,२|ॅ,३|्र,४|र्,५|ज्ञ,६|त्र,७|क्ष,८|श्र,९|(,०|),-|ः,ृ|ऋ",
"|औ,ै|ऐ,ा|आ,ी|ई,ू|ऊ,ब|भ,ह|ङ,ग|घ,द|ध,ज|झ,ड|ढ,ड|ञ",
"|ओ,े|ए,्|अ,ि|इ,ु|उ,प|फ,र|ऱ,क|ख,त|थ,च|छ,ट|ठ,ॉ|ऑ",
"ॊ|ऒ,ॆ|ऎ,ं|ँ,म|ण,न|ऩ,व|ऴ,ल|ळ,स|श, |ष,.|।,य|य़"
]


function condense (str) {
	// removes spaces and hyphens from a string

	// if text isn't highlighted, highlight whole thing (to avoid duplication)
	var node = document.getElementById('output')
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.select() }

	// do the replacement
	str = str.replace(/ /g, '')
	str = str.replace(/-/g, '')

	return str
	}



function sendVowelLeft (str) {
	lv = str.match(/เ|แ|ไ|โ|ใ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}