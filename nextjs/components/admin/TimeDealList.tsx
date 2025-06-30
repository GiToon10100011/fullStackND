import { useEffect, useState } from 'react';
import styles from './TimeDealList.module.css';

export interface TimeDeal {
  id: number;
  product_id:number;
  product_name: string;
  price: number;
  deal_price: number;
  start_time: string;
  end_time: string;
  is_active: boolean | number;
}

interface TimeDealListProps {
  refresh: boolean;
  filter: 'all' | 'active' | 'expired';
  onEdit: (deal: TimeDeal) => void;
  onDelete: () => void;
}

export default function TimeDealList({ refresh, filter, onEdit, onDelete }: TimeDealListProps) {
  const [deals, setDeals] = useState<TimeDeal[]>([]);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:7777/api/timeDeals/all');
      const data = await res.json();
      setDeals(data);
    } catch (err) {
      console.error('타임딜 목록 에러', err);
    }
  };

  const filteredDeals = deals.filter(deal => {
    const isActive = deal.is_active === 1 || deal.is_active === true;
    if (filter === 'all') return true;
    if (filter === 'active') return isActive;
    if (filter === 'expired') return !isActive;
    return true;
  });

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await fetch(`http://localhost:7777/api/timeDeals/${id}`, { method: 'DELETE' });
      //alert('삭제 성공!');
      onDelete();//// 부모에서 refresh 호출
    } catch (err) {
      alert('삭제 실패');
    }
  };

  return (
    <div className={styles.container}>
      <h3>등록된 타임딜 목록</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>상품번호</th>
            <th className={styles.th}>상품명</th>
            <th className={styles.th}>정가</th>
            <th className={styles.th}>할인가</th>
            <th className={styles.th}>할인율</th>
            <th className={styles.th}>시작</th>
            <th className={styles.th}>종료</th>
            <th className={styles.th}>진행 여부</th>
            <th className={styles.th}>액션</th>
          </tr>
        </thead>
        <tbody>
          {filteredDeals.length === 0 ? (
            <tr>
              <td colSpan={9} className={styles.emptyRow}>
                등록된 타임딜이 없습니다.
              </td>
            </tr>
          ) : (
            filteredDeals.map(deal => (
              <tr
                key={deal.id}
                className={
                  deal.is_active === true || deal.is_active === 1
                    ? styles.activeRow
                    : styles.expiredRow
                }
              >
                <td className={styles.td}>{deal.product_id}</td>
                <td className={styles.td}>{deal.product_name}</td>
                <td className={styles.td}>{deal.price.toLocaleString()}원</td>
                <td className={styles.td}>{deal.deal_price.toLocaleString()}원</td>
                <td className={styles.td}>
                  {Math.round(((deal.price - deal.deal_price) / deal.price) * 100)}%
                </td>
                {/* mysql utc시간이 -9 시간 차이남. 따라서 한국시간 적용하자 */}
                <td className={styles.td}>{new Date(deal.start_time).toLocaleString('ko-KR')}</td>
                <td className={styles.td}>{new Date(deal.end_time).toLocaleString('ko-KR')}</td>
                <td className={styles.td}>
                  {deal.is_active ? '* 진행중' : 'x 종료'}
                </td>
                <td className={styles.td}>
                  <button className={styles.editBtn} onClick={() => onEdit(deal)}>
                    수정
                  </button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(deal.id)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
