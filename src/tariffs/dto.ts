import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CostCalculation {
  @IsNotEmpty()
  @IsString()
  startDate: string;

  @IsNotEmpty()
  @IsString()
  endDate: string;
}
