export default class Task{

    constructor(public id: number, public name: string, public type: string, public child: Array<Task> = []){
        this.id = id;
        this.name = name;
        this.type = type;
        this.child = child;
    }

}