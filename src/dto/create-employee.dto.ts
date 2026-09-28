import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {




    @IsNumber()
  @IsNotEmpty()
  id: number;
  
  @IsString()
  @IsNotEmpty()
  name: string;



  @IsString()
  @IsNotEmpty()
  email: string;
}
