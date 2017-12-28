// --- Funciones y otros snippets utilitarios

// --- Da formato de 00 a un número n
export const leftPad = n => `0${n}`.substr(-2)

// --- Da formato 00 : 00 (min : seg) a una cantidad de segundos dada
export const formatTime = secs => `${leftPad(~~(secs/60))}:${leftPad(~~(secs%60))}`
