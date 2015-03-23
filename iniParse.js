/*Ryan Postma
 * CMP237
 * 3/22/2015
 * INI Parse
 * impliment the INI parser from the book using the given information.
 */

function parseINI(string) {
	  //Start with an object to hold the top-level fields
	var currentSection = {name: null, fields: []};
	var categories = [currentSection];
	  
	string.split(/\r?\n/).forEach(function(line) {
		var match;
		if (/^\s*(;.*)?$/.test(line)) {
			return;
		} else if (match = line.match(/^\[(.*)\]$/)) {
			currentSection = {name: match[1], fields: []};
	  		categories.push(currentSection);
		} else if (match = line.match(/^(\w+)=(.*)$/)){
			currentSection.fields.push({name: match[1],
				value: match[2]});
		} else {
			throw new Error("Line '" + line + "' is invalid.");
		}
	});
	return categories;


}

var enemy = ("searchengine=http://www.google.com/search?q=$1\n"+
		"spitefulness=9.7\n"+

		"; comments are preceded by a semicolon...\n"+
		"; each section concerns an individual enemy\n"+
		"[larry]\n"+
		"fullname=Larry Doe\n"+
		"type=kindergarten bully\n"+
		"website=http://www.geocities.com/CapeCanaveral/11451\n"+

		"[gargamel]\n"+
		"fullname=Gargamel\n"+
		"type=evil sorcerer\n"+
		"outputdir=/home/marijn/enemies/gargamel");
print(enemy);

print(JSON.stringify(parseINI(enemy)));


