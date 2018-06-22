import { Injectable, Inject } from '@nestjs/common';
import { ApiDb } from './api.db';

@Injectable()
export class ApiService {
  options;

  constructor(@Inject('ApiModelToken') private readonly model) {
    this.options = {};
  }

  select(options?) {
    const model = this.model;

    let result = model.find();

    if (options) {
      result = model.find(null, options);
    }

    return result.sort({ _id: 1 }).exec();
  }

  add(data) {
    const model = new this.model(data);
    return model.save();
  }
}
