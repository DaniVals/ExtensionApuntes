# Extension de archivo para apuntes
Una extension que añade un tipo de archivo (.apuntes / .apunte / .pnt) que usa los colores de tu tema para asignar colores a ciertos patrones.

## Usa colores :D
Si la linea empieza por un numero se pone rojo.
Si la linea empieza por = se pondra morado.
Si la linea solo contiene - se pondra naranja como una especie de salto de linea

Las mayusculas se pondran amarillo.
Las siglas se pondran azul.

Entre parentesis se pone en transparente para poder hacer aclaraciones.
Entre corchetes se pone en negrita y se transparentan los corchetes.
Entre llaves se pone verde para poder agrupar calculos.

## Cambiar colores asignadas a las tokens de forma manual
Para cambiar la configuracion de la extension, necesitara citar el [token en TextMate de tu tema](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) que quiere que se use para ese color. Si quiere desactivar ese color puede dejar esa opcion en blanco, recuerde usar el comandp 'Apuntes refresh settings' despues de cambiar algo.

# Notas del parche
## 1.0.0
Salida inicial

## 1.1.0
Cofiguraciones para cada color usado a traves de las tokens de TextMate del tema del usuario