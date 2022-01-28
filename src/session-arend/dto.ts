import { IsNumber, IsString } from "class-validator";

export class CreateDto {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsNumber()
  carsId: number;
}

export class IsAvailabilityDto {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}
