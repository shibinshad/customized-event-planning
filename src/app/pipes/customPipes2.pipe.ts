import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'sui'

})
export class pipesin2 implements PipeTransform{

    transform(value: any) {
        return value.length>80 ? value.slice(0, 80)+"...":value;
    }

}