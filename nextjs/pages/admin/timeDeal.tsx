// pages/admin/time-deal.tsx
import { useState } from "react";
import TimeDealForm from "@/components/admin/TimeDealForm";
import TimeDealList from "@/components/admin/TimeDealList";
import type { TimeDeal } from "@/types/timeDeal.type";

import styles from "./TimeDealAdmin.module.css";
import { GetServerSideProps } from "next";

interface Props {
  deals: TimeDeal[];
}

export default function TimeDealAdminPage({ deals }: Props) {
  const [filter, setFilter] = useState<"all" | "active" | "expired">("all");
  const [editTarget, setEditTarget] = useState<TimeDeal | null>(null);
  const [dealList, setDealList] = useState<TimeDeal[]>(deals);

  const refreshList = async () => {
    const res = await fetch("http://localhost:7777/api/timeDeals/all");
    const newData = await res.json();
    setDealList(newData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🛍️ 타임딜 관리자 페이지</h2>

      {/* 필터 버튼 */}
      <div className={styles.filterGroup}>
        {["all", "active", "expired"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "all" | "active" | "expired")}
            disabled={filter === type}
            className={`${styles.filterBtn} ${
              filter === type ? styles.activeFilter : ""
            }`}
          >
            {type === "all" ? "전체" : type === "active" ? "진행 중" : "종료됨"}
          </button>
        ))}
      </div>

      <TimeDealForm
        onSubmitted={() => {
          refreshList();
          setEditTarget(null);
        }}
        editTarget={editTarget}
        cancelEdit={() => setEditTarget(null)}
      />

      <hr style={{ margin: "32px 0" }} />

      <TimeDealList
        deals={dealList}
        filter={filter}
        onEdit={(deal) => setEditTarget(deal)}
        onDelete={refreshList}
      />
    </div>
  );
}

// SSR: 서버에서 타임딜 데이터를 가져옴
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:7777/api/timeDeals/all");
  const deals = await res.json();

  return {
    props: {
      deals,
    },
  };
};
