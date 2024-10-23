import { useState } from 'react';
import { notSoldTasksService } from '@/services/notSoldTasksService';

const TaskForm: React.FC = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    price: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await notSoldTasksService.editTask('new', taskData);
    // Add success handling and form reset logic
  };

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-body-sm font-medium text-dark dark:text-white">
            Task Title
          </label>
          <input
            type="text"
            value={taskData.title}
            onChange={(e) => setTaskData({...taskData, title: e.target.value})}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:text-white dark:focus:border-primary"
          />
        </div>
        {/* Add similar input fields for description and price */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
