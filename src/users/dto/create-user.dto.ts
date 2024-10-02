import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { userTypes } from 'src/model/schema/user';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsIn([userTypes.ADMIN, userTypes.CUSTOMER])
  type: string;

  @IsNotEmpty()
  @IsOptional()
  secretToken?: string;
}
