import { Controller, Get, Param, Post, Body, Put, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/UpdateTask.Dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('all')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tasksService.findById(Number(id));
  }

  @Post('create')
  create(@Body() dto: CreateTaskDto) {
    console.log('DTO:',dto);
    return this.tasksService.createTask(dto);
  }


  @Patch(':id')
  update(@Param('id') id:string, @Body() dto:UpdateTaskDto){
    return this.tasksService.update(Number(id),dto);
  }
}