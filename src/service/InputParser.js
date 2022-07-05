class InputParser {

    static parse(input) {
        const lines = input.split('\n')
        const pad = lines[0].split(' ')
        const [padX, padY] = [parseInt(pad[0]), parseInt(pad[1])]
        const parsed = [];
        for(let i = 1; i < lines.length; i += 2) {
            const rover = lines[i].split(' ')
            const instructions = lines[i+1].split('')
            parsed.push([
                [parseInt(rover[0]), parseInt(rover[1]), rover[2], padX, padY],
                instructions
            ])
        }
        return parsed
    }
}

module.exports = {InputParser}