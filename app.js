var Model = {
}

var file = new File("books/OnWritingWell");
file.open("r");
var str = "";
while (!file.eof) {
	// read each line of text
	str += file.readln() + "\n";
}
file.close();
alert(str);


var View