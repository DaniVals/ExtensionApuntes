# [ESP](#apuntes-extensión) [ENG](#notes-extension)

# Notes extension
A file extension (.notes / .note / .nts) that uses your theme colors to assign them into certain patterns.

## Use colors

Use the color red for statements, writing a number and a point: 1. Statement

Use the color yellow for sub-statements, adding more numbers to the case before: 1.3 Sub-statements

Use the color purple for paragraphs, writing them between '=': == paragraphs ==

Use the color green for lists, writing characters like: - < >

Use the color blue to sort lists, writing a letter and a point: A. primera opción

Use the color orange to group calculations, writing them between braces: {calculations}

Between parentheses gets grey to write clarifications.

Between brackets gets bold and the brackets get transparent.

## Change the token of each case
To change the configuration of the extension, you will need to quote the [TextMate token of your theme](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) used for that color. If you want to deactivate it, you'll have to leave that setting empty. Remember to run the command 'Apuntes refresh settings' after changing it.

## Patch notes
### 1.0.0
Initial release.

### 1.1.0
Settings for every color used through the TextMate tokens of the user's theme.

### 1.2.0
Fixed some bugs, like the acronyms leaking through linebreaks or the letter 'Ñ' not being detected.
Improved the extension to support more languages (Spanish and English for now).

### 1.3.0
Some pattern colors have been fixed, and others have been reworked.

# Apuntes extensión
Una extensión de archivo (.apuntes / .apunte / .pnt) que usa los colores de tu tema para asignar colores a ciertos patrones.

## Usa colores
Usa el color rojo para enunciados, colocando un número y un punto: 1. Enunciado

Usa el color amarillo para subenunciados, añadiendo más números al caso anterior: 1.3 Subenunciado

Usa el color morado para apartados, encapsulándolos entre '=': == apartado ==

Usa el color verde para listas desordenadas, colocando caracteres como: - < >

Usa el color azul para listas ordenadas, colocando una letra y un punto: A. primera opción

Usa el color naranja para agrupar cálculos, colocando estos entre llaves: {cálculos}

Entre paréntesis se pone en transparente para poder hacer aclaraciones.

Entre corchetes se pone en negrita y se transparentan los corchetes.

## Cambiar tokens asignados a cada caso
Para cambiar la configuración de la extensión, necesitará citar el [token en TextMate de tu tema](https://code.visualstudio.com/docs/getstarted/themes#_editor-syntax-highlighting) que quiere que se use para ese color. Si quiere desactivar ese color puede dejar esa opción en blanco, recuerde usar el comando 'Apuntes refresh settings' después de cambiar algo.

## Notas del parche
### 1.0.0
Salida inicial.

### 1.1.0
Configuraciones para cada color usado a través de las tokens de TextMate del tema del usuario.

### 1.2.0
Solucionados algunos bugs, como las iniciales aplicándose en diferentes líneas o las 'Ñ' no detectándose como letras (más detalles en el changelog).
Mejorada la extensión para admitir más idiomas (por ahora solo hay inglés y español).

### 1.3.0
Se han arreglado algunos patrones de color y otros se han hecho desde cero.