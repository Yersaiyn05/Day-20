import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/UpdateTask.Dto';
@Injectable()
export class TasksService {
    private tasks = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description 2',
        },
    ];

    findAll() {
        return this.tasks;
    }
    findById(id: number) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }

    createTask(dto: CreateTaskDto) {
        const newTask = {
            id: this.tasks.length + 1,
            ...dto
        };
        this.tasks.push(newTask);
        return newTask;
    }

    update(id:number,dto:UpdateTaskDto){
        const task = this.findById(id);
        if(dto.title !== undefined){
            task.title = dto.title;
        }
        if(dto.description !== undefined){
            task.description = dto.description;
        }
        return task;
    }
    updatePut(id: number, dto: UpdateTaskDto) {
    const task = this.findById(id);

    if (dto.title !== undefined) {
        task.title = dto.title;
    }

    if (dto.description !== undefined) {
        task.description = dto.description;
    }

    return task;
}

    delete(id:number){
        const Index = this.tasks.findIndex((task) => task.id === id);
        if(Index === -1){
            throw new NotFoundException('task not found');
        }
        const deleteTask = this.tasks[Index];
        this.tasks.splice(Index, 1);
        return deleteTask;
    }

}