let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'LUZMILA',
]



export function getRamdomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );



    return words[randomIndex]
}