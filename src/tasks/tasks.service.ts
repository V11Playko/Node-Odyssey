import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  deleteTask() {
    return 'Eliminando Tarea';
  }

  updateTaskStatus() {
    return 'actualizando el estado de una tarea';
  }
}