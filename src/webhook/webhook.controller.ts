import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Req,
  Param,
  Body,
  UseFilters,
  UseInterceptors,
  // ForbiddenException,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { Request, Response } from 'express';
import { CreateWebhookDto } from './dto/webhook.dto';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { User } from './decorator/user.decorator';

@Controller()
@UseFilters(new HttpExceptionFilter())
@UseInterceptors(LoggingInterceptor)
// @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Get('/webhook/get')
  get(@User() user: any) {
    console.log(user);
    // res.status(HttpStatus.CREATED).send('asd');
  }
  @Post('/webhook/add')
  add(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send('asd');
  }

  @Post('/webhook/create')
  async create(@Body() createWebhookDto: CreateWebhookDto) {
    // console.log(createWebhookDto)
    // console.log(request.body);
    // console.log(request);
    // console.log(15, createWebhookDto);
    // console.log(createWebhookDto)
    // throw new ForbiddenException();
    return this.webhookService.create(createWebhookDto);
  }

  @Get('/webhook/async')
  async findAll(): Promise<any[]> {
    // console.log('1111111')
    return this.webhookService.findAll();
  }
}
