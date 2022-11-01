

enum CommandOperation {
    NONE,
    SAY
}


class Command {
    commandCode: CommandOperation = CommandOperation.NONE;
    commandData: string = "";
}


let num: number = 0;

function add(x: number, y: number): number {
    return x + y;
}



