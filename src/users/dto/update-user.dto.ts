import { IsInt, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsInt()
  readonly user_idx: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly username: string;
}
