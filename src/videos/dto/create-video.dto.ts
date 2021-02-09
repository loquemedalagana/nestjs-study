import {IsNumber, IsOptional, IsString} from "class-validator";

export class CreateVideoDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({each: true})
  readonly tags: string[];
}
