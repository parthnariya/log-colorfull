export class ColorLog {
    static success(message: string){
        console.log(`%c ${message}`,'color : green')
    }
    static error(message: string) {
        console.log(`%c ${message}`,'color : red')
    }
    static info(message: string) {
        console.log(`%c ${message}`,'color : red ; background : yellow') 
    }
}