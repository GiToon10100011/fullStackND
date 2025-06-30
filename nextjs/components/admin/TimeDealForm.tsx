// components/TimeDealForm.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TimeDealForm.module.css';

interface TimeDealFormProps {
  onSubmitted: () => void;
  editTarget: TimeDeal | null;
  cancelEdit: () => void;
}

export interface TimeDeal {
  id: number;
  product_name: string;
  price: number;
  deal_price: number;
  start_time: string;
  end_time: string;
  is_active: boolean;
}

export default function TimeDealForm({ onSubmitted, editTarget, cancelEdit }: TimeDealFormProps) {
  const [form, setForm] = useState({
    productId: '',
    dealPrice: '',
    startTime: '',
    endTime: '',
  });

  // editTarget 변경 시 폼 초기화
  useEffect(() => {
    if (editTarget) {
      setForm({
        productId: '', // 수정시 상품ID 변경 불가하다고 가정 
        dealPrice: editTarget.deal_price.toString(),
        startTime: editTarget.start_time.slice(0, 16), // datetime-local 형식 맞춤
        endTime: editTarget.end_time.slice(0, 16),
      });
    } else {
      setForm({ productId: '', dealPrice: '', startTime: '', endTime: '' });
    }
  }, [editTarget]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (editTarget) {
        // 수정 API 호출
        await axios.put(`http://localhost:7777/api/timeDeals/${editTarget.id}`, {
          deal_price: Number(form.dealPrice),
          start_time: form.startTime,
          end_time: form.endTime,
        });
        alert('수정 성공!');
        cancelEdit();
      } else {
        // 등록 API 호출
        if (!form.productId) {
          alert('상품 ID를 입력해주세요');
          return;
        }
        await axios.post('http://localhost:7777/api/timeDeals', {
          product_id: Number(form.productId),
          deal_price: Number(form.dealPrice),
          start_time: form.startTime,
          end_time: form.endTime,
        });
        alert('등록 성공!');
      }
      onSubmitted();
      setForm({ productId: '', dealPrice: '', startTime: '', endTime: '' });
    } catch (err: any) {
      alert('실패: ' + (err.response?.data?.message || '서버 오류'));
    }
  };

  return (
    <div className={styles.container}>
      <h3>{editTarget ? '타임딜 수정' : '타임딜 등록'}</h3>

      {!editTarget && (
        <input
          type="number"
          name="productId"
          placeholder="상품 ID"
          value={form.productId}
          onChange={handleChange}
          className={styles.input}
        />
      )}

      <input
        type="number"
        name="dealPrice"
        placeholder="할인 가격"
        value={form.dealPrice}
        onChange={handleChange}
        className={styles.input}
      />

      <label className={styles.label}>시작 시간</label>
      <input
        type="datetime-local"
        name="startTime"
        value={form.startTime}
        onChange={handleChange}
        className={styles.input}
      />

      <label className={styles.label}>종료 시간</label>
      <input
        type="datetime-local"
        name="endTime"
        value={form.endTime}
        onChange={handleChange}
        className={styles.input}
      />

      <button onClick={handleSubmit} className={styles.submitBtn}>
        {editTarget ? '수정 완료' : '등록하기'}
      </button>

      {editTarget && (
        <button onClick={cancelEdit} className={styles.cancelBtn}>
          취소
        </button>
      )}
    </div>
  );
}
