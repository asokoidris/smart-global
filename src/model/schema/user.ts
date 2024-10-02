import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum userTypes {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

@Schema({
  timestamps: true,
})
export class Users extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: [userTypes.CUSTOMER, userTypes.ADMIN] })
  type: string;

  @Prop({ defualt: false })
  isVerified: boolean;

  @Prop({ defualt: null })
  otp: string;

  @Prop({ defualt: null })
  otpExpiryTime: Date;
}

export const UserSchema = SchemaFactory.createForClass(Users);
