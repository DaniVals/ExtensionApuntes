# Change Log
## v1.0.0
(ordenados segun el orden de prioridad y como estan escritos en el codigo)

token "comment" "\\((?![ \t])" - "[\\)\n]"

(esta cosa para que los corchetes se pongan en gris y el contenido en negrita)
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
token "constant.numeric" from "^[ \t]*[0-9]" to "[\n]""
token "string" from "^-+" to [\n]
token "variable" from "\\b[A-Z][.]" to "\\b"
token "support.function" from "\\b[A-Z][A-Za-z0-9]+" to "\\b"
token "entity.name.type" from "\\{" to "\\}"
token "keyword.control" from "^[ \t]*=+" to "\n"