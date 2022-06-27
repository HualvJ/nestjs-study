import { Injectable } from '@nestjs/common';
// import {CreateWebhookDto} from "./dto/webhook.dto";
import { Webhook } from './interfaces/webhook.interface';

@Injectable()
export class WebhookService {
  private readonly webhooks: Webhook[] = [];

  create(webhook: Webhook) {
    this.webhooks.push(webhook);
    return '添加成功！';
  }

  findAll(): Webhook[] {
    return this.webhooks;
  }
}


