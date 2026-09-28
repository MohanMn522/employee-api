import { IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsNumber()
  id: number;

  @IsString()
  email: string;
}