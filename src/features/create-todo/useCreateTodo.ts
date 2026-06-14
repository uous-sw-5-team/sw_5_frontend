import { useState } from 'react';
import { createPlan } from './createApi';

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

export const useCreateTodo = (onAdd: () => void, selectedDate: Date) => {
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

  const handleSubmit = async () => {
    if (!form.title.trim()) return;
    const timeStr = `${String(form.hour).padStart(2, '0')}:${String(form.minute).padStart(2, '0')}`;
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

    try {
      await createPlan({
        date: dateStr,
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        time: timeStr,
      });
      onAdd();
      closeForm();
    } catch (e) {
      console.error('플랜 생성 실패', e);
    }
  };

  return { isFormOpen, form, openForm, closeForm, handleChange, handleHourChange, handleMinuteChange, handleSubmit };
};
