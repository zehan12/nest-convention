import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [UserModule, OrderModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
