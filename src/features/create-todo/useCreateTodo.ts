import { useState } from 'react';
import { Todo } from '../toggle-todo/useTodos';

export interface NewTodoForm {
  title: string;
  hour: number;
  minute: number;
  description: string;
}

const initialForm: NewTodoForm = {
  title: '',
  hour: 9,
  minute: 0,
  description: '',
};

export const useCreateTodo = (onAdd: (todo: Todo) => void, selectedDate: Date) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState<NewTodoForm>(initialForm);

  const openForm = () => {
    setForm(initialForm);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setForm(initialForm);
  };

  const handleChange = (field: keyof NewTodoForm, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleHourChange = (value: string) => {
    const num = parseInt(value);
    if (isNaN(num)) return;
    setForm(prev => ({ ...prev, hour: Math.min(23, Math.max(0, num)) }));
  };

  const handleMinuteChange = (value: string) => {
    const num = parseInt(value);
    if (isNaN(num)) return;
    setForm(prev => ({ ...prev, minute: Math.min(59, Math.max(0, num)) }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    const ampm = form.hour >= 12 ? '오후' : '오전';
    const displayHour = form.hour % 12 === 0 ? 12 : form.hour % 12;
    const timeStr = `${ampm} ${String(displayHour).padStart(2, '0')}:${String(form.minute).padStart(2, '0')}`;
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

    const newTodo: Todo = {
      id: String(Date.now()),
      title: form.title.trim(),
      time: timeStr,
      description: form.description.trim(),
      completed: false,
      date: dateStr,
    };
    onAdd(newTodo);
    closeForm();
  };

  return { isFormOpen, form, openForm, closeForm, handleChange, handleHourChange, handleMinuteChange, handleSubmit };
};
