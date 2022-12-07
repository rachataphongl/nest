import { PartialType } from "@nestjs/mapped-types";
import { CreateEventDto } from "./create-event.dto";

// export class UpdateEventDto {
//     name?: string;
//     description?: string;
//     when?: string;
//     address?: string;
// }


//after npm install mppep-stypes

export class UpdateEventDto extends PartialType(CreateEventDto) {

}