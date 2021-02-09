import {PartialType} from "@nestjs/mapped-types";
import {CreateVideoDto} from "./create-video.dto";

// generic과 주의하기
export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
