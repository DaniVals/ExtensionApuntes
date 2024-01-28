# [ESP](#apuntes) [ENG](#notes)

# Notes extension
A file extension (.notes / .note / .nts) that uses your theme colors to assign them into certain patters.

## Use colors
If the line starts with a number followed by a point it gets red.

If the line starts with '=' it gets purple.

If the line starts with '-' it gets orange, setting a line break.

The words that start with capital letters gets yellow.

The acronyms gets blue.

The parentheses gets grey to make clarifications.

Between brackets gets bold and the brackets get transparent.

Between braces gets green to group calculations.

## Change the token of each case
To change the configuration of the extension, you will need to quote the [TextMate token of your theme](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) used for that color. If you want to deactivate it, you'll have to leave that setting empty, remember to run the command 'Apuntes refresh settings' after changing it.

## Patch notes
### 1.0.0
Initial release.

### 1.1.0
Settings for every color used through the TextMate tokes of the users theme.

### 1.2.0
Fixed some bugs, like the acronyms leaking through linebreaks or the letter Ñ not being detected.
Improved the extension to hold more languages (espanish and english for now)

# Apuntes extensión
Una extensión de archivo (.apuntes / .apunte / .pnt) que usa los colores de tu tema para asignar colores a ciertos patrones.

## Usa colores
Si la línea empieza por un número seguido de un punto se pone rojo.

Si la línea empieza por '=' se pondrá morado.

Si la línea empieza por '-' se pondrá naranja marcando salto de línea.


Las palabras que empiecen por mayúsculas se pondrán amarillo.

Las siglas se pondrán azul.

Entre paréntesis se pone en transparente para hacer aclaraciones.

Entre corchetes se pone en negrita y se transparentan los corchetes.

Entre llaves se pone verde para agrupar cálculos.


## Cambiar tokens asignados a cada caso
Para cambiar la configuración de la extensión, necesitará citar el [token en TextMate de tu tema](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) que quiere que se use para ese color. Si quiere desactivar ese color puede dejar esa opción en blanco, recuerde usar el comando 'Apuntes refresh settings' después de cambiar algo.

## Notas del parche
### 1.0.0
Salida inicial.

### 1.1.0
Configuraciones para cada color usado a través de las tokens de TextMate del tema del usuario.

### 1.2.0
Solucionado algunos bugs, como las iniciales aplicándose en diferentes líneas o las Ñ no detectándose como letras (mas detalles en el changelog).
Mejorado la extensión para agrupar varios idiomas (por ahora solo hay inglés y español).