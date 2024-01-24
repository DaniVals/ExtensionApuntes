# extension de archivo para apuntes
Una extension que añade un tipo de archivo (.apuntes / .apunte / .pnt) que usa los colores de tu tema para asignar colores a ciertos patrones.

## Usa colores :D

Si la linea empieza por un numero se pone rojo (color numeros).
Si la linea empieza por = se pondra morado (color estructuras de control).
Si la linea solo contiene - se pondra naranja (color string) como una especie de salto de linea

Las mayusculas se pondran amarillo (color funciones)
Las siglas se pondran azul (color variables).

Entre parentesis se pone en transparente (color comentarios) para poder hacer aclaraciones.
Entre corchetes se pone en negrita y se transparentan los corchetes.
Entre llaves se pone verde (color nombre entidades) para poder agrupar calculos.

## cambiar colores asignadas a las tokens de forma manual

Este es un tutorial muy simple y rapido para las cosas basicas, para algo avanzado use textmate.
Tenga en cuenta que cambiar las tokens es algo que forma parte del tema, asi que cambiar de tema hara que estos cambios se dejen de aplicar y que estos se aplicaran a TODOS los lenguajes de programacion que use, ya que esta modificando los colores de su tema, no de la extension

1. Copie esto en su configuracion (user/workspace)
```json
	"editor.tokenColorCustomizations": {
		"[ Inserte-tema ]": {
			"comments": "#888888", 	//comentarios como gris
			"numbers": "#ff5555",	//numeros como rojos
			"strings": "#ffaa55",	//strings como naranjas
			"functions": "#dddd55",	//funciones como amarillo
			"types": "#55ff55",		//tipos (como las clases en java) como verde
			"variables": "#55ffff",	//variables como celeste
			"keywords": "#dd55dd"	//estructuras de control como morado
		}
	},
```
3. Cambie Inserte-tema por el nombre de su tema
2. Cambie los colores en hexadecimal por el color que quiera

# Release Notes
## 1.0.0

Salida inicial