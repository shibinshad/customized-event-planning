import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'

})
export class pipesin implements PipeTransform{

    transform(value: any) {
        return value.length>30 ? value.slice(0, 30)+"...":value;
    }

}