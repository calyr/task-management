import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {Task, TaskStatus} from './tasks.model';
import {CreateTaskDto} from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Body('status') status: TaskStatus, @Param('id') id: string): Task {
       return this.taskService.updateTask(id, status);
    }

    // @Post()
    // createTask(@Body() body): Task {
    //     return this.taskService.createTask(body.title, body.description);
    // }

    // @Post()
    // createTask(
    //     @Body('title') title: string,
    //     @Body('description') description: string,
    // ) {
    //     console.log('body', title);
    //     console.log('body', description);
    //
    // }
}
