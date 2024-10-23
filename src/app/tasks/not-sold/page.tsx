'use client';

import { useEffect, useState } from 'react';
import { NotSoldTask, notSoldTasksService } from '@/services/notSoldTasksService';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

const NotSoldTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<NotSoldTask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await notSoldTasksService.getNotSoldTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Not Sold Tasks" />
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {tasks.map((task) => (
          <div key={task.id} className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
            <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
              {task.title}
            </h4>
            <p className="text-body-sm font-medium">{task.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-body-lg font-bold text-primary">${task.price}</span>
              <button
                onClick={() => notSoldTasksService.buyTask(task.id)}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-center font-medium text-white hover:bg-opacity-90"
              >
                Buy Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default NotSoldTasksPage;
