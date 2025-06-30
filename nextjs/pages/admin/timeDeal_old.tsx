import { useState, useEffect } from 'react';
import axios from 'axios';

interface TimeDeal {
  id: number; 
  product_name: string;
  price: number;
  deal_price: number;
  start_time: string;
  end_time: string;
  is_active: boolean;
}

export default function TimeDealAdminPage() {
  const [form, setForm] = useState({
    productId: '',
    dealPrice: '',
    startTime: '',
    endTime: '',
  });

  const [deals, setDeals] = useState<TimeDeal[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const fetchDeals = async () => {
    try {
      const res = await axios.get<TimeDeal[]>('http://localhost:5000/time-deals/all');
      setDeals(res.data);
    } catch (err) {
      console.error('타임딜 목록 가져오기 실패', err);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/time-deals', {
        product_id: Number(form.productId),
        deal_price: Number(form.dealPrice),
        start_time: form.startTime,
        end_time: form.endTime,
      });
      alert('등록 성공!');
      setForm({ productId: '', dealPrice: '', startTime: '', endTime: '' });
      fetchDeals(); // 등록 후 목록 새로고침
    } catch (err: any) {
      alert('등록 실패: ' + (err.response?.data?.message || '알 수 없는 오류'));
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h2>타임딜 상품 등록</h2>

      <input
        type="number"
        name="productId"
        placeholder="상품 ID"
        value={form.productId}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 12 }}
      />

      <input
        type="number"
        name="dealPrice"
        placeholder="할인 가격"
        value={form.dealPrice}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 12 }}
      />

      <label>시작 시간</label>
      <input
        type="datetime-local"
        name="startTime"
        value={form.startTime}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 12 }}
      />

      <label>종료 시간</label>
      <input
        type="datetime-local"
        name="endTime"
        value={form.endTime}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 12 }}
      />

      <button onClick={handleSubmit} style={{ width: '100%', padding: '0.5rem', marginBottom: '2rem' }}>
        등록하기
      </button>

      <h3>📋 현재 등록된 타임딜</h3>
      <table border={1} cellPadding={8} style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>상품명</th>
            <th>정가</th>
            <th>할인가</th>
            <th>시작</th>
            <th>종료</th>
            <th>활성</th>
          </tr>
        </thead>
        <tbody>
  {deals.map(deal => (
    <tr key={deal.id} style={{ backgroundColor: deal.is_active ? '#e6ffe6' : 'transparent' }}>
      <td>{deal.product_name}</td>
      <td>{deal.price.toLocaleString()}원</td>
      <td>{deal.deal_price.toLocaleString()}원</td>
      <td>{deal.start_time.replace('T', ' ').slice(0, 16)}</td>
      <td>{deal.end_time.replace('T', ' ').slice(0, 16)}</td>
      <td>{deal.is_active ? '✅ 진행중' : '❌ 종료'}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}
