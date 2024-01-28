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