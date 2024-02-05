# Change Log
## v1.0.0
token "comment" "\\((?![ \t])" - "[\\)\n]"
token "constant.numeric" from "^[ \t]*[0-9]" to "[\n]""
token "string" from "^-+" to [\n]
token "variable" from "\\b[A-Z][.]" to "\\b"
token "support.function" from "\\b[A-Z][A-Za-z0-9]+" to "\\b"
token "entity.name.type" from "\\{" to "\\}"
token "keyword.control" from "^[ \t]*=+" to "\n"
```json
"name": "tag.square-brackets",
"begin": "\\[",
"end": "\\]",
"beginCaptures": {
  "0": { "name": "punctuation.definition.tag.begin" }
},
"endCaptures": {
  "0": { "name": "punctuation.definition.tag.end" }
},
"patterns": [
  {
	"name": "content.between-brackets",
	"match": "([^\\[\\]]+)",
	"captures": {
	  "1": { "name": "strong" }
	}
  }
]
```
## v1.1.0
added settings for every color
added a command that  updates the tmLanguage file with the settings

## v1.2.0
upgraded the README and added an english version (translated by me)
fixed and changed the name of the extension
fixed the icon of the extension
added the extensions .notes .note .nts 

fixed bug where the color blue was added through linesteps
numbers now need to be followed by a point to be classified as an statement
added the leter ñ where all the leters where used

token "comment" 
	from "\\((?![ \t])" 
	to "[\\)\n]"
token "constant.numeric" 
	from "^[ \t]*[0-9]." 
	to "[\n]""
token "string" 
	from "^-+" 
	to "[\n]"
token "support.function" 
	from "\\b[A-ZÑ][A-ZÑa-zñ0-9]+" 
	to "\\b"
token "entity.name.type" 
	from "\\{" 
	to "\\}"
token "variable" 
	from "\\b[A-ZÑ][.]" 
	to "\\b"
token "keyword.control" 
	from "^[ \t]*=+" 
	to "\n"

## v1.3.0

token "constant.numeric" is now 
      from "^[ \t]*[0-9]+.[^0-9]",
      to "[\n]"
token "string" is now
      from "\\{",
      to "\\}"
token "support.function" is now
      from "^[ \t]*[0-9]+.[0-9]+\\b",
      to "[\n]"
token "entity.name.type" is now 
	match "^[ \t]*[-><]"
token "keyword.control" is now
      from "^[ \t]*=+",
      to "[=+\\n]"

added update detector for autoupdating and probably for future updates