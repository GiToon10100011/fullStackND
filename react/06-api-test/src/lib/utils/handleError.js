const handleError = (error, context) => {
  console.error(`[${context}] 에러 발생:`, error);
  // 예: 사용자 알림용 처리 추가 가능
  // toast.error("문제가 발생했습니다. 다시 시도해 주세요.");
};

export default handleError;
